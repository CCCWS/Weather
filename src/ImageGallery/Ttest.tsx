import React, { useState, useRef } from "react";
import styled from "styled-components";

import ImageItem from "./ImageItem";
import Test2 from "./Test_2";

import { dataType, data } from "./Data";
import Header from "./Header";
import Test_3 from "./Test_3";

const Ttest = () => {
  const [currLocation, setCurrLoaction] = useState<number>(0);
  const [mouseOver, setMouseOver] = useState<number | null>(null);

  return (
    <>
      <Div>
        <Header />
        <ImageBoxDiv>
          <ImageBox curr_location={currLocation}>
            <div>
              {data.map((data, index) => (
                <ImageItem
                  key={index}
                  data={data}
                  currItem={currLocation === index}
                />
              ))}
            </div>
          </ImageBox>

          <ImageBtnBox>
            <div>
              {data.map((data, index) => (
                <ImageBtn
                  key={index}
                  url={data.miniBgImg}
                  onClick={() => setCurrLoaction(index)}
                  $curr_lcation={currLocation === index}
                  $mouse_over={mouseOver === index}
                  $check_over={mouseOver === null}
                  onMouseOver={() => setMouseOver(index)}
                  onMouseLeave={() => setMouseOver(null)}
                >
                  <div></div>
                </ImageBtn>
              ))}
            </div>
          </ImageBtnBox>
        </ImageBoxDiv>

        <Test2 />
        <Test_3 width="100px" height="100px">
          <div>424</div>
        </Test_3>
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 100%;
  height: 400vh;
  background-color: black;
  /* overflow: scroll; */
  position: relative;
`;

const ImageBoxDiv = styled.div`
  height: 60vh;
  display: grid;
  grid-template-rows: 4fr 1fr;

  @media (max-width: 1024px) {
    height: 100vh;
  }
`;

const ImageBox = styled.div<{ curr_location: number }>`
  width: 100%;
  height: 100%;
  background-color: black;

  position: relative;
  overflow: scroll;

  & > :first-child {
    width: 100%;
    height: 100%;
    display: flex;
    transform: ${(props) => `translateX(-${props.curr_location}00%)`};
  }
`;

//////////////////////////////////////////////////
const ImageBtnBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

const ImageBtn = styled.button<{
  url: string;
  $curr_lcation: boolean;
  $mouse_over: boolean;
  $check_over: boolean;
}>`
  width: 100px;
  height: 80px;

  transition: 0.3s;

  padding: 5px;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid transparent;
  border: ${(props) => props.$curr_lcation && "2px solid blue"};

  opacity: ${(props) =>
    props.$check_over ? (props.$curr_lcation ? 1 : 0.7) : 0.5};

  &:hover {
    transform: translateY(-10px);
    opacity: ${(props) => (props.$mouse_over ? 1 : 0.7)};
  }

  & > :first-child {
    width: 100%;
    height: 100%;

    background-image: ${(props) => `url(${props.url})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: inherit;
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 15px 15px 0px #9e9e9e;
    }
  }
`;

export default Ttest;
