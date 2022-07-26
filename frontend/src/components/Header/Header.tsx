import {FunctionComponent} from 'react';
import { StyledHeader, Nav, ListItem, List, StyledLink } from './Header.styles';
import Logo from '../Logo/Logo';
import { navItems } from '../../utils/NavItems';

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav>
        <List>
          {navItems.map(({ title, path }, i) => (
            <ListItem key={i}>
              <StyledLink to={path}>{title}</StyledLink>
            </ListItem>
          ))}
        </List>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
