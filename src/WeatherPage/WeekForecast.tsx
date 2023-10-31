import React from "react";
import styled from "styled-components";

import LoadingIcon from "../LoadingIcon";

interface WeekForecastProps {
  forecastWeek: any;
}

const WeekForecast = ({ forecastWeek }: WeekForecastProps) => {
  // console.log(forecastWeek);

  const timezone_offset = 32400;

  return (
    <Div>
      {forecastWeek ? (
        <>
          {forecastWeek.daily.map((data: any, index: number) => (
            <WeatherList key={index}>
              <Day>
                {new Date(
                  (data.dt + timezone_offset) * 1000
                ).toLocaleDateString([], {
                  timeZone: "UTC",
                  weekday: "long",
                })}
              </Day>

              <Humidity ratio={data.humidity}>{`${data.humidity}%`}</Humidity>

              <Img
                url={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              />
              <Temp>
                {`${Math.floor(data.temp.max)}° ${Math.floor(data.temp.min)}°`}
              </Temp>
            </WeatherList>
          ))}
        </>
      ) : (
        <LoadingIcon size={50} />
      )}
    </Div>
  );
};

const Div = styled.div`
  background-color: #8b8b8b42;

  width: 100%;
  height: 800px;

  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const WeatherList = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;

  /* background-color: red; */

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Day = styled.div`
  width: 30%;
`;

const Humidity = styled.div<{ ratio: number }>`
  color: gray;
  position: relative;
  width: 15%;
  height: 60%;

  display: flex;
  align-items: center;

  text-align: left;

  &::before {
    content: "";
    width: 7px;
    height: 100%;
    background-color: #e2f3fd;
    border: 1px solid gray;
    position: absolute;
    left: -15px;
    border-radius: 10px;
  }

  &::after {
    content: "";
    width: 7px;
    height: ${(props) => `${props.ratio}%`};
    background-color: #56c1ff;
    position: absolute;
    left: -14px;
    bottom: 0px;
    overflow: hidden;
    border-radius: 0px 0px 10px 10px;
  }
`;

const Temp = styled.div``;

const Img = styled.div<{ url: string }>`
  width: 100px;
  height: 100%;

  background: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default WeekForecast;
