import React, { useState } from "react";

import Form from "./Form";
import UseCurrentLocationButton from "./UseCurrentLocationButton";
import CurrentData from "./CurrentData";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="box">
        <h1>Latest weather forecast</h1>
        <div className="container">
          <Form />
          <UseCurrentLocationButton />
          <CurrentData defaultCity="New York" />
          <Forecast />
        </div>
      </div>

      <small>
        <a
          href="https://github.com/natnaumova/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open sourse code
        </a>{" "}
        by{" "}
        <a
          href="https://natalianaumova.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Natalia Naumova
        </a>
      </small>
    </div>
  );
}
