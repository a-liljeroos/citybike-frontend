import { useQuery } from "react-query";
import { URL } from "../constants";
import { TJourney } from "../Types";

interface IuseGetJourneys {
  page: number;
}

type GetJourneys = {
  currentPage: number;
  pageSize: number;
  totalJourneys: number;
  journeys: TJourney[];
};

const useGetJourneys = ({ page }: IuseGetJourneys) => {
  const pageNumber = Math.ceil(page);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["journeys", pageNumber],
    queryFn: async (): Promise<GetJourneys> => {
      const res = await fetch(`${URL}/journeys?page=${pageNumber}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      if (res.status === 400) {
        throw new Error("No results");
      }

      if (res.status === 422) {
        throw new Error("Error: journey page must be a number");
      }
      return res.json();
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useGetJourneys };
