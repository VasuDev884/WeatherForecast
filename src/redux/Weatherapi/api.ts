import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoadDataPayload } from "./types";


export const WeatherApi = createAsyncThunk(
    'Weather',
    async({access_key , query}:LoadDataPayload):Promise<any>=>{
        const res = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${access_key}&q=${query}`
        ) 
        return res?.data
    }
)

