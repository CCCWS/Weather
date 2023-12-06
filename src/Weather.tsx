import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "./WeatherPage/Header";
import WeekForecast from "./WeatherPage/WeekForecast";
import WeatherChart from "./WeatherPage/WeatherChart";
import InfoBox from "./WeatherPage/InfoBox";
import ErrorPage from "./WeatherPage/ErrorPage";
import LoadingIcon from "./LoadingIcon";

import Test from "./WeatherPage/Test";
import Ttest from "./ImageGallery/Ttest";

import bgImg from "./Image/background_img.jpg";
import Test_2 from "./ImageGallery/Test_2";

const API_KEY = "b5ca0b1f1b1ff2ccea56184d385df768";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/";

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState<any>();
  const [airPollution, setAirPollution] = useState<any>();
  const [weatherForecastWeek, setWeatherForcastWeek] = useState<any>();
  const [weatherForecastHour, setWeatherForcastHour] = useState<any>();
  const [currPosLoading, setCurrPosLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

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
      setCurrPosLoading(true);
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
            console.log(err);
            // 0 > 알 수 없는 오류
            // 1 > 권한 거부
            // 2 > 추적 실패
            // 3 > 시간 초과
            setErrorMessage(err.message);

            switch (err.code) {
              case 0:
                console.log("알 수 없는 오류");
                setErrorMessage("알 수 없는 오류가 발생했습니다.");
                break;

              case 1:
                console.log("권한 거부");
                setErrorMessage("위치 권한을 허용해 주세요.");
                break;

              case 2:
                console.log("추적 실패");
                setErrorMessage("위치 추적에 실패했습니다.");
                break;

              case 3:
                console.log("시간 초과");
                setErrorMessage("위치 추적 시간을 초과했습니다.");
                break;

              default:
                setErrorMessage("위치 정보를 지원하지 않습니다.");
            }
          }
        );
      }
      setCurrPosLoading(false);
    };

    // getApi();
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
    }
  }, [weatherInfo]);

  const onRefresh = () => {
    onApi();
  };

  return (
    <Div>
      {currPosLoading ? (
        <Ttest></Ttest>
      ) : (
        // <Test_2 />
        <>
          {errorMessage ? (
            <ErrorPage errorMessage={errorMessage} />
          ) : (
            <WeatherDiv>
              {/* <Refresh onClick={onRefresh}></Refresh> */}
              <div>
                <Header weatherInfo={weatherInfo} />
                <WeatherChart forecastHour={weatherForecastHour} />
              </div>

              <WeekForecast forecastWeek={weatherForecastWeek} />
              <InfoBox weatherInfo={weatherInfo} airPollution={airPollution} />
            </WeatherDiv>
          )}
        </>
      )}
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
  height: 100vh;

  background-image: ${() => `url(${bgImg})`};
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;

  overflow-y: scroll;
`;

const WeatherDiv = styled.div`
  width: 100%;
  height: 100%;

  overflow: scroll;
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px 0px;

  position: relative;
  margin: auto 0;

  & > :first-child {
    height: 33%;
    display: flex;
    flex-direction: row;
    gap: 0px 15px;
  }

  @media (max-width: 700px) {
    & > :first-child {
      height: 100%;
      flex-direction: column;
      gap: 15px 0px;
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export default React.memo(Weather);
