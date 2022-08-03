import React, { FunctionComponent } from 'react';
import {
  VacancyContainer
} from './Vacancy.styles';
import { text } from '../../utils/Text';
import { useNavigate } from 'react-router-dom';
import Frame from '../../assets/images/frame.png';
import { Container } from '../../index.styles';

const Vacancy: FunctionComponent<any> = (props) => {
  const { image, name, education, experience, salary, onSubmit, id } = props;
  const navigate = useNavigate();

  const toPrecision = (num: number | string, delimiter?: boolean) => {
    const parts = Number(num).toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return delimiter === false ? parts[0] : parts.join(',');
  };

  return (
    <Container>
    <h2>{name.toUpperCase()}</h2>

    </Container>
  );
}

export default Vacancy;
