import { TStation } from "../Types";
import { URL } from "../constants";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

interface IuseStationForm {
  station_id: number | string | undefined;
}

const useStationForm = ({ station_id }: IuseStationForm) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading: mutateLoading } = useMutation({
    mutationFn: async (formData: TStation) => {
      return fetch(`${URL}/stations/edit`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["getStationInfo", station_id, false],
      }),
    onError: (error) => {
      toast.error(`Service Unavailable.`);
    },
    retry: false,
  });
  return { mutate, mutateLoading };
};

export { useStationForm };
