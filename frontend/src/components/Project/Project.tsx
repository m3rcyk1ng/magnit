import { Container } from '../../index.styles';

interface IProject {
  currentProject: any[];
}

function Project({ currentProject }: IProject) {
  console.log({ currentProject });
  return (
    <Container>

    </Container>
  );
}

export default Project;
