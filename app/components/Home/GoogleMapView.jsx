import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useState, useContext } from "react";
import Markers from "./Markers";

const GoogleMapView = ({ businessList }) => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const mapContainerStyle = {
    width: "100%",
    height: "70vh",
  };

  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={["f3b73b09f5c929ff"]}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={userLocation}
          options={{ mapId: "f3b73b09f5c929ff" }}
          zoom={14}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: { width: 40, height: 40 },
            }}
          />
          {businessList.map(
            (item, index) =>
              index <= 7 && <Markers key={index} business={item} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
