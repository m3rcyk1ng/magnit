import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import logoGradient from '../../assets/images/logoGradient.svg'

export const Container = styled.div<{ mainPage: boolean }>`
  display: flex;
  align-items: center;
  svg {
    .part-one {
      fill: ${(props) => ( props.mainPage ? '#FFFFFF' : '#022346CC')};
    }
  }
`;

export const StyledLogo = styled.div<{ mainPage: boolean }>`
  width: 54px;
  height: 60px;
  background-image:  url(${(props) => ( props.mainPage ? logo : logoGradient)});
  margin-right: 10px;
`;
