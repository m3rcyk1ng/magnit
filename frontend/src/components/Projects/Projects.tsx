import { FunctionComponent } from "react";
import { Container } from '../../index.styles';
import { text } from '../../utils/Text';
import ProjectCard from './ProjectCard/ProjectCard';
import { IProjects } from "./Project.interfaces";

const Projects: FunctionComponent<IProjects> = ({ projects, onSubmit }) => {

  return (
    <Container>
      <h2>{text.PROJECT}</h2>
      {projects?.map(({ project, city, name, month, image, street, year, _id }) => (
        <ProjectCard
          project={project}
          city={city}
          name={name}
          month={month}
          image={image}
          street={street}
          year={year}
          key={_id}
          id={_id}
          onSubmit={onSubmit}
        />
      ))}
      <button>{'Не забудь сделать меня, я кнопка ещё!'}</button>
    </Container>
  );
}

export default Projects;
