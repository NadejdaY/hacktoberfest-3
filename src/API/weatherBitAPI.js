import axios from "axios";

const BASE_LINK = "https://api.weatherbit.io/v2.0/";
const API_KEY = "7642e02bdef843939b56f53778a89565";

export class weatherBitAPI {
  static getDailyForecast(place, period) {
    return axios.get(
      `${BASE_LINK}forecast/daily?city=${place}&lang=ru&days=${period}&key=${API_KEY}`
    );
  }
}
