import styled from 'styled-components';

export const StyledBurger = styled.button<{ isOpenMenu: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: ${(props) => (props.isOpenMenu ? '39px' : '40px')};
  height: ${(props) => (props.isOpenMenu ? '30px' : '26px')};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all 0.3s linear;
  margin-top: 12px;

  &:focus {
    outline: none;
  }

  @media (max-width: 899px) {
    display: flex;
  }
`;

export const BurgerRow = styled.div<{ isOpenMenu: boolean; mainPage: boolean }>`
  height: 2px;
  background-color: ${(props) => (props.mainPage ? '#FFFFFF' : '#022346')};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    width: ${(props) => (props.isOpenMenu ? '100%' : '30px')};
    transform: ${(props) => (props.isOpenMenu ? 'rotate(45deg)' : 'rotate(0)')};
  }

  :nth-child(2) {
    margin: 10px 0;
    width: ${(props) => (props.isOpenMenu ? '100%' : '40px')};
    opacity: ${(props) => (props.isOpenMenu ? '0' : '1')};
    transform: ${(props) => (props.isOpenMenu ? 'translateX(20px)' : 'translateX(0)')};
  }

  :nth-child(3) {
    width: ${(props) => (props.isOpenMenu ? '100%' : '20px')};
    transform: ${(props) => (props.isOpenMenu ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
