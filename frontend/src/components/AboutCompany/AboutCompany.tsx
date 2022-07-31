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
    <Container>
      <h2>{text.ABOUT_COMPANY}</h2>
      <TextsBlocks>
        <TextContainer>
          <TextBlock>{text.TEXT_BLOCK1}</TextBlock>
          <TextBlock>{text.TEXT_BLOCK2}</TextBlock>
        </TextContainer>
        <TextContainer>
          {AboutCompanyNumbers.map((el, i) => (
            <NumberSection key={i}>
              {Counter(Number(el.sum), i)}
              <SumDesc isShowDescription={isShowDescription}>{el.description}</SumDesc>
            </NumberSection>
          ))}
        </TextContainer>
      </TextsBlocks>
      <PartnerBlock />
    </Container>
  )
}

export default AboutCompany;
