import { TStationTrafficData } from "../Types";
import { URL } from "../constants";
import { useQuery } from "react-query";
import { useAuthContext } from "../AuthContext";
import toast from "react-hot-toast";

interface IuseGetStationTrafficData {
  station_id: string | number | undefined;
}

const useGetStationTrafficData = ({
  station_id,
}: IuseGetStationTrafficData) => {
  const { token } = useAuthContext();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["stationTraffic", station_id],
    queryFn: async (): Promise<TStationTrafficData> => {
      const res = await fetch(
        `${URL}/stations/trafficinfo?station_id=${station_id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "X-access-token": `${token}`,
          },
        }
      );
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
      return res.json();
    },
    onError: (error) => {
      toast.error(`Couldn't get traffic data.`);
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useGetStationTrafficData };
