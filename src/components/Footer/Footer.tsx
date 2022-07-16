import React from 'react';
import { StyledFooter, Container, Logo, Nav, List, ListItem, Link } from './Footer.styles';
import { navItems } from '../../utils/NavItems';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo />
        <Nav>
          <List>
            {navItems.map(({ title, path }) => (
              <ListItem>
                <Link href={path} offset={95}>
                  {title}
                </Link>
              </ListItem>
            ))}
          </List>
        </Nav>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
