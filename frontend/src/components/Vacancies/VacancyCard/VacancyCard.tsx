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

const VacancyCard: FunctionComponent<any> = (props, onSubmit) => {
  const { image, name, education, experience, salary, id } = props;
  const navigate = useNavigate();

  const toPrecision = (num: number | string, delimiter?: boolean) => {
    const parts = Number(num).toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return delimiter === false ? parts[0] : parts.join(',');
  };

  const handleNavigate = () => {
    onSubmit(id);
    navigate('/vacancy/');
  };

  const formattedSalary = (` ${toPrecision(salary, false)} ${text.RUB}`).toUpperCase();
  const formattedEducation = ` ${education.toUpperCase()}`;
  const formattedExp = ` ${experience.toUpperCase()}`

  return (
    <VacancyCardWrapper>
      <VacancyImageCont>
        <VacancyImage img={image}/>
        <VacancyImageFrame frame={Frame}/>
      </VacancyImageCont>
      <VacancyInfoCont>
        <VacancyTitle>{name.toUpperCase()}</VacancyTitle>
        <VacancyInfoText>
          <p>{(text.SALARY + ':' ).toUpperCase()}</p>
        <VacancyTextBold>{formattedSalary}</VacancyTextBold>
        </VacancyInfoText>
        <VacancyInfoText>
          <p>{(text.EDUCATION + ':' ).toUpperCase()}</p>
          <VacancyTextBold>{formattedEducation}</VacancyTextBold>
        </VacancyInfoText>
        <VacancyInfoText>
          <p>{(text.EXP + ':' ).toUpperCase()}</p>
          <VacancyTextBold>{formattedExp}</VacancyTextBold>
        </VacancyInfoText>
        <VacancyButton onClick={handleNavigate}>{text.VACANCY_MORE}</VacancyButton>
      </VacancyInfoCont>
    </VacancyCardWrapper>
  );
}

export default VacancyCard;
