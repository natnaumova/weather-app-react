import React from "react";

import "./CurrentData.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
//library.add(faArrowUp, faArrowDown);

export default function CurrentDate() {
  let weatherData = {
    city: "New York",
    temperature: 28,
    time: "14:24 Thursday 30 July",
    description: "Clear sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div>
      <h2>{weatherData.city}</h2>

      <div className="row">
        <div className="col-sm">
          <p>Last updated:</p>
          <p>{weatherData.time}</p>
          <div className="current-temperature">
            {weatherData.temperature}
            <span className="units">
              °C | <span className="fahrenheit-button">°F</span>
            </span>
          </div>

          <div className="min-max-temp">
            <span>{/* <FontAwesomeIcon icon="arrow-up" /> */} 30°</span>{" "}
            &nbsp;&nbsp;
            <span>{/*<FontAwesomeIcon icon="arrow-down" /> */} 26°</span>
          </div>
        </div>

        <div className="col-sm">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="today-weather-icon"
          />
          <p className="weather-description">{weatherData.description}</p>
        </div>
      </div>
    </div>
  );
}
