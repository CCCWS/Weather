import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";
import LoadingIcon from "../LoadingIcon";

interface ChartType {
  forecastHour: any;
}

const WeatherChart = ({ forecastHour }: ChartType) => {
  const chartRef = useRef<any>(null);
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
    <Chart>
      {forecastHour ? (
        <ScrollContainer horizontal={true}>
          <Div ref={chartRef}>
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

                        <DateDiv
                          left={chartDataX[index]}
                          top={newForecast[index]}
                        >
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
        </ScrollContainer>
      ) : (
        <LoadingIcon size={50} />
      )}
    </Chart>
  );
};

const Chart = styled.div`
  width: 70%;
  height: 100%;
  /* background-color: #8b8b8b42; */
  backdrop-filter: blur(10px);
  border: 1px solid gray;

  /* overflow-y: hidden; */
  /* overflow-x: auto; */
  /* overflow: overlay; */
  border-radius: 30px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  /* padding: 15px; */

  @media (max-width: 700px) {
    min-height: 250px;
    width: 100%;
  }
`;

const Div = styled.div`
  height: 100%;
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

  position: absolute;
  top: 0;
  left: 0;

  /* overflow-y: hidden; */
`;

const Point = styled.div<{ left: number; top: number }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  display: flex;
  background-color: black;

  bottom: ${(props) => `calc(${props.top}px + 50% - 2px)`};
  left: ${(props) => `calc(${props.left}px - 5px)`};

  position: absolute;

  & > :first-child {
    position: relative;
  }
`;

const PointBox = styled.div<{ temp: number }>`
  /* background-color: red; */
  width: 70px;
  height: 70px;
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
    height: 30%;
    text-align: center;
  }
`;

const Img = styled.div<{ url: string }>`
  width: 70%;
  height: 50%;

  background: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DateDiv = styled.div<{ left: number; top: number }>`
  /* background-color: red; */
  width: 50px;
  height: 50px;
  /* border-radius: 50%; */
  /* background-color: blue; */

  bottom: -50px;
  left: ${(props) => `calc(${props.left}px - 25px)`};

  text-align: center;

  position: absolute;

  & > :first-child {
    color: gray;
    font-size: 0.7rem;
  }
`;

export default WeatherChart;
