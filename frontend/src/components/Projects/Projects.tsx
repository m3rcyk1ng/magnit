import {FunctionComponent, useEffect, useState} from "react";
import { Container } from '../../index.styles';
import { text } from '../../utils/Text';
import ProjectCard from './ProjectCard/ProjectCard';
import { IProjects } from "./Project.interfaces";
import { Button } from './Projects.styles';

const Projects: FunctionComponent<IProjects> = ({ projects }) => {
  console.log('projects', projects);
  const [moreButton, setMoreButton] = useState(false);
  const [amountShowProjects , setAmountShowProjects] = useState(5);

  useEffect(() => {
    if (projects.length <= amountShowProjects) {
      setMoreButton(false);
    } else {
      setMoreButton(true);
    }
  }, [projects, amountShowProjects]);

  const handleShowMoreClick = () => {
    if (moreButton) {
      const newAmountShowProject = amountShowProjects + 3;
      setAmountShowProjects(newAmountShowProject);
    }
    return null;
  }

  return (
    <Container>
      <h2>{text.PROJECT}</h2>
      {projects?.slice(0, amountShowProjects).map(({ project, city, name, month, image, street, year, _id }) => (
        <ProjectCard
          project={project}
          city={city}
          name={name}
          month={month}
          image={image}
          street={street}
          year={year}
          key={`project-${_id}`}
          id={_id}
        />
      ))}
      {moreButton && <Button onClick={handleShowMoreClick}>{text.MORE_PROJECTS}</Button>}
    </Container>
  );
}

export default Projects;
