import { FunctionComponent } from 'react';
import {
  MainContainer
} from './MainHeader.styles';
import ImageSlider from "./Slider/Slider";

const MainHeader: FunctionComponent = () => {

  return (
    <>
      <MainContainer>
        <ImageSlider />
      </MainContainer>
    </>
  )
}

export default MainHeader;
