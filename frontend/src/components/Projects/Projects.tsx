import {FunctionComponent, useEffect, useState} from "react";
import {Container} from '../../index.styles';
import {text} from '../../utils/Text';
import ProjectCard from './ProjectCard/ProjectCard';
import { IProjects } from './Project.interfaces';
import { Button } from './Projects.styles';
import { Slide } from 'react-awesome-reveal';

const Projects: FunctionComponent<IProjects> = ({projects}) => {
  const [moreButton, setMoreButton] = useState(false);
  const [amountShowProjects, setAmountShowProjects] = useState(5);

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
      <Slide duration={1300} triggerOnce direction={'down'}>
        <h2>{text.PROJECT}</h2>
      </Slide>
      {projects?.slice(0, amountShowProjects).map(({project, city, name, month, image, street, year, _id}) => (
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
      {moreButton && <Button onClick={handleShowMoreClick}>{text.MORE_BUTTON}</Button>}
    </Container>
  );
}

export default Projects;
