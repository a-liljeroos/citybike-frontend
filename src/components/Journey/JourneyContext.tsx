import { createContext, ReactNode, useContext } from "react";

type TJourneyContext = {};

const JourneyContext = createContext<TJourneyContext>({} as TJourneyContext);

export function useJourneyContext() {
  return useContext(JourneyContext);
}

type TJourneyContextProvider = {
  children: ReactNode;
};

export function JourneyContextProvider({ children }: TJourneyContextProvider) {
  return (
    <JourneyContext.Provider value={{}}>{children}</JourneyContext.Provider>
  );
}
