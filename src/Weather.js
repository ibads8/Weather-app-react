import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=95079470ff44c6aa5da0f360fda49fbf&units=metric`;
  axios.get(url).then(showTemperature);
  return (
    <p>
      The temperature in {props.city} is {Math.round(temperature)}C
    </p>
  );
}
