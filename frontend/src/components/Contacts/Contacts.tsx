import {FunctionComponent, useEffect, useState} from 'react';
import { Container } from '../../index.styles';
import { text } from '../../utils/Text';
import {
  ContactsWrapper,
  ContactTextRow,
  ContactsContainer,
  ContactButton,
  LocationWrapper,
} from './Contacts.styles';
import { CONTACTS } from './Contacts.constants';
import { Location } from './Location';
import Loader from "../Loader/Loader";
import ContactDialog from "../ContactDialog/ContactDialog";

const Contacts: FunctionComponent = () => {
  const [isLoading , setIsLoading] = useState(true);
  const [isContactBtnClick , setIsContactBtnClick] = useState(true);
  useEffect(() => {
    setTimeout(setIsLoading, 1500, false)
  }, [])

  const renderContactDialog = () => {
    if (isContactBtnClick) {
      return <ContactDialog />
    }
    return null;
  }

  return (
    <Container>
      <h2>{text.CONTACTS}</h2>
      {isLoading ? <Loader /> : <ContactsWrapper transition={!isLoading}>
        <LocationWrapper>
          <Location />
        </LocationWrapper>
        <ContactsContainer>
          <h3>{text.MAGNIT_OOO}</h3>
          {CONTACTS.map((el, i) => (
            <ContactTextRow key={i}>{el}</ContactTextRow>
          ))}
          <ContactButton onClick={() => setIsContactBtnClick(true)}>{text.CONTACT}</ContactButton>
        </ContactsContainer>
      </ContactsWrapper>}
      {renderContactDialog()}
    </Container>
  );
};

export default Contacts;
