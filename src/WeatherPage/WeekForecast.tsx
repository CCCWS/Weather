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

              <Humidity ratio={data.humidity}>
                <div></div>
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

const Div = styled.div`
  backdrop-filter: blur(10px);
  border: 1px solid gray;

  width: 100%;
  height: 33%;

  border-radius: 30px;

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(1, 1fr);

  overflow: hidden;

  @media (max-width: 700px) {
    min-height: 800px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
`;

const WeatherList = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  /* background-color: red; */

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

const Humidity = styled.div<{ ratio: number }>`
  color: gray;
  position: relative;
  width: 100%;
  height: 30px;

  /* background-color: blue; */

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

  & > :first-child {
    width: 100%;
    height: 20px;

    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #e2f3fd;
      border: 1px solid gray;
      position: absolute;
      left: 0;
      border-radius: 10px;
    }

    &::after {
      content: "";
      width: ${(props) => `${props.ratio}%`};
      height: 100%;
      background-color: #56c1ff;
      position: absolute;
      left: 1px;
      bottom: -1px;
      overflow: hidden;
      border-radius: 10px 0px 0px 10px;
    }

    @media (max-width: 700px) {
      width: 15%;
      height: 60%;

      &::before {
        width: 7px;
      }

      &::after {
        width: 7px;
        height: ${(props) => `${props.ratio}%`};
        border-radius: 0px 0px 10px 10px;
      }
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
