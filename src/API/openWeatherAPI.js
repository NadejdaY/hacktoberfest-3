import axios from "axios";

const BASE_LINK = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "5bacda46919a4fec46ab34b6f484bc59";

export class openWeatherAPI {
  static getCurrentWeather(place) {
    return axios.get(
      `${BASE_LINK}weather?q=${place}&lang=ru&units=metric&appid=${API_KEY}`
    );
  }
}
