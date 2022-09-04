import styled, { css } from "styled-components";
import Hex from '../../../assets/images/hex.svg';
import LeftArrow from '../../../assets/images/leftArrow.svg';
import RightArrow from '../../../assets/images/rightArrow.svg';
import {theme} from "../../../utils/Theme";

const switchBasic = css`
  border: none;
  width: 12px;
  height: 12px;
  cursor: pointer;
  background-color: transparent;
  background-position: center center;
  opacity: 1;
  margin: 0 10px;
  transition: all 0.3s linear;
  &:hover {
    opacity: 0.8;
  }
`

export const SliderContainer = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`;

export const ImageItem = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  display: inline-block;
  vertical-align: top;
`;

export const SliderWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  white-space: nowrap;
  transition: left 0.8s ease-out;
`;

export const SliderControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 36px 16px;
  display: flex;
  align-items: center;
  z-index: 2;
  animation: 1s buttonsSlide;
`;

export const SliderSwitchLeft = styled.button`
  ${switchBasic};
  background-image: url(${LeftArrow});
`;

export const SliderSwitchRight = styled.button`
  ${switchBasic};
  background-image: url(${RightArrow});
`;

export const SliderTextSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SliderTextSwitcher = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  margin: 0 10px 0 40px;
  font-size: 16px;
  color: ${props => props.color || '#D9D9D9'};
  transition: all 0.3s linear;

  &:hover {
    opacity: 0.8;
  }

  &:after {
    display: block;
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-image: url(${Hex});
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:first-child {
    margin-left: 10px;

    &:after {
      display: none;
    }
  }
`;

export const ScrollDown = styled.a `
  @keyframes up-down {
    0% {
      top: 50%;
    }
    50% {
      top: 52%;
    }
    100% {
      top: 50%;
    }
  }
  position: absolute;
  color: ${theme.whiteColor};
  right: 1rem;
  top: 50%;
  transform: rotate(90deg);
  font-weight: 400;
  font-size: 1rem;
  animation: up-down 6s ease infinite;
  z-index: 10;
  transform-origin: top right;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;
