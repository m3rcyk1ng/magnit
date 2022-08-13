import { FunctionComponent } from 'react';
import {
  VacancyCardWrapper,
  VacancyImageCont,
  VacancyImage,
  VacancyImageFrame,
  VacancyInfoCont,
  VacancyTitle,
  VacancyInfoText,
  VacancyButton, VacancyTextBold
} from './VacancyCard.styles';
import { text } from '../../../utils/Text';
import { useNavigate } from 'react-router-dom';
import Frame from '../../../assets/images/frame.png';
import { toPrecision } from "../../../utils/Functions";
import { Fade, AttentionSeeker } from 'react-awesome-reveal';

const VacancyCard: FunctionComponent<any> = (props) => {
  const { image, name, education, experience, salary, id } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/vacancy/${id}`);
  };

  return (
    <VacancyCardWrapper>
      <Fade delay={3600} duration={2000}>
      <VacancyImageCont>
        <VacancyImage img={image}/>
        <VacancyImageFrame frame={Frame}/>
      </VacancyImageCont>
      </Fade>
      <VacancyInfoCont>
        <Fade cascade delay={1600}>
        <VacancyTitle>{name}</VacancyTitle>
          <VacancyInfoText>
            <p style={{textTransform: 'uppercase'}}>{(text.SALARY + ':' )}</p>
            <VacancyTextBold>{(` ${toPrecision(salary, false)} ${text.RUB}`)}</VacancyTextBold>
          </VacancyInfoText>
          <VacancyInfoText>
            <p style={{textTransform: 'uppercase'}}>{(text.EDUCATION + ':' )}</p>
            <VacancyTextBold>{` ${education}`}</VacancyTextBold>
          </VacancyInfoText>
          <VacancyInfoText>
            <p style={{textTransform: 'uppercase'}}>{(text.EXP + ':' )}</p>
            <VacancyTextBold>{` ${experience}`}</VacancyTextBold>
          </VacancyInfoText>
          <AttentionSeeker delay={3500} effect={'pulse'}>
            <VacancyButton onClick={handleCardClick}>{text.VACANCY_MORE}</VacancyButton>
          </AttentionSeeker>
        </Fade>
      </VacancyInfoCont>
    </VacancyCardWrapper>
  );
}

export default VacancyCard;
