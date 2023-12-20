import React, { useState } from "react";
import styled, { css } from "styled-components";

const TTTest = () => {
  const [currCount, setCurrCount] = useState<number>(0);

  const countUp = () => {
    if (currCount === 10) return;

    setCurrCount((prev) => prev + 1);
  };
  const countDown = () => {
    if (currCount === 0) return;

    setCurrCount((prev) => prev - 1);
  };

  return (
    <Div>
      <Box>
        <Count>{currCount}</Count>
        <Line currCount={currCount} />
        <Btn>
          <button onClick={countUp}>+</button>
          <button onClick={countDown}>-</button>
        </Btn>
      </Box>
    </Div>
  );
};

const Div = styled.div`
  width: 300px;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50px;
  height: 300px;
  background-color: #525252;
  border-radius: 50px;
  overflow: hidden;
`;

const Count = styled.div`
  height: 15%;
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  color: white;
`;

const Line = styled.div<{ currCount: number }>`
  background-color: black;

  width: 15%;
  height: 60%;
  margin: auto;
  border-radius: inherit;

  position: relative;
  /* overflow: hidden; */

  &::before {
    content: "";
    width: 100%;
    height: ${(props) => `${props.currCount}0%`};
    /* height: 10%; */
    background-color: #63ff63;

    border-radius: inherit;

    position: absolute;
    bottom: 0;
    transition: 0.3s;
    box-shadow: 0px 0px 5px 1px #63ff63;

    ${(props) =>
      props.currCount === 0 &&
      css`
        box-shadow: none;
      `}

    ${(props) =>
      props.currCount >= 8 &&
      css`
        background-color: #ff1d1d;
        box-shadow: 0px 0px 5px 1px #ff1d1d;
      `}
  }
`;

const Btn = styled.div`
  /* background-color: green; */

  height: 25%;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  button {
    border-radius: 50%;
    border: 1px solid black;
    background-color: black;

    width: 25px;
    height: 25px;

    color: white;
    font-size: 1.5rem;
  }
`;

export default TTTest;
