import React, { useEffect } from "react";
import styled from "styled-components";

const Test_3 = () => {
  useEffect(() => {
    const word = "aabbaccc";

    const compression = (word: any) => {
      let answer = word.length;
      for (let i = 1; i <= word.length / 2; i++) {
        let countWord = "";
        let newWord = "";
        let count = 1;
        for (let j = 0; j <= word.length - 1; j += i) {
          if (word.slice(j, j + i) === word.slice(j + i, j + i * 2)) {
            count++;
            countWord = count + word.slice(j, j + i);
          } else {
            if (countWord) {
              newWord += countWord;
            } else {
              newWord += word.slice(j, j + i);
            }
            count = 1;
            countWord = "";
          }
        }
        // answer = answer.length > newWord.length ? newWord : answer;
        answer = answer > newWord.length ? newWord.length : answer;
      }
      console.log(answer);
    };

    compression(word);
  }, []);
  return (
    <Box>
      <Div1></Div1>
      <Div2></Div2>
      <Div3></Div3>
    </Box>
  );
};


const Div1 = styled.div`
  width: 50%;
  height: 100px;
  background-color: red;
  transition: 0.5s;
  border-radius: 5px;
  transform: translateZ(0px) translateY(0px);
`;

const Div2 = styled.div`
  width: 50%;
  height: 100px;
  background-color: blue;
  transition: 0.5s;
  border-radius: 5px;
  transform: translateZ(30px) translateY(-50px);
`;

const Div3 = styled.div`
  width: 50%;
  height: 100px;
  background-color: black;
  transition: 0.5s;
  border-radius: 5px;
  transform: translateZ(60px) translateY(-100px);
`;

const Box = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px 0px;

  position: relative;
  transform-style: preserve-3d;
  perspective: 500px;
  grid-area: 0;
  transition: 0.5s;

  &:hover {
    div{
      transform: translateZ(0px) translateY(0px);
    }
  }
`;

export default Test_3;
