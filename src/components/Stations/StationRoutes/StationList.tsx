import { useGetStationList } from "../../../Hooks";
import { Link } from "react-router-dom";
import { TiArrowUpOutline } from "react-icons/ti";
import { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import AddButton from "../../AddButton/AddButton";
import StationForm from "./StationForm";

const StationList = () => {
  const goUp = () => {
    const list = document.querySelector(".station-list");
    list?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [viewForm, setViewForm] = useState(false);

  const { data, isLoading, isError } = useGetStationList();
  if (isLoading) {
    return (
      <div className="page">
        <Spinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="page">
        <ErrorMsg />
      </div>
    );
  }

  switch (viewForm) {
    case true:
      return (
        <div className="page" data-testid="stations-list">
          <StationForm viewForm={viewForm} setViewForm={setViewForm} />;
        </div>
      );
    case false:
      return (
        <div className="page" data-testid="stations-list">
          <div className="station-nav-container">
            <h3 className="total-stations">
              {data?.length} stations in the database.
            </h3>
            <AddButton
              viewForm={viewForm}
              setViewForm={setViewForm}
              text="Add Station"
            />
          </div>

          <div className="list styled-scrollbar station-list">
            {data?.map((station, key) => {
              return (
                <Link
                  className="station-link"
                  key={key}
                  to={`${station.station_id}`}
                >
                  <div className="list-item station-item">
                    {station.station_nimi}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="go-up-btn" onClick={goUp}>
            <TiArrowUpOutline size={35} color="white" />
          </div>
        </div>
      );
  }
};

export default StationList;