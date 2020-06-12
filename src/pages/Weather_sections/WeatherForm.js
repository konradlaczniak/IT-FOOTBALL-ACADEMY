import React from "react";

function WeatherForm(props) {
  return (
    <div className="container weather-tab">
      <div className="error-style">{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <input
                type="text"
                className="form-control"
                name="city"
                autoComplete="off"
                placeholder="City..."
              />
            </div>
            <div className="mt-md-0 text-md-left py-3 get-weather-button">
              <button id="btn-weather" className="btn btn-warning">
                Get Weather
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City
    </div>
  );
}

export default WeatherForm;
