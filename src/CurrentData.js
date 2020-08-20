import React, { useState } from "react";
import axios from "axios";
import "./CurrentData.css";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormattedTime from "./FormattedTime";

export default function CurrentDate(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <h2>{weatherData.city}</h2>

        <div className="row">
          <div className="col-sm">
            <p>Last updated:</p>
            <p>
              <FormattedTime date={weatherData.date} />
            </p>
            <div className="current-temperature">
              {weatherData.temperature}
              <span className="units">
                °C | <span className="fahrenheit-button">°F</span>
              </span>
            </div>

            <div className="min-max-temp">
              <span>
                <FontAwesomeIcon icon={faArrowUp} /> 30°
              </span>{" "}
              &nbsp;&nbsp;
              <span>
                <FontAwesomeIcon icon={faArrowDown} /> 26°
              </span>
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
  } else {
    const apiKey = "ca50e9c19e1a4269dd83c8d98bf6c691";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
