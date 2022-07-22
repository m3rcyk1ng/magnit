import React from 'react';
import { PartnerLogo, BackgroundHexagon, GridContainer, BackgroundHexagonSecond, FirstRow,SecondaryRow  } from './PartnerBlock.styles';
import { PARTNERS_FIRST_ROW, PARTNERS_SECOND_ROW} from "./PartnerBlock.constants";

const PartnerBlock = () => {

  return (
    <GridContainer>
      <FirstRow>
      {PARTNERS_FIRST_ROW.map(({name, image, href}, index) => (
        <a key={index} href={href} target='_blank'>
          <BackgroundHexagon>
          <PartnerLogo src={image}/>
          </BackgroundHexagon>
        </a>
      ))}
      </FirstRow>
      <SecondaryRow>
        {PARTNERS_SECOND_ROW.map(({name, image, href}, index) => (
          <a key={index} href={href} target='_blank'>
            <BackgroundHexagonSecond>
              <PartnerLogo src={image}/>
            </BackgroundHexagonSecond>
          </a>
        ))}
      </SecondaryRow>
    </GridContainer>
  )
}

export default PartnerBlock;
