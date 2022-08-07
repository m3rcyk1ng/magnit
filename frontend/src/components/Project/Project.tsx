import React, {FunctionComponent, useEffect, useState} from 'react';
import { Container } from '../../index.styles';
import {
  Preview,
  Block,
  Title,
  InfoBlock,
  Button,
  TextBlock,
  TextContainer,
  TextsBlocks,
  Box,
  Image,
  RowContainer,
  ImagesContainer,
  BlockImage,
  ButtonBack,
  RowImages,
  ProjectTitle
} from './Project.styles';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../assets/images/back-button.svg';
import BackButtonBlue from '../../assets/images/back-button-blue.svg';
import { IProjects } from "../Projects/Project.interfaces";
import { text } from "../../utils/Text";
import ContactDialog from "../ContactDialog/ContactDialog";

const Project: FunctionComponent<IProjects> = ({ projects }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isContactDialogOpen , setIsContactDialogOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const currentProject = projects?.filter(
    (project: { _id: string | undefined }) => project._id === id,
  );

  const renderContactDialog = () => {
    return <ContactDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)} />
  }

  return (
    <>
      <Preview image={currentProject[0]?.image}>
        <ButtonBack onClick={() => navigate(-1)}>
          <img src={BackButton} alt={text.ARROW} />
          {text.BACK}
        </ButtonBack>
        <Block>
          <Title>{currentProject[0]?.name}</Title>
          <InfoBlock>
            <p>{currentProject[0]?.street}</p>
            <p>{currentProject[0]?.year}</p>
            <p>{currentProject[0]?.squareMeters}</p>
            <p>{currentProject[0]?.url}:</p>
          </InfoBlock>
          <Button onClick={() => setIsContactDialogOpen(true)}>{text.ASK_QUESTION}</Button>
        </Block>
        <RowImages>
          {currentProject[0]?.imageGallery?.slice(0, 3).map((el: string | undefined) => (
            <img src={el} alt={text.PROJECT_IMAGE} className={'row-el'} />
          ))}
        </RowImages>
      </Preview>
      <Container>
        <ProjectTitle style={{ border: 'none', maxWidth: '99%' }}>{currentProject[0]?.projectTitle}</ProjectTitle>
        <TextsBlocks>
          <TextContainer>
            {currentProject[0]?.projectText?.map((text: string) => (
              <TextBlock>{text}</TextBlock>
            ))}
          </TextContainer>
        </TextsBlocks>
        <TextsBlocks>
          <RowContainer>
            {currentProject[0]?.optionalBlock?.map(({ optionalImage, optionalText, _id }: any) => (
              <Box key={`id-${_id}`}>
                <Image image={optionalImage} />
                <p>{optionalText}</p>
              </Box>
            ))}
          </RowContainer>
        </TextsBlocks>
      </Container>
      <ImagesContainer>
        <BlockImage className="img1" image={currentProject[0]?.imageGallery[0]} />
        <BlockImage className="img2" image={currentProject[0]?.imageGallery[1]} />
        <BlockImage className="img3" image={currentProject[0]?.imageGallery[2]} />
        <BlockImage className="img4" image={currentProject[0]?.imageGallery[3]} />
      </ImagesContainer>
      <ButtonBack onClick={() => navigate(-1)}>
        <img src={BackButtonBlue} alt={text.ARROW} />
        назад к проектам
      </ButtonBack>
      {renderContactDialog()}
    </>
  );
};

export default Project;
