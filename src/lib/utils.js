import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";
const ELEVENLABS_API_KEY = "sk_47ff1cf7b562d7a07cb9d503b8a037ffa6180727a9916103";
const VOICE_ID = "SAz9YHcvj6GT2YYXdXww"; // Replace with actual voice ID from ElevenLabs

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Converts text to speech using ElevenLabs API.
 * @param {string} text - The text to be converted to speech.
 * @returns {Promise<Blob>} - Returns the audio blob.
 */
export const synthesizeSpeech = async (text) => {
  if (!ELEVENLABS_API_KEY) {
    throw new Error("ElevenLabs API key is missing.");
  }

  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        text,
        model_id: "eleven_flash_v2_5",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5,
        },
      },
      {
        headers: {
          "xi-api-key": ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        responseType: "blob", // Get the response as a binary blob
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error generating speech:", error);
    throw new Error("Failed to generate speech.");
  }
};
