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
  width: 41%;
  height: 100%;
  padding: 1.875rem;
  background-color: rgba(2, 35, 70, 0.8);
  text-transform: uppercase;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${theme.whiteColor};

  @media (max-width: 1600px) {
    width: 35%;
  }

  @media (max-width: 980px) {
    position: absolute;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(180deg, rgba(2, 35, 70, 0.8) 0%, rgba(2, 35, 70, 0.384) 92.38%, rgba(0,0,0,0) 100%);
    backdrop-filter: blur(8px);
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

  @media (max-width: 1600px) {
    font-size: 3.75rem;
  }

  @media (max-width: 1300px) {
    font-size: 3.125rem;
  }

  @media (max-width: 1150px) {
    font-size: 2.725rem;
  }

  @media (max-width: 600px) {
    font-size: 2.125rem;
  }
`;

export const BlockText = styled.p`
  text-transform: initial;
  font-size: 1.125rem;
  line-height: 1.75;

  @media (max-width: 1150px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

export const BlockRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 250px;

  @media (max-width: 1300px) {
    margin-top: 200px;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export const PhoneNumber = styled.p`
  text-transform: initial;
  font-size: 1.3125rem;
  line-height: 1.22;
  font-weight: 700;

  @media (max-width: 1150px) {
    font-size: 18px;
  }
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

    @media (max-width: 1150px) {
      font-size: 18px;
    }
  }
`;
