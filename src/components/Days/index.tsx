import { useDispatch, useSelector } from "react-redux";
import {
  DaysWeatherWrapper,
  DayHolder,
  DayWeatherHolder,
  DayDateHolder,
  Heading,
  HR,
} from "./styledComponents";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { WeatherDayApi } from "../../redux/WeattherDayapi/api";
import { FaSun, FaRegSun } from "react-icons/fa";

const DaysWeather = () => {
  const { DayWeather } = useSelector((state: RootState) => ({
    DayWeather: state.WeatherDay.LoadData,
  }));

  const dispatchData = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchData(
      WeatherDayApi({
        access_key: "9e082dfa6bf9407383254459240401",
        query: "Patiala,India",
        Day: "7",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DaysWeather = [DayWeather];

  let Days: any = [];

  DaysWeather?.map((e: any) => {
    Days = e?.forecast?.forecastday;
  });

  return (
    <DaysWeatherWrapper>
      <Heading>7-Day FORECAST </Heading>
      {Days?.map((e: any, index: any) => (
        <>
          <DayWeatherHolder key={index}>
            <DayDateHolder>{e?.date}</DayDateHolder>
            <DayHolder>
            {e?.day?.condition?.text === "Sunny" ? (
              <FaSun style={{fontSize:'30px', marginRight:'10px', color:'yellow'}} />
            ) : e?.day?.condition?.text === "Cloudy" ? (
              <FaRegSun  style={{fontSize:'30px', marginRight:'10px'}}/>
            ) : e?.day?.condition?.text === "Rain" ? (
              <FaSun  style={{fontSize:'30px', marginRight:'10px'}}/>
            ) : (
              ""
            )}
               {e?.day?.condition?.text}
            </DayHolder>
            <DayDateHolder>
              <span style={{ color: "black" }}>{e?.day?.maxtemp_c}</span>/
              {e?.day?.mintemp_c}
            </DayDateHolder>
          </DayWeatherHolder>
          <HR />
        </>
      ))}
    </DaysWeatherWrapper>
  );
};

export default DaysWeather;
