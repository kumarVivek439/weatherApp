import React from "react";
import { WEATHER_DATA } from "../constant/constants";
import Footer from "./Footer";

const renderWeatherCard = ({ item }) => {
  return (
    <div className="col-lg-4">
      <div className="weather-info-box">
        <p className="title">{item?.Title}</p>
        <p className="value">
          <span className="wind">{item?.Value}</span>
          <span className="wind">{item?.unit}</span>
        </p>
      </div>
    </div>
  );
};
const RightSection = ({ weatherData = [] }) => {
  return (
    <div className="col-lg-8">
      <div className="right-side">
        <div className="option">
          <span className="today active">Today</span>
        </div>
        <div className="row">
          {weatherData?.map((item) => renderWeatherCard({ item }))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RightSection;
