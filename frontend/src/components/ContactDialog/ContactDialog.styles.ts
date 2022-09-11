import styled from 'styled-components';
import { theme } from '../../utils/Theme';
import closeButton from '../../assets/images/close-button.svg';

export const ContactDialogWrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: visibility 0.15s, opacity 0.35s linear;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const ContactForm = styled.form`
  min-height: 33rem;
  background-color: ${theme.whiteColor};
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  filter: drop-shadow(10px 10px 20px rgba(21, 20, 20, 0.54));
  border: 2px ${theme.backgroundColor} solid;
  padding: 2rem 2rem;
  position: relative;
  p {
    max-width: 27rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 3rem;
  margin-bottom: 1rem;
  width: 100%;
  
  span {
    color: red;
    font-size: 0.75rem;
    padding-top: 0.3125rem;
    padding-left: 0.1875rem;
    transition: all 0.2s ease-in;
  }
`;

export const LeftWrapper = styled.div`
  width: max-content;
  border-right: 2px solid ${theme.backgroundColor};
  padding-right: 2em;
`;

export const RightWrapper = styled.div`
  width: 20em;
  padding-left: 2em;
  display: flex;
  flex-direction: column;
`;

export const TextareaContainer = styled(InputContainer)`
  height: 100%;
	min-height: 6.5rem;
  max-height: 17rem;
`;

export const ContactDialogTitle = styled.h3`
  text-transform: uppercase;
  margin: 0 auto 2rem;
`;

export const ContactDialogFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
  width: 27.5rem;
`;

export const ContactDialogInput = styled.input`
  border: 2px ${theme.grayText} solid;
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;
  font-family: 'Montserrat', serif;

  &:hover {
    border: 2px ${theme.secondaryBlue} solid;
    transition: 0.3s ease-in;
  }

  &:focus {
    border: 2px ${theme.secondaryBlue} solid;
  }
`;

export const ContactInputsRow = styled.div`
  display: flex;
  width: 100%;

  div:nth-child(1) {
    margin-right: 1.5rem;
  }
`;

export const CloseButton = styled.div`
  background-image: url(${closeButton});
  width: 58px;
  height: 58px;
  position: absolute;
  top: -3rem;
  right: -3rem;
  opacity: 1;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ContactDialogTextarea = styled.textarea`
  border: 2px ${theme.grayText} solid;
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;
  font-family: 'Montserrat', serif;
  resize: vertical;
  max-height: 28rem;
  overflow-y: auto;

  &:focus,
  &:focus-visible {
    box-shadow: 0 0 0 2px ${theme.secondaryBlue};
    border-color: transparent;
  }

  &:hover {
    transition: 0.2s ease-in;
    border-color: transparent;
    box-shadow: 0 0 0 2px ${theme.secondaryBlue};
  }
`;

export const ContactDialogButtonSend = styled.button`
  padding: 1rem;
  max-width: 18.75rem;
  margin: 2em auto 0;
  border-radius: 10px;
  text-transform: uppercase;
  color: ${theme.whiteColor};
  font-size: 0.875rem;
  background-color: ${theme.backgroundColor};
  &:hover {
    cursor: pointer;
    background-color: ${theme.secondaryBlue};
    transition: 0.5s;
  }
`;
