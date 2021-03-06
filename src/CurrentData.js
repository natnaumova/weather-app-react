import React, { useState } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";
import ReactLoading from "react-loading";
import Forecast from "./Forecast";

import "./CurrentData.css";
import {
  faArrowUp,
  faArrowDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormattedTime from "./FormattedTime";

export default function CurrentDate(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "b30495f5be74d741761fbfcaa3522a47";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="search-form">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Enter location"
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-2">
                <button className=" btn btn-outline-primary">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <h2>{weatherData.city}</h2>

          <div className="row">
            <div className="col-sm">
              <p>Last updated:</p>

              <FormattedTime date={weatherData.date} />

              <div className="current-temperature">
                <UnitConversion celsius={weatherData.temperature} />
              </div>

              <div className="min-max-temp">
                <span>
                  <FontAwesomeIcon icon={faArrowUp} /> {weatherData.tempMax}°C
                </span>{" "}
                &nbsp;&nbsp;
                <span>
                  <FontAwesomeIcon icon={faArrowDown} /> {weatherData.tempMin}°C
                </span>
              </div>
            </div>

            <div className="col-sm weather-icon">
              <WeatherIcon code={weatherData.icon} />

              <p className="weather-description">{weatherData.description}</p>
            </div>
          </div>

          <Forecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="spinner">
        <ReactLoading type="spin" color="#007bff" height="64px" width="64px" />
      </div>
    );
  }
}
