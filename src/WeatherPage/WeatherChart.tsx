import React from "react";
import styled from "styled-components";

interface tempType {
  temp: number;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

const WeatherChart = () => {
  const test = { color: "blue" };
  const temp: tempType[] = [
    { temp: 9, x1: "0", x2: "50", y1: "0", y2: "9%" },
    { temp: 15, x1: "50", x2: "100", y1: "9%", y2: "15%" },
    { temp: 1, x1: "100", x2: "150", y1: "15%", y2: "1%" },
    { temp: 10, x1: "150", x2: "200", y1: "1%", y2: "10%" },
  ];

  const chartDataY: number[] = [80, 75, 62, 85, 55, 90, 78, 20, 74, 90];
  const chartDataX: number[] = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];

  return (
    <Div>
      <Svg>
        {chartDataY.map((data, index) => (
          <>
            {index === chartDataY.length - 1 ? (
              <></>
            ) : (
              <Line
                x1={chartDataX[index]}
                x2={chartDataX[index + 1]}
                y1={chartDataY[index]}
                y2={chartDataY[index + 1]}
                key={index}
              ></Line>
            )}
          </>
        ))}
      </Svg>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 500px;
  background-color: aqua;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.line`
  fill: none;
  stroke: rgb(255, 0, 0);
  stroke-width: 3;
`;

export default WeatherChart;
