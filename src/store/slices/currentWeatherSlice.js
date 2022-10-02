import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { openWeatherAPI } from "../../API/openWeatherAPI";

const initialState = {
  loading: true,
  error: false,
  data: {},
};

export const fetchCurrentWeather = createAsyncThunk(
  "currentWeatherSlice/getCurrentWeather",
  (place) => {
    return openWeatherAPI
      .getCurrentWeather(place)
      .then((response) => response.data);
  }
);

const currentWeatherSlice = createSlice({
  name: "currentWeatherSlice",
  initialState,
  extraReducers: {
    [fetchCurrentWeather.pending]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [fetchCurrentWeather.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
      const date = new Date();
      console.log(date.getUTCHours());
      state.data.time = `${date.getUTCHours() + (state.data.timezone / 3600)}:${date.getUTCMinutes()}`;
      state.loading = false;
    },
    [fetchCurrentWeather.rejected]: (state, action) => {
      state.error = true;
      console.log(action.payload);
    },
  },
});

export default currentWeatherSlice.reducer;
