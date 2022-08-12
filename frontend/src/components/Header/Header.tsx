import { FunctionComponent, useState } from 'react';
import { StyledHeader, Nav, ListItem, List, StyledLink } from './Header.styles';
import Logo from '../Logo/Logo';
import { navItems } from '../../utils/NavItems';
import { Link, useLocation } from 'react-router-dom';
import Burger from "../Burger/Burger";

const Header: FunctionComponent = () => {
  const { pathname } = useLocation();
  const mainPage = pathname === '/';
  const projectDetailPage = pathname.includes('/project/');

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleBurgerClick = (evt: any) => {
    if (evt.target) {
      setTimeout(() => {
        setIsOpenMenu(false);
      }, 1000);
    }
  };

  return !projectDetailPage ? (
    <StyledHeader mainPage={mainPage}>
      <Link to={'/'}>
        <Logo />
      </Link>
      <Nav isOpenMenu={isOpenMenu}>
        <List isOpenMenu={isOpenMenu} mainPage={mainPage} onClick={handleBurgerClick}>
          {navItems.map(({ title, path, hash }, i) => (
            <ListItem key={i}>
              <StyledLink mainPage={mainPage} to={{ pathname: path, hash: hash }}>
                {title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </Nav>
      <Burger isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </StyledHeader>
  ) : null;
};

export default Header;
