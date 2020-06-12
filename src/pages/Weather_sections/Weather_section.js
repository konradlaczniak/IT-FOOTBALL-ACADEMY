import React from "react";

function WeatherView(props) {
  return (
    <div className="container text-light">
      {props.temp_celsius ? (
        <div className="row weather-view">
          <div className="cards current-weather">
            <h1 className="py-3 temp-style">{props.city}</h1>
            <h3 className="py-3">{props.description}</h3>
            <h2 className="py-2">
              <i className={`wi ${props.weathericon} display-1`}></i>
            </h2>

            <h1 className="py-3 temp-style">{props.temp_celsius}&deg;</h1>

            <h5 className="py-1">Humidity {props.humidity} %</h5>
            <h5 className="py-1">Pressure {props.pressure} hPa</h5>
          </div>
          <div className="cards">
            <h1 className="py-3 temp-style">Next hours</h1>
            <ul className="forecast" style={{ minWidth: "18rem" }}>
              {props.nextHours.map((item, index) => (
                <li key={index}>
                  <i className={`img-fluid wi ${item.icon} display-3`}></i>
                  <h1 className="py-2 temp-style">{item.temp}&deg;</h1>
                  <h1>{item.time}</h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherView;
