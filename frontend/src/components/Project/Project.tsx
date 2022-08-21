import React, { FunctionComponent, useEffect, useState } from 'react';
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
import { IProjects } from '../Projects/Project.interfaces';
import { text } from '../../utils/Text';
import ContactDialog from '../ContactDialog/ContactDialog';
import { Fade, Slide } from 'react-awesome-reveal';

const Project: FunctionComponent<IProjects> = ({projects}) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const currentProject = projects?.filter(
    (project: { _id: string | undefined }) => project._id === id,
  );

  const renderContactDialog = () => {
    return <ContactDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)}/>
  }

  return (
    <>
      <Fade duration={2000} triggerOnce style={{width: '100%'}}>
        <Preview image={currentProject[0]?.image}>
          <Fade duration={1000} triggerOnce>
            <ButtonBack onClick={() => navigate(-1)}>
              <img src={BackButton} alt={text.ARROW}/>
              {text.BACK}
            </ButtonBack>
          </Fade>
          <Block>
            <Fade delay={2000} duration={1500} triggerOnce direction={'up'}>
              <Title>{currentProject[0]?.name}</Title>
              <InfoBlock>
                <Fade delay={1000} duration={1300} triggerOnce direction={'up'} cascade>
                  <p>{currentProject[0]?.street}</p>
                  <p>{currentProject[0]?.year}</p>
                  <p>{currentProject[0]?.squareMeters}</p>
                  <p>{currentProject[0]?.url}:</p>
                </Fade>
              </InfoBlock>
              <Button onClick={() => setIsContactDialogOpen(true)}>{text.ASK_QUESTION}</Button>
            </Fade>
          </Block>
          <RowImages>
            <Fade cascade duration={1000} triggerOnce direction={'bottom-right'}>
              {currentProject[0]?.imageGallery?.slice(0, 3).map((el: string | undefined) => (
                <img src={el} alt={text.PROJECT_IMAGE} className={'row-el'}/>
              ))}
            </Fade>
          </RowImages>
        </Preview>
      </Fade>
      <Container>
        <Slide duration={1500} triggerOnce direction={'left'}>
          <ProjectTitle style={{border: 'none', maxWidth: '99%'}}>{currentProject[0]?.projectTitle}</ProjectTitle>
        </Slide>
        <Fade duration={700} delay={1000} triggerOnce cascade direction={'down'}>
          <TextsBlocks>
            <TextContainer>
              {currentProject[0]?.projectText?.map((text: string) => (
                <TextBlock>{text}</TextBlock>
              ))}
            </TextContainer>
          </TextsBlocks>
        </Fade>
        <Slide duration={1500} delay={1000} triggerOnce cascade direction={'left'}>
          <TextsBlocks>
            <RowContainer>
              <Fade cascade duration={1000} triggerOnce direction={'down'}>
                {currentProject[0]?.optionalBlock?.map(({optionalImage, optionalText, _id}: any) => (
                  <Box key={`id-${_id}`}>
                    <Image image={optionalImage}/>
                    <p>{optionalText}</p>
                  </Box>
                ))}
              </Fade>
            </RowContainer>
          </TextsBlocks>
        </Slide>
      </Container>
      <Slide style={{width: '100%'}} duration={1500} triggerOnce cascade delay={1000} direction={'up'}>
        <ImagesContainer>
          <BlockImage className="img1" image={currentProject[0]?.imageGallery[0]}/>
          <BlockImage className="img2" image={currentProject[0]?.imageGallery[1]}/>
          <BlockImage className="img3" image={currentProject[0]?.imageGallery[2]}/>
          <BlockImage className="img4" image={currentProject[0]?.imageGallery[3]}/>
        </ImagesContainer>
      </Slide>
      <ButtonBack onClick={() => navigate(-1)}>
        <img src={BackButtonBlue} alt={text.ARROW}/>
        назад к проектам
      </ButtonBack>
      {renderContactDialog()}
    </>
  );
};

export default Project;
