import React from "react";

import CurrentData from "./CurrentData";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="box">
        <h1>Latest weather forecast</h1>
        <div className="container">
          <CurrentData defaultCity="New York" />
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
        </a>{" "}
        ☝ Icons inspired by{" "}
        <a
          href="https://www.flaticon.com/authors/iconixar"
          target="_blank"
          rel="noopener noreferrer"
        >
          iconixar
        </a>
      </small>
    </div>
  );
}
