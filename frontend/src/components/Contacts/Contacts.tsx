import { FunctionComponent } from 'react';
import { Container } from '../../index.styles';
import { text } from '../../utils/Text';
import { ContactsWrapper, ContactTextRow, ContactsContainer, ContactButton } from './Contacts.styles'
import { CONTACTS } from './Contacts.constants';
import { MagnitPlacemark } from './Placemark';

const Contacts: FunctionComponent = () => {
  return (
      <Container>
        <h2>{text.CONTACTS}</h2>
        <ContactsWrapper>
            <MagnitPlacemark />
          <ContactsContainer>
            <h3>{text.MAGNIT_OOO}</h3>
          {CONTACTS.map((el) => <ContactTextRow>{el}</ContactTextRow>)}
            <ContactButton>{text.CONTACT}</ContactButton>
          </ContactsContainer>
        </ContactsWrapper>
      </Container>
  );
}

export default Contacts;
