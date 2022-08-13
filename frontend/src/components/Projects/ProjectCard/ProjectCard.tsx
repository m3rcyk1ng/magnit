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
import { Fade, Slide } from 'react-awesome-reveal';

const ProjectCard: FunctionComponent<any> = (props) => {
  const { month, year, city, project, image, street, name, id } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Fade duration={2000} delay={1000} triggerOnce cascade direction={'up'}>
    <ProjectContainer>
      <LeftBlock>
        <Slide direction={'up'} duration={2000} triggerOnce delay={3000}>
        <InfoRow>
          <InfoText>{month}</InfoText>
          <Polygon />
          <InfoText>{year}</InfoText>
          <Polygon />
          <InfoText>{city}</InfoText>
          <Polygon />
          <InfoText>{project}</InfoText>
        </InfoRow>
        </Slide>
        <ImageContainer img={image}>
          <Button onClick={handleCardClick}>{text.BUTTON_MORE}</Button>
        </ImageContainer>
      </LeftBlock>
      <RightBlock>
        <Fade duration={1000} triggerOnce cascade damping={1} direction={'up'} delay={1000}>
          <ProjectName>{name}</ProjectName>
          <StreetText>{street}</StreetText>
        </Fade>
      </RightBlock>
    </ProjectContainer>
    </Fade>
  );
}

export default ProjectCard;
