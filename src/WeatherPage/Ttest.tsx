import React, { useState } from "react";
import styled from "styled-components";

import { dataType, data } from "./Data";
import "./Ttest.css";

const Ttest = () => {
  const [currLocation, setCurrLoaction] = useState<number>(0);
  const [test, setTest] = useState<number | null>(null);

  return (
    <Div>
      <ImageBox>
        {data.map((data, index) => (
          <React.Fragment key={index}>
            {data.bgVideo && (
              <Video muted autoPlay loop is_view={currLocation === index}>
                <source src={data.bgVideo} type="video/mp4" />
              </Video>
            )}

            {data.bgImg && (
              <ImageItem url={data.bgImg} is_view={currLocation === index} />
            )}
          </React.Fragment>
        ))}
      </ImageBox>

      <ImageBtnBox>
        <div className="imageBtnBox">
          {data.map((data, index) => (
            <ImageBtn
              key={index}
              url={data.miniBgImg}
              className="imageBtn"
              onClick={() => setCurrLoaction(index)}
              $curr_lcation={currLocation === index}
              $mouse_over={test === index}
              $check_over={test === null}
              onMouseOver={() => setTest(index)}
              onMouseLeave={() => setTest(null)}
            >
              <div></div>
            </ImageBtn>
          ))}
        </div>
      </ImageBtnBox>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 700px;

  background-color: black;

  display: grid;
  grid-template-rows: 4fr 1fr;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

  position: relative;
`;

const Video = styled.video<{ is_view: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 0.5s;
  opacity: ${(props) => (props.is_view ? 1 : 0)};

  position: absolute;
  top: 0;
`;

const ImageItem = styled.div<{ url: string; is_view: boolean }>`
  width: 100%;
  height: 100%;

  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.5s;
  opacity: ${(props) => (props.is_view ? 1 : 0)};

  position: absolute;
  top: 0;
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
  width: 150px;
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
