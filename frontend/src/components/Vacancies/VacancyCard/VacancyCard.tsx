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

const VacancyCard: FunctionComponent<any> = (props) => {
  const { image, name, education, experience, salary, id } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/vacancy/${id}`);
  };

  return (
    <VacancyCardWrapper>
      <VacancyImageCont>
        <VacancyImage img={image}/>
        <VacancyImageFrame frame={Frame}/>
      </VacancyImageCont>
      <VacancyInfoCont>
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
        <VacancyButton onClick={handleCardClick}>{text.VACANCY_MORE}</VacancyButton>
      </VacancyInfoCont>
    </VacancyCardWrapper>
  );
}

export default VacancyCard;
