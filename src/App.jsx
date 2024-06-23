import { useState, useEffect } from "react";
import "./App.css";
import RightSection from "./components/RightSection";
import axios from "axios";
import InputBox from "./components/InputBox";
import WeatherSummary from "./components/WeatherSummary";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [summaryData, setSummaryData] = useState(null);
  const [city, setCity] = useState("Mumbai");

  const fetchData = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3eb904a7530416c42fd1fc2158502fcb`
      );
      const baseData = response?.data;
      setSummaryData(baseData);
      console.log("baseData ==>", baseData);
      function convertEpochToReadableTime(epoch) {
        const date = new Date(epoch * 1000);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const minutesStr = minutes < 10 ? "0" + minutes : minutes;
        return hours + ":" + minutesStr + " " + ampm;
      }

      const result = [
        {
          Title: "Temp",
          Value: baseData?.main?.temp,
          unit: " ℃",
        },
        {
          Title: "Wind",
          Value: baseData?.wind?.speed,
          unit: " KM/hr",
        },
        {
          Title: "Humidity",
          Value: baseData?.main?.humidity,
          unit: " %",
        },
        {
          Title: "Pressure",
          Value: baseData?.main?.pressure,
          unit: " mbbar",
        },
        {
          Title: "Sunrise",
          Value: convertEpochToReadableTime(baseData?.sys?.sunrise),
        },
        {
          Title: "Sunset",
          Value: convertEpochToReadableTime(baseData?.sys?.sunset),
        },
      ];
      setWeatherData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(city);
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="app">
            <div className="row main-content">
              <div className="col-lg-4">
                <div className="left-side">
                  <InputBox onCityChange={handleCityChange} />
                  <WeatherSummary weatherData={summaryData} />
                </div>
              </div>
              <RightSection weatherData={weatherData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
