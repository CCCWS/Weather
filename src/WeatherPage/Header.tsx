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
        <Top>
          <div>{temp}°</div>
          <div>{weatherState}</div>
        </Top>

        <Bottom>
          <div>{city}</div>
          <div>{`${tempMax}° / ${tempMin}° 체감온도 ${tempFeelsLike}°`}</div>
        </Bottom>
      </Info>
      <Img url={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 250px;

  border-radius: 30px;

  display: flex;

  overflow: hidden;
`;

const Info = styled.div`
  width: 50%;
  height: 100%;

  /* background-color: red; */

  padding: 30px;

  display: flex;
  justify-content: space-evenly;
  align-items: right;
  flex-direction: column;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
`;
const Top = styled(InfoDiv)`
  & > :first-child {
    font-size: 2.5rem;
  }
`;
const Bottom = styled(InfoDiv)`
  & > :first-child {
    font-size: 1.5rem;
  }
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
