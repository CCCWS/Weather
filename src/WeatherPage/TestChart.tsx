import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ChartType {
  forecastHour: any;
}

const TestChart = ({ forecastHour }: ChartType) => {
  console.log(forecastHour);

  const [newForecast, setNewForecast] = useState<number[]>([]);
  const chartDataX = Array.from(
    { length: newForecast.length },
    (_, i) => i * 70
  );

  useEffect(() => {
    if (forecastHour) {
      const temp: number[] = [];

      forecastHour.list.forEach((data: any) =>
        temp.push(Math.floor(data.main.temp))
      );
      setNewForecast(temp);
    }
  }, [forecastHour]);

  return (
    <Div>
      <ChartDiv chart_length={(newForecast.length - 1) * 70}>
        <Svg>
          {newForecast.map((data, index) => (
            <React.Fragment key={index}>
              {index === newForecast.length - 1 ? (
                <></>
              ) : (
                <Line
                  x1={chartDataX[index]}
                  x2={chartDataX[index + 1]}
                  y1={newForecast[index]}
                  y2={newForecast[index + 1]}
                />
              )}
            </React.Fragment>
          ))}
        </Svg>

        <InfoBox>
          {forecastHour.list.map((data: any, index: number) => (
            <React.Fragment key={index}>
              {index === newForecast.length ? (
                <></>
              ) : (
                <>
                  <Point
                    key={index}
                    left={chartDataX[index]}
                    top={newForecast[index]}
                  >
                    <div />
                    <PointBox temp={newForecast[index]}>
                      <Img
                        url={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      />
                      <div>{newForecast[index]}°</div>
                    </PointBox>
                  </Point>

                  <DateDiv left={chartDataX[index]} top={newForecast[index]}>
                    <div>
                      {`${new Date(
                        forecastHour.list[index].dt_txt
                      ).getDate()}일`}
                    </div>
                    <div>
                      {`${new Date(
                        forecastHour.list[index].dt_txt
                      ).getHours()}시`}
                    </div>
                  </DateDiv>
                </>
              )}
            </React.Fragment>
          ))}
        </InfoBox>
      </ChartDiv>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 250px;
  background-color: #8b8b8b42;

  overflow-y: hidden;
  overflow-x: auto;
  /* overflow: overlay; */
  border-radius: 30px;

  padding: 50px;
`;

const ChartDiv = styled.div<{ chart_length: number }>`
  width: ${(props) => `${props.chart_length}px`};
  height: 100%;
  position: relative;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;

  transform: scaleY(-1) scaleX(1);

  background-color: white;
`;

const Line = styled.line`
  stroke: gray;
  stroke-width: 2;
  transform: translateY(50%);
`;

const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;

  position: absolute;
  top: 0;
  left: 0;

  overflow-y: hidden;
`;

const Point = styled.div<{ left: number; top: number }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  display: flex;
  background-color: black;

  bottom: ${(props) => `calc(${props.top}px + 50% - 5px)`};
  left: ${(props) => `calc(${props.left}px - 5px)`};

  position: absolute;

  & > :first-child {
    position: relative;
  }
`;

const PointBox = styled.div<{ temp: number }>`
  background-color: red;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 10px;

  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: red; */
  & > :last-child {
    width: 100%;
    height: 50%;
    text-align: center;
  }
`;

const Img = styled.div<{ url: string }>`
  width: 33%;
  height: 50%;

  background: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DateDiv = styled.div<{ left: number; top: number }>`
  background-color: red;
  width: 100px;
  height: 50px;
  /* border-radius: 50%; */
  /* background-color: blue; */

  bottom: -50px;
  left: ${(props) => `calc(${props.left}px - 5px)`};

  position: absolute;
`;

export default TestChart;
