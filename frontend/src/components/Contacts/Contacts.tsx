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
  const [isStartLoading, setStartLoading] = useState(false);
  const width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;

  const mobile = width <= 800;

  useEffect(() => {
    if (isStartLoading) {
      setTimeout(setIsLoading, 500, false);
    }
  }, [isStartLoading]);

  const handleTogglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <Container>
        <Slide duration={1500} onVisibilityChange={() => setTimeout(setStartLoading, 700, true)} triggerOnce
               direction={'left'}>
          <ContactsMainTitle>{text.CONTACTS}</ContactsMainTitle>
        </Slide>
        {!mobile && isStartLoading ? (
          <Loader/>
        ) : null}
        {isLoading ? <div/> : (
          <ContactsWrapper transition={!isLoading}>
            <Fade delay={1000} duration={1300} direction={'up'}>
              <LocationWrapper>
                <Location/>
              </LocationWrapper>
            </Fade>
            <Fade duration={1300} cascade delay={1000} direction={'up'}>
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
      <ContactDialog isOpen={isOpen} onClose={handleTogglePopup}/>
    </>
  );
};

export default Contacts;
