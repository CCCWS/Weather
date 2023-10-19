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
  // ];

  const [newForecast, setNewForecast] = useState<number[]>([]);

  const chartDataX = Array.from(
    { length: newForecast.length },
    (_, i) => i * 50
  );

  useEffect(() => {
    if (forecastHour) {
      const test: Date = new Date();
      console.log(test);

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
      <ChartDiv chart_length={(newForecast.length - 1) * 50}>
        <Svg>
          <>
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
                  ></Line>
                )}
              </React.Fragment>
            ))}
          </>
        </Svg>

        <InfoBox chart_length={(newForecast.length - 1) * 50}>
          {newForecast.map((data: any, index) => (
            <React.Fragment key={index}>
              <Point key={index} left={chartDataX[index]} top={data}>
                <div />
              </Point>
              {/* <Test>{index + 1}</Test> */}

              <Date left={chartDataX[index]} top={data}>
                {forecastHour.list[index].dt_txt}
              </Date>
            </React.Fragment>
          ))}
        </InfoBox>
      </ChartDiv>
    </Div>
  );
};

const Test = styled.div`
  width: 50px;
  height: 100%;

  background-color: transparent;
  /* transform: translate3d(0px, 100px, 0px); */
  border-right: 1px solid black;

  background-color: red;
`;

const Div = styled.div`
  /* width: 100%; */
  height: 500px;
  background-color: aqua;
  overflow-x: scroll;

  padding: 50px;
`;

const ChartDiv = styled.div<{ chart_length: number }>`
  position: relative;
  width: ${(props) => `${props.chart_length}px`};
`;

const Svg = styled.svg`
  width: 100%;
  height: 100px;
  overflow-x: scroll;

  background-color: white;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  transform: scaleY(-1) scaleX(1);
`;

const Line = styled.line`
  stroke: rgb(255, 0, 0);
  stroke-width: 2;
  transform: translateY(50%);
`;

const InfoBox = styled.div<{ chart_length: number }>`
  width: ${(props) => `${props.chart_length}px`};
  height: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;

  /* background-color:red; */

  display: flex;

  /* background-color: gold; */
`;

const Point = styled.div<{ left: number; top: number }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;

  bottom: ${(props) => `calc(${props.top}px + 50%)`};
  left: ${(props) => `calc(${props.left}px - 5px)`};

  position: absolute;

  & > :first-child {
    width: 100%;
    height: 100%;
    position: relative;

    &::before {
      content: "${(props) => props.top}°";
      width: 100%;
      height: 100%;

      position: absolute;
      top: -20px;
    }
  }
`;

const Date = styled.div<{ left: number; top: number }>`
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
  /* background-color: black; */

  bottom: -100px;
  left: ${(props) => `calc(${props.left}px - 5px)`};

  position: absolute;
`;

export default TestChart;
