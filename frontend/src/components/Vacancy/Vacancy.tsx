import React, {FunctionComponent, useEffect} from 'react';
import {
  Section,
  VacancyInfoText,
  VacancyTextBold,
  VacancyTitle,
  VacancyBlocksRow,
  VacancyInfoBlock,
  VacancyText,
  VacancyValue,
  VacancyTextBlockContainer,
  Icon,
  VacancyConditionsContainer,
  Polygon,
  VacancyConditionsRow,
  VacancyButtons,
  VacancyRespondButton,
  VacancyShowNumberButton
} from './Vacancy.styles';
import { text } from '../../utils/Text';
import {useNavigate, useParams} from 'react-router-dom';
import { Container } from '../../index.styles';
import {IVacancies} from "../Vacancies/Vacancy.interfaces";
import {toPrecision} from "../../utils/Functions";
import UpdateIcon from "../../assets/images/update.svg";
import EmploymentIcon from "../../assets/images/employment.svg";
import ExperienceIcon from "../../assets/images/experience.svg";
import EducationIcon from "../../assets/images/education.svg";

const Vacancy: FunctionComponent<IVacancies> = ({ vacancies }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const currentVacancy = vacancies?.filter(
    (project: { _id: string | undefined }) => project._id === id,
  );

  const { name, salary, experience, education, updatedBy, conditions, description, phoneNumber, workload } = currentVacancy[0] || {};
  const vacancyBlock = [{
      icon: UpdateIcon,
      title: text.UPDATED,
      value: updatedBy,
    },
    {
      icon: EmploymentIcon,
      title: text.EMPLOYMENT,
      value: workload,
    },
    {
      icon: ExperienceIcon,
      title: text.EXP,
      value: experience,
    },
    {
      icon: EducationIcon,
      title: text.EDUCATION,
      value: education,
    },
  ]

  return (
    <Container>
      <Section>
        <VacancyTitle>{name}</VacancyTitle>
        <VacancyInfoText>
          <p style={{textTransform: 'uppercase'}}>{(text.SALARY + ':' )}</p>
          <VacancyTextBold>{(` ${toPrecision(salary, false)} ${text.RUB}`)}</VacancyTextBold>
        </VacancyInfoText>
        <VacancyBlocksRow>
          {vacancyBlock.map((el) =>(
              <VacancyInfoBlock>
                <Icon image={el.icon} />
              <VacancyTextBlockContainer>
                <VacancyText>{el.title}</VacancyText>
                <VacancyValue>{el.value}</VacancyValue>
              </VacancyTextBlockContainer>
            </VacancyInfoBlock>
              ))}
        </VacancyBlocksRow>
        <p>{description}</p>
        <VacancyConditionsContainer>
          <h3 style={{marginBottom: '20px'}}>{text.CONDITIONS}:</h3>
          {conditions?.map((el, i) => (
            <VacancyConditionsRow key={i}>
              <Polygon />
              <p>{el}</p>
            </VacancyConditionsRow>
          ))}
        </VacancyConditionsContainer>
        <VacancyButtons>
          <VacancyRespondButton>{text.RESPOND_VACANCY}</VacancyRespondButton>
          <VacancyShowNumberButton>{text.SHOW_NUMBER}</VacancyShowNumberButton>
        </VacancyButtons>
      </Section>
    </Container>
  );
}

export default Vacancy;
