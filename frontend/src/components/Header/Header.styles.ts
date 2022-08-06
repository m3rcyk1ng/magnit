import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header<{mainPage: boolean}>`
  display: flex;
  justify-content: space-between;
	background-color: ${(props) => ( props.mainPage ? '#022346CC' : '#FFFFFF')};
	padding: ${(props) => ( props.mainPage ? '20px 30px' : '5px 30px')};
	width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-right: 60px;
	&:last-of-type {
    margin-right: 0;
	}
`;

export const StyledLink = styled(Link)<{mainPage: boolean}>`
  margin: 0;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;
  color: ${(props) => ( props.mainPage ? '#FFFFFF' : '#022346CC')};
  position: relative;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    margin: -5px 0;
    background-color: ${(props) => ( props.mainPage ? '#FFFFFF' : '#022346CC')};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.4s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

