import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const Preview = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 1100px) {
    height: 50vh;
  }

  @media (max-width: 500px) {
    background-size: contain;
  }
`;

export const RowImages = styled.div`
  position: absolute;
  bottom: 4.75rem;
  right: 0;
  display: grid;
  grid-template-rows: 18.75rem;
  grid-template-columns: repeat(3, 17.8125rem);
  gap: 0 1.875rem;

  .row-el {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0.4375rem 2.75rem 0 #02234680;
  }

  @media (max-width: 1100px) {
    visibility: hidden;
  }
`;

export const Block = styled.div`
  width: 660px;
  height: 100%;
  padding: 6.875rem 3.75rem;
  background-color: rgba(2, 35, 70, 0.9);
  text-transform: uppercase;

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

export const Title = styled.h3`
  color: ${theme.whiteColor};
  font-size: 1.3125rem;
  line-height: 1.22;

  @media (max-width: 1100px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const ProjectTitle = styled.h2`
  @media (max-width: 1600px) {
    font-size: 3rem;
    max-width: 70% !important;
  }
  @media (max-width: 1250px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 80px;

  @media (max-width: 1100px) {
    margin: 2.5rem 0 1.5rem;
  }

  p {
    font-size: 1rem;
    text-transform: uppercase;
    color: ${theme.whiteColor};
    @media (max-width: 600px) {
      font-size: 0.75rem;
    }
  }
`;

export const Button = styled.div`
  padding: 1.125rem 2rem;
  border: 2px solid ${theme.whiteColor};
  color: ${theme.whiteColor};
  max-width: 200px;
  font-weight: 700;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-in;

  @media (max-width: 560px) {
    font-size: 0.6125rem;
    max-width: max-content;
  }

  &:hover {
    cursor: pointer;
    background-color: ${theme.whiteColor};
    color: ${theme.backgroundColor};
  }
`;

export const TextBlock = styled.div`
  display: block;
  line-height: 2;
  max-width: 37.5rem;
  margin-right: 12rem;
  font-size: 1.125rem;

  @media (max-width: 850px) {
    margin-right: 1rem;
    padding-bottom: 1.5rem;
    &:last-child {
      padding-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.25rem;
  margin-right: auto;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const TextsBlocks = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
  text-align: justify;
  
  @media (max-width: 850px) {
    align-self: center;
  }
`;

export const Box = styled.div`
  padding-left: 1.875rem;
  border-left: 1px solid #022346;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  max-width: 282px;

  @media (max-width: 600px) {
    margin-right: 15px;
    padding-left: 1rem;
    align-items: start;
  }
`;

export const Image = styled.div<{ image: string }>`
  width: 90px;
  height: 89px;
  background-image: url(${(props) => props.image});
  margin-bottom: 1.25rem;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  margin-bottom: 7.5rem;

  @media (max-width: 760px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px 16px;
    grid-template-areas:
      '. .'
      '. .';
  }
`;

export const ImagesContainer = styled.div`
  padding: 0 1.875rem;
  width: 100%;
  height: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 30px;
  grid-template-areas:
    'img1 img2 img3'
    'img1 img4 img4';

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem 1rem;
    grid-template-areas:
      'img1 img2'
      'img3 img4';
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    //height: min-content;
  }

  .img1 {
    width: 100%;
    height: 100%;
    grid-area: img1;
  }

  .img2 {
    width: 100%;
    height: 100%;
    grid-area: img2;
  }

  .img3 {
    width: 100%;
    height: 100%;
    grid-area: img3;
  }

  .img4 {
    width: 100%;
    height: 100%;
    grid-area: img4;
  }
`;

export const BlockImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  @media (max-width: 700px) {
    background-size: cover;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  font-size: 1.3125rem;
  line-height: 1.22;
  text-transform: uppercase;
  margin: 3.125rem 1.875rem 7.5rem;
  background-color: transparent;
  text-align: left;
  color: ${theme.backgroundColor};
  font-weight: 700;
  transition: opacity 0.1s ease-in;
  align-self: start;

  img {
    margin-right: 0.8rem;
  }

  &:first-child {
    color: ${theme.whiteColor};
    filter: drop-shadow(0.15em 0 0.5em ${theme.backgroundColor});
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 740px) {
    font-size: 1rem;

    img {
      width: 0.625rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
		
    img {
      width: 0.5625rem;
    }
  }
`;
