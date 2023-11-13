import { TStation } from "../Types";
import { URL } from "../constants";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

const useGetStationList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStations"],
    queryFn: async (): Promise<TStation[]> => {
      const res = await fetch(`${URL}/stations/all`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("/");
      }
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

export { useGetStationList };
