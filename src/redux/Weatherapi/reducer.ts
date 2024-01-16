import { WeatherApi } from "./api";
import { InitialState } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  isLoading: false,
  LoadData: [],
  viewTime:[],
  Search:[]
};

export const AllData = createSlice({
  name: "Data",
  initialState,
  reducers: {
    ViewTime : (state:any , action:PayloadAction<Array<any>>)=>{
      state.viewTime = action?.payload
    },
    Search : (state:any , action:PayloadAction<Array<any>>)=>{
      state.search = action?.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(WeatherApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(WeatherApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.LoadData = action.payload;
      })
      .addCase(WeatherApi.rejected, (state) => {
        state.isLoading = false;
      })
      
  },
});

export default AllData.reducer;
