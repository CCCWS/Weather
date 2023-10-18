import React from "react";
import styled from "styled-components";

const TestChart = () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  const chartDataY: number[] = [80, 75, 62, 85, 55, 90, 78, 20, 74, 90];
  const chartDataX: number[] = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];

  return (
    <Graph>
      <GraphInner>
        <GraphUl>
          {/* 그래프 point top 값 % 로 입력 0 ~ 100%  */}

          {arr.map((data, index) => (
            <GraphLi key={index}>
              <GraphTitle>{data}</GraphTitle>
              <GraphPoint aria-expanded="false">
                <A11y>정확한 수치 보기</A11y>
              </GraphPoint>
              <GraphTip>
                <strong></strong>
              </GraphTip>
            </GraphLi>
          ))}

          {chartDataY.map((data, index) => (
            <GraphLine>
              {/* x 값 : 57 간격으로 올라감 (예: 0, 57, 114, 171, 228, 285, 342, 399, 456, 513)
          y 값 : button class="graph_point" top % 의 두배 수 (예: 10% -> 20)
          적용 : points="x,y x,y ....." */}
              <Svg height="216">
                <Polyline
                  x1={chartDataX[index]}
                  x2={chartDataX[index + 1]}
                  y1={chartDataY[index]}
                  y2={chartDataY[index + 1]}
                ></Polyline>
              </Svg>
            </GraphLine>
          ))}
        </GraphUl>
      </GraphInner>
    </Graph>
  );
};

const Graph = styled.div`
  padding-bottom: 30px;
`;

const GraphInner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 600px;
  height: 286px;
  padding-bottom: 86px;
`;

const GraphUl = styled.ul`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  padding: 0 15px;
  height: 100%;
  font-size: 0;
  line-height: 0;
  transform-origin: center;
`;

const GraphLi = styled.li`
  position: relative;
  display: inline-block;
  width: 57px;
  height: 200px;
  box-sizing: border-box;

  & > :before {
    display: block;
    content: "";
    clear: both;
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 100%;
    background-color: #f3f4f5;
    border-radius: 6px;
  }

  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      .graph_point {
        animation-delay: (0.1 * $i) + s;
      }
    }
  }
`;

const GraphTitle = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: -12px;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #666;
  transform: translate(-20%, 100%);
  text-align: center;
`;

const GraphPoint = styled.button`
  position: absolute;
  z-index: 1;
  display: block;
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  border: 4px solid #6910ef;
  background-color: #fff;
  border-radius: 100%;
  left: -5px;
  cursor: pointer;
  transform: scale(0);
  animation: points 0.2s forwards;
  & > * {
    pointer-events: none;
  }
  &[aria-expanded="false"] + .graph_tip {
    display: none;
  }
`;

const A11y = styled.span`
  position: absolute;
  overflow: hidden;
  height: 1px;
  width: 1px;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  word-break: initial;
  word-wrap: initial;
`;

const GraphTip = styled.div`
  position: absolute;
  left: 3px;
  top: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 22px;
  border-radius: 4px;
  background-color: #6910ef;
  text-align: center;
  transform: translate(-50%, -100%);
  strong {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
  }
  &:after {
    display: block;
    content: "";
    clear: both;
    position: absolute;
    z-index: 11;
    left: 12px;
    bottom: -6px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-width: 0;
    border-left-width: 5px;
    border-right-width: 5px;
    pointer-events: none;
    border-top-color: #6910ef;
  }
`;

const GraphLine = styled.div`
  position: absolute;
  left: 11px;
  top: 86px;
  width: calc(100% - 12px);
  height: 200px;
  transform: scaleY(-1) scaleX(1);
  transform-origin: center;
`;
const Svg = styled.svg`
  height: 216px;
  padding: 8px;
  fill: none;
  width: 0;
  animation: polyline 2s forwards;
`;

const Polyline = styled.line`
  stroke: rgba(105, 16, 239, 0.2);
  stroke-width: 4px;

  /* @keyframes polyline {
    to {
      width: 649px;
    }
  }

  @keyframes points {
    to {
      transform: scale(1);
    }
  } */
`;

export default TestChart;
