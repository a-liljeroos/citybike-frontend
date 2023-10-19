import { useQuery } from "react-query";
import { URL } from "../constants";
import { TStationTrafficData } from "../Types";
import toast from "react-hot-toast";

interface IuseGetStationTrafficData {
  station_id: string | number | undefined;
}

const useGetStationTrafficData = ({
  station_id,
}: IuseGetStationTrafficData) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStationInfo", station_id, true],
    queryFn: async (): Promise<TStationTrafficData> => {
      const res = await fetch(
        `${URL}/stations/data?trafficInfo=${station_id}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
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
