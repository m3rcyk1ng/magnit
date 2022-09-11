import React, { FunctionComponent, useEffect, useState } from 'react';
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
  VacancyShowNumberButton,
  ButtonBack,
  ShowNumberDialog,
  ShowNumberDialogText,
  ShowNumberDialogTitle,
  ShowNumberDialogNumber,
  ShowNumberCloseButton,
  ShowNumberOverlay,
} from './Vacancy.styles';
import { text } from '../../utils/Text';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../../index.styles';
import { IVacancies } from '../Vacancies/Vacancy.interfaces';
import { toPrecision } from '../../utils/Functions';
import UpdateIcon from '../../assets/images/update.svg';
import EmploymentIcon from '../../assets/images/employment.svg';
import ExperienceIcon from '../../assets/images/experience.svg';
import EducationIcon from '../../assets/images/education.svg';
import BackButtonBlue from '../../assets/images/back-button-blue.svg';
import ContactDialog from '../ContactDialog/ContactDialog';
import { Fade, Slide } from 'react-awesome-reveal';

const Vacancy: FunctionComponent<IVacancies> = ({ vacancies }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isShowNumberDialog, setIsShowNumberDialog] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const currentVacancy = vacancies?.filter(
    (project: { _id: string | undefined }) => project._id === id,
  );

  const {
    name,
    salary,
    experience,
    education,
    updatedBy,
    conditions,
    description,
    workload,
    responsibilities,
    fullEducation,
  } = currentVacancy[0] || {};

  const vacancyBlock = [
    {
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
  ];

  const renderContactDialog = () => {
    return (
      <ContactDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)} />
    );
  };

  const renderShowNumberDialog = () => {
    return (
      <ShowNumberOverlay isPopupOpen={isShowNumberDialog}>
        <ShowNumberDialog isPopupOpen={isShowNumberDialog}>
          <ShowNumberDialogTitle>{text.PLACEMENT}</ShowNumberDialogTitle>
          <ShowNumberDialogText>{text.PLACEMENT_DESC}</ShowNumberDialogText>
          <ShowNumberDialogNumber href={`tel:${text.NUMBER}`}>{text.NUMBER}</ShowNumberDialogNumber>
          <ShowNumberCloseButton onClick={() => setIsShowNumberDialog(false)}>
            {text.CLOSE}
          </ShowNumberCloseButton>
        </ShowNumberDialog>
      </ShowNumberOverlay>
    );
  };

  return (
    <>
      <Container>
        <Section>
          <Fade duration={1500}>
            <ButtonBack onClick={() => navigate(-1)}>
              <img src={BackButtonBlue} alt={text.ARROW} />
              {text.BACK}
            </ButtonBack>
          </Fade>
          <Slide duration={1500} triggerOnce>
            <VacancyTitle>{name}</VacancyTitle>
          </Slide>
          <VacancyInfoText>
            <Fade duration={1000} cascade delay={1500} direction={'right'} triggerOnce>
              <p style={{ textTransform: 'uppercase' }}>{text.SALARY + ':'}</p>
              <VacancyTextBold>{` ${toPrecision(salary, false)} ${text.RUB}`}</VacancyTextBold>
            </Fade>
          </VacancyInfoText>
          <VacancyBlocksRow>
            {vacancyBlock.map((el) => (
              <VacancyInfoBlock>
                <Fade duration={1000} cascade delay={1500} direction={'right'} triggerOnce>
                  <Icon image={el.icon} />
                  <VacancyTextBlockContainer>
                    <VacancyText>{el.title}</VacancyText>
                    <VacancyValue>{el.value}</VacancyValue>
                  </VacancyTextBlockContainer>
                </Fade>
              </VacancyInfoBlock>
            ))}
          </VacancyBlocksRow>
          <Fade cascade delay={1500} triggerOnce>
            <p>{description}</p>
            <VacancyConditionsContainer>
              <h3 style={{ marginBottom: '20px' }}>{text.RESPONSIBILITIES}:</h3>
              {responsibilities?.map((el, i) => (
                <Fade duration={1500} cascade delay={1500} direction={'up'} triggerOnce>
                  <VacancyConditionsRow key={i}>
                    <Polygon />
                    <p>{el}</p>
                  </VacancyConditionsRow>
                </Fade>
              ))}
            </VacancyConditionsContainer>
            {fullEducation && (
              <>
                <h3 style={{ marginBottom: '20px' }}>{text.FULL_EDUCATION}:</h3>
                <p>{fullEducation}</p>
              </>
            )}
          </Fade>
          <Fade cascade delay={200} triggerOnce>
            <VacancyConditionsContainer>
              <h3 style={{ marginBottom: '20px' }}>{text.CONDITIONS}:</h3>
              {conditions?.map((el, i) => (
                <Fade duration={1500} cascade delay={1500} direction={'up'} triggerOnce>
                  <VacancyConditionsRow key={i}>
                    <Polygon />
                    <p>{el}</p>
                  </VacancyConditionsRow>
                </Fade>
              ))}
            </VacancyConditionsContainer>
          </Fade>
          <VacancyButtons>
            <Fade direction={'up'} delay={2500} duration={1500} triggerOnce>
              <VacancyRespondButton onClick={() => setIsContactDialogOpen(true)}>
                {text.RESPOND_VACANCY}
              </VacancyRespondButton>
            </Fade>
            <Fade direction={'up'} delay={3000} duration={1500} triggerOnce>
              <VacancyShowNumberButton onClick={() => setIsShowNumberDialog(true)}>
                {text.SHOW_NUMBER}
              </VacancyShowNumberButton>
            </Fade>
          </VacancyButtons>
        </Section>
      </Container>
      {renderContactDialog()}
      {renderShowNumberDialog()}
    </>
  );
};

export default Vacancy;
