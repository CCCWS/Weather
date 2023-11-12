import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { dataType } from "./Data";
import useObserver from "../useObserver";

interface imageItemProps {
  data: dataType;
  currItem: boolean;
}

const ImageItem = ({ data, currItem }: imageItemProps) => {
  const itemRef = useRef<any>(null);
  const { isView } = useObserver(itemRef, 1);

  return (
    <Div>
      {data.bgVideo && (
        <>
          <Image $curr_view={currItem} ref={itemRef}>
            <Video muted autoPlay loop>
              <source src={data.bgVideo} type="video/mp4" />
            </Video>
            <div></div>
          </Image>

          <Title>
            <TitleImg url={data.titleImg} $curr_view={currItem} />
            <TitleDescription $curr_view={currItem}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <ImgBtn>자세히 보기</ImgBtn>
            </TitleDescription>
          </Title>
        </>
      )}

      {data.bgImg && (
        <>
          <Image url={data.bgImg} $curr_view={currItem} ref={itemRef}>
            <div></div>
          </Image>
          <Title>
            <TitleImg url={data.titleImg} $curr_view={currItem} />
            <TitleDescription $curr_view={currItem}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <ImgBtn>자세히 보기</ImgBtn>
            </TitleDescription>
          </Title>
        </>
      )}
    </Div>
  );
};

const Div = styled.div`
  min-width: 100%;
  height: 100%;

  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: relative;
`;

const Image = styled.div<{ url?: string; $curr_view: boolean }>`
  min-width: 100%;
  height: 80%;

  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: 1s;
  transform: ${(props) =>
    props.$curr_view ? "translateY(0px)" : "translateY(-50px)"};
  opacity: ${(props) => (props.$curr_view ? 1 : 0)};

  position: relative;

  & > :last-child {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background: linear-gradient(
      180deg,
      transparent 50%,
      #000000 90%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100%;

  padding: 80px;

  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px 0px;

  @media (max-width: 1024px) {
    justify-content: flex-end;
    align-items: center;
  }
`;

const TitleImg = styled.div<{ url?: string; $curr_view: boolean }>`
  width: 200px;
  height: 150px;

  background-image: ${(props) => `url(${props.url})`};
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;

  /* background-color: red; */

  transition: 1.7s;
  transform: ${(props) =>
    props.$curr_view ? "translateY(0px)" : "translateY(20px)"};
  opacity: ${(props) => (props.$curr_view ? 1 : 0)};
`;
const TitleDescription = styled.div<{ $curr_view: boolean }>`
  color: white;

  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 20px 0px;

  transition: 2s;
  transform: ${(props) =>
    props.$curr_view ? "translateY(0px)" : "translateY(30px)"};
  opacity: ${(props) => (props.$curr_view ? 1 : 0)};

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

const ImgBtn = styled.button`
  width: 110px;
  height: 40px;
  background-color: white;

  border-radius: 50px;
  border: 3px solid black;
  position: relative;

  &::before {
    content: "";
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: inherit;
    background-color: #f1f1f1;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    background-color: #f1f1f1;
  }
`;

export default React.memo(ImageItem);
