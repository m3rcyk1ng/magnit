import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const ContactsWrapper = styled.div`
  display: flex;
  margin-bottom: 8em;
  border: 1px red solid;
  width: 100%;
  justify-content: right;
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
