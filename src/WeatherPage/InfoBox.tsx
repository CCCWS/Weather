import React from "react";
import styled from "styled-components";

interface InfoBoxProps {
  weatherInfo: any;
  airPollution: any;
}

const InfoBox = ({ weatherInfo, airPollution }: InfoBoxProps) => {
  return (
    <Div>
      <Test></Test>
      <Test></Test>
      <Test></Test>
      <Test></Test>
      <Test></Test>
      <Test></Test>
    </Div>
  );
};

const Div = styled.div`
  background-color: #8b8b8b42;

  width: 100%;
  height: 600px;

  border-radius: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));

  padding: 10px;
  gap: 10px 10px;
`;

const Test = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

  border-radius: inherit;
`;

export default InfoBox;
