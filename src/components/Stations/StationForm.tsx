import React from "react";
import "./StationForm.scss";
import { TbArrowBigLeft } from "react-icons/tb";
import { useForm } from "react-hook-form";

interface IStationForm {
  viewForm: boolean;
  setViewForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const StationForm = ({ viewForm, setViewForm }: IStationForm) => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div className="station-form-nav">
        <button
          onClick={() => {
            setViewForm(!viewForm);
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
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="input-container">
            <label htmlFor="">Nimi</label>
            <input required type="text" {...register("station_name")} />
          </div>
          <div className="input-container">
            <label htmlFor="">Namn</label>
            <input required type="text" {...register("station_namn")} />
          </div>
          <div className="input-container">
            <label htmlFor="">Name</label>
            <input required type="text" {...register("station_name")} />
          </div>
          <div className="input-container">
            <label htmlFor="">Osoite</label>
            <input required type="text" {...register("station_osoite")} />
          </div>
          <div className="input-container">
            <label htmlFor="">Adress</label>
            <input required type="text" {...register("station_adress")} />
          </div>
          <div className="input-container">
            <label htmlFor="">Kaupunki</label>
            <input required type="text" {...register("station_kaupunki")} />
          </div>
          <div className="input-container">
            <label htmlFor="">Stad</label>
            <input type="text" {...register("station_stad")} />
          </div>
          <div className="input-container">
            <label htmlFor="">Operator</label>
            <select required {...register("station_operator")}>
              <option value="Citybike Finland">Citybike Finland</option>
              <option value="Citybike Sweden">Citybike Sweden</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="">Capacity</label>
            <select required {...register("station_capacity")}>
              {Array.from(Array(100).keys()).map((num, key) => {
                return (
                  <option key={key} value={num + 1}>
                    {num + 1}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="">Coordinate x</label>
            <input required type="number" {...register("station_coord_x")} />
          </div>
          <div className="input-container">
            <label htmlFor="">Coordinate y</label>
            <input required type="number" {...register("station_coord_y")} />
          </div>
          <button className="save-button">Save</button>
        </form>
      </div>
    </>
  );
};

export default StationForm;
