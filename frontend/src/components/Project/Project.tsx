import React from 'react';
import {
  ProjectContainer,
  LeftBlock,
  InfoRow,
  InfoText,
  ProjectImage,
  RigthBlock,
  ProjectName,
  StreetText,
  Polygon,
  Button,
} from './Project.styles';
import { text } from '../../utils/Text';

interface IProject {
  month: string;
  year: string;
  city: string;
  project: string;
  image: string;
  street: string;
  name: string;
}

function Project(props: IProject) {
  const { month, year, city, project, image, street, name } = props;
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
        <ProjectImage src={image} />
      </LeftBlock>
      <RigthBlock>
        <ProjectName>{name}</ProjectName>
        <StreetText>{street}</StreetText>
        <Button>{text.BUTTON_MORE}</Button>
      </RigthBlock>
    </ProjectContainer>
  );
}

export default Project;
