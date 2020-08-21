import React from "react";
import axios from "axios";

import "./UseCurrentLocationButton.css";

export default function UseCurrentLocationButton(props) {
  function useCurrentLocation() {
    let lat = props.coords.latitude;
    let lon = props.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    let apiKey = `b30495f5be74d741761fbfcaa3522a47`;

    axios
      .get(`${apiUrl}&appid=${apiKey}`)
      .then((response) => props.onLocationResponse(response));
    console.log(props.coords.latitude);
  }

  return (
    <div id="use-current-location">
      <a href="/" className="use-current-location" onClick={useCurrentLocation}>
        Use current location
      </a>
    </div>
  );
}
