import styled from 'styled-components';

export const Container = styled.div<{ mainPage: boolean }>`
  display: flex;
  align-items: center;

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
