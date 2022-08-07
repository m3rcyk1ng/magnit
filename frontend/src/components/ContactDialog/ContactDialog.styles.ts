import styled from 'styled-components';
import { theme } from '../../utils/Theme';
import closeButton from '../../assets/images/close-button.svg';

export const ContactDialogWrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s linear;
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

export const ContactForm = styled.form<{ ContactImageBg: string }>`
  width: 45rem;
  height: 32rem;
  background-color: ${theme.whiteColor};
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  filter: drop-shadow(10px 10px 20px rgba(21, 20, 20, 0.54));
  border: 2px ${theme.secondaryBlue} solid;
  padding: 2rem 2rem;
  position: relative;
  background-image: url(${(props) => props.ContactImageBg});
  background-repeat: no-repeat;
  background-position: bottom right 4rem;
`;

export const ContactDialogTitle = styled.h3`
  text-transform: uppercase;
  margin: 0 auto 2rem;
`;

export const ContactDialogContainer = styled.div`
  justify-items: start;
  align-items: start;
  text-align: center;
  width: 60%;
`;

export const ContactDialogInput = styled.input`
  border: 2px ${theme.grayText} solid;
  border-radius: 10px;
  padding: 0.5rem;
  margin-bottom: 1rem;
	width: 100%;

  &:first-child {
    margin-right: 1.5rem;
  }
`;

export const ContactDialogPersonCont = styled.div`
  display: flex;
	flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
	width: 24.5rem;
`;

export const ContactInputsRow = styled.div`
	display: flex;
`

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
    opacity: 0.8;
  }
`;

export const ContactDialogTextarea = styled.textarea`
  border: 2px ${theme.grayText} solid;
  border-radius: 10px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  font-family: inherit;
`

export const ContactDialogButtonSend = styled.button`
  padding: 1rem;
	max-width: 18.75rem;
  border-radius: 10px;
  text-transform: uppercase;
	color: ${theme.whiteColor};
	font-size: 0.875rem;
  background-color: ${theme.backgroundColor};
`
