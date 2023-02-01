import { useQuery } from "react-query";
import { URL } from "../constants";
import { TStation } from "../Types";

interface IuseGetStationInfo {
  station_id: string | undefined;
}

const useGetStationInfo = ({ station_id }: IuseGetStationInfo) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStationInfo", station_id],
    queryFn: async (): Promise<TStation> => {
      const res = await fetch(`${URL}/stations`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ station_id }),
      });

      if (res.status === 400) {
        throw new Error("No results");
      }

      if (res.status === 422) {
        throw new Error("Error: station id must be a number");
      }

      return res.json();
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useGetStationInfo };
