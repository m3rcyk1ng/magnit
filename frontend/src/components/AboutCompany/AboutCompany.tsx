import {FunctionComponent, useEffect, useState} from 'react';
import { Container } from '../../index.styles';
import {
TextContainer, TextBlock, TextsBlocks, NumberSection, SumTitle, SumDesc
} from './AboutCompany.styles';
import { text } from '../../utils/Text';
import {AboutCompanyNumbers} from './AboutCompany.constants';
import PartnerBlock from './PartnerBlock/PartnerBlock';

const AboutCompany: FunctionComponent = () => {
  const [isShowDescription , setShowDescription] = useState(false);

  function Counter(val: number, i: number) {
    const [currVal, setCurrVal] = useState(0);
    const step = 10 / val * 250;
    useEffect(() => {
      currVal !== val && setTimeout(setCurrVal, step, currVal + 1);
      if (currVal === val) setShowDescription(true);
    }, [currVal]);
    return <SumTitle>{i === 3 && currVal === 200 ? `${currVal}+` : currVal}</SumTitle>;
  }

  return (
    <Container id="about">
      <h2>{text.ABOUT_COMPANY}</h2>
      <TextsBlocks>
        <TextContainer>
          <TextBlock>
          {text.TEXT_BLOCK_FIRST}
          <p>{text.TEXT_BLOCK_FIRST_02}</p>
          </TextBlock>
          <TextBlock>{text.TEXT_BLOCK_SECOND}</TextBlock>
        </TextContainer>
        <TextContainer>
          {AboutCompanyNumbers.map((el, i) => (
            <NumberSection key={i}>
              {Counter(Number(el.sum), i)}
              <SumDesc isShowDescription={isShowDescription} transition={i + 3}>{el.description}</SumDesc>
            </NumberSection>
          ))}
        </TextContainer>
      </TextsBlocks>
      <h2>{text.PARTNERS}</h2>
      <PartnerBlock />
    </Container>
  )
}

export default AboutCompany;
