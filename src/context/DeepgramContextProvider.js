    "use client";
    import {
      createClient,
      LiveClient,
      LiveConnectionState,
      LiveTranscriptionEvents,
    } from "@deepgram/sdk";
    import { createContext, useContext, useState } from "react";
    const NEXT_PUBLIC_DEEPGRAM_API_KEY="8ebfef24d80132d59dc6722af8d2556b303c5a6e"
    const DeepgramContext = createContext(undefined);

    const DeepgramContextProvider = ({ children }) => {
      const [connection, setConnection] = useState(null);
      const [connectionState, setConnectionState] = useState(
        LiveConnectionState.CLOSED
      );

      const connectToDeepgram = async (options, endpoint) => {
        if (!NEXT_PUBLIC_DEEPGRAM_API_KEY) {
          throw new Error("DEEPGRAM_API_KEY is not defined");
        }
        const deepgram = createClient(NEXT_PUBLIC_DEEPGRAM_API_KEY);
        const conn = deepgram.listen.live(options, endpoint);

        conn.addListener(LiveTranscriptionEvents.Open, () => {
          setConnectionState(LiveConnectionState.OPEN);
        });

        conn.addListener(LiveTranscriptionEvents.Close, () => {
          setConnectionState(LiveConnectionState.CLOSED);
        });

        setConnection(conn);
      };

      const disconnectFromDeepgram = async () => {
        if (connection) {
          connection.finish();
          setConnection(null);
        }
      };

      return (
        <DeepgramContext.Provider
          value={{
            connection,
            connectToDeepgram,
            disconnectFromDeepgram,
            connectionState,
          }}
        >
          {children}
        </DeepgramContext.Provider>
      );
    };

    function useDeepgram() {
      const context = useContext(DeepgramContext);
      if (context === undefined) {
        throw new Error(
          "useDeepgram must be used within a DeepgramContextProvider"
        );
      }
      return context;
    }

    export {
      DeepgramContextProvider,
      useDeepgram,
      LiveConnectionState,
      LiveTranscriptionEvents,
    };
