import { FunctionComponent, useEffect, useState } from 'react';
import { StyledHeader, Nav, ListItem, List, StyledLink, StyledLinkCompany } from './Header.styles';
import Logo from '../Logo/Logo';
import { navItems } from '../../utils/NavItems';
import { Link, useLocation } from 'react-router-dom';
import Burger from '../Burger/Burger';
import { NavHashLink } from 'react-router-hash-link';

const Header: FunctionComponent = () => {
  const { pathname } = useLocation();
  const projectDetailPage = pathname.includes('/project/');
  const [mainPage, setMainPage] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [color, setColor] = useState('#FFF');

  useEffect(() => {
    if (pathname === '/') {
      setMainPage(true);
      setColor('#FFF')
    } else {
      setMainPage(false);
      setColor('#022346')
    }
  }, [pathname])

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
        <Logo/>
      </Link>
      <Nav isOpenMenu={isOpenMenu}>
        <List isOpenMenu={isOpenMenu} mainPage={mainPage} onClick={handleBurgerClick}>
          {navItems.map(({title, path, hash}, i) => (
            <ListItem key={i}>
              {hash ?
                <StyledLinkCompany mainPage={mainPage}>
                  <NavHashLink color={'FFF'} to={`${path}${hash}`} style={{color}}>{title}</NavHashLink>
                </StyledLinkCompany>
                :
                <StyledLink mainPage={mainPage} to={{pathname: path, hash: hash}}>
                  {title}
                </StyledLink>
              }
            </ListItem>
          ))}
        </List>
      </Nav>
      <Burger isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
    </StyledHeader>
  ) : null;
};

export default Header;
