import React, { useEffect } from "react";
import styled from "styled-components";

const Test_3 = () => {
  useEffect(() => {
    const word = "aabbaccc";

    const compression = (word: any) => {
      const wordArr = [...word];

      console.log(wordArr);

      for (let i = 0; i <= word.length / 2 - 1; i++) {
        
      }
    };

    compression(word);
  }, []);
  return (
    <Box>
      <Div1></Div1>
      <Div2></Div2>
    </Box>
  );
};

const Box = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 10px 0px; */

  position: relative;
  transform-style: preserve-3d;
  perspective: 500px;
  grid-area: 0;
  transition: 0.5s;
`;

const Div1 = styled.div`
  width: 50%;
  height: 100px;
  background-color: red;
  transition: 0.5s;
  border-radius: 5px;
`;

const Div2 = styled.div`
  width: 50%;
  height: 100px;
  background-color: blue;
  transition: 0.5s;
  border-radius: 5px;
`;

const Div3 = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;

const Div4 = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;

export default Test_3;
