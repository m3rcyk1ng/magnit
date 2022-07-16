import React from 'react';
import {
  StyledFooter,
  Container,
  Logo,
  Nav,
  List,
  ListItem,
  Link,
  Copyright,
  RowContainer,
  Number,
  LinksContainer,
  SocialLink
} from './Footer.styles';
import { navItems } from '../../utils/NavItems';
import { text } from '../../utils/Text';
import WhatsappIcon from '../../assets/images/whatsapp.svg';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo />
        <Nav>
          <List>
            {navItems.map(({ title, path }, i) => (
              <ListItem key={i}>
                <Link href={path} offset={95}>
                  {title}
                </Link>
              </ListItem>
            ))}
          </List>
        </Nav>
        <Copyright>&#169; {text.COPYRIGHT}</Copyright>
      </Container>
      <RowContainer>
        <Number>{text.PHONE_NUMBER}</Number>
        <LinksContainer>
          <SocialLink src={WhatsappIcon}/>
        </LinksContainer>
      </RowContainer>
    </StyledFooter>
  );
}

export default Footer;
