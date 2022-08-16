import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  background-color: initial;
  position: relative;
  overflow: hidden;
`;

export const Block = styled.div`
  position: absolute;
  top: 0;
  width: 788px;
  height: 100%;
  padding: 18.125rem 3.75rem 1.875rem 1.875rem;
  background-color: rgba(2, 35, 70, 0.8);
  text-transform: uppercase;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${theme.whiteColor};

  @media (max-width: 1100px) {
    width: 300px;
    padding: 3rem;
  }

  @media (max-width: 600px) {
    position: absolute;
    width: 100%;
    height: 20rem;
    top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(2, 35, 70);
    background: linear-gradient(
      0deg,
      rgba(2, 35, 70, 1) 0%,
      rgba(2, 35, 70, 1) 25%,
      rgba(2, 35, 70, 0.5466561624649859) 90%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  @media (max-width: 500px) {
    top: 55%;
    background: ${theme.backgroundColor};
  }

  @media (max-width: 440px) {
    top: 45%;
  }

  @media (max-width: 350px) {
    top: 35%;
  }
`;

export const BlockTitle = styled.h3`
  font-size: 4.375rem;
  line-height: 1.22;
  font-weight: 700;
  color: ${theme.whiteColor};
  text-transform: initial;
  margin-bottom: 1.875rem;
  transition: all 0.5s ease-in;
`;

export const BlockText = styled.p`
  text-transform: initial;
  font-size: 1.125rem;
  line-height: 1.75;
`;

export const BlockRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PhoneNumber = styled.p`
  text-transform: initial;
  font-size: 1.3125rem;
  line-height: 1.22;
  font-weight: 700;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`;

export const InfoTitle = styled.h4`
  font-size: 2.375rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const InfoDescription = styled.p`
  font-size: 18px;
  line-height: 24px;
  text-transform: initial;
`;

export const LanguageSwitcher = styled.div`
  display: flex;

  button {
    border: none;
    background-color: transparent;
    color: ${theme.whiteColor};
		font-size: 21px;
    line-height: 1.22;
		
		&:first-of-type {
      margin-right: 20px;
      font-weight: 700;
		}
  }
`;
