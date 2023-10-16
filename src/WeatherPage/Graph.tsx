import React from "react";
import styled from "styled-components";

interface GraphProps {
  weeklyWeather: any;
}

const Graph = ({ weeklyWeather }: GraphProps) => {
  console.log(weeklyWeather);

  const timezone_offset = 32400;

  return (
    <Div>
      {weeklyWeather.daily.map((data: any, index: number) => (
        <WeatherList key={index}>
          {new Date((data.dt + timezone_offset) * 1000).toLocaleDateString([], {
            timeZone: "UTC",
            weekday: "long",
          })}
        </WeatherList>
      ))}
    </Div>
  );
};

const Div = styled.div`
  background-color: #8b8b8b42;

  /* backdrop-filter: blur(20px); */

  width: 100%;
  /* height: 2000px; */

  border-radius: 30px;
`;

const WeatherList = styled.div``;

export default Graph;
