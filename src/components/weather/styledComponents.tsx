import styled from "styled-components";

interface StyledProsp {
BackGroungImg:any
}

export const WeatherTemp = styled.div`
  width: 76%;
  padding: 20px;
`
export const CityName = styled.h4`
  font-size: 50px;
  font-weight: 700;
`
export const ChanceOfRain = styled.h4`
 color: gray;
 font-size: 14px;
 margin-top: -10px;
`

export const TempHolder = styled.h1`
  margin-top: 30px;
  font-size: 50px;
  font-weight: 700;
`

export const TodayWeatherHolder = styled.div`
   width: 70%;
   margin-top: 15px;
   height: 28vh;
   border-radius: 10px;
   background-color: #d4d3d3;
   padding: 10px;
` 

export const ConditionHolder = styled.div`
  position: absolute;
  margin-left: 55%;
  margin-top: -10%;
`