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
`;

export const TextBlock = styled.div`
  display: block;
  line-height: 2;
  max-width: 37.5rem;
  margin-right: 12rem;
  font-size: 1.125rem;
  text-align: justify;

  &:last-child {
    margin-right: 0;
  }
`;

export const NumberSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 16.5rem;
  border-left: 1px solid ${theme.backgroundColor};
`;

export const SumTitle = styled.p`
  font-size: 4rem;
  font-weight: 700;
  margin-left: 2rem;
  line-height: 1.2;
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
  @keyframes visibleTextAnimation {
    0% {transform: translateY(-150%);}
    100% {transform: translateY(0%);}
  }
`;