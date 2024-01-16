import styled from "styled-components";

export const HourlyAllData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #aaadb01d;
  }
  &::-webkit-scrollbar-thumb {
    background: #abafb1;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const WeatherDisplay = styled.div`
  width: 200px;
  padding: 0px 35px;
  height: 130px;
  margin-bottom: 5px;
  margin-top: 10px;
  border-right: 1px solid #abafb1;
`;

export const TempHolder = styled.div`
  margin-top: 100px;
`;

export const ForcastHeading = styled.h4`
  color: gray;
  font-weight: 800;
`;

export const ForcastTime = styled.h4`
  color: gray;
  font-weight: 800;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const AllDayImg = styled.div`
  margin: 10px 0 ;
`;

export const ForcastTemp = styled.h4`
  font-weight: 800;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const HourImg = styled.img`
  width: 160px;
  margin: -20px 0px -20px -18px ;
  height: 80px;
`