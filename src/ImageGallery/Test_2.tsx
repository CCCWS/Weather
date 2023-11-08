import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useObserver from "../useObserver";

const Test_2 = () => {
  const testRef = useRef<HTMLDivElement>(null);
  const [onClick, setOnClick] = useState<boolean>(false);
  const { isView } = useObserver(testRef, 1);

  useEffect(() => {
    console.log(isView);
  }, [isView]);

  return (
    <>
      <Div $is_click={onClick} ref={testRef}>
        Test_2
      </Div>
      <Button onClick={() => setOnClick(!onClick)}></Button>
    </>
  );
};

const Div = styled.div<{ $is_click: boolean }>`
  width: 100px;
  height: 50px;
  background-color: red;

  transform: ${(props) =>
    props.$is_click ? "translateY(0px)" : "translateY(-100%)"};
  /* opacity: ${(props) => (props.$is_click ? 1 : 0)}; */
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
`;

export default Test_2;
