import { Container } from '../../index.styles';
import { ChangeEvent, useState } from 'react';
import { projectApi } from '../../utils/ProjectsApi';
import { vacanciesApi } from '../../utils/VacanciesApi';
import { AdminForm, AdminFormInputContainer, AdminFormTitle } from './Admin.styles';

const Admin = () => {
  const [data, setData] = useState({ project_id: '', vacancy_id: '' });
  const [error, setError] = useState({ project_err: '', vacancy_err: '' });

  const handleChangeOnDeleteProject = (evt: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      project_id: evt.target.value,
    });
  };

  const handleChangeOnDeleteVacancy = (evt: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      vacancy_id: evt.target.value,
    });
  };

  const handleDeleteProject = (evt: any) => {
    evt.preventDefault();
    const projectId = data.project_id;

    projectApi
      .deleteProject({ projectId })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        setError({ ...error, project_err: err });
      });
  };

  const handleDeleteVacancy = (evt: any) => {
    evt.preventDefault();
    const vacancyId = data.vacancy_id;

    vacanciesApi
      .deleteVacancy({ vacancyId })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        setError({ ...error, vacancy_err: err });
      });
  };

  return (
    <Container>
      <AdminForm onSubmit={handleDeleteProject}>
        <AdminFormTitle>Чтобы удалить проект, введите его id</AdminFormTitle>
        <AdminFormInputContainer>
          <input
            name={'id'}
            onChange={handleChangeOnDeleteProject}
            style={{ padding: '10px', border: '1px solid black' }}
          />
          <span style={{ color: 'red' }}>{error.project_err}</span>
        </AdminFormInputContainer>
        <button type={'submit'} style={{ padding: '10px 20px', backgroundColor: 'pink' }}>
          Ок
        </button>
      </AdminForm>

      <AdminForm onSubmit={handleDeleteVacancy}>
        <AdminFormTitle>Чтобы удалить вакансию, введите его id</AdminFormTitle>
        <AdminFormInputContainer>
          <input
            name={'id'}
            onChange={handleChangeOnDeleteVacancy}
            style={{ padding: '10px', border: '1px solid black' }}
          />
          <span style={{ color: 'red' }}>{error.vacancy_err}</span>
        </AdminFormInputContainer>
        <button type={'submit'} style={{ padding: '10px 20px', backgroundColor: 'pink' }}>
          Ок
        </button>
      </AdminForm>
    </Container>
  );
};

export default Admin;
