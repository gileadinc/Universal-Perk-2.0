"use client";

import { createContext, useCallback, useContext, useState } from "react";

// Define enums as plain objects
export const MicrophoneEvents = {
  DataAvailable: "dataavailable",
  Error: "error",
  Pause: "pause",
  Resume: "resume",
  Start: "start",
  Stop: "stop",
};

export const MicrophoneState = {
  NotSetup: -1,
  SettingUp: 0,
  Ready: 1,
  Opening: 2,
  Open: 3,
  Error: 4,
  Pausing: 5,
  Paused: 6,
};

const MicrophoneContext = createContext(undefined);

const MicrophoneContextProvider = ({ children }) => {
  const [microphoneState, setMicrophoneState] = useState(MicrophoneState.NotSetup);
  const [microphone, setMicrophone] = useState(null);

  const setupMicrophone = async () => {
    setMicrophoneState(MicrophoneState.SettingUp);

    try {
      const userMedia = await navigator.mediaDevices.getUserMedia({
        audio: {
          noiseSuppression: true,
          echoCancellation: true,
        },
      });

      const mic = new MediaRecorder(userMedia);
      setMicrophoneState(MicrophoneState.Ready);
      setMicrophone(mic);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const stopMicrophone = useCallback(() => {
    setMicrophoneState(MicrophoneState.Pausing);

    if (microphone && microphone.state === "recording") {
      microphone.pause();
      setMicrophoneState(MicrophoneState.Paused);
    }
  }, [microphone]);

  const startMicrophone = useCallback(() => {
    setMicrophoneState(MicrophoneState.Opening);

    if (microphone && microphone.state === "paused") {
      microphone.resume();
    } else if (microphone) {
      microphone.start(250);
    }

    setMicrophoneState(MicrophoneState.Open);
  }, [microphone]);

  return (
    <MicrophoneContext.Provider
      value={{
        microphone,
        startMicrophone,
        stopMicrophone,
        setupMicrophone,
        microphoneState,
      }}
    >
      {children}
    </MicrophoneContext.Provider>
  );
};

function useMicrophone() {
  const context = useContext(MicrophoneContext);
  if (context === undefined) {
    throw new Error(
      "useMicrophone must be used within a MicrophoneContextProvider"
    );
  }
  return context;
}

export { MicrophoneContextProvider, useMicrophone };
