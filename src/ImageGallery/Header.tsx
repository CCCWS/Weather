import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Div>Header</Div>
      <FixedDiv>Header</FixedDiv>
    </>
  );
};

const Div = styled.div`
  width: 100%;
  height: 50px;
  color: white;

  font-size: 20px;
  padding: 20px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FixedDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100000;
`;

export default Header;
