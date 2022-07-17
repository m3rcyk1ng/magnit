import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const Container = styled.div`
	display: flex;
  align-items: center;
`

export const StyledLogo = styled.div`
  width: 54px;
  height: 60px;
  background-image: url(${logo});
  margin-right: 10px;
`;
