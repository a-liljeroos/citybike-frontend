import { TJourney } from "../Types";
import { URL } from "../constants";
import { useQuery } from "react-query";
import { useAuthContext } from "../AuthContext";
import { toasterMsg } from "../components/index";

interface IuseGetJourneyPage {
  page: number;
  totalJourneys: number;
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

const useGetJourneyPage = ({ page, totalJourneys }: IuseGetJourneyPage) => {
  const pageNumber = Math.ceil(page);
  const { token, cleanUserData } = useAuthContext();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["journeys", pageNumber],
    queryFn: async (): Promise<JourneyPageResponse> => {
      const res = await fetch(`${URL}/journeys/pages?page=${pageNumber}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "X-access-token": `${token}`,
        },
      });
      if (res.status === 401) {
        toasterMsg.unauthorized();
        cleanUserData();
      }

      if (!res.ok) {
        throw new Error("/");
      }

      const data = await res.json();

      const dataWithTotalJourneys: JourneyPageResponse = {
        ...data,
        pagination: {
          ...data.pagination,
          totalJourneys: totalJourneys,
          totalPages: Math.ceil(totalJourneys / data.pagination.pageSize),
        },
      };

      return dataWithTotalJourneys;
    },
    onError: (error) => {},
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useGetJourneyPage };
