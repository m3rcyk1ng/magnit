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

  const toPrecision = (num: number | string, delimiter?: boolean) => {
    const parts = Number(num).toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return delimiter === false ? parts[0] : parts.join(',');
  };

  return (
    <Container>
      <Section>
        <h2>{name}</h2>
      </Section>
    </Container>
  );
}

export default Vacancy;
