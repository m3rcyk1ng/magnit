import React, { FunctionComponent } from 'react';
import { BurgerRow, StyledBurger } from './Burger.styles';
import { IBurger } from './IBurger';
import { useLocation } from 'react-router-dom';

const Burger: FunctionComponent<IBurger> = ({ isOpenMenu, setIsOpenMenu }) => {
  const { pathname } = useLocation();
  const mainPage = pathname === '/';

  return (
    <StyledBurger isOpenMenu={isOpenMenu} onClick={() => setIsOpenMenu(!isOpenMenu)}>
      <BurgerRow mainPage={mainPage} isOpenMenu={isOpenMenu} />
      <BurgerRow mainPage={mainPage} isOpenMenu={isOpenMenu} />
      <BurgerRow mainPage={mainPage} isOpenMenu={isOpenMenu} />
    </StyledBurger>
  );
}

export default Burger;
