import React, { Component } from "react";
import WeatherView from "./Weather_section";
import WeatherForm from "./WeatherForm";

const API_key = "dc883bcd4fbeff4edce7c08401c512c0";

class WeatherApi extends Component {
  constructor() {
    super();
    this.state = {};
    this.state = {
      city: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      description: "",
      error: false,
      nextHours: [],
      humidity: undefined,
      pressure: undefined,
    };

    this.weathericon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  toCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_Weathericon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weathericon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weathericon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weathericon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weathericon.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weathericon.Atmosphere });
        break;
      case rangeId >= 800 && rangeId <= 232:
        this.setState({ icon: this.weathericon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weathericon.Clouds });
        break;
      default:
        this.setState({ icon: this.weathericon.Clouds });
    }
  }

  get_WeathericonNext(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        return this.weathericon.Thunderstorm;
      case rangeId >= 300 && rangeId <= 321:
        return this.weathericon.Drizzle;
      case rangeId >= 500 && rangeId <= 531:
        return this.weathericon.Rain;
      case rangeId >= 600 && rangeId <= 622:
        return this.weathericon.Snow;
      case rangeId >= 701 && rangeId <= 781:
        return this.weathericon.Atmosphere;
      case rangeId >= 800 && rangeId <= 232:
        return this.weathericon.Clear;
      case rangeId >= 801 && rangeId <= 804:
        return this.weathericon.Clouds;
      default:
        return this.weathericon.Clouds;
    }
  }

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;

    try {
      if (city) {
        const api_call = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`
        );
        const response_zero = await api_call.json();
        const response = await response_zero.list;

        this.setState({
          city: response_zero.city.name,
          celsius: this.toCelsius(response[0].main.temp),
          description: response[0].weather[0].description,
          error: false,
          humidity: response[0].main.humidity,
          pressure: response[0].main.pressure,
          nextHours: response.slice(1, 5).map((item) => ({
            temp: this.toCelsius(item.main.temp),
            icon: this.get_WeathericonNext(
              this.weathericon,
              item.weather[0].id
            ),
            time: item.dt_txt.slice(11, 16),
          })),
        });

        this.get_Weathericon(this.weathericon, response[0].weather[0].id);
      } else {
        this.setState({ error: true });
      }
    } catch (e) {
      alert("City you are requesting doesn't exist");
    }
  };

  render() {
    return (
      <div>
        <WeatherForm loadweather={this.getWeather} error={this.state.error} />
        <WeatherView
          city={this.state.city}
          temp_celsius={this.state.celsius}
          description={this.state.description}
          weathericon={this.state.icon}
          nextHours={this.state.nextHours}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
        />
      </div>
    );
  }
}

export default WeatherApi;
