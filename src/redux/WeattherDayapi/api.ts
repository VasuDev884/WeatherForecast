import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoadDataPayloadHourly } from "./type";

export const WeatherDayApi = createAsyncThunk(
    'WeatherDays',
    async({access_key , query , Day}:LoadDataPayloadHourly):Promise<any>=>{
        const res = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=${access_key}&q=${query}&days=${Day}`
        ) 
        return res?.data
    }
)