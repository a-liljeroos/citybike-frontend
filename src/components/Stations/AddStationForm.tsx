import React from "react";
import "./AddStationForm.scss";
import { TbArrowBigLeft } from "react-icons/tb";

interface IAddStationForm {
  viewForm: boolean;
  setViewForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddStationForm = ({ viewForm, setViewForm }: IAddStationForm) => {
  return (
    <>
      <div className="add-station-form-nav">
        <button
          onClick={() => {
            setViewForm(!viewForm);
          }}
          title="Go back"
          className="go-back-btn"
        >
          <TbArrowBigLeft size={40} color="white" />
        </button>
        <h2 className="add-station-form-title">+Add Station</h2>
      </div>
      <div className="station-form-container styled-scrollbar">
        <form id="station-form" action="">
          <div className="input-container">
            <label htmlFor="">Nimi</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Namn</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Osoite</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Adress</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Kaupunki</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Stad</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Operator</label>
            <select>
              <option value="Citybike Finland">Citybike Finland</option>
              <option value="Citybike Sweden">Citybike Sweden</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="">Capacity</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Coordinate x</label>
            <input type="number" />
          </div>
          <div className="input-container">
            <label htmlFor="">Coordinate y</label>
            <input type="number" />
          </div>
          <button className="save-button">Save</button>
        </form>
      </div>
    </>
  );
};

export default AddStationForm;
