import styled from "styled-components";
import HexagonIcon from '../../../assets/images/hexagon.svg';

export const GridContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 7.5rem;
`;

export const PartnerLogo = styled.img `
  object-fit: cover;
`;

export const FirstRow = styled.div `
  display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-content: center;
`;

export const SecondaryRow = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  margin: 0 auto;
  gap: 0 25px;
`;

export const BackgroundHexagon = styled.div `
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
    filter: drop-shadow(0 20px 20px rgba(217, 217, 217, 0.54));
  }
`;

export const BackgroundHexagonSecond = styled.div `
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
