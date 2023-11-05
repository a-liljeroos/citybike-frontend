import { createContext, ReactNode, useContext } from "react";
import { URL } from "./constants";
import { useLocalStorage } from "./components/utilities";

type TAppContext = {
  totalJourneys: number;
};

const AppContext = createContext<TAppContext>({} as TAppContext);

export function useAppContext() {
  return useContext(AppContext);
}

type TAppContextProvider = {
  children: ReactNode;
};

export function AppContextProvider({ children }: TAppContextProvider) {
  const [totalJourneys, setTotalJourneys] = useLocalStorage<number>(
    "totalJourneys",
    0
  );

  async function fetchTotalJourneys(): Promise<number> {
    const response = await fetch(`${URL}/journeys/total`);
    if (!response.ok) {
      return 0;
    }
    const data = await response.json();

    if (!data.totalJourneys) {
      return 0;
    }
    return data.totalJourneys;
  }

  fetchTotalJourneys()
    .then((totalJourneys) => {
      setTotalJourneys(totalJourneys);
    })
    .catch((error) => {
      console.error("Error fetching total journeys:", error);
    });

  return (
    <AppContext.Provider
      value={{
        totalJourneys,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
