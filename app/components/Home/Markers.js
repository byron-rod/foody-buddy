import { MarkerF, OverlayView } from "@react-google-maps/api";
import React, { useContext } from "react";
import BusinessItem from "./BusinessItem";
import { SelectedBusinessContext } from "../../../context/SelectedBusinessContext";

function Markers({ business }) {
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );

  const handleMarkerClick = () => {
    if (selectedBusiness?.reference === business.reference) {
      setSelectedBusiness(null);
    } else {
      setSelectedBusiness(business);
    }
  };

  return (
    <div>
      <MarkerF
        position={business.geometry.location}
        onClick={handleMarkerClick}
        icon={{
          url: "/rest-pin.png",
          scaledSize: {
            width: 50,
            height: 50,
          },
        }}
      >
        {selectedBusiness?.reference === business.reference ? (
          <OverlayView
            position={business.geometry.location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="ml-[-90px] mt-[-230px]">
              <BusinessItem business={business} showDir={true} />
            </div>
          </OverlayView>
        ) : null}
      </MarkerF>
    </div>
  );
}

export default Markers;
