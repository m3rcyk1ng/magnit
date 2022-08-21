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
    background: linear-gradient(
      180deg,
      rgba(2, 35, 70, 0.8) 0%,
      rgba(2, 35, 70, 0.384) 92.38%,
      rgba(0, 0, 0, 0) 100%
    );
    backdrop-filter: blur(8px);
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 7.5rem;
  padding: 1.875rem;
  background-color: rgba(217, 217, 217, 0.7);
  backdrop-filter: blur(9px);
  z-index: 2;
  display: flex;
  color: ${theme.whiteColor};
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1300px) {
    padding: 1.25rem;
    height: 5.5rem;
  }

  @media (max-width: 980px) {
    width: 90%;
    bottom: 85px;
    right: 5%;
  }

  @media (max-width: 600px) {
    padding: 0.625rem;
    height: 3.9375rem;
  }
`;

export const BlockTitle = styled.h3`
  font-size: 4.375rem;
  line-height: 1.22;
  font-weight: 700;
  color: ${theme.whiteColor};
  text-transform: initial;
  margin-bottom: 1.875rem;
  transition: all 0.3s linear;

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
  text-align: justify;

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

export const ProjectOverlayTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.25;

  @media (max-width: 1300px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ProjectOverlayAddress = styled.p`
  font-size: 16px;
  line-height: 1;
  margin-top: 10px;

  @media (max-width: 1300px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ProjectOverlayButton = styled.div<{ img: string }>`
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
  background-position: left center;
  background-size: 20px;
  align-items: center;
  object-fit: cover;
  height: 100%;
  padding-left: 66px;
  border-right: 2px solid ${theme.whiteColor};
  transform: rotate(180deg);

  @media (max-width: 1300px) {
    background-size: 16px;
    padding-left: 46px;
  }

  @media (max-width: 600px) {
    background-size: 14px;
    padding-left: 36px;
  }
`;

export const ProjectOverlayTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  justify-content: space-between;

  @media (max-width: 600px) {
    margin-right: 20px;
  }
`;
