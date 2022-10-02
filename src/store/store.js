import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSlice from "./slices/currentWeatherSlice";
import dailyForecastSlice from "./slices/dailyForecastSlice";
const rootReducer = combineReducers({
  currentWeather: currentWeatherSlice,
  dailyForecast: dailyForecastSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
