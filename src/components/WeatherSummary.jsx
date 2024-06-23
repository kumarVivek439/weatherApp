import React from "react";
import moment from "moment";
import { WiDayCloudy } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiDayHaze } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";

function WeatherSummary({ weatherData = [] }) {
  console.log("weatherdata ==>", weatherData);
  function getCurrentDayAndTime() {
    return moment().format("dddd, h.mm A");
  }
  const currentDayAndTime = getCurrentDayAndTime();

  function getCurrentFormattedDate() {
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
  const currentDate = getCurrentFormattedDate();

  function getIcon(data) {
    if (data === "Clouds") {
      return <WiCloudy size={200} />;
    } else if (data === "Haze") {
      return <WiDayHaze size={200} />;
    } else {
      return <WiDaySunny size={200} />;
    }
  }

  const weatherIcon = getIcon(weatherData?.weather[0]?.main);

  function getDayOrNight() {
    const date = new Date();
    const hours = date.getHours();
    return hours >= 6 && hours < 18 ? "Day" : "Night";
  }
  const timeOfDay = getDayOrNight();
  return (
    <div className="weather-summary">
      <div className="weather-img"></div>
      <div className="temperature">
        <div className="weather-img">{weatherIcon}</div>
        <div>
          <p>{weatherData?.name}</p>
        </div>
        <p>
          <span className="value">{weatherData?.main?.temp}</span>°{" "}
          <span className="unit-format">C</span>
        </p>
        <p className="weathertext">{weatherData?.weather[0]?.main}</p>
      </div>
      <hr />
      <div className="date-info">
        <p className="date">{currentDate}</p>
        <p className="time">{currentDayAndTime}</p>
        <p className="daystatus">{timeOfDay}</p>
      </div>
      <div className="location-info">
        <p className="location"></p>
      </div>
    </div>
  );
}

export default WeatherSummary;
