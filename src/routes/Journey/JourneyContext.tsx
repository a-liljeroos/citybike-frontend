import { createContext, ReactNode, useContext } from "react";
import useFetchTotalJourneys from "../../Hooks/useFetchTotalJourneys";
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
  const { totalJourneys } = useFetchTotalJourneys();
  return (
    <JourneyContext.Provider
      value={{
        totalJourneys: Number(totalJourneys),
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}
