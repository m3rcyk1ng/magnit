import styled from "styled-components";
import {theme} from "../../utils/Theme";

export const TextsBlocks = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.25rem;
  margin-right: auto;
  width: 100%;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(165px, 300px));
  width: 100%;
  gap: 0 86px;
  margin-bottom: 50px;
  color: ${theme.whiteColor};
  background-color: rgba(2, 35, 70, 0.9);
  filter: drop-shadow(15px 5px 15px rgba(2, 35, 70, 0.9));
  padding: 3rem 1.5rem;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, minmax(165px, 400px));
    gap: 56px 86px;
  }

  @media (max-width: 650px) {
    grid-template-columns: minmax(165px, 100%);
    gap: 56px 0;
  }
`

export const TextBlock = styled.div`
  display: block;
  line-height: 2;
  max-width: 37.5rem;
  margin-right: 12rem;
  font-size: 1.125rem;
  text-align: justify;

  @media (max-width: 1100px) {
    margin-right: 6rem;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 980px) {
    margin-right: 0;
    max-width: 100%;
    margin-bottom: 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }
`;

export const NumberSection = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${theme.whiteColor};
  min-height: 32rem;

  @media (max-width: 1150px) {
    min-height: max-content;
  }
`;

export const SumTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
  margin-left: 2rem;
  line-height: 1.2;
  white-space: nowrap;

  @media (max-width: 1220px) {
    font-size: 2rem;
  }
`;

export const SumDesc = styled.p<{ isShowDescription: boolean, transition: number }>`
  font-size: 1.125rem;
  margin-left: 2rem;
  padding-top: 1.85rem;
  white-space: pre-wrap;
  opacity: 0;
  transition: opacity ${(props) => props.transition}s linear 0.75s;
  transform: translateY(-100%);
  animation: visibleTextAnimation ${(props) => props.transition}s forwards;
  ${(props) => props.isShowDescription && `
    opacity: 1;
  `};

  ${(props) => props.isShowDescription && `
    @keyframes visibleTextAnimation {
    0% {transform: translateY(150%);}
    100% {transform: translateY(0%);}
  }
  `};

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;
