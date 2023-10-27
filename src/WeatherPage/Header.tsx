import React, { useRef } from "react";
import styled, { css } from "styled-components";
import useObserver from "../useObserver";

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
  const headerRef = useRef<HTMLDivElement>(null);
  const { isView } = useObserver(headerRef, 0.1);

  return (
    <>
      <Div ref={headerRef}>
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

      <MiniHeader isView={isView}>
        <MiniHeaderTemp>
          <div>{temp}°</div>
          <TempAndState>
            <div>{`${tempMax}° / ${tempMin}°`}</div>
            <div>{weatherState}</div>
          </TempAndState>
        </MiniHeaderTemp>
        <Img url={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
      </MiniHeader>
    </>
  );
};

const Div = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 30px;
  display: flex;
  overflow: hidden;
  padding: 15px;

  /* background-color: red; */
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

const MiniHeader = styled.div<{ isView: boolean }>`
  position: fixed;

  width: 100%;
  height: 70px;

  border-radius: 0px 0px 30px 30px;
  background-color: #bbbbbb6f;
  backdrop-filter: blur(10px);

  transition: 0.3s;
  opacity: ${(props) => (props.isView ? 0 : 1)};
  transform: ${(props) =>
    props.isView ? "translate3d(0, -50%, 0)" : "translate3d(0, 0, 0)"};

  z-index: 1000;

  display: flex;
  justify-content: space-evenly;
  align-items: right;
`;

const MiniHeaderTemp = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  align-items: center;
  padding: 15px;
  padding-left: 30px;
  gap: 0px 20px;

  & > :first-child {
    font-size: 2.5rem;
  }
`;

const TempAndState = styled.div`
  & > :first-child {
  }

  & > :last-child {
    font-size: 1.4rem;
  }
`;

export default Header;
