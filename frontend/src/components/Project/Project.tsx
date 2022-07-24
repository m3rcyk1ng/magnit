import React from 'react';
import {
  ProjectContainer,
  LeftBlock,
  InfoRow,
  InfoText,
  ProjectImage,
  RigthBlock,
  ProjectName,
} from './Project.styles';

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
          <InfoText>{year}</InfoText>
          <InfoText>{city}</InfoText>
          <InfoText>{project}</InfoText>
        </InfoRow>
        <ProjectImage src={image} />
      </LeftBlock>
      <RigthBlock>
        <ProjectName>{name}</ProjectName>
        <InfoText>{street}</InfoText>
      </RigthBlock>
    </ProjectContainer>
  );
}

export default Project;
