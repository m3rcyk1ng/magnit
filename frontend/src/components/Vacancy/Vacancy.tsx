import React, { FunctionComponent } from 'react';
import {
  VacancyContainer,
  Section
} from './Vacancy.styles';
import { text } from '../../utils/Text';
import { useNavigate } from 'react-router-dom';
import Frame from '../../assets/images/frame.png';
import { Container } from '../../index.styles';

const Vacancy: FunctionComponent<any> = ({ currentVacancy }) => {

  console.log({currentVacancy})
  const { name } = currentVacancy[0];
// TODO Vacancy
  return (
    <Container>
      <Section>
        <h2>{name}</h2>

      </Section>
    </Container>
  );
}

export default Vacancy;
