import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "./WeatherPage/Header";
import Graph from "./WeatherPage/Graph";
import WeatherList from "./WeatherPage/WeatherList";
import Comment from "./WeatherPage/Comment";
import InfoBox from "./WeatherPage/InfoBox";
import Map from "./WeatherPage/Map";
import TodayStory from "./WeatherPage/TodayStory";
import Video from "./WeatherPage/Video";
import MenuBox from "./WeatherPage/MenuBox";

const API_KEY = "b5ca0b1f1b1ff2ccea56184d385df768";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/";

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState<any>();
  const [weatherForecast, setWeatherForcast] = useState<any>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (pos) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      const location = `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr&units=metric`;

      const res = await axios.get(`${WEATHER_URL}weather?${location}`);

      const test = await axios.get(
        `${WEATHER_URL}onecall?&exclude=current,minutely,hourly,alerts&${location}`
      );

      setWeatherInfo(res.data);
      setWeatherForcast(test.data);

      // console.log(Math.floor(res.data.main.temp - 273.15));
      // console.log(res.data.weather[0].icon);

      // console.log(latitude, longitude);
      // console.log(res.data.name);
    });
  }, []);

  useEffect(() => {
    if (weatherInfo) {
      // console.log(weatherInfo);
      // const test = weatherInfo.dt * 1000 + weatherInfo.timezone * 1000;
      // const ttest = new Date(test).toUTCString();
      // console.log(ttest);

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

      console.log(test);
    }
  }, [weatherInfo]);

  return (
    <Div>
      {weatherInfo ? (
        <>
          <Header
            city={weatherInfo.name}
            weatherIcon={weatherInfo.weather[0].icon}
            weatherState={weatherInfo.weather[0].description}
            temp={Math.floor(weatherInfo.main.temp)}
            tempMin={Math.floor(weatherInfo.main.temp_min)}
            tempMax={Math.floor(weatherInfo.main.temp_max)}
            tempFeelsLike={Math.floor(weatherInfo.main.feels_like)}
          />
          <Graph weeklyWeather={weatherForecast} />
          <Comment />
          <WeatherList />
          <InfoBox />
          <Map />
          <TodayStory />
          <Video />
          <MenuBox />
        </>
      ) : (
        <div>로딩중</div>
      )}

      {/* {weatherInfo && (
        <Img
          url={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
        />
      )} */}
    </Div>
  );
};

const Img = styled.div<{ url: string }>`
  width: 100px;
  height: 100px;

  background: ${(props) => `url(${props.url})`};
`;

const Div = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: white;

  overflow-y: scroll;
  overflow: overlay;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px 0px;
`;

export default React.memo(Weather);
