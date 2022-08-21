import React, { FunctionComponent, useEffect, useState } from 'react';
import { text } from '../../utils/Text';
import { Container } from '../../index.styles';
import { VacancyContainer, VacanciesTitle } from './Vacancies.styles';
import VacancyCard from './VacancyCard/VacancyCard';
import { IVacancies } from './Vacancy.interfaces';
import { Slide } from 'react-awesome-reveal';
import { Button } from '../Projects/Projects.styles';

const Vacancies: FunctionComponent<IVacancies> = ({vacancies}) => {
  const [moreButton, setMoreButton] = useState(false);
  const [amountShowProjects, setAmountShowProjects] = useState(4);

  useEffect(() => {
    if (vacancies.length <= amountShowProjects) {
      setMoreButton(false);
    } else {
      setMoreButton(true);
    }
  }, [vacancies, amountShowProjects]);

  const handleShowMoreClick = () => {
    if (moreButton) {
      const newAmountShowProject = amountShowProjects + 3;
      setAmountShowProjects(newAmountShowProject);
    }
    return null;
  }

  return (
    <Container>
      <Slide duration={1600} triggerOnce direction={'down'}>
        <VacanciesTitle>{text.VACANCIES}</VacanciesTitle>
      </Slide>
      <VacancyContainer>
        {vacancies?.slice(0, amountShowProjects).map(({_id, image, name, education, experience, salary}) => (
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
      {moreButton && <Button onClick={handleShowMoreClick}>{text.MORE_BUTTON}</Button>}
    </Container>
  );
};

export default Vacancies;
