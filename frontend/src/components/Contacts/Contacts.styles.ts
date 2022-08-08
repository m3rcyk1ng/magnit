import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const ContactsWrapper = styled.div<{transition: boolean}>`
  display: flex;
  margin-bottom: 8em;
  width: 100%;
  opacity: 0;
  transform: translateY(150%);
  animation: animation 1s forwards;
  ${(props) => props.transition && `
    opacity: 1;
  `};
  @keyframes animation {
    0% {transform: translateY(150%);}
    100% {transform: translateY(0);}
  }
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 600px) {
    margin-bottom: 2em;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  @media (max-width: 1600px) {
    margin-left: 1em;
  }
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;


export const LocationWrapper = styled.div`
  width: 1230px;
  height: 592px;
  @media (max-width: 1600px) {
    width: 1000px;
    height: 400px;
  }
  @media (max-width: 1280px) {
    width: 800px;
    height: 400px;
  }
  @media (max-width: 1100px) {
    width: 800px;
    height: 330px;
  }
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 340px;
    height: 320px;
  }
  @media (max-width: 400px) {
    width: 310px;
  }
  @media (max-width: 350px) {
    width: 280px;
  }
`;

export const ContactTextRow = styled.div`
  display: block;
  margin-bottom: 2em;
  color: ${theme.backgroundColor};
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 1600px) {
    margin-bottom: 1em;
    line-height: 1.5;
  }
`;

export const ContactsMainTitle = styled.h2`
  @media (max-width: 1600px) {
    margin-bottom: 3rem;
    line-height: 1.5;
    font-size: 42px;
  }
  @media (max-width: 600px) {
    margin-bottom: 2rem;
    font-size: 32px;
  }
`;

export const ContactsTitle = styled.h3`
  @media (max-width: 1600px) {
    margin-bottom: 1em;
    line-height: 1.5;
  }
`;

export const ContactButton = styled.button`
  padding: 1.125rem 1.875rem;
  font-size: 0.875rem;
  line-height: 1.21;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid ${theme.backgroundColor};
  margin-top: 6em;
  background-color: transparent;
  color: ${theme.backgroundColor};
  position: relative;
  display: block;
  width: max-content;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1600px) {
    margin-top: 2em;
  }
  @media (max-width: 1350px) {
    margin-top: 0.5rem;
  }
  @media (max-width: 1100px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 440px) {
    width: 100%;
  }
`;
