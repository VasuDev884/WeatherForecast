import { WeatherHoursApi } from "./api";
import { InitialState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  isLoading: false,
  LoadData: [],
};

export const WeatherHourly = createSlice({
  name: "Data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(WeatherHoursApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(WeatherHoursApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.LoadData = action.payload;
      })
      .addCase(WeatherHoursApi.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export default WeatherHourly.reducer;
