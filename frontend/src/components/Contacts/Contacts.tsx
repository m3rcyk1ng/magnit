import { FunctionComponent, useEffect, useState } from 'react';
import { Container } from '../../index.styles';
import { text } from '../../utils/Text';
import {
  ContactsWrapper,
  ContactTextRow,
  ContactsContainer,
  ContactButton,
  LocationWrapper,
  ContactsTitle,
  ContactsMainTitle
} from './Contacts.styles';
import { CONTACTS } from './Contacts.constants';
import { Location } from './Location';
import Loader from '../Loader/Loader';
import ContactDialog from '../ContactDialog/ContactDialog';

const Contacts: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(setIsLoading, 1500, false);
  }, []);

  const handleTogglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <Container>
        <ContactsMainTitle>{text.CONTACTS}</ContactsMainTitle>
        {isLoading ? (
          <Loader />
        ) : (
          <ContactsWrapper transition={!isLoading}>
            <LocationWrapper>
              <Location />
            </LocationWrapper>
            <ContactsContainer>
              <ContactsTitle>{text.MAGNIT_OOO}</ContactsTitle>
              {CONTACTS.map((el, i) => (
                <ContactTextRow key={i}>{el}</ContactTextRow>
              ))}
              <ContactButton onClick={handleTogglePopup}>{text.CONTACT}</ContactButton>
            </ContactsContainer>
          </ContactsWrapper>
        )}
      </Container>
      <ContactDialog isOpen={isOpen} onClose={handleTogglePopup} />
    </>
  );
};

export default Contacts;
