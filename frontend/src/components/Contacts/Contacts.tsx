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
import { Fade, Slide } from 'react-awesome-reveal';

const Contacts: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isStartLoading , setStartLoading] = useState(false);

  useEffect(() => {
    if (isStartLoading) {
      setTimeout(setIsLoading, 1000, false);
    }
  }, [isStartLoading]);

  const handleTogglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <Container>
        <Slide duration={1500} onVisibilityChange={() => setTimeout(setStartLoading, 1500, true)} triggerOnce>
          <ContactsMainTitle>{text.CONTACTS}</ContactsMainTitle>
        </Slide>
        {isStartLoading ? (
          <Loader />
        ) : null }
        {isLoading ? <div /> : (
          <ContactsWrapper transition={!isLoading}>
            <Fade delay={1000} duration={2000} direction={'up'}>
            <LocationWrapper>
              <Location />
            </LocationWrapper>
            </Fade>
            <Fade duration={1000} cascade delay={2000} direction={'up'}>
            <ContactsContainer>
              <ContactsTitle>{text.MAGNIT_OOO}</ContactsTitle>
              {CONTACTS.map((el, i) => (
                <ContactTextRow key={i}>{el}</ContactTextRow>
              ))}
              <ContactButton onClick={handleTogglePopup}>{text.CONTACT}</ContactButton>
            </ContactsContainer>
            </Fade>
          </ContactsWrapper>
        )}
      </Container>
      <ContactDialog isOpen={isOpen} onClose={handleTogglePopup} />
    </>
  );
};

export default Contacts;
