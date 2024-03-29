import styled from 'styled-components';

export const Container = styled.div<{ mainPage: boolean }>`
  display: flex;
  align-items: center;
  opacity: 1;
  transition: opacity .2s ease-in;
  
  &:hover {
    opacity: .7;
  }

  @media (max-width: 980px) {
    width: 45px;
    height: 52px;
  }
  
  .logoLetters {
    @media (max-width: 980px) {
      display: none;
    }
  }

  svg {
    ${(props) =>
      props.mainPage &&
      `
     .part-one {
      fill: #FFFFFF;
    }
  `};
    
    .part-two {
      fill: ${(props) => (props.mainPage ? '#FFFFFF' : '#022346CC')};
    }
  }
}
`;
