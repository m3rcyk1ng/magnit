import { FunctionComponent } from 'react';
import { PartnerLogo, BackgroundHexagon, GridContainer, FirstRow } from './PartnerBlock.styles';
import { PARTNERS_FIRST_ROW } from './PartnerBlock.constants';

const PartnerBlock: FunctionComponent = () => {

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
    </GridContainer>
  )
}

export default PartnerBlock;
