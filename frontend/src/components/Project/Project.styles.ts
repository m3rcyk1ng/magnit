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
`;

export const Block = styled.div`
  width: 660px;
  height: 100%;
  padding: 110px 60px;
  background-color: rgba(2, 35, 70, 0.9);
  text-transform: uppercase;
`;

export const Title = styled.h3`
  color: ${theme.whiteColor};
  font-size: 1.3125rem;
  line-height: 1.22;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 80px;

  p {
    font-size: 1rem;
    text-transform: uppercase;
    color: ${theme.whiteColor};
  }
`;

export const Button = styled.div`
  padding: 18px 30px;
  border: 2px solid ${theme.whiteColor};
  color: ${theme.whiteColor};
  max-width: 200px;
  font-weight: 700;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-in;

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
`;

export const TextsBlocks = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
`;

export const Box = styled.div`
  padding-left: 1.875rem;
  border-left: 1px solid #022346;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  max-width: 282px;
`;

export const Image = styled.div<{ image: string }>`
  width: 90px;
  height: 89px;
  background-image: url(${(props) => props.image});
  margin-bottom: 1.25rem;
`;

export const RowContainer = styled.div`
  display: flex;
  margin-bottom: 7.5rem;
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
`;
