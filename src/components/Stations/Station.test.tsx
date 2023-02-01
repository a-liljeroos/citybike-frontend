import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StationDataView from "./StationDataView";

export const station = {
  station_adress: "Kägelviksvägen 2",
  station_capacity: 28,
  station_coord_x: 24.827467,
  station_coord_y: 60.171524,
  station_departures: 3144,
  station_fid: 2,
  station_id: 503,
  station_kaupunki: "Espoo",
  station_name: "Keilalahti",
  station_namn: "Kägelviken",
  station_nimi: "Keilalahti",
  station_operator: "CityBike Finland",
  station_osoite: "Keilalahdentie 2",
  station_returns: 3232,
  station_stad: "Esbo",
};

test("StationDataView shows data", () => {
  render(<StationDataView station={station} />);
  expect(screen.getByText(/Keilalahti/i)).toBeInTheDocument();
  expect(screen.getByText(/Departures/i)).toBeInTheDocument();
  expect(screen.getByText(/Returns/i)).toBeInTheDocument();
});
