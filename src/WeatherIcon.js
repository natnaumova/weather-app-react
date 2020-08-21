import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "sunny",
    "01n": "clearmoon",
    "02d": "partlycloudy",
    "02n": "partlycloudymoon",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "DOUBLEcloudy",
    "04n": "DOUBLEcloudy",
    "09d": "sunnyrainy",
    "09n": "moonrainy",
    "10d": "greyrainy",
    "10n": "greyrainy",
    "11d": "sunnybolt",
    "11n": "moonbolt",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "foggy",
    "50n": "foggy",
  };

  return (
    <img
      src={require(`./assets/${codeMapping[props.code]}.svg`)}
      alt="Current weather"
      width="150"
      height="150"
    />
  );
}
