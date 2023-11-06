import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoadingIcon from "../LoadingIcon";

import sunrise from "../Image/sunrise.svg";
import sunset from "../Image/sunset.svg";
import wind from "../Image/wind.svg";
import humidity from "../Image/humidity.svg";

interface InfoBoxProps {
  weatherInfo: any;
  airPollution: any;
}

interface gradeType {
  state: string;
  color: string;
}

interface infoArrType {
  title: string;
  value: string;
  svg?: string;
  grade?: gradeType;
}

const InfoBox = ({ weatherInfo, airPollution }: InfoBoxProps) => {
  const [infoArr, setInfoArr] = useState<infoArrType[]>();

  useEffect(() => {
    const airPollutionGrade = (airPollution: number, type: number) => {
      if (type === 10) {
        if (0 <= airPollution && airPollution <= 30) {
          return { state: "좋음", color: "#7575ff" };
        }

        if (31 <= airPollution && airPollution <= 80) {
          return { state: "보통", color: "#00c200" };
        }

        if (81 <= airPollution && airPollution <= 150) {
          return { state: "나쁨", color: "#ffdb39" };
        }

        if (151 <= airPollution) {
          return { state: "매우나쁨", color: "#ff3939" };
        }
      }

      if (type === 2.5) {
        if (0 <= airPollution && airPollution <= 15) {
          return { state: "좋음", color: "#7575ff" };
        }

        if (16 <= airPollution && airPollution <= 50) {
          return { state: "보통", color: "#00c200" };
        }

        if (51 <= airPollution && airPollution <= 100) {
          return { state: "나쁨", color: "#ffdb39" };
        }

        if (101 <= airPollution) {
          return { state: "매우나쁨", color: "#ff3939" };
        }
      }
    };

    if (weatherInfo && airPollution) {
      const temp = [
        {
          title: "일출",
          value: new Date(
            (weatherInfo.sys.sunrise + weatherInfo.timezone) * 1000
          ).toLocaleTimeString([], {
            timeZone: "UTC",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          svg: sunrise,
        },

        {
          title: "일몰",
          value: new Date(
            (weatherInfo.sys.sunset + weatherInfo.timezone) * 1000
          ).toLocaleTimeString([], {
            timeZone: "UTC",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          svg: sunset,
        },

        {
          title: "바람",
          value: `${weatherInfo.wind.speed}m/s`,
          svg: wind,
        },

        {
          title: "습도",
          value: `${weatherInfo.main.humidity}%`,
          svg: humidity,
        },

        {
          title: "미세먼지",
          value: `${Math.floor(airPollution.pm10)}㎍/㎥`,
          grade: airPollutionGrade(Math.floor(airPollution.pm10), 10),
        },

        {
          title: "초미세먼지",
          value: `${Math.floor(airPollution.pm2_5)}㎍/㎥`,
          grade: airPollutionGrade(
            Math.floor(Math.floor(airPollution.pm2_5)),
            2.5
          ),
        },
      ];

      setInfoArr(temp);
    }
  }, [weatherInfo, airPollution]);

  return (
    <Div>
      {infoArr ? (
        <ItemBox>
          {infoArr.map((data, index) => (
            <ItemDiv key={index}>
              <Item>
                {data.svg && <ItemImg svg={data.svg} />}
                {data.grade && (
                  <AirPollutionDiv color={data.grade.color}>
                    {data.grade.state}
                  </AirPollutionDiv>
                )}
                <div>{data.title}</div>
                <div>{data.value}</div>
              </Item>
            </ItemDiv>
          ))}
        </ItemBox>
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

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    min-height: 600px;
  }
`;

const ItemBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;



  border-radius: inherit;
  padding: 10px;
  gap: 10px 10px;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, minmax(100px, auto));
  }
`;

const ItemDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c7c7c742;

  border-radius: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 5px 0px;

  & > :last-child {
    color: #525252;
  }
`;

const ItemImg = styled.div<{ svg: string }>`
  width: 50px;
  height: 50px;

  background-image: ${(props) => `url(${props.svg})`};
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
`;

const AirPollutionDiv = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: ${(props) => `4px solid ${props.color}`};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InfoBox;
