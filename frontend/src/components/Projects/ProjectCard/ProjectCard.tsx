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
    <ProjectContainer>
      <Fade duration={1500} delay={1000} triggerOnce cascade direction={'up'}>
        <LeftBlock>
          <Slide direction={'up'} duration={1500} triggerOnce delay={2000}>
            <InfoRow>
              {month && (
                <InfoText>{month}</InfoText>)}
              <Polygon/>
              <InfoText>{year}</InfoText>
              <Polygon/>
              <InfoText>{city}</InfoText>
              <Polygon/>
              <InfoText>{project}</InfoText>
            </InfoRow>
          </Slide>
          <ImageContainer img={image}>
            <Button onClick={handleCardClick}>{text.BUTTON_MORE}</Button>
          </ImageContainer>
        </LeftBlock>
        <RightBlock>
          <Fade duration={800} triggerOnce direction={'up'}>
            <ProjectName>{name}</ProjectName>
            <StreetText>{street}</StreetText>
          </Fade>
        </RightBlock>
      </Fade>
    </ProjectContainer>
  );
}

export default ProjectCard;
