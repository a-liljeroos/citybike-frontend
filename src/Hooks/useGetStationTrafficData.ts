import { toasterMsg } from "../components/index";
import { TStationTrafficData } from "../Types";
import { URL } from "../constants";
import { useAuthContext } from "../AuthContext";
import { useQuery } from "react-query";

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
      if (res.status === 503) {
        toasterMsg.noData("traffic");
      }
      return res.json();
    },
    onError: (error) => {
      toasterMsg.noData("traffic");
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useGetStationTrafficData };
