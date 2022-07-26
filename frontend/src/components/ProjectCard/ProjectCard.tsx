import {
  ProjectContainer,
  LeftBlock,
  InfoRow,
  InfoText,
  ImageContainer,
  RigthBlock,
  ProjectName,
  StreetText,
  Polygon,
  Button,
} from './ProjectCard.styles';
import { text } from '../../utils/Text';
import { useNavigate } from 'react-router-dom';

interface IProject {
  month: string;
  year: string;
  city: string;
  project: string;
  image: string;
  street: string;
  name: string;
  id: string;
  onSubmit: any
}

function ProjectCard(props: IProject) {
  const { month, year, city, project, image, street, name, id, onSubmit } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    onSubmit(id);
    navigate('/project');
  };

  return (
    <ProjectContainer>
      <LeftBlock>
        <InfoRow>
          <InfoText>{month}</InfoText>
          <Polygon />
          <InfoText>{year}</InfoText>
          <Polygon />
          <InfoText>{city}</InfoText>
          <Polygon />
          <InfoText>{project}</InfoText>
        </InfoRow>
        <ImageContainer img={image}>
          <Button onClick={handleNavigate}>{text.BUTTON_MORE}</Button>
        </ImageContainer>
      </LeftBlock>
      <RigthBlock>
        <ProjectName>{name}</ProjectName>
        <StreetText>{street}</StreetText>
      </RigthBlock>
    </ProjectContainer>
  );
}

export default ProjectCard;
