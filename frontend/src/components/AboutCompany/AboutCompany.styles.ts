import styled from "styled-components";

export const TextsBlocks = styled.div `
  display: flex;
  flex-direction: column;
  align-self: end;
`;

export const TextContainer = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.25rem;
  margin-right: auto;
  width: 100%;
`;

export const TextBlock = styled.div `
  display: block;
  line-height: 2;
  max-width: 37.5rem;
  margin-right: 12rem;
  font-size: 1.125rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const NumberSection = styled.div `
  display: flex;
  flex-direction: column;
  //min-width: 16.5rem;
  //width: 16.5rem;
  max-width: 16.5rem;
  border-left: 1px solid var(--mainColor);
`;

export const SumTitle = styled.p `
  font-size: 4rem;
  font-weight: 700;
  margin-left: 2rem;
  line-height: 1.2;
`;

export const SumDesc = styled.p `
  font-size: 1.125rem;
  margin-left: 2rem;
  padding-top: 1.85rem;
`;