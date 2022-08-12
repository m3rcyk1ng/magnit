import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header<{ mainPage: boolean }>`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  justify-content: space-between;
  background-color: ${(props) => (props.mainPage ? 'transparent' : '#FFFFFF')};
  padding: ${(props) => (props.mainPage ? '20px 30px' : '5px 30px')};
  width: 100%;

  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

export const Nav = styled.nav<{ isOpenMenu: boolean }>`
  display: flex;
  align-items: center;
  @media (max-width: 899px) {
    display: ${(props) => (props.isOpenMenu ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
  }
`;

export const List = styled.ul<{ isOpenMenu: boolean; mainPage: boolean }>`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  padding: 0;
  @media (max-width: 899px) {
    display: ${(props) => (props.isOpenMenu ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    background: ${(props) => (props.mainPage ? '#022346' : '#FFFFFF')};
    transform: ${(props) => (props.isOpenMenu ? 'translateX(0)' : 'translateX(-100%)')};
    width: 100%;
    height: 100vh;
    text-align: center;
    padding: 15px 0;
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
  }
`;

export const ListItem = styled.li`
  margin-right: 60px;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 1230px) {
    margin-right: 30px;
  }

  @media (max-width: 899px) {
    margin: 0 0 30px 0;
  }
`;

export const StyledLink = styled(Link)<{ mainPage: boolean }>`
  margin: 0;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;
  color: ${(props) => (props.mainPage ? '#FFFFFF' : '#022346')};
  position: relative;
  text-decoration: none;

  @media (max-width: 1130px) {
    font-size: 0.875rem;
  }

  @media (max-width: 899px) {
    font-size: 1.5rem;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    margin: -5px 0;
    background-color: ${(props) => (props.mainPage ? '#FFFFFF' : '#022346')};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.4s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
