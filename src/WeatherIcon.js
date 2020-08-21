import React from "react";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "01d": "https://image.flaticon.com/icons/svg/1163/1163662.svg",
    "01n": "https://image.flaticon.com/icons/svg/1163/1163645.svg",
    "02d": "https://image.flaticon.com/icons/svg/1163/1163661.svg",
    "02n": "https://image.flaticon.com/icons/svg/1163/1163625.svg",
    "03d": "https://image.flaticon.com/icons/svg/1163/1163624.svg",
    "03n": "https://image.flaticon.com/icons/svg/1163/1163624.svg",
    "04d": "https://image.flaticon.com/icons/svg/1163/1163634.svg",
    "04n": "https://image.flaticon.com/icons/svg/1163/1163634.svg",
    "09d": "https://image.flaticon.com/icons/svg/1163/1163657.svg",
    "09n": "https://image.flaticon.com/icons/svg/1163/1163644.svg",
    "10d": "https://image.flaticon.com/icons/svg/1163/1163626.svg",
    "10n": "https://image.flaticon.com/icons/svg/1163/1163626.svg",
    "11d": "https://image.flaticon.com/icons/svg/1163/1163659.svg",
    "11n": "https://image.flaticon.com/icons/svg/1163/1163643.svg",
    "13d": "https://image.flaticon.com/icons/svg/1163/1163629.svg",
    "13n": "https://image.flaticon.com/icons/svg/1163/1163629.svg",
    "50d": "https://image.flaticon.com/icons/svg/1163/1163640.svg",
    "50n": "https://image.flaticon.com/icons/svg/1163/1163640.svg",
  };

  return (
    <img
      src={codeMapping[props.code]}
      alt="Current weather"
      width="150"
      height="150"
    />
  );
}
