import React from "react";
import "./Weather.css";

//import City from "./City";
//import Day from "./Day";
//import Time from "./Time";
//import Description from "./Description";
//import Temperature from "./Temperature";
//import Humidity from "./Humidity";
//import Wind from "./Wind";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 18,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
    humidity: 80,
    wind: 5,
  };

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city..."
              autofocus="on"
              autoComplete="off"
              class="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="🔍" className="btn btn-primary" />
          </div>
          <div className="col-3">
            <input type="submit" value="📍" className="btn btn-light" />
          </div>
        </div>
      </form>
      <br />
      <h1>{weatherData.city}</h1>
      <div className="row">
        <div className="col-6">
          <div className="weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              class="float-left"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">°C </span>
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
        <br />
      </div>
      <h2>6-Day Forecast</h2>
      <div className="weather-forecast"></div>
      <span className="urls">
        This project was coded by Eu and is
        <a href="https://github.com/ibads8/Weather-app-react">
          open-sourced on GitHub
        </a>
        and
        <a href="https://app.netlify.com/sites/magical-kataifi-9064b3/overview">
          hosted on Netlify
        </a>
      </span>
      <script src="index.js"></script>
    </div>
  );
}
