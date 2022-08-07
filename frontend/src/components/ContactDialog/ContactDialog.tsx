import { FunctionComponent } from 'react';
import {
  ContactDialogTitle,
  ContactDialogWrapper,
  ContactDialogContainer,
  ContactDialogInput,
  ContactDialogPersonCont,
  ContactForm,
  CloseButton,
  ContactInputsRow,
  ContactDialogTextarea,
  ContactDialogButtonSend,
} from './ContactDialog.styles';
import { text } from '../../utils/Text';
import ContactImageBg from '../../assets/images/contactbg.png';
import { IContactDialog } from './ContactDialog.interfaces';

const ContactDialog: FunctionComponent<IContactDialog> = ({ isOpen, onClose }) => {
  return (
    <ContactDialogWrapper isOpen={isOpen}>
      <ContactForm ContactImageBg={ContactImageBg}>
        <ContactDialogTitle>{text.CONTACT_US}</ContactDialogTitle>
        <ContactDialogContainer>
          <p>{text.CONTACT_DESCRIPTION}</p>
          <ContactDialogPersonCont>
            <ContactDialogInput name={'name'} placeholder={text.NAME} />
            <ContactInputsRow>
              <ContactDialogInput name={'email'} placeholder={text.EMAIL} />
              <ContactDialogInput name={'email'} placeholder={text.PHONE} />
            </ContactInputsRow>
          </ContactDialogPersonCont>
          <ContactDialogInput placeholder={text.TOPIC} />
          <ContactDialogTextarea placeholder={text.YOUR_MESSAGE} rows={4}/>
        </ContactDialogContainer>
        <ContactDialogButtonSend>{text.SEND}</ContactDialogButtonSend>
        <CloseButton onClick={onClose} />
      </ContactForm>
    </ContactDialogWrapper>
  );
};

export default ContactDialog;
