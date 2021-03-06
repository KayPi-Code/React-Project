import React, { useState } from "react";

export default function WeatherForm(props) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      props.onCityChanged(city);
      setCity("");
    } else {
      alert(`Enter your city`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function locationByCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      props.locationByCoords(lat, lon);
    });
  }

  return (
    <div className="weatherForm">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter your City"
          className="form-control me-5"
          onChange={updateCity}
          value={city}
        />
        <button id="search" type="submit" className="btn btn-primary me-1">
          <i className="fas fa-search"></i>
        </button>
        <button id="location" type="button" className="btn btn-primary me-1" onClick={locationByCoords}>
          <i className="fas fa-location-arrow"></i>
        </button>
        <button id="celsius" type="button" className="btn btn-primary me-1" onClick={props.switchToCelsius}>
          °C
        </button>
        <button id="fahrenheit" type="button" className="btn btn-primary me-1" onClick={props.switchToFahrenheit}>
          °F
        </button>
      </form>
    </div>
  );
}
