import React, { useState } from "react";
import axios from "axios";
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
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
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
    const apiKey = "ca50e9c19e1a4269dd83c8d98bf6c691";
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
                  <FontAwesomeIcon icon={faArrowUp} /> {weatherData.tempMax}°
                </span>{" "}
                &nbsp;&nbsp;
                <span>
                  <FontAwesomeIcon icon={faArrowDown} /> {weatherData.tempMin}°
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
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
