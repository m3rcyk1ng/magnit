import {FunctionComponent} from 'react';
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
  ColumnContainer,
  Title,
  Paragraph,
  Email,
} from './Footer.styles';
import {navItems} from '../../utils/NavItems';
import {text} from '../../utils/Text';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';

const Footer: FunctionComponent = () => {
  const width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
  const mobile = width <= 500;

  function handleNavClick() {
    window.scrollTo(0, 0);
  }

  return (
    <StyledFooter>
      <Container>
        <Link to={'/'} style={{maxWidth: 'max-content'}}>
          <Logo/>
        </Link>
        <Nav>
          <List>
            {navItems.map(({title, path}, i) => (
              <ListItem key={i} onClick={handleNavClick}>
                <StyledLink to={path}>{title}</StyledLink>
              </ListItem>
            ))}
          </List>
        </Nav>
        {!mobile && <Copyright>&#169; {text.COPYRIGHT}</Copyright>}
      </Container>
      <ContactContainer>
        <Number href={`tel:${text.NUMBER}`}>{text.PHONE_NUMBER}</Number>
        <Paragraph/>
        <ColumnContainer>
          <Title>{text.ADDRESS}</Title>
          <Paragraph>{text.ADDRESS_TEXT}</Paragraph>
        </ColumnContainer>
        <ColumnContainer>
          <Email href={`mailto:${text.EMAIL_TEXT}`}>{text.EMAIL}</Email>
          <Paragraph>{text.EMAIL_TEXT}</Paragraph>
        </ColumnContainer>
      </ContactContainer>
      {mobile && <Copyright>&#169; {text.COPYRIGHT}</Copyright>}
    </StyledFooter>
  );
};

export default Footer;
