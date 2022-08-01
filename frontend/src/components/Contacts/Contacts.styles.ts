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
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`;

export const ContactTextRow = styled.div`
  display: block;
  margin-bottom: 2em;
  color: ${theme.backgroundColor};
  &:last-child {
    margin-bottom: 0;
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
`;
