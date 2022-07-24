import styled from 'styled-components';
import polygon from '../../assets/images/polygon.svg';
import { theme } from "../../utils/Theme";

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
	&:nth-of-type(2n) {
		flex-direction: row-reverse;
	}
`;
export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RigthBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  margin-right: 1.25rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ProjectImage = styled.img`
  width: 962px;
  height: 530px;
`;

export const ProjectName = styled.h3`
  font-size: 2rem;
  line-height: 1.22;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
`;

export const StreetText = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Polygon = styled.div`
  background-image: url(${polygon});
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 1.25rem;
`;

export const Button = styled.button`
  padding: 1.125rem 1.875rem;
	font-size: 0.875rem;
  line-height: 1.21;
  font-weight: 700;
  text-transform: uppercase;
	border: 2px solid ${theme.backgroundColor};
  margin-top: 1.875rem;
	background-color: transparent;
	color: ${theme.backgroundColor};
  position: relative;
  display: block;
	
	&::after {
    height: 100%;
    left: 0;
    top: 0;
    width: 0;
    content: '';
    position: absolute;
    z-index: -1;
  }
	
	&:hover:after {
    width: 100%;
  }
	
	&:hover {
		cursor: pointer;
    background-color: ${theme.backgroundColor};
    color: ${theme.whiteColor};
    transition: 0.35s ease;
	}
`
