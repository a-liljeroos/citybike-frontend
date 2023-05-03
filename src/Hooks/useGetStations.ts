import { useQuery, useQueryClient } from "react-query";
import { URL } from "../constants";
import { TStation } from "../Types";

const useGetStations = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getStations"],
    queryFn: async (): Promise<TStation[]> => {
      const res = await fetch(`${URL}/stations/all`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      return res.json();
    },

    onError: (error) => {
      //toast.error(`Something went wrong: ${error}`);
    },
  });
  return { data, isLoading, isError };
};

export { useGetStations };
