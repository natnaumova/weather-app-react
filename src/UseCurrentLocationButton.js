import React from "react";

import "./UseCurrentLocationButton.css";

export default function UseCurrentLocationButton(props) {
  function useCurrentLocation() {
    return "London";
  }

  return (
    <div id="use-current-location">
      <a href="/" className="use-current-location" onClick={useCurrentLocation}>
        Use current location
      </a>
    </div>
  );
}
