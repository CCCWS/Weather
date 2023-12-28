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
  border: 6px solid white;
  border-right-color: gray;
  border-radius: 50%;
  animation: spin 1s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingIcon;
