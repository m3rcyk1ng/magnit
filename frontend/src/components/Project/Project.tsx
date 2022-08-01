import { FunctionComponent, useEffect } from 'react';
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
} from './Project.styles';
import {} from '../AboutCompany/AboutCompany.styles';

const Project: FunctionComponent<any> = ({ currentProject }) => {
  // console.log(currentProject.currentProject?.projectText);
  const {
    name,
    city,
    image,
    street,
    year,
    squareMeters,
    projectTitle,
    projectText,
    optionalBlock,
    imageGallery,
  } = currentProject[0];

  const img1 = imageGallery[0];

//   useEffect(() => {
//     console.log('hello', currentProject.name);
//     currentProject.map((el: any) => {
//       console.log('name', el.name);
//     });
//   }, [currentProject]);
// console.log('imageGallery[0]', imageGallery[0])


  useEffect(() => {
    console.log(imageGallery)
  }, [imageGallery])
  return (
    <>
      <Preview image={image}>
        <Block>
          <Title>{name}</Title>
          <InfoBlock>
            <p>{street}</p>
            <p>{year}</p>
            <p>{squareMeters}</p>
            <p>{year}</p>
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
        {/*{imageGallery.forEach((el) => (*/}
        {/*  <BlockImage image={el} />*/}
        {/*))}*/}
        <BlockImage className="img1" image={'https://bit.ly/3oNjmdG'} />
        <BlockImage className="img2" image={'https://bit.ly/3oNjmdG'} />
        <BlockImage className="img3" image={'https://bit.ly/3oNjmdG'} />
        <BlockImage className="img4" image={'https://bit.ly/3oNjmdG'} />
      </ImagesContainer>
    </>
  );
};

export default Project;
