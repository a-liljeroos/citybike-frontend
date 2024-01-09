import { TStation } from "../Types";
import { URL } from "../constants";
import { useQuery } from "react-query";
import { useAuthContext } from "../AuthContext";
import toast from "react-hot-toast";

const useGetStationList = () => {
  const { token } = useAuthContext();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStations"],
    queryFn: async (): Promise<TStation[]> => {
      const res = await fetch(`${URL}/stations/all`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "X-access-token": `${token}`,
        },
      });
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
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
