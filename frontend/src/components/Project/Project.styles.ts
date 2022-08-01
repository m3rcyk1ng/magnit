import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const Preview = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Block = styled.div`
  width: 660px;
  height: 1024px;
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
  margin: 100px 0 118px;

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
  width: 100%;
	height: 100%;
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

export const BlockImage = styled.div<{image: string}>`
  background-image: url(${(props) => props.image});
	
  width: 100%;
  height: 100%;
`
