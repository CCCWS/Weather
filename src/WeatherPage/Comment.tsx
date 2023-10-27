import React from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

const Comment = () => {
  return (
    <ScrollContainer horizontal={true} hideScrollbars={false}>
      <Div>
        <div></div>
      </Div>
    </ScrollContainer>
  );
};

const Div = styled.div`
  background-color: black;

  width: 100%;
  height: 100px;

  border-radius: 30px;

  /* overflow-x: scroll; */

  & > :first-child {
    width: 300%;
    height: 100%;
  }
`;

export default Comment;
