import { FunctionComponent } from 'react';
import {
  ContactDialogTitle,
  ContactDialogWrapper,
  ContactDialogImage,
  ContactDialogContainer,
  ContactDialogInput,
  ContactDialogPersonCont
} from './ContactDialog.styles';
import { text } from '../../utils/Text';
import ContactImageBg from '../../assets/images/contactbg.png';

const ContactDialog: FunctionComponent = () => {

  return (
    <ContactDialogWrapper>
      <ContactDialogImage ContactImageBg={ContactImageBg}/>
      <ContactDialogTitle>{text.CONTACT_US}</ContactDialogTitle>
      <ContactDialogContainer>
        <p>{text.CONTACT_DESCRIPTION}</p>
        <ContactDialogPersonCont>
          <label htmlFor={'name'}>{'jopa'}</label>
          <ContactDialogInput name={'name'}/>
          <label htmlFor={'email'}>{'jopa'}</label>
          <ContactDialogInput name={'email'}/>
        </ContactDialogPersonCont>
        <ContactDialogInput placeholder={text.TOPIC}/>
      </ContactDialogContainer>
    </ContactDialogWrapper>

  );
}

export default ContactDialog;
