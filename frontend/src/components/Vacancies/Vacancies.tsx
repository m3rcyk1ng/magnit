import React, { FunctionComponent } from 'react';
import { text } from '../../utils/Text';
import { Container } from '../../index.styles';
import { VacancyContainer } from './Vacancies.styles';
import VacancyCard from './VacancyCard/VacancyCard';
import { IVacancies } from './Vacancy.interfaces';

const Vacancies: FunctionComponent<IVacancies> = ({ vacancies, onSubmit }) => {
  return (
    <Container>
      <h2>{text.VACANCIES}</h2>
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
            onSubmit={onSubmit}
          />
        ))}
      </VacancyContainer>
    </Container>
  );
};

export default Vacancies;
