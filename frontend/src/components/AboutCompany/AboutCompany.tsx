import {FunctionComponent, useCallback, useEffect, useState} from 'react';
import { Container } from '../../index.styles';
import {
  NumberSection,
  SumDesc,
  TextBlock,
  TextContainer,
  TextsBlocks,
  GridContainer,
  BackgroundWrapper,
  SectionOverlay
} from './AboutCompany.styles';
import { text } from '../../utils/Text';
import { AboutCompanyNumbers } from './AboutCompany.constants';
import PartnerBlock from './PartnerBlock/PartnerBlock';
import {useNavigate} from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import Counter from './Counter/Counter';

const AboutCompany: FunctionComponent = () => {
  const [isShowDescription, setShowDescription] = useState(false);
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollReader = scrollPosition >= 950;
  const [isCounterStart, setIsCounterStart] = useState(false);
  const handleScroll = useCallback(()=> {
    const position = window.scrollY;
    setScrollPosition(position);
  }, [window.scrollY]);

  useEffect(() => {
    if (scrollReader) setIsCounterStart(true);
  }, [scrollReader]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const handleShowDesc = (b: boolean) => {
    setShowDescription(b);
  }

  return (
    <>
      <BackgroundWrapper>
        <SectionOverlay>
        <Container style={{margin: '0 2rem'}} id="about">
          <Slide duration={1000} triggerOnce direction={'left'}>
            <h2 style={{color: 'white'}}>{text.ABOUT_COMPANY}</h2>
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
              <GridContainer>
                {AboutCompanyNumbers.map((el, i) => (
                  <NumberSection key={i}>
                    {isCounterStart &&
                      <Counter end={Number(el.sum)} index={i} showDesc={handleShowDesc}/>
                    }
                    <SumDesc isShowDescription={isShowDescription} transition={i + 2.5}>
                      {el.description}
                    </SumDesc>
                  </NumberSection>
                ))}
              </GridContainer>
            </Fade>
          </TextsBlocks>
        </Container>
        </SectionOverlay>
      </BackgroundWrapper>
      <Slide duration={1300} triggerOnce direction={'left'}>
        <h2>{text.PARTNERS}</h2>
      </Slide>
      <PartnerBlock/>
    </>
  );
};

export default AboutCompany;
