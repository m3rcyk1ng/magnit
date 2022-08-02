import { FunctionComponent } from 'react';
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
} from './Project.styles';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../assets/images/back-button.svg';

const Project: FunctionComponent<any> = ({ currentProject }) => {
  const {
    name,
    image,
    street,
    year,
    squareMeters,
    projectTitle,
    projectText,
    optionalBlock,
    imageGallery,
    url,
  } = currentProject[0];

  const navigate = useNavigate();

  return (
    <>
      <Preview image={image}>
        <ButtonBack onClick={() => navigate(-1)}><img src={BackButton} alt={'стрелка'}/>назад</ButtonBack>
        <Block>
          <Title>{name}</Title>
          <InfoBlock>
            <p>{street}</p>
            <p>{year}</p>
            <p>{squareMeters}</p>
            <p>{url}:</p>
          </InfoBlock>
          <Button>Задать вопрос</Button>
        </Block>
      </Preview>
      <Container>
        <h2 style={{ border: 'none', maxWidth: '99%' }}>{projectTitle}</h2>
        <TextsBlocks>
          <TextContainer>
            {projectText.map((text: string) => (
              <TextBlock>{text}</TextBlock>
            ))}
          </TextContainer>
        </TextsBlocks>
        <TextsBlocks>
          <RowContainer>
            {optionalBlock.map(({ optionalImage, optionalText, _id }: any) => (
              <Box key={`id-${_id}`}>
                <Image image={optionalImage} />
                <p>{optionalText}</p>
              </Box>
            ))}
          </RowContainer>
        </TextsBlocks>
      </Container>
      <ImagesContainer>
        <BlockImage className="img1" image={imageGallery[0]} />
        <BlockImage className="img2" image={imageGallery[1]} />
        <BlockImage className="img3" image={imageGallery[2]} />
        <BlockImage className="img4" image={imageGallery[3]} />
      </ImagesContainer>
      <ButtonBack onClick={() => navigate(-1)}>назад к проектам</ButtonBack>
    </>
  );
};

export default Project;
