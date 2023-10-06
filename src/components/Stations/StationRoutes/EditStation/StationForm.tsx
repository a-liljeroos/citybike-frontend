import React from "react";
import "./StationForm.scss";
import { TbArrowBigLeft } from "react-icons/tb";
import { useForm, Controller } from "react-hook-form";
import { useGetStationData, useStationForm } from "../../../../Hooks";
import Spinner from "../../../Spinner/Spinner";

interface IStationForm {
  id?: string | undefined;
}

const StationForm = ({ id }: IStationForm) => {
  const station_id = Number(20);
  const { data, isLoading } = useGetStationData({
    station_id: station_id.toString(),
  });

  const { handleSubmit, control, reset } = useForm({ defaultValues: data });

  const { mutate, mutateLoading } = useStationForm({ station_id: station_id });

  if (isLoading || !data) {
    return <Spinner />;
  }

  return (
    <>
      <div className="station-form-nav">
        <button
          onClick={() => {
            window.history.back();
          }}
          title="Go back"
          className="go-back-btn"
        >
          <TbArrowBigLeft size={40} color="white" />
        </button>
        <h2 className="station-form-title">+Add Station</h2>
      </div>
      <div className="station-form-container styled-scrollbar">
        <form
          id="station-form"
          action="POST"
          onSubmit={handleSubmit((values) => {
            mutate(values, { onSuccess: () => reset() });
          })}
        >
          <div className="input-container">
            <label htmlFor="">Nimi</label>
            <Controller
              name="station_nimi"
              control={control}
              render={({ field }) => (
                <input
                  required
                  type="text"
                  {...field}
                  value={field.value ?? data?.station_nimi}
                />
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Namn</label>
            <Controller
              name="station_namn"
              control={control}
              render={({ field }) => (
                <input
                  required
                  type="text"
                  {...field}
                  value={field.value ?? data?.station_namn}
                />
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Name</label>
            <Controller
              name={"station_name"}
              control={control}
              render={({ field }) => (
                <input
                  required
                  type="text"
                  {...field}
                  value={field.value ?? data?.station_name}
                />
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Osoite</label>
            <Controller
              name={"station_osoite"}
              control={control}
              render={({ field }) => (
                <input
                  required
                  type="text"
                  {...field}
                  value={field.value ?? data?.station_osoite}
                />
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Adress</label>
            <Controller
              name="station_adress"
              control={control}
              render={({ field }) => (
                <input
                  required
                  type="text"
                  {...field}
                  value={field.value ?? data?.station_adress}
                />
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Kaupunki</label>
            <Controller
              name="station_kaupunki"
              control={control}
              render={({ field }) => (
                <input
                  required
                  type="text"
                  {...field}
                  value={field.value ?? data?.station_kaupunki}
                />
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Stad</label>
            <Controller
              name="station_stad"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  value={field.value ?? data?.station_stad}
                />
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Operator</label>
            <Controller
              name="station_operator"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  defaultValue={field.value ?? data?.station_operator}
                  {...field}
                />
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Capacity</label>
            <Controller
              name="station_capacity"
              control={control}
              render={({ field }) => (
                <select
                  required
                  defaultValue={field.value ?? data?.station_capacity}
                  {...field}
                >
                  {Array.from(Array(100).keys()).map((num, key) => {
                    return (
                      <option key={key} value={num + 1}>
                        {num + 1}
                      </option>
                    );
                  })}
                </select>
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Coordinate x</label>
            <Controller
              name="station_coord_x"
              control={control}
              render={({ field }) => (
                <input
                  required
                  type="number"
                  {...field}
                  value={field.value ?? data?.station_coord_x}
                />
              )}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Coordinate y</label>
            <Controller
              name="station_coord_y"
              control={control}
              render={({ field }) => (
                <input
                  required
                  type="number"
                  {...field}
                  value={field.value ?? data?.station_coord_y}
                />
              )}
            />
          </div>
          <button className="save-button">Save</button>
        </form>
      </div>
    </>
  );
};

export default StationForm;