import styled from "styled-components";
import {theme} from "../../utils/Theme";

export const LoaderWrapper = styled.div`
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
`;


export const FirstLine = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  left: 0;
  top: 0;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid ${theme.backgroundColor};
  @keyframes rotate-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
`;

export const SecondLine = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0;
  top: 0;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid ${theme.backgroundColor};
  @keyframes rotate-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }
`;

export const ThirdLine = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0;
  bottom: 0;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid ${theme.backgroundColor};
  @keyframes rotate-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
`;
