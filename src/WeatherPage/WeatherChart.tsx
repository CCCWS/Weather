import React from "react";
import styled from "styled-components";

const WeatherChart = () => {
  const test = { color: "blue" };
  return (
    <Div>
      <Svg>
        <line
          x1="0"
          x2="300"
          y1="0"
          y2="300"
          style={{ stroke: "rgb(255,0,0)", strokeWidth: 2 }}
        ></line>
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
`;

// const Line = styled.line``;

export default WeatherChart;
