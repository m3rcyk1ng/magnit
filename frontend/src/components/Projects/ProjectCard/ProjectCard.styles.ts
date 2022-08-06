import styled from 'styled-components';
import polygon from '../../../assets/images/polygon.svg';
import { theme } from '../../../utils/Theme';

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  &:nth-of-type(2n) {
    flex-direction: row-reverse;

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    margin-bottom: 3.125rem;
  }	
`;

export const LeftBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(340px, 1262px);
  grid-template-rows: min-content minmax(360px, 630px);

  &:nth-of-type(1n) {
    justify-items: right;
  }

  @media (max-width: 1400px) {
    grid-template-columns: minmax(340px, 1062px);
	}

  @media (max-width: 1200px) {
    justify-items: center;

    &:nth-of-type(1n) {
      justify-items: center;
    }
  }

  @media (max-width: 690px) {
    grid-template-rows: min-content minmax(360px, 1fr);
  }
`;

export const RigthBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    margin-top: 1.25rem;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;

  @media (max-width: 500px) {
    margin-bottom: 0.625rem;
  }
`;

export const InfoText = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  margin-right: 1.25rem;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const ImageContainer = styled.div<{ img: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    opacity: 0;
    transition: opacity 0.2s linear;
    z-index: 1;
  }

  &:hover {
    button {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(30deg, #4fa6d9, #022346);
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  &:hover::after {
    opacity: 0.7;
  }
`;

export const ProjectName = styled.h3`
  font-size: 2rem;
  line-height: 1.22;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.625rem;
  }

  @media (max-width: 500px) {
    font-size: 1.3125rem;
    margin-bottom: 1.25rem;
  }
`;

export const StreetText = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
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
  border: 2px solid ${theme.whiteColor};
  margin-top: 1.875rem;
  background-color: transparent;
  color: ${theme.whiteColor};
  position: relative;
  display: block;

  &:hover {
    cursor: pointer;
  }
`;
