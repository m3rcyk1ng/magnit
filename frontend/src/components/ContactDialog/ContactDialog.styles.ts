import styled from "styled-components";
import {theme} from "../../utils/Theme";

export const ContactDialogWrapper = styled.div`
  position: absolute;
  width: 45rem;
  height: 30rem;
  background-color: ${theme.whiteColor};
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  filter: drop-shadow(10px 10px 20px rgba(21, 20, 20, 0.54));
  border: 2px ${theme.secondaryBlue} solid;
  padding: 2rem 2rem;
`;

export const ContactDialogImage = styled.div<{ ContactImageBg: string }>`
  background-image: url(${(props) => props.ContactImageBg});
  width: 270px;
  height: 240px;
  background-size: cover;
  position: absolute;
  bottom: 1rem;
  right: 0;
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
  &:first-child {
    margin-right: 1.5rem;
  }
`;

export const ContactDialogPersonCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;