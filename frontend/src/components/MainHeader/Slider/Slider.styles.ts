import styled, {css, StyledComponent} from "styled-components";
import Hex from '../../../assets/images/hex.svg'; // Маленькая пиздючья иконка между цифрами
import LeftArrow from '../../../assets/images/leftArrow.svg';
import RightArrow from '../../../assets/images/rightArrow.svg';
import { theme } from "../../../utils/Theme";

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
  	transition: left 0.4s ease-out;
`;

export const SliderControls = styled.div`
	position: absolute;
  	bottom: 0;
  	left: 50%;
  	transform: translateX(-50%);
  	padding: 36px 16px;
  	display: flex;
  	align-items: center;
`;

export const SliderSwitchLeft = styled.button`
	${switchBasic};
  	background-image: url(${LeftArrow}) ;
`;

export const SliderSwitchRight = styled.button`
  	${switchBasic};
  	background-image: url(${RightArrow}) ;
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
