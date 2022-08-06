import { FunctionComponent } from 'react';
import { StyledHeader, Nav, ListItem, List, StyledLink } from './Header.styles';
import Logo from '../Logo/Logo';
import { navItems } from '../../utils/NavItems';
import { Link, useLocation } from 'react-router-dom';

const Header: FunctionComponent = () => {
  const { pathname } = useLocation();
  const mainPage = pathname === '/';
  const projectDetailPage = pathname.includes('/project/');

  return !projectDetailPage ? (
    <StyledHeader mainPage={mainPage}>
      <Link to={'/'}>
        <Logo />
      </Link>
      <Nav>
        <List>
          {navItems.map(({ title, path, hash }, i) => (
            <ListItem key={i}>
              <StyledLink mainPage={mainPage} to={{pathname: path, hash: hash}}>
                {title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </Nav>
    </StyledHeader>
  ) : null;
};

export default Header;
