import React, { useEffect, useState } from 'react';
import { Container } from '../../index.styles';
import { text } from '../../utils/Text';
import { projectApi } from '../../utils/ProjectsApi';
import Project from '../Project/Project';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    projectApi
      .getProjects()
      .then((projects) => {
        console.log({projects})
        setProjects(projects.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <h2>{text.PROJECT}</h2>
      {projects?.map(({ project, city, name, month, image, street, year, _id }) => (
        <Project
          project={project}
          city={city}
          name={name}
          month={month}
          image={image}
          street={street}
          year={year}
          key={_id}
        />
      ))}
      <button>{'Не забудь сделать меня, я кнопка ещё!'}</button>
    </Container>
  );
}

export default Projects;
