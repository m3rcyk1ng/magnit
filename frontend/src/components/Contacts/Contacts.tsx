import { FunctionComponent } from 'react';
import { Container } from '../../index.styles';
import { text } from '../../utils/Text';
import {
  ContactsWrapper,
  ContactTextRow,
  ContactsContainer,
  ContactButton,
} from './Contacts.styles';
import { CONTACTS } from './Contacts.constants';
import { Location } from './Location';

const Contacts: FunctionComponent = () => {
  return (
    <Container>
      <h2>{text.CONTACTS}</h2>
      <ContactsWrapper>
        <Location />
        <ContactsContainer>
          <h3>{text.MAGNIT_OOO}</h3>
          {CONTACTS.map((el, i) => (
            <ContactTextRow key={i}>{el}</ContactTextRow>
          ))}
          <ContactButton>{text.CONTACT}</ContactButton>
        </ContactsContainer>
      </ContactsWrapper>
    </Container>
  );
};

export default Contacts;
