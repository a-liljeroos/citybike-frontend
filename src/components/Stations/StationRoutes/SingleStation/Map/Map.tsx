import React, { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "./Map.scss";
import Icon from "./icon.png";

// create .env file in root folder and add REACT_APP_GOOGLE_API_KEY=your_api_key
// https://developers.google.com/maps/documentation/javascript/get-api-key

interface IMap {
  lat: number;
  lng: number;
}

const Map = ({ lat, lng }: IMap) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  });

  const center = useMemo(() => ({ lat: Number(lat), lng: Number(lng) }), []);

  return (
    <div className="map-container">
      {" "}
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <MarkerF
            position={center}
            icon={{
              url: Icon,
              scaledSize: new window.google.maps.Size(80, 81),
            }}
          ></MarkerF>
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
