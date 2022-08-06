import styled from "styled-components";
import {theme} from "../../utils/Theme";

export const Button = styled.div`
  margin: 0 auto 3em;
  padding: 18px 30px;
  border: 2px solid ${theme.backgroundColor};
  color: ${theme.backgroundColor};
  max-width: 200px;
  font-weight: 700;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-in;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: ${theme.backgroundColor};
    color: ${theme.whiteColor};
  }
`;