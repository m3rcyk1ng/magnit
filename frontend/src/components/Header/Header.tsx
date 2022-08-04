import {FunctionComponent} from 'react';
import { StyledHeader, Nav, ListItem, List, StyledLink } from './Header.styles';
import Logo from '../Logo/Logo';
import { navItems } from '../../utils/NavItems';
import { useLocation } from 'react-router-dom';

const Header: FunctionComponent = () => {
  const { pathname } = useLocation();
  const mainPage = pathname === '/';

  return (
    <StyledHeader mainPage={mainPage}>
      <Logo />
      <Nav>
        <List>
          {navItems.map(({ title, path }, i) => (
            <ListItem key={i}>
              <StyledLink mainPage={mainPage} to={path}>{title}</StyledLink>
            </ListItem>
          ))}
        </List>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
