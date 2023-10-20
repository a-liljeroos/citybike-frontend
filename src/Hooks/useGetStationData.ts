import { useQuery } from "react-query";
import { URL } from "../constants";
import { TStation } from "../Types";
import toast from "react-hot-toast";

interface IuseGetStationData {
  station_id: string | undefined;
}

const useGetStationData = ({ station_id }: IuseGetStationData) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStationInfo", station_id, false],
    queryFn: async (): Promise<TStation> => {
      const res = await fetch(`${URL}/stations`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          station_id: station_id,
        }),
      });

      return res.json();
    },
    onError: (error) => {
      toast.error(`Service Unavailable.`);
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useGetStationData };
