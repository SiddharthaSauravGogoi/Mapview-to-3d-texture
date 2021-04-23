import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "425px",
  height: "425px",
};

const center = {
  lat: 27.4728,
  lng: 94.912,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
  });

  const [latLng, setLatLng] = useState({
    lat: 26.1445,
    lng: 26.1445,
  });
  const [pos, setPos] = useState({
    lat: 27.4728,
    lng: 94.912,
  });
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onClick={(event) => setPos(event.latLng)}
      onMouseOut={(event) => {
        setLatLng(event.latLng);
        console.log(event.latLng);
      }}
    >
      <Marker
        onLoad={onLoad}
        position={pos}
        clickable={true}
        draggable={true}
      />
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
}

export default React.memo(MyComponent);
