import React, { useEffect } from "react";
import styled from "styled-components";
import LoadingIcon from "../LoadingIcon";

interface InfoBoxProps {
  weatherInfo: any;
  airPollution: any;
}

const InfoBox = ({ weatherInfo, airPollution }: InfoBoxProps) => {
  useEffect(() => {
    if (weatherInfo) {
      console.log(weatherInfo);

      const sunrise = new Date(
        (weatherInfo.sys.sunrise + weatherInfo.timezone) * 1000
      );

      const sunset = new Date(
        (weatherInfo.sys.sunset + weatherInfo.timezone) * 1000
      );

      const option = {
        timeZone: "UTC",
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };

      const sunriseTime = sunrise.toLocaleTimeString([], {
        timeZone: "UTC",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const sunsetTime = sunset.toLocaleTimeString([], {
        timeZone: "UTC",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      console.log(sunriseTime);
    }
  }, [weatherInfo]);

  return (
    <Div>
      {weatherInfo ? (
        <>
          <Test>{`일출 : ${new Date(
            (weatherInfo.sys.sunrise + weatherInfo.timezone) * 1000
          ).toLocaleTimeString([], {
            timeZone: "UTC",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}`}</Test>

          <Test>{`일몰 : ${new Date(
            (weatherInfo.sys.sunset + weatherInfo.timezone) * 1000
          ).toLocaleTimeString([], {
            timeZone: "UTC",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}`}</Test>
          <Test></Test>
          <Test></Test>
          <Test></Test>
          <Test></Test>
        </> 
      ) : (
        <LoadingIcon size={50}></LoadingIcon>
      )}
    </Div>
  );
};

const Div = styled.div`
  background-color: #8b8b8b42;

  width: 100%;
  height: 600px;

  border-radius: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));

  padding: 10px;
  gap: 10px 10px;
`;

const Test = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  border-radius: inherit;
`;

export default InfoBox;
