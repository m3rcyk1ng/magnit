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
import { text } from "../../utils/Text";
import { Slide } from 'react-awesome-reveal';

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
    if (index === 1) return 'Делаем будущее - настоящим';
    if (index === 2) return 'Объединяем возможности.';
    if (index === 3) return 'Создаём решения наш опыт для вашей уверенности';
    return 'Дорожим репутацией. Ценим доверие';
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', setParentSizes);
    setParentSizes();
    return () => window.removeEventListener('resize', setParentSizes);
  });

  // TODO почистить лишнее по стилям и анимацию смены тайтла

  return (
    <>
      <MainContainer ref={mainContainerRef}>
        <Block>
          <Slide duration={1700} direction={'left'} triggerOnce>
          <div>
            <BlockTitle>{renderSliderTitle(sliderIndex)}</BlockTitle>
            <BlockText>
              {text.TEXT_BLOCK_FIRST}
            </BlockText>
          </div>
          <BlockRow>
            <PhoneNumber>{text.PHONE_NUMBER}</PhoneNumber>
            <LanguageSwitcher>
              <button>RU</button>
              <button>EN</button>
            </LanguageSwitcher>
          </BlockRow>
          </Slide>
        </Block>
        <ImageSlider parentWidth={parentWidth} parentHeight={parentHeight} getSliderIndex={(index) => getSliderIndex(index || 0)} />
      </MainContainer>
    </>
  );
};

export default MainHeader;
