import React from "react";
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
          <CurrentData />
          <Forecast />
        </div>
      </div>
      <small>
        <a
          href="https://github.com/natnaumova/My-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open sourse code
        </a>{" "}
        by Natalia Naumova
      </small>
    </div>
  );
}
