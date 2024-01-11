import { TStation } from "../Types";
import { URL } from "../constants";
import { useMutation, useQueryClient } from "react-query";
import { useAuthContext } from "../AuthContext";
import { toasterMsg } from "../components/index";

interface IuseStationForm {
  station_id: number | string | undefined;
}

const useStationForm = ({ station_id }: IuseStationForm) => {
  const { token } = useAuthContext();
  const queryClient = useQueryClient();
  const { mutate, isLoading: mutateLoading } = useMutation({
    mutationFn: async (formData: TStation) => {
      return fetch(`${URL}/stations/edit`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "X-access-token": `${token}`,
        },
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["getStationInfo", station_id, false],
      }),
    onError: (error) => {
      toasterMsg.noService();
    },
    retry: false,
  });
  return { mutate, mutateLoading };
};

export { useStationForm };
