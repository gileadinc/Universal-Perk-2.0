"use client";
import { useEffect, useRef, useState } from "react";
import {
  LiveConnectionState,
  LiveTranscriptionEvents,
  useDeepgram,
} from "../context/DeepgramContextProvider";
import {
  MicrophoneEvents,
  MicrophoneState,
  useMicrophone,
} from "../context/MicrophoneContextProvider";
import Visualizer from "./visualizer";
import { OpenAI } from "openai";
import { synthesizeSpeech } from "../lib/utils"; // Import ElevenLabs function

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const VoiceAI = () => {
  // Local state for captions and AI responses
  const [caption, setCaption] = useState("Say Hi 🎤 💬. \n Make sure to allow micorphone access");
  // const [caption, setCaption] = useState("Say Hi 🎤🎙️💬💭 ");
  const [response, setResponse] = useState("Powered by Universal Perk");
  const [isSilent, setIsSilent] = useState(true); // Tracks if user is speaking
  const silentTimeout = useRef(null);

  // Access Deepgram and Microphone context values
  const { connection, connectToDeepgram, connectionState } = useDeepgram();
  const { setupMicrophone, microphone, startMicrophone, microphoneState } = useMicrophone();

  // Ref for audio playback and for storing timers and transcript buffer
  const audioRef = useRef(null);
  const captionTimeout = useRef();
  const keepAliveInterval = useRef();
  const transcriptBuffer = useRef([]);
  const speechEndTimer = useRef(null);

  // Setup microphone on mount
  useEffect(() => {
    setupMicrophone();
  }, []);

  // Once microphone is ready, connect to Deepgram with specified options
  useEffect(() => {
    if (microphoneState === MicrophoneState.Ready) {
      connectToDeepgram({
        model: "nova-3",
        smart_format: true,
        filler_words: true,
        vad_events: true, // Voice Activity Detection
        utterances: true, // Ensures Deepgram only processes completed sentences
      });
    }
  }, [microphoneState]);

  // Setup listeners for Deepgram transcription and microphone data
  useEffect(() => {
    if (!microphone || !connection) return;

    // Send audio data from the microphone to Deepgram
    const onData = (e) => {
      if (e.data.size > 0) {
        connection.send(e.data);
        resetSilentTimer();
      }
    };

    const resetSilentTimer = () => {
      clearTimeout(silentTimeout.current);
      setIsSilent(false); // User is speaking

      silentTimeout.current = setTimeout(() => {
        setIsSilent(true); // Switch back to standby mode after 2s of silence
      }, 2000);
    };

    // Process transcription events from Deepgram
    const onTranscript = async (data) => {
      const { is_final: isFinal, speech_final: speechFinal } = data;
      let thisCaption = data.channel.alternatives[0]?.transcript;
      console.log("Transcript received:", thisCaption);

      if (thisCaption !== "") {
        setCaption(thisCaption);
        transcriptBuffer.current.push(thisCaption);
      }

      // If Deepgram marks the speech as final, process the transcript
      if (isFinal && speechFinal) {
        await processTranscript();
      }
    };

    if (connectionState === LiveConnectionState.OPEN) {
      connection.addListener(LiveTranscriptionEvents.Transcript, onTranscript);
      microphone.addEventListener(MicrophoneEvents.DataAvailable, onData);
      startMicrophone();
    }

    return () => {
      connection.removeListener(LiveTranscriptionEvents.Transcript, onTranscript);
      microphone.removeEventListener(MicrophoneEvents.DataAvailable, onData);
      clearTimeout(captionTimeout.current);
      clearTimeout(speechEndTimer.current);
    };
  }, [connectionState]);

  // Keep the Deepgram connection alive if needed
  useEffect(() => {
    if (!connection) return;

    if (
      microphoneState !== MicrophoneState.Open &&
      connectionState === LiveConnectionState.OPEN
    ) {
      connection.keepAlive();
      keepAliveInterval.current = setInterval(() => {
        connection.keepAlive();
      }, 10000);
    } else {
      clearInterval(keepAliveInterval.current);
    }

    return () => {
      clearInterval(keepAliveInterval.current);
    };
  }, [microphoneState, connectionState]);

  // Process the full transcript using OpenAI
  const processTranscript = async () => {
    const fullTranscript = transcriptBuffer.current.join(" ");
    console.log(fullTranscript);

    // Check if the sentence is complete using a simple regex test
    const shouldRespond = isSentenceComplete(fullTranscript);

    if (shouldRespond) {
      console.log("Final processed transcript:", fullTranscript);
      setCaption(fullTranscript);
      transcriptBuffer.current = []; // Clear the buffer

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Only respond when the user has completed a full thought or asked a clear question. " +
              "You are a helpful, witty, professional AI assistant. But above all, your wit and humor shines because you can also keep it professional and people like talking to you!. " +
              "You make people feel good about themselves while being charismatic, irresistibly charming, and professional. " +
              "Make sure to give short, professional, witty replies. Even too much honey is sour. Make sure your wit is a push pull. Which means you balance it" +
              "After a wit response, pull back with a professional response and vice versa. Make sure to not identify " +
              "yourself as witty and charming. It's a double negative. Just be.",
          },
          { role: "user", content: fullTranscript },
        ],
      });

      const aiResponse = (completion?.choices?.[0]?.message?.content || "").trim();
      console.log("🤖 AI Response:", aiResponse);
      setResponse(aiResponse);

      try {
        const audioBlob = await synthesizeSpeech(aiResponse);
        playAudio(audioBlob);
      } catch (error) {
        console.error("Failed to play AI response:", error);
      }
    } else {
      console.log("⏳ Waiting for more speech before responding...");
    }
  };

  // Play the audio blob by setting it as the source of an audio element
  const playAudio = (audioBlob) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    }
  };

  // Check if a given text ends with a sentence-ending punctuation
  const isSentenceComplete = (text) => {
    if (!text || typeof text !== "string") return false;
    const sentenceEndRegex = /[.!?;:\n]$/;
    return sentenceEndRegex.test(text.trim());
  };

  return (
    <>
      <audio ref={audioRef} />
      <div className="flex flex-col h-full antialiased">
        {/* Visualizer Container */}
        <div className="w-full h-[150px] relative">
          {microphone && (
            <Visualizer microphone={microphone} isSilent={isSilent} />
          )}
        </div>
        {/* Caption and Response Container */}
        <div className="w-full mt-4 px-4 flex flex-col items-center space-y-4">
          {caption && (
            <span className="bg-blue-600 text-white p-4 rounded-md text-lg max-w-4xl text-center">
              {caption}
            </span>
          )}
          {response && (
            <span className="bg-blue-600 text-white p-4 rounded-md text-lg max-w-4xl text-center">
              {response}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default VoiceAI;
