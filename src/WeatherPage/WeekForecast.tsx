import React from "react";
import styled, { css } from "styled-components";

import LoadingIcon from "../LoadingIcon";

interface WeekForecastProps {
  forecastWeek: any;
}

const WeekForecast = ({ forecastWeek }: WeekForecastProps) => {
  const timezone_offset = 32400;

  return (
    <Div $lodingCheck={forecastWeek ? false : true}>
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

              <Humidity>
                <HumidityBar ratio={data.humidity}>
                  <div />
                </HumidityBar>
                <div>{`${data.humidity}%`}</div>
              </Humidity>

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

const Div = styled.div<{ $lodingCheck: boolean }>`
  backdrop-filter: blur(10px);
  border: 1px solid gray;

  width: 100%;
  height: 33%;

  border-radius: 30px;

  ${(props) =>
    props.$lodingCheck
      ? css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `
      : css`
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(1, 1fr);

          overflow: hidden;

          @media (max-width: 700px) {
            min-height: 800px;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(8, 1fr);
          }
        `};
`;

const WeatherList = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  margin-right: 10px;

  @media (max-width: 700px) {
    width: 100%;
    height: 100px;

    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Day = styled.div`
  width: 100%;
  text-align: center;

  @media (max-width: 700px) {
    text-align: left;
    width: 30%;
  }
`;

const Humidity = styled.div`
  color: gray;
  position: relative;
  width: 100%;
  height: 30px;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  text-align: left;

  @media (max-width: 700px) {
    width: 100px;
    height: 100%;
    flex-direction: row;
  }
`;

const HumidityBar = styled.div<{ ratio: number }>`
  width: 100%;
  height: 10px;
  background-color: gray;
  border-radius: 10px;
  border: 1px solid gray;
  overflow: hidden;

  position: relative;

  & > :first-child {
    width: ${(props) => `${props.ratio}%`};
    height: 100%;
    background-color: #56c1ff;
  }

  @media (max-width: 700px) {
    width: 10px;
    height: 100%;
    margin-right: 5px;
    flex-direction: row;

    display: flex;
    align-items: flex-end;

    & > :first-child {
      width: 100%;
      height: ${(props) => `${props.ratio}%`};
      background-color: #56c1ff;
    }
  }
`;

const Temp = styled.div``;

const Img = styled.div<{ url: string }>`
  width: 100%;
  height: 30%;

  background: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 700px) {
    width: 100px;
    height: 100%;

    background-size: cover;
  }
`;

export default WeekForecast;
