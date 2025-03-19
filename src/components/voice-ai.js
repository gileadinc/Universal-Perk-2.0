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

const NEXT_PUBLIC_OPENAI_API_KEY = "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"
// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const VoiceAI = () => {
  // Local state for captions and AI responses
  const [caption, setCaption] = useState("Powered by Universal Perk");
  const [response, setResponse] = useState("Hi, How can I help you?");
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
      } else {
        // Uncomment if you wish to reset a timer for pauses
        // resetSpeechEndTimer();
      }
    };

    // If the connection is open, add listeners and start the microphone
    if (connectionState === LiveConnectionState.OPEN) {
      connection.addListener(LiveTranscriptionEvents.Transcript, onTranscript);
      microphone.addEventListener(MicrophoneEvents.DataAvailable, onData);
      startMicrophone();
    }

    // Cleanup listeners and timers when component unmounts or dependencies change
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
      transcriptBuffer.current = []; // Clear the buffer

      // Call OpenAI to generate a response
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Only respond when the user has completed a full thought or asked a clear question. " +
              "You are a helpful, witty, professional AI assistant. But above all, your wit and humor shine. " +
              "You make people feel good about themselves while being charismatic and irresistibly charming. " +
              "Make sure to give short, witty replies. Even too much honey is sour. Make sure your wit is a push pull. " +
              "After a wit response, pull back with a professional response and vice versa.",
          },
          { role: "user", content: fullTranscript },
        ],
      });

      const aiResponse = (completion?.choices?.[0]?.message?.content || "").trim();
      console.log("🤖 AI Response:", aiResponse);
      setResponse(aiResponse);

      // Use ElevenLabs to synthesize speech from the AI response and play it back
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

  // (Optional) Reset a timer to process speech after a pause
  const resetSpeechEndTimer = () => {
    clearTimeout(speechEndTimer.current);
    speechEndTimer.current = setTimeout(() => {
      console.log("Speech timeout detected. Processing transcript...");
      processTranscript();
    }, 4000); // 4 seconds of silence before processing
  };

  return (
    <>
      <audio ref={audioRef} />
      <div className="flex h-full antialiased">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col flex-auto h-full">
            <div className="relative w-full h-full">
              <div className="relative w-full h-150">
                {microphone && <Visualizer microphone={microphone} isSilent={isSilent}/>}
              </div>
              {/* <div className="absolute bottom-[8rem] inset-x-0 max-w-4xl mx-auto text-center">
                {caption && <span className="bg-black/70 p-8">{caption}</span>}
              </div>
              <div className="absolute bottom-[8rem] inset-x-0 max-w-4xl mx-auto text-center">
                {response && <span className="bg-black/70 p-8">{response}</span>}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceAI;
