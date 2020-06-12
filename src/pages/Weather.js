import React from "react";
import WeatherApi from "./Weather_sections/weatherApi";

function Weather(props) {
  return (
    <section className="container-fluid weather-section">
      <WeatherApi />
    </section>
  );
}

export default Weather;
