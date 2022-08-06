import { FunctionComponent } from 'react';
import {
  StyledFooter,
  Container,
  Nav,
  List,
  ListItem,
  StyledLink,
  Copyright,
  ContactContainer,
  Number,
  LinksContainer,
  SocialLink,
  ColumnContainer,
  Title,
  Paragraph,
} from './Footer.styles';
import { navItems } from '../../utils/NavItems';
import { text } from '../../utils/Text';
import Logo from '../Logo/Logo';
import WhatsappIcon from '../../assets/images/whatsapp-icon.svg';
import ViberIcon from '../../assets/images/viber-icon.svg';
import TelegramIcon from '../../assets/images/telegram-icon.svg';
import IntagramIcon from '../../assets/images/instagram-icon.svg';
import { Link } from 'react-router-dom';

const Footer: FunctionComponent = () => {
  return (
    <StyledFooter>
      <Container>
        <Link to={'/'}>
          <Logo />
        </Link>
        <Nav>
          <List>
            {navItems.map(({ title, path }, i) => (
              <ListItem key={i}>
                <StyledLink to={path}>{title}</StyledLink>
              </ListItem>
            ))}
          </List>
        </Nav>
        <Copyright>&#169; {text.COPYRIGHT}</Copyright>
      </Container>
      <ContactContainer>
        <Number>{text.PHONE_NUMBER}</Number>
        <LinksContainer>
          <SocialLink src={WhatsappIcon} />
          <SocialLink src={IntagramIcon} />
          <SocialLink src={TelegramIcon} />
          <SocialLink src={ViberIcon} />
        </LinksContainer>
        <ColumnContainer>
          <Title>{text.ADDRESS}</Title>
          <Paragraph>{text.ADDRESS_TEXT}</Paragraph>
        </ColumnContainer>
        <ColumnContainer>
          <Title>{text.EMAIL}</Title>
          <Paragraph>{text.EMAIL_TEXT}</Paragraph>
        </ColumnContainer>
      </ContactContainer>
    </StyledFooter>
  );
};

export default Footer;
