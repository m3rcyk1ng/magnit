import styled from 'styled-components';
import {theme} from '../../utils/Theme';
import {Link} from 'react-router-dom';

export const StyledFooter = styled.footer`
  background-color: ${theme.backgroundColor};
  padding: 30px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  flex-shrink: 0;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }

  svg {
    .part-one,
    .part-two {
      fill: #ffffff !important;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1030px) {
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    margin-bottom: 1.875rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: 35px 0;

  @media (max-width: 1030px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0 60px 0 0;

  @media (max-width: 1330px) {
    margin-right: 30px;
  }
`;

export const StyledLink = styled(Link)`
  margin: 0;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1;
  font-weight: 400;
  color: #fff;
  position: relative;
  text-decoration: none;

  @media (max-width: 1330px) {
    font-size: 0.875rem;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    margin: -5px 0;
    background-color: #fff;
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
  font-size: 0.875rem;
  line-height: 1.5;

  @media (max-width: 1030px) {
    max-width: 70%;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const ContactContainer = styled.div`
  display: grid;
  gap: 40px 20px;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, min-content);

  @media (max-width: 769px) {
    grid-template-columns: max-content;
    gap: 20px;
  }

  @media (max-width: 500px) {
    gap: 10px;
    margin-bottom: 30px;
  }
`;

export const Number = styled.a`
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 600;
  text-decoration: none;
  color: ${theme.whiteColor};

  @media (max-width: 1130px) {
    font-size: 1.25rem;
  }

  @media (max-width: 500px) {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.52375;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    align-items: center;
  }
`;

export const Title = styled.h4`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Email = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${theme.whiteColor};
`;

export const Paragraph = styled.a`
  font-size: 0.875rem;
  line-height: 1.5;
  max-width: 286px;
	text-decoration: none;
	color: ${theme.whiteColor};

  @media (max-width: 1130px) {
    max-width: 200px;
  }

  @media (max-width: 500px) {
    text-align: center;
    max-width: 70%;
  }
`;
