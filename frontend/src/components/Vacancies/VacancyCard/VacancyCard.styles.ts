import styled from 'styled-components';
import { theme } from '../../../utils/Theme';

export const VacancyCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1260px) {
    justify-content: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const VacancyImageCont = styled.div`
  display: flex;
  align-items: center;
  margin-right: 96px;
  position: relative;

  @media (max-width: 1800px) {
    margin-right: 70px;
  }

  @media (max-width: 1500px) {
    margin-right: 40px;
  }

  @media (max-width: 640px) {
    margin-bottom: 2rem;
    margin-right: 0;
  }
`;

export const VacancyImage = styled.div<{img: string}>`
  display: flex;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 384px;
  height: 440px;

  @media (max-width: 1800px) {
    width: 300px;
    height: 344px;
  }

  @media (max-width: 1520px) {
    width: 250px;
    height: 286px;
  }
`;

export const VacancyImageFrame = styled.div<{frame: string}>`
  display: flex;
  background-image: url(${(props) => props.frame});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const VacancyInfoCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
  @media (max-width: 640px) {
    align-items: center;
  }
`;

export const VacancyTitle = styled.h3`
  margin-bottom: 2em;
  text-transform: capitalize;

  @media (max-width: 1520px) {
    margin-bottom: 1.2em;
    font-size: 17px;
    line-height: 17px;
  }
`;

export const VacancyInfoText = styled.span`
  display: flex;
  margin-bottom: 1em;
  align-items: center;

  @media (max-width: 1520px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const VacancyTextBold = styled.span`
  font-weight: bold;
  white-space: pre-wrap;
  line-height: 2rem;
  text-transform: uppercase;
`;

export const VacancyButton = styled.button`
  padding: 1.125rem 1.6rem;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid ${theme.backgroundColor};
  margin-top: 1.875rem;
  background-color: transparent;
  color: ${theme.backgroundColor};
  position: relative;
  display: block;

  @media (max-width: 1520px) {
    font-size: 12px;
    line-height: 15px;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1475px) {
    margin-top: 1.2rem;
  }

  @media (max-width: 1280px) {
    padding: 0.75rem 1rem;
  }
`;
