import React, { useEffect } from "react";
import { TodayWeatherHolder } from "../weather/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { WeatherHoursApi } from "../../redux/WeatherHourlyAPI/api";
import {
  ForcastHeading,
  ForcastTime,
  HourlyAllData,
  WeatherDisplay,
  AllDayImg,
  ForcastTemp,
  HourImg,
} from "./styledComponents";
import { FaSun, FaRegSun } from "react-icons/fa";
import { BsMoonStarsFill  } from "react-icons/bs";

function HourlyData() {
  const { AllWeatherHourly } = useSelector((state: RootState) => ({
    AllWeatherHourly: state.WeatherHourly.LoadData,
  }));
  const { Time } = useSelector((state: RootState) => ({
    Time: state.WeatherReducer.viewTime,
  }));

  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(
      WeatherHoursApi({
        access_key: "9e082dfa6bf9407383254459240401",
        query: `Patiala,India`,
        Date: `${date}`,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const WeatherHourly = [AllWeatherHourly];

  let Data: any;
  WeatherHourly.map((e: any) => {
    Data = e?.forecast?.forecastday[0]?.hour;
  });

  return (
    <TodayWeatherHolder>
      <ForcastHeading>TODAYS FORECAST</ForcastHeading>
      <HourlyAllData>
        {Data?.map((e: any, index: any) => (
          <WeatherDisplay
            key={index}
            style={{
              color:
                e?.time
                  ?.split(" ")
                  ?.pop()
                  ?.toLocaleUpperCase()
                  .split(":")
                  ?.shift()
                  ?.toLocaleUpperCase() ===Time
                  ? "#abafb1"
                  : "",
              scale:
                e?.time
                  ?.split(" ")
                  ?.pop()
                  ?.toLocaleUpperCase()
                  .split(":")
                  ?.shift()
                  ?.toLocaleUpperCase() === Time
                  ? "1.2"
                  : "",
            }}
          >
            <ForcastTime
              style={{
                color:
                  e?.time
                    ?.split(" ")
                    ?.pop()
                    ?.toLocaleUpperCase()
                    .split(":")
                    ?.shift()
                    ?.toLocaleUpperCase() === Time
                    ? "black"
                    : "",
              }}
            >
              {e?.time?.split(" ")?.pop()?.toLocaleUpperCase()}
            </ForcastTime>
            <AllDayImg
              style={{
                color:
                  e?.time
                    ?.split(" ")
                    ?.pop()
                    ?.toLocaleUpperCase()
                    .split(":")
                    ?.shift()
                    ?.toLocaleUpperCase() === Time
                    ? "black"
                    : "",
              }}
            >
              {e?.is_day == "1" ? (
                <FaSun style={{ fontSize: "35px", color:'yellow'}} />
              )  :e?.is_day == "0" ? (
                <BsMoonStarsFill  style={{ fontSize: "35px", color:'black'}} />
              ) : (
                ""
              )}
              {/* {e?.is_day} */}
            </AllDayImg>
            <ForcastTemp
              style={{
                color:
                  e?.time
                    ?.split(" ")
                    ?.pop()
                    ?.toLocaleUpperCase()
                    .split(":")
                    ?.shift()
                    ?.toLocaleUpperCase() === Time
                    ? "black"
                    : "",
              }}
            >
              {e?.temp_c}°
            </ForcastTemp>
          </WeatherDisplay>
        ))}
      </HourlyAllData>
    </TodayWeatherHolder>
  );
}

export default HourlyData;
