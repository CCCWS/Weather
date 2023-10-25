import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ChartType {
  forecastHour: any;
}

const TestChart = ({ forecastHour }: ChartType) => {
  // const test = { color: "blue" };
  // const temp: tempType[] = [
  //   { temp: 9, x1: "0", x2: "50", y1: "0", y2: "9%" },
  //   { temp: 15, x1: "50", x2: "100", y1: "9%", y2: "15%" },
  //   { temp: 1, x1: "100", x2: "150", y1: "15%", y2: "1%" },
  //   { temp: 10, x1: "150", x2: "200", y1: "1%", y2: "10%" },
  // ];\

  console.log(forecastHour);

  const [newForecast, setNewForecast] = useState<number[]>([]);
  const chartDataX = Array.from(
    { length: newForecast.length },
    (_, i) => i * 100
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

  const test = [
    50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0,
    50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0,
  ];

  return (
    <Div>
      <ChartDiv chart_length={(newForecast.length - 1) * 100}>
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
              {index === newForecast.length - 1 ? (
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
                      ></Img>
                      <div>{newForecast[index]}°</div>
                    </PointBox>
                  </Point>

                  <DateDiv left={chartDataX[index]} top={newForecast[index]}>
                    {`${new Date(
                      forecastHour.list[index].dt_txt
                    ).getHours()}시`}
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
  height: 300px;
  background-color: #8b8b8b42;
  overflow-y: hidden;
  overflow-x: auto;
  /* overflow: overlay; */
  border-radius: 30px;

  padding: 50px;
`;

const ChartDiv = styled.div<{ chart_length: number }>`
  position: relative;
  width: ${(props) => `${props.chart_length}px`};
  height: 100%;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  transform: scaleY(-1) scaleX(1);

  /* background-color: white; */
`;

const Line = styled.line`
  stroke: gray;
  stroke-width: 2;
  transform: translateY(50%);
`;

const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;

  position: absolute;
  top: 0;
  left: 0;
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
  width: 100%;
  height: 50%;

  background: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DateDiv = styled.div<{ left: number; top: number }>`
  width: 100px;
  height: 50px;
  /* border-radius: 50%; */
  /* background-color: blue; */

  bottom: -50px;
  left: ${(props) => `calc(${props.left}px - 5px)`};

  position: absolute;
`;

export default TestChart;
