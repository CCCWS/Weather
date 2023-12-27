import React, { useState, useRef, useEffect, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
  perspective: number;
}

interface CardSize {
  width: number;
  height: number;
}

const Test4 = ({ children, perspective }: CardProps) => {
  const [cardSize, setCardSize] = useState<CardSize>({
    width: 0,
    height: 0,
  });
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      setCardSize({
        width: cardRef.current.getBoundingClientRect().width,
        height: cardRef.current.getBoundingClientRect().height,
      });
    }
  }, [cardRef]);

  const map = (
    val: number,
    minA: number,
    maxA: number,
    minB: number,
    maxB: number
  ) => {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  };

  const onMouseOver = (e: React.MouseEvent) => {
    let mouseX = e.nativeEvent.offsetX;
    let mouseY = e.nativeEvent.offsetY;
    let rotateY = map(mouseX, 0, cardSize.width, -25, 25); //300 > Card의 width
    let rotateX = map(mouseY, 0, cardSize.height, 25, -25); //250 > Card의 height
    let brightness = map(mouseY, 0, 250, 1.5, 0.7);

    if (cardRef.current) {
      cardRef.current.style.setProperty(
        "transform",
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );
      cardRef.current.style.setProperty("filter", `brightness(${brightness})`);
    }
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty(
        "transform",
        "rotateX(0deg) rotateY(0deg)"
      );
      cardRef.current.style.setProperty("filter", "brightness(1)");
      cardRef.current.style.setProperty("transform", "scale(1)");
    }
  };

  return (
    <Div>
      <Card perspective={perspective}>
        <Img
          onMouseMove={(e) => onMouseOver(e)}
          onMouseLeave={onMouseLeave}
          ref={cardRef}
        >
          {children}
        </Img>
      </Card>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 500px;
  background-color: gray;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div<{ perspective: number }>`
  transform: scale(1);
  transition: 0.5s;
  perspective: ${(props) => `${props.perspective}px`};

  &:hover {
    transform: scale(1.3);
  }
`;

const Img = styled.div`
  transform-style: preserve-3D;
  background-color: blue;
  transition: all 0.3s ease-out;
  /* border-radius: 10px; */

  /* transform: rotateY(-41.8deg) rotateX(-10deg); */
`;

export default Test4;
