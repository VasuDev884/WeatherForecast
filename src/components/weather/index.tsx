import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { WeatherApi } from "../../redux/Weatherapi/api";
import {
  WeatherTemp,
  CityName,
  TempHolder,
  ChanceOfRain,
  ConditionHolder,
} from "./styledComponents";
import { ViewTime } from "../../redux/Weatherapi/action";
import { FaSun, FaRegSun } from "react-icons/fa";
import { BsMoonStarsFill  } from "react-icons/bs";


const Weather = () => {
  const { AllDataInOne } = useSelector((state: RootState) => ({
    AllDataInOne: state.WeatherReducer.LoadData,
    // isLoading: state.WeatherReducer.isLoading,
  }));

  const { Search } = useSelector((state: RootState) => ({
    Search: state.WeatherReducer.Search,
  }));

  const dispatchData = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchData(
      WeatherApi({
        access_key: "9e082dfa6bf9407383254459240401",
        query: `Patiala,India`,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatchHourly = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchHourly(
      WeatherApi({
        access_key: "9e082dfa6bf9407383254459240401",
        query: `Patiala,India`,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const WeatherArray = [AllDataInOne];
  const dispatch = useDispatch();
  WeatherArray.map((e: any) => {
    let TimeData = e?.location?.localtime
      .split(" ")
      ?.pop()
      ?.toLocaleUpperCase()
      .split(":")
      ?.shift()
      ?.toLocaleUpperCase();
    dispatch(ViewTime(TimeData));
  });

  console.log(Search)

  return (
    <div>
      {WeatherArray.map((e: any, index: any) => (
        <WeatherTemp key={index}>
          <CityName>{e?.location?.name}</CityName>
          <ChanceOfRain>Chance of rain 0%</ChanceOfRain>
          <TempHolder>{e?.current?.temp_c}°</TempHolder>
          <ConditionHolder>
            {e?.current?.is_day == "1" ? (
              <FaSun style={{fontSize:'150px', color:'yellow'}} />
            ) : e?.current?.is_day == "0" ? (
              <BsMoonStarsFill  style={{fontSize:'150px'}}/>
            ) 
            // : e?.current?.condition?.text === "Rain" ? (
            //   <FaSun  style={{fontSize:'150px'}}/>
            // ) 
            : (
              ""
            )}
          </ConditionHolder>
        </WeatherTemp>
      ))}
    </div>
  );
};

export default Weather;
