import React from "react";
import styled from "styled-components";
import errorIcon from "../Image/error.png";

interface ErrorType {
  errorMessage: string;
}

const ErrorPage = ({ errorMessage }: ErrorType) => {
  //   console.log(errorCode);
  return (
    <Div>
      <div>
        <Icon />
        <ErrorInfo>{errorMessage}</ErrorInfo>
      </div>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */

  padding: 15px;

  & > :first-child {
    width: 100%;
    height: 100%;

    border-radius: 30px;
    backdrop-filter: blur(10px);
    border: 1px solid gray;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 15px;
  }
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;

  background-image: ${() => `url(${errorIcon})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ErrorInfo = styled.div`
  font-size: 2rem;
`;

export default ErrorPage;
