import { useQuery } from "react-query";
import { URL } from "../constants";
import { TJourney } from "../Types";
import toast from "react-hot-toast";

interface IuseGetJourneyPage {
  page: number;
}

type JourneyPageResponse = {
  journeys: TJourney[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalJourneys: number;
    totalPages: number;
  };
};

const useGetJourneyPage = ({ page }: IuseGetJourneyPage) => {
  const pageNumber = Math.ceil(page);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["journeys", pageNumber],
    queryFn: async (): Promise<JourneyPageResponse> => {
      const res = await fetch(`${URL}/journeys/pages?page=${pageNumber}`, {
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
    onError: (error) => {
      toast.error(`Server is not responding`);
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useGetJourneyPage };