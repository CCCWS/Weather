import React, { useRef } from "react";
import styled, { css } from "styled-components";

import LoadingIcon from "../LoadingIcon";
import useObserver from "../useObserver";

interface HeaderProps {
  weatherInfo: any;
}

const HeaderTest = ({ weatherInfo }: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { isView } = useObserver(headerRef, 0.1);

  return (
    <HeaderDiv ref={headerRef}>
      {weatherInfo ? (
        <>
          <>
            <Info>
              <Top>
                <div>{Math.floor(weatherInfo.main.temp)}°</div>
                <div>{weatherInfo.weather[0].description}</div>
              </Top>

              <Bottom>
                <div>{weatherInfo.name}</div>
                <div>{`${Math.floor(weatherInfo.main.temp_max)}° / ${Math.floor(
                  weatherInfo.main.temp_min
                )}° 체감온도 ${Math.floor(weatherInfo.main.feels_like)}°`}</div>
              </Bottom>
            </Info>
            <Img
              url={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
            />
          </>

          <MiniHeader $is_view={isView}>
            <MiniHeaderTemp>
              <div>{Math.floor(weatherInfo.main.temp)}°</div>
              <TempAndState>
                <div>{`${Math.floor(weatherInfo.main.temp_max)}° / ${Math.floor(
                  weatherInfo.main.temp_min
                )}°`}</div>
                <div>{weatherInfo.weather[0].description}</div>
              </TempAndState>
            </MiniHeaderTemp>
            <Img
              url={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
            />
          </MiniHeader>
        </>
      ) : (
        <LoadingIcon size={50}></LoadingIcon>
      )}
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 30px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(5px);
  border: 1px solid gray;
`;

const Info = styled.div`
  width: 50%;
  height: 100%;

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

const MiniHeader = styled.div<{ $is_view: boolean }>`
  position: fixed;

  width: 100%;
  height: 70px;

  top: 0;
  border-radius: 0px 0px 30px 30px;
  background-color: #bbbbbb6f;
  backdrop-filter: blur(10px);

  transition: 0.3s;
  opacity: ${(props) => (props.$is_view ? 0 : 1)};
  transform: ${(props) =>
    props.$is_view ? "translate3d(0, -50%, 0)" : "translate3d(0, 0, 0)"};

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

export default HeaderTest;
