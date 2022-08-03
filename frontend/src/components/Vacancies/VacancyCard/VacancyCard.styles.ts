import styled from 'styled-components';
import { theme } from '../../../utils/Theme';

export const VacancyCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 47em;
`;

export const VacancyImageCont = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6rem;
`;

export const VacancyImage = styled.div<{img: string}>`
  display: flex;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 24em;
  height: 27.5em;
  position: absolute;
  z-index: 1;
`;

export const VacancyImageFrame = styled.div<{frame: string}>`
  display: flex;
  background-image: url(${(props) => props.frame});
  background-repeat: no-repeat;
  background-size: cover;
  width: 24em;
  height: 27.5em;
  z-index: 2;
`;

export const VacancyInfoCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const VacancyTitle = styled.h3`
  margin-bottom: 2em;
`;

export const VacancyInfoText = styled.span`
  display: flex;
  margin-bottom: 1em;
  align-items: center;
`;

export const VacancyTextBold = styled.span`
  font-weight: bold;
  white-space: pre-wrap;
  line-height: 2;
`;

export const VacancyButton = styled.button`
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

  &:hover {
    cursor: pointer;
  }
`;
