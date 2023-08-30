import { useQuery } from "react-query";
import { URL } from "../constants";
import { TStationWithTraffic } from "../Types";
import toast from "react-hot-toast";

interface IuseGetStationDataWithTraffic {
  station_id: string | undefined;
}

const useGetStationDataWithTraffic = ({
  station_id,
}: IuseGetStationDataWithTraffic) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStationInfo", station_id, true],
    queryFn: async (): Promise<TStationWithTraffic> => {
      const res = await fetch(`${URL}/stations`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          station_id: station_id,
          trafficInfo: true,
        }),
      });

      if (res.status === 400) {
        throw new Error("No results");
      }

      if (res.status === 422) {
        throw new Error("Error: station id must be a number");
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

export { useGetStationDataWithTraffic };
