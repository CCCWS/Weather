import React from "react";
import styled from "styled-components";
import pngimg from "./pngegg.png";

const TTTTest = () => {
  return (
    <Div>
      <Img image={pngimg}></Img>
      <Logo>TEST</Logo>
    </Div>
  );
};

const Img = styled.div<{ image: string }>`
  width: 120%;
  height: 120%;
  /* background-color: red; */

  background-image: ${(props) => `url(${props.image})`};

  background-position: center;
  background-size: 120%;
  background-repeat: no-repeat;
  position: absolute;
  top: -50px;

  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
`;

const Logo = styled.div`
  width: 150px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 5px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  right: -30px;

  transition: 0.3s;
  transform: translateY(10px);
  opacity: 0;
`;

const Div = styled.div`
  width: 250px;
  height: 400px;
  background-color: #cccccc;
  margin: 100px;
  border-radius: 20px;
  /* overflow: hidden; */

  position: relative;
  transition: 0.3s;

  &::before {
    transition: 0.3s;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    background-image: url("https://sb.kaleidousercontent.com/67418/658x756/361846cee7/all-pages-2.png");

    background-position: center;
    background-size: cover;
  }

  &:hover {
    ${Logo} {
      transform: translateY(0px);
      opacity: 1;
    }

    ${Img} {
      transform: translateY(-70px);
      opacity: 1;
    }

    &::before {
      opacity: 0;
    }
    background-color: #414141;
  }
`;

export default TTTTest;
