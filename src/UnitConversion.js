import React, { useState } from "react";
import "./UnitConversion.css";

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

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="units">
        <span className="actual-temperature"> {props.celsius} </span>
        <span className="fahrenheit-button">
          <span className="pressed-button">°C </span>
          <span className="unpressed-button">
            |<button onClick={showFahrenheit}>°F</button>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="units">
        <span className="actual-temperature">{fahrenheit()}</span>
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
