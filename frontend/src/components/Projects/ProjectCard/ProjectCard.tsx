import { FunctionComponent } from 'react';
import {
  ProjectContainer,
  LeftBlock,
  InfoRow,
  InfoText,
  ImageContainer,
  RightBlock,
  ProjectName,
  StreetText,
  Polygon,
  Button,
} from './ProjectCard.styles';
import { text } from '../../../utils/Text';
import { useNavigate } from 'react-router-dom';

const ProjectCard: FunctionComponent<any> = (props) => {
  const { month, year, city, project, image, street, name, id } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${id}`);
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
          <Button onClick={handleCardClick}>{text.BUTTON_MORE}</Button>
        </ImageContainer>
      </LeftBlock>
      <RightBlock>
        <ProjectName>{name}</ProjectName>
        <StreetText>{street}</StreetText>
      </RightBlock>
    </ProjectContainer>
  );
}

export default ProjectCard;
