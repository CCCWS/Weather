import React, { useState } from "react";
import styled, { css } from "styled-components";

interface CardProps {
  children: React.ReactNode;
  width: string;
  height: string;
  scale?: number;
}

const Test_3 = ({ children, width, height, scale }: CardProps) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const childrenArr = React.Children.toArray(children);

  return (
    <>
      <Card
        onClick={() => setIsClick(!isClick)}
        isClick={isClick}
        width={width}
        height={height}
        scale={scale ? scale : 1}
      >
        <div>
          <Front>{childrenArr[0]}</Front>
        </div>
      </Card>

      <Card
        onClick={() => setIsClick(!isClick)}
        isClick={isClick}
        width={width}
        height={height}
        scale={scale ? scale : 1}
      >
        <div>
          <Front>{childrenArr[0]}</Front>
        </div>
      </Card>
    </>
  );
};

interface CardPropsExtends extends CardProps {
  isClick: boolean;
}

const Card = styled.div<CardPropsExtends>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  perspective: 500px;

  & > :first-child {
    width: inherit;
    height: inherit;
    transform-style: preserve-3d;
    transition: 0.3s;
  }

  /* &:hover {
    & > :first-child {
      transform: ${(props) => `rotateY(45deg) scale(${props.scale})`};
    }
  } */

  & > :first-child {
    transform: ${(props) =>
      props.isClick
        ? "rotateY(45deg) translateX(50px)"
        : "rotateY(0deg) translateX(0px)"};
  }
`;

const FrontBackBase = styled.div`
  background-color: white;
  width: inherit;
  height: inherit;

  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;

  border: 1px solid black;

  overflow: hidden;
`;

const Front = styled(FrontBackBase)``;

export default Test_3;
