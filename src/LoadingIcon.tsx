import React from "react";
import styled from "styled-components";

interface LoadingIconProps {
  size: number;
}

const LoadingIcon = ({ size }: LoadingIconProps) => {
  return <Div size={size} />;
};

const Div = styled.div<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  background-color: transparent;

  border-radius: 50%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  &::after {
    content: "";
    width: 70%;
    height: 70%;
    position: absolute;
    background-color: red;
    opacity: 0;
    border-radius: inherit;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;

    background: rgb(196, 196, 196);
    background: linear-gradient(
      180deg,
      #c4c4c4 0%,
      rgba(136, 136, 136, 1) 30%,
      rgba(0, 0, 0, 1) 50%,
      rgba(136, 136, 136, 1) 70%,
      #c4c4c4 100%
    );

    animation: rotate 1.5s linear infinite;
    /* transform-origin: 50% 50%; */
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingIcon;
