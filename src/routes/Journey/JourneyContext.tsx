import { createContext, ReactNode, useContext } from "react";
import { useAppContext } from "../../AppContext";
type TJourneyContext = {
  totalJourneys: number;
};

const JourneyContext = createContext<TJourneyContext>({} as TJourneyContext);

export function useJourneyContext() {
  return useContext(JourneyContext);
}

type TJourneyContextProvider = {
  children: ReactNode;
};

export function JourneyContextProvider({ children }: TJourneyContextProvider) {
  const { totalJourneys } = useAppContext();
  return (
    <JourneyContext.Provider
      value={{
        totalJourneys,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}
