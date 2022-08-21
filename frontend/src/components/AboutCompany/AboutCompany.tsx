import { FunctionComponent, useEffect, useState } from 'react';
import { Container } from '../../index.styles';
import {
  NumberSection,
  SumDesc,
  SumTitle,
  TextBlock,
  TextContainer,
  TextsBlocks,
  GridContainer,
  CounterOverlay
} from './AboutCompany.styles';
import { text } from '../../utils/Text';
import { AboutCompanyNumbers } from './AboutCompany.constants';
import PartnerBlock from './PartnerBlock/PartnerBlock';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';

const AboutCompany: FunctionComponent = () => {
  const [isShowDescription, setShowDescription] = useState(false);
  const navigate = useNavigate();
  // const [yPosition , setYPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isCounterStart = scrollPosition >= 1300;
  // console.log('isCounterStart', isCounterStart);
  // console.log('scrollPosition', scrollPosition);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  function Counter(val: number, i: number) {
    const [currVal, setCurrVal] = useState(0);
    const step = (10 / val) * 250;
    useEffect(() => {
      currVal !== val && setTimeout(setCurrVal, step, currVal + 1);
      if (currVal === val) setShowDescription(true);
    }, [currVal]);
    return <SumTitle>{i === 3 && currVal === 200 ? `${currVal}+` : currVal}</SumTitle>;
  }

  return (
    <Container id="about">
      <Slide duration={1000} triggerOnce direction={'left'}>
        <h2>{text.ABOUT_COMPANY}</h2>
      </Slide>
      <TextsBlocks>
        <Fade duration={1300} delay={600} cascade triggerOnce direction={'up'}>
          <TextContainer>
            <TextBlock>
              {text.TEXT_BLOCK_FIRST_02}
            </TextBlock>
            <TextBlock>{text.TEXT_BLOCK_SECOND}</TextBlock>
          </TextContainer>
        </Fade>
        <Fade duration={1300} delay={600} cascade triggerOnce direction={'right'}>
          <CounterOverlay>
          <GridContainer>
            {AboutCompanyNumbers.map((el, i) => (
              <NumberSection key={i}>
                {Counter(Number(el.sum), i)}
                <SumDesc isShowDescription={isShowDescription} transition={i + 3}>
                  {el.description}
                </SumDesc>
              </NumberSection>
            ))}
          </GridContainer>
          </CounterOverlay>
        </Fade>
      </TextsBlocks>
      <Slide duration={1300} triggerOnce direction={'left'}>
        <h2>{text.PARTNERS}</h2>
      </Slide>
      <PartnerBlock />
    </Container>
  );
};

export default AboutCompany;
