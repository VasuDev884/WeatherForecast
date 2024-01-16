import {WeatherDayApi} from "./api";
import { InitialState } from "./type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  isLoading: false,
  LoadData: [],
};

export const WeatherDay = createSlice({
  name: "Data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(WeatherDayApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(WeatherDayApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.LoadData = action.payload;
      })
      .addCase(WeatherDayApi.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export default WeatherDay.reducer;
