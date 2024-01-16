import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoadDataPayloadHourly } from "./types";

export const WeatherHoursApi = createAsyncThunk(
    'WeatherHourly',
    async({access_key , query , Date}:LoadDataPayloadHourly):Promise<any>=>{
        const res = await axios.get(
            `http://api.weatherapi.com/v1/history.json?key=${access_key}&q=${query}&dt=${Date}`
        ) 
        return res?.data
    }
)