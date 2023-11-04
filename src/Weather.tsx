import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "./WeatherPage/Header";
import WeekForecast from "./WeatherPage/WeekForecast";
import WeatherChart from "./WeatherPage/WeatherChart";
import InfoBox from "./WeatherPage/InfoBox";
import Comment from "./WeatherPage/Comment";
import Map from "./WeatherPage/Map";
import TodayStory from "./WeatherPage/TodayStory";
import Video from "./WeatherPage/Video";
import MenuBox from "./WeatherPage/MenuBox";

import LoadingIcon from "./LoadingIcon";

import bgImg from "./Image/background_img.jpg";

const API_KEY = "b5ca0b1f1b1ff2ccea56184d385df768";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/";

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState<any>();
  const [airPollution, setAirPollution] = useState<any>();
  const [weatherForecastWeek, setWeatherForcastWeek] = useState<any>();
  const [weatherForecastHour, setWeatherForcastHour] = useState<any>();

  const onApi = () => {
    navigator.geolocation.getCurrentPosition(async function (pos) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      const location = `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr&units=metric`;

      const weatherToday = await axios.get(`${WEATHER_URL}weather?${location}`);

      const AirPollution = await axios.get(
        `${WEATHER_URL}air_pollution?${location}`
      );

      const weatherForecastWeek = await axios.get(
        `${WEATHER_URL}onecall?&exclude=current,minutely,alerts&${location}`
      );

      const weatherForecastHour = await axios.get(
        `${WEATHER_URL}forecast?&${location}`
      );

      setWeatherInfo(weatherToday.data);
      setAirPollution(AirPollution.data.list[0].components);
      setWeatherForcastWeek(weatherForecastWeek.data);
      setWeatherForcastHour(weatherForecastHour.data);
    });
  };

  useEffect(() => {
    const getApi = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;

            const location = `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr&units=metric`;

            const weatherToday = await axios.get(
              `${WEATHER_URL}weather?${location}`
            );

            const AirPollution = await axios.get(
              `${WEATHER_URL}air_pollution?${location}`
            );

            const weatherForecastWeek = await axios.get(
              `${WEATHER_URL}onecall?&exclude=current,minutely,alerts&${location}`
            );

            const weatherForecastHour = await axios.get(
              `${WEATHER_URL}forecast?&${location}`
            );

            setWeatherInfo(weatherToday.data);
            setAirPollution(AirPollution.data.list[0].components);
            setWeatherForcastWeek(weatherForecastWeek.data);
            setWeatherForcastHour(weatherForecastHour.data);
          },
          (err) => {
            console.log(err.code);
            // 0 > 알 수 없는 오류
            // 1 > 권한 거부
            // 2 > 추적 실패
            // 3 > 시간 초과
          }
        );
      } else {
        console.log("not support");
      }
    };

    getApi();
  }, []);

  useEffect(() => {
    if (weatherInfo) {
      // console.log(weatherInfo);
      // const test = weatherInfo.dt * 1000 + weatherInfo.timezone * 1000;
      // const ttest = new Date(test).toUTCString();
      // console.log(ttest);

      // console.log(weatherInfo);

      const date = new Date((weatherInfo.dt + weatherInfo.timezone) * 1000);

      const test = date.toLocaleTimeString([], {
        timeZone: "UTC",
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      // console.log(test);
    }
  }, [weatherInfo]);

  const onRefresh = () => {
    onApi();
  };

  return (
    <Div>
      {/* <Refresh onClick={onRefresh}></Refresh> */}
      <Header weatherInfo={weatherInfo} />
      <WeekForecast forecastWeek={weatherForecastWeek} />
      <WeatherChart forecastHour={weatherForecastHour} />
      <InfoBox weatherInfo={weatherInfo} airPollution={airPollution}></InfoBox>
    </Div>
  );
};

const Refresh = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
`;

const Div = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* background-color: #f14f4f79; */

  background-image: ${() => `url(${bgImg})`};
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px 0px;

  position: relative;
  margin: auto 0;

  /* overflow-y: scroll; */
  overflow-x: scroll;
`;

export default React.memo(Weather);
