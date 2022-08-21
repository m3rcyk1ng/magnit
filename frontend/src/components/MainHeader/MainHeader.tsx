import { FunctionComponent, useLayoutEffect, useRef, useState } from 'react';
import {
  MainContainer,
  Block,
  BlockTitle,
  BlockText,
  PhoneNumber,
  BlockRow,
  LanguageSwitcher
} from './MainHeader.styles';
import ImageSlider from './Slider/Slider';
import { text } from "../../utils/Text";
import { Slide, Fade } from 'react-awesome-reveal';

const MainHeader: FunctionComponent = () => {
  const mainContainerRef = useRef<HTMLDivElement | null>(null);
  const [parentWidth, setParentWidth] = useState<number | null>(null);
  const [parentHeight, setParentHeight] = useState<number | null>(null);
  const [sliderIndex, setSliderIndex] = useState(0);

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

  function getSliderIndex(index: number) {
    setSliderIndex(index);
  }

  const renderSliderTitle = (index: number) => {
    if (index === 0) return text.HEADER_TITLE04;
    if (index === 1) return text.HEADER_TITLE01;
    if (index === 2) return text.HEADER_TITLE02;
    if (index === 3) return text.HEADER_TITLE03;
    return text.HEADER_TITLE04;
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
            <Slide duration={1700} direction={'left'} triggerOnce>
              <BlockTitle>{renderSliderTitle(sliderIndex)}</BlockTitle>
            </Slide>
            <Fade delay={1100} duration={1200} triggerOnce cascade direction={'up'}>
            <BlockText>
              {text.TEXT_BLOCK_FIRST}
            </BlockText>
            </Fade>
          </div>
          <Fade duration={1200} direction={'up'} cascade delay={1300} triggerOnce>
          <BlockRow>
            <PhoneNumber>{text.PHONE_NUMBER}</PhoneNumber>
            <LanguageSwitcher>
              <button>RU</button>
              <button>EN</button>
            </LanguageSwitcher>
          </BlockRow>
          </Fade>
        </Block>
        <ImageSlider parentWidth={parentWidth} parentHeight={parentHeight} getSliderIndex={(index) => getSliderIndex(index || 0)} />
      </MainContainer>
    </>
  );
};

export default MainHeader;
