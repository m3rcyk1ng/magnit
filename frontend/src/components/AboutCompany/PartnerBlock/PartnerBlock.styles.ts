import styled from 'styled-components';
import HexagonIcon from '../../../assets/images/hexagon.svg';

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7.5rem;
`;

export const PartnerLogo = styled.img`
  object-fit: cover;
  max-width: 250px;

  @media (max-width: 800px) {
    max-width: 150px;
    max-height: 160px;
  }

  @media (max-width: 510px) {
    max-width: 110px;
    max-height: 110px;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1000px) {
    justify-content: space-around;
  }
`;

export const BackgroundHexagon = styled.div`
  background-image: url(${HexagonIcon});
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 335px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;

  &:hover {
    transition: 1s;
    filter: drop-shadow(0 20px 20px rgba(217, 217, 217, 0.54));
  }

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    width: 250px;
    height: 285px;
    background-size: contain;
  }

  @media (max-width: 700px) {
    width: 180px;
    height: 215px;
  }
  @media (max-width: 510px) {
    margin: 0 10px 20px 10px;
    width: 130px;
    height: 165px;
  }
`;

export const BackgroundHexagonSecond = styled.div`
  background-image: url(${HexagonIcon});
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 335px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -30px 20px 0;

  &:hover {
    filter: drop-shadow(0 20px 20px rgba(217, 217, 217, 0.54));
  }
`;
