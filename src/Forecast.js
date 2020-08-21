import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";
import "./Forecast.css";
import ReactLoading from "react-loading";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <ForecastPreview data={forecast.list[0]} />
        <ForecastPreview data={forecast.list[1]} />
        <ForecastPreview data={forecast.list[2]} />
        <ForecastPreview data={forecast.list[3]} />
        <ForecastPreview data={forecast.list[4]} />
      </div>
    );
  } else {
    let apiKey = "b30495f5be74d741761fbfcaa3522a47";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return (
      <div className="spinner">
        <ReactLoading type="spin" color="#007bff" height="64px" width="64px" />
      </div>
    );
  }
}
