import { FunctionComponent } from 'react';
import { Container } from '../../index.styles';

interface IProject {
  currentProject: any[];
}

const Project: FunctionComponent<IProject> = ({ currentProject }) => {
  // console.log({ currentProject });

  return (
    <Container>

    </Container>
  );
}

export default Project;
