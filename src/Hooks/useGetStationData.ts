import { toasterMsg } from "../components/Toaster/toasters";
import { TStation } from "../Types";
import { URL } from "../constants";
import { useAuthContext } from "../AuthContext";
import { useQuery } from "react-query";

interface IuseGetStationData {
  station_id: string | undefined;
}

const useGetStationData = ({ station_id }: IuseGetStationData) => {
  const { token, cleanUserData } = useAuthContext();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStationInfo", station_id, false],
    queryFn: async (): Promise<TStation> => {
      const res = await fetch(`${URL}/stations?station_id=${station_id}`, {
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
        throw new Error("/stations");
      }
      return res.json();
    },
    onError: (error) => {
      toasterMsg.noService();
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useGetStationData };
