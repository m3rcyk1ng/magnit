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
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../assets/images/back-button.svg';

const Project: FunctionComponent<any> = ({ projects }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const currentProject = projects?.filter(
    (project: { _id: string | undefined }) => project._id === id,
  );

  return (
    <>
      <Preview image={currentProject[0]?.image}>
        <ButtonBack onClick={() => navigate(-1)}>
          <img src={BackButton} alt={'стрелка'} />
          назад
        </ButtonBack>
        <Block>
          <Title>{currentProject[0]?.name}</Title>
          <InfoBlock>
            <p>{currentProject[0]?.street}</p>
            <p>{currentProject[0]?.year}</p>
            <p>{currentProject[0]?.squareMeters}</p>
            <p>{currentProject[0]?.rl}:</p>
          </InfoBlock>
          <Button>Задать вопрос</Button>
        </Block>
      </Preview>
      <Container>
        <h2 style={{ border: 'none', maxWidth: '99%' }}>{currentProject[0]?.projectTitle}</h2>
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
      <ButtonBack onClick={() => navigate(-1)}>назад к проектам</ButtonBack>
    </>
  );
};

export default Project;
