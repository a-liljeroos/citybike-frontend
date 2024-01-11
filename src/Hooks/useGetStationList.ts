import { TStation } from "../Types";
import { URL } from "../constants";
import { useAuthContext } from "../AuthContext";
import { useQuery } from "react-query";
import { toasterMsg } from "../components/index";

const useGetStationList = () => {
  const { token, cleanUserData } = useAuthContext();
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
        cleanUserData();
        toasterMsg.unauthorized();
      }
      if (!res.ok) {
        throw new Error("/");
      }
      return res.json();
    },
    onError: (error) => {},
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isLoading, isError, error: error as Error };
};

export { useGetStationList };
