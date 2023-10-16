import React from "react";
import styled from "styled-components";

interface HeaderProps {
  city: string;
  weatherIcon: string;
  weatherState: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  tempFeelsLike: number;
}

const Header = ({
  city,
  weatherIcon,
  weatherState,
  temp,
  tempMin,
  tempMax,
  tempFeelsLike,
}: HeaderProps) => {
  return (
    <Div>
      <Info>
        <div>{temp}°</div>
        <div>{weatherState}</div>
        <div>{city}</div>
        <div>{`${tempMax}° / ${tempMin}° 체감온도 ${tempFeelsLike}°`}</div>
      </Info>
      <Img url={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
    </Div>
  );
};

const Div = styled.div`
  background-color: #8b8b8b42;

  width: 100%;
  height: 300px;

  border-radius: 30px;
  border: 1px solid red;

  display: flex;

  overflow: hidden;
`;

const Info = styled.div`
  width: 50%;
  height: 100%;

  /* background-color: red; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.div<{ url: string }>`
  width: 50%;
  height: 100%;

  background: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export default Header;
