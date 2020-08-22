import React, { useState } from "react";
import "./UnitConversion.css";

export function fahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="units">
        <span className="actual-temperature"> {props.celsius}</span>
        <span className="fahrenheit-button">
          <span className="pressed-button"> °C </span>
          <span className="unpressed-button">
            |<button onClick={showFahrenheit}>°F</button>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="units">
        <span className="actual-temperature">{fahrenheit(props.celsius)}</span>
        <span className="celcius-button">
          <span className="unpressed-button">
            <button onClick={showCelsius}>°C</button>|
          </span>{" "}
          <span className="pressed-button">°F</span>
        </span>
      </div>
    );
  }
}
