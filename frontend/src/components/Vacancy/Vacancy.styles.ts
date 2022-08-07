import styled from 'styled-components';
import {theme} from "../../utils/Theme";
import polygon from "../../assets/images/polygon.svg";

export const Section = styled.section`
	display: flex;
	flex-direction: column;
`

export const VacancyTitle = styled.h2 `
  margin-top: 1rem;
  margin-bottom: 2.5rem;
	text-transform: capitalize;
`

export const VacancyInfoText = styled.span`
  display: flex;
  margin-bottom: 0.75em;
  align-items: center;
`;

export const VacancyTextBold = styled.span`
  font-weight: bold;
  white-space: pre-wrap;
  line-height: 2;
  text-transform: uppercase;
`;

export const VacancyBlocksRow = styled.div `
  display: grid;
  gap: 0 70px;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: repeat(1, min-content);
`;

export const VacancyInfoBlock = styled.div `
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: repeat(1, min-content);
  margin: 1.25rem 0 2rem;
`;

export const VacancyTextBlockContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 0.75em;
`;

export const VacancyText = styled.span `
  margin-bottom: 0.25em;
  text-transform: uppercase;
`;

export const VacancyValue = styled.span `
  font-weight: bold;
  white-space: pre-wrap;
  line-height: 2;
  text-transform: uppercase;
`;

export const Icon = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: 2rem;
  background-repeat: no-repeat;
  background-position: center;
  color: ${theme.backgroundColor};
  width: 50px;
  height: 50px;
  border: 2px solid ${theme.backgroundColor};
`;

export const VacancyConditionsContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
`

export const Polygon = styled.div`
  background-image: url(${polygon});
  background-repeat: no-repeat;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 1rem;
`;

export const VacancyConditionsRow = styled.div `
  display: flex;
  align-items: center;
`

export const VacancyButtons = styled.div `
  display: flex;
  width: 42rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
`

export const VacancyRespondButton = styled.div`
  padding: 18px 30px;
  background-color: ${theme.backgroundColor};
  color: ${theme.whiteColor};
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: ${theme.secondaryBlue};
    color: ${theme.whiteColor};
  }
`;

export const VacancyShowNumberButton = styled.div`
  padding: 18px 30px;
  outline: 2px solid ${theme.backgroundColor};
  color: ${theme.backgroundColor};
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: ${theme.backgroundColor};
    color: ${theme.whiteColor};
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  font-size: 1.3125rem;
  line-height: 1.22;
  text-transform: uppercase;
  margin: 0 1rem 4rem;
  background-color: transparent;
  text-align: left;
  color: ${theme.backgroundColor};
  font-weight: 700;
  transition: opacity 0.1s ease-in;
  img {
    fill: #022346;
    margin-right: 0.8rem;
    filter: drop-shadow(0.15em 0 0.5em ${theme.backgroundColor});
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ShowNumberOverlay = styled.div<{ isPopupOpen: boolean }>`
  visibility: ${(props) => (props.isPopupOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isPopupOpen ? 1 : 0)};
  transition: visibility 0s, opacity 0.15s linear;
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
  padding: 2.5rem;
`;

export const ShowNumberDialog = styled.div<{ isPopupOpen: boolean }>`
  transform: ${(props) => (props.isPopupOpen ? 'scale(1)' : 'scale(0)')};
  transition: all 0.15s ease-in-out;
  width: 32rem;
  background-color: ${theme.whiteColor};
  padding: 2rem;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 799px) {
    width: 450px;
    height: 490px;
    padding: 30px 20px;
  }
  @media (max-width: 439px) {
    width: 300px;
    height: 370px;
    padding: 20px 10px;
  }
`;

export const ShowNumberDialogTitle = styled.h3 `
  text-transform: uppercase;
  margin: 0 auto 2rem;
`

export const ShowNumberDialogText = styled.p `
  text-align: center;
  margin: 0 auto 1rem;
`
export const ShowNumberDialogNumber = styled.h3 `
  text-align: center;
  margin: 0 auto 2rem;
`

export const ShowNumberCloseButton = styled.button`
  padding: 1rem 0.5rem;
  border: 2px solid ${theme.backgroundColor};
  width: 40%;
  margin: 0 auto;
  background-color: ${theme.whiteColor};
  color: ${theme.backgroundColor};
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-in;
  transition-duration: .3s;
  transition-property: transform;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: ${theme.backgroundColor};
    color: ${theme.whiteColor};
  }
`;
