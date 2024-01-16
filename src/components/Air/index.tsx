import { useDispatch, useSelector } from "react-redux";
import { TodayWeatherHolder } from "../weather/styledComponents";
import { AppDispatch, RootState } from "../../redux/store";
import { WeatherApi } from "../../redux/Weatherapi/api";
import { useEffect } from "react";
import { AirConditionHolder, DivWrapper, Heading, SubHeading } from "./styledComponents";
import { FaThermometerEmpty , FaSun  } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { IoMdThermometer, IoMdTime  } from "react-icons/io";

const AirConditions = () => {
  const { AllDataInOne } = useSelector((state: RootState) => ({
    AllDataInOne: state.WeatherReducer.LoadData,
    // isLoading: state.WeatherReducer.isLoading,
  }));

  const dispatchData = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchData(
      WeatherApi({
        access_key: "9e082dfa6bf9407383254459240401",
        query: "Patiala,India",
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const WeatherArray = [AllDataInOne];

  return (
    <TodayWeatherHolder>
      <Heading>AIR CONNDITIONS</Heading>
     {WeatherArray.map((e:any, index:any)=>(
         <AirConditionHolder key={index}>
         <DivWrapper>
           <Heading> <FaThermometerEmpty style={{fontSize:'19px', marginRight:'10px'}} /> Real Feel</Heading>
           <SubHeading>{e?.current?.feelslike_c}°</SubHeading>
         </DivWrapper>
         <DivWrapper>
           <Heading> <FiWind style={{fontSize:'19px', marginRight:'10px'}}/>  Wind</Heading>
           <SubHeading>{e?.current?.wind_kph} km/h</SubHeading>
         </DivWrapper>
         <DivWrapper>
           <Heading> <WiHumidity style={{fontSize:'23px', marginRight:'10px'}} /> Humidity</Heading>
           <SubHeading>{e?.current?.humidity}</SubHeading>
         </DivWrapper>
         <DivWrapper>
           <Heading> <FaSun style={{fontSize:'19px', marginRight:'10px'}} /> UV index</Heading>
           <SubHeading>{e?.current?.uv}</SubHeading>
         </DivWrapper>
         <DivWrapper>
           <Heading> <IoMdThermometer  style={{fontSize:'20px', marginRight:'10px'}} /> Temprature</Heading>
           <SubHeading>{e?.current?.temp_c}°</SubHeading>
         </DivWrapper>
         <DivWrapper>
           <Heading> <IoMdTime style={{fontSize:'20px', marginRight:'10px'}} /> Last Update</Heading>
           <SubHeading>{e?.current?.last_updated?.split(" ")?.pop()?.toLocaleUpperCase()}</SubHeading>
         </DivWrapper>
       </AirConditionHolder>
     ))}
    </TodayWeatherHolder>
  );
};

export default AirConditions;
