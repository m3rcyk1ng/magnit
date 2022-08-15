import { FunctionComponent, useLayoutEffect, useRef, useState } from 'react';
import {
  MainContainer,
  Block,
  BlockTitle,
  BlockText,
  InfoRow,
  InfoContainer,
  InfoTitle,
  InfoDescription,
  PhoneNumber,
  BlockRow,
  LanguageSwitcher
} from './MainHeader.styles';
import ImageSlider from './Slider/Slider';
import {text} from "../../utils/Text";

const MainHeader: FunctionComponent = () => {
  const mainContainerRef = useRef<HTMLDivElement | null>(null);
  const [parentWidth, setParentWidth] = useState<number | null>(null);
  const [parentHeight, setParentHeight] = useState<number | null>(null);

  function setParentSizes() {
    if (mainContainerRef) {
      const clientWidth = mainContainerRef?.current?.clientWidth;
      const clientHeight = mainContainerRef?.current?.clientHeight;
      if (clientWidth && clientWidth !== parentWidth) {
        setParentWidth(clientWidth);
      }
      if (clientHeight && clientHeight !== parentHeight) {
        setParentHeight(clientHeight);
      }
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', setParentSizes);
    setParentSizes();
    return () => window.removeEventListener('resize', setParentSizes);
  });

  return (
    <>
      <MainContainer ref={mainContainerRef}>
        <Block>
          <div>
            <BlockTitle>There will be good heading here</BlockTitle>
            <BlockText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus, nulla posuere massa
              quam neque. Vitae dui molestie integer scelerisque vitae.
            </BlockText>
          </div>
          <InfoRow>
            <InfoContainer>
              <InfoTitle>1029</InfoTitle>
              <InfoDescription>Lorem ipsum</InfoDescription>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>432</InfoTitle>
              <InfoDescription>Lorem ipsum</InfoDescription>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>6542</InfoTitle>
              <InfoDescription>Lorem ipsum</InfoDescription>
            </InfoContainer>
          </InfoRow>
          <BlockRow>
            <PhoneNumber>{text.PHONE_NUMBER}</PhoneNumber>
            <LanguageSwitcher>
              <button>RU</button>
              <button>EN</button>
            </LanguageSwitcher>
          </BlockRow>
        </Block>
        <ImageSlider parentWidth={parentWidth} parentHeight={parentHeight} />
      </MainContainer>
    </>
  );
};

export default MainHeader;
