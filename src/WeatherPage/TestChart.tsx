import React from "react";
import styled from "styled-components";

interface tempType {
  temp: number;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

const TestChart = () => {
  const test = { color: "blue" };
  const temp: tempType[] = [
    { temp: 9, x1: "0", x2: "50", y1: "0", y2: "9%" },
    { temp: 15, x1: "50", x2: "100", y1: "9%", y2: "15%" },
    { temp: 1, x1: "100", x2: "150", y1: "15%", y2: "1%" },
    { temp: 10, x1: "150", x2: "200", y1: "1%", y2: "10%" },
  ];

  const chartDataY: number[] = [
    100, 75, 62, 85, 55, 90, 78, 20, 74, 90, 80, 75, 62, 85, 55, 90, 78,
  ];
  const chartDataX = Array.from(
    { length: chartDataY.length },
    (_, i) => i * 50
  );
  console.log(chartDataX);

  return (
    <Div>
      <ChartDiv>
        <Svg chart_length={(chartDataY.length - 1) * 50}>
          <>
            {chartDataY.map((data, index) => (
              <React.Fragment key={index}>
                {index === chartDataY.length - 1 ? (
                  <></>
                ) : (
                  <>
                    <Line
                      x1={chartDataX[index]}
                      x2={chartDataX[index + 1]}
                      y1={chartDataY[index]}
                      y2={chartDataY[index + 1]}
                    ></Line>
                  </>
                )}
              </React.Fragment>
            ))}
          </>
        </Svg>

        <InfoBox>
          <div>
            {chartDataY.map((data, index) => (
              <Point key={index} left={chartDataX[index]} top={data}></Point>
            ))}
          </div>
        </InfoBox>
      </ChartDiv>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 500px;
  background-color: aqua;
  overflow-x: scroll;

  padding: 50px;
`;

const ChartDiv = styled.div`
  position: relative;
`;

const Svg = styled.svg<{ chart_length: number }>`
  min-width: 100%;
  width: ${(props) => `${props.chart_length}px`};
  height: 100px;
  overflow-x: scroll;

  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.line`
  fill: none;
  stroke: rgb(255, 0, 0);
  stroke-width: 2;
  position: relative;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;

  & > :first-child {
    position: relative;
  }
`;

const Point = styled.div<{ left: number; top: number }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000000;

  top: ${(props) => `calc(${props.top}px - 5px)`};
  left: ${(props) => `calc(${props.left}px - 5px)`};

  z-index: 10000;

  position: absolute;
`;

export default TestChart;
