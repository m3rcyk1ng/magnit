import { FunctionComponent } from 'react';
import { Container } from '../../index.styles';
import {
TextContainer, TextBlock, TextsBlocks, NumberSection, SumTitle, SumDesc
} from "./AboutCompany.styles";
import { text } from "../../utils/Text";
import {AboutCompanyNumbers} from "./AboutCompany.constants";
import PartnerBlock from "./PartnerBlock/PartnerBlock";

const AboutCompany: FunctionComponent = () => {

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
              <SumTitle>{el.sum}</SumTitle>
              <SumDesc>{el.description}</SumDesc>
            </NumberSection>
          ))}
        </TextContainer>
      </TextsBlocks>
      <PartnerBlock />
    </Container>
  )
}

export default AboutCompany;
