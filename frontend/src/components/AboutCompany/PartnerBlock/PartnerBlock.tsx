import { FunctionComponent } from 'react';
import { PartnerLogo, BackgroundHexagon, GridContainer, FirstRow } from './PartnerBlock.styles';
import { PARTNERS_FIRST_ROW } from './PartnerBlock.constants';
import { Fade } from 'react-awesome-reveal';

const PartnerBlock: FunctionComponent = () => {

  return (
    <GridContainer>
      <FirstRow>
        <Fade duration={1000} delay={1000} triggerOnce cascade direction={'right'}>
        {PARTNERS_FIRST_ROW.map(({name, image, href}, index) => (
        <a key={index} href={href} target='_blank'>
          <BackgroundHexagon>
          <PartnerLogo src={image}/>
          </BackgroundHexagon>
        </a>
      ))}
        </Fade>
      </FirstRow>
    </GridContainer>
  )
}

export default PartnerBlock;
