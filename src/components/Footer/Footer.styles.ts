import styled from 'styled-components';
import { theme } from '../../utils/Theme';
import logo from '../../assets/images/logoWhite.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const StyledFooter = styled.footer`
  background-color: ${theme.backgroundColor};
  padding: 60px 30px;
  display: flex;
  justify-content: space-between;
	color: #FFF;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 181px;
  height: 70px;
  background-image: url(${logo});
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: 40px 0;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0 60px 0 0;

`;

export const Link = styled(AnchorLink)`
  margin: 0;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1;
  font-weight: 400;
  color: #FFF;
  position: relative;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    margin: -5px 0;
    background-color: #FFF;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.4s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const Copyright = styled.p`
	font-size: 1rem;
  line-height: 1;
`

export const RowContainer = styled.div`
	display: grid;
	gap: 30px 60px;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
`

export const Number = styled.p`
	font-size: 2rem;
  line-height: 1.2;
  font-weight: 600;
`

export const LinksContainer = styled.div`

`

export const SocialLink = styled.img`
	width: 30px;
  height: 30px;
`
