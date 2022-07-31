import React, { FunctionComponent, useEffect, useState } from 'react';
import { vacanciesApi } from '../../utils/VacanciesApi';

const Vacancies: FunctionComponent = () => {
  const [vacancies, setVacancies] = useState();

  useEffect(() => {
    vacanciesApi
      .getVacancies()
      .then((vacancies) => {
        console.log({ vacancies });
        setVacancies(vacancies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>вакансии</div>;
};

export default Vacancies;
