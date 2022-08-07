import React, { FunctionComponent } from 'react';
import { text } from '../../utils/Text';
import { Container } from '../../index.styles';
import { VacancyContainer, VacanciesTitle } from './Vacancies.styles';
import VacancyCard from './VacancyCard/VacancyCard';
import { IVacancies } from './Vacancy.interfaces';

const Vacancies: FunctionComponent<IVacancies> = ({ vacancies }) => {
  return (
    <Container>
      <VacanciesTitle>{text.VACANCIES}</VacanciesTitle>
      <VacancyContainer>
        {vacancies?.map(({ _id, image, name, education, experience, salary }) => (
          <VacancyCard
            name={name}
            image={image}
            key={_id}
            id={_id}
            education={education}
            experience={experience}
            salary={salary}
          />
        ))}
      </VacancyContainer>
    </Container>
  );
};

export default Vacancies;
