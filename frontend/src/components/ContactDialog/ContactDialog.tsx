import { FunctionComponent } from 'react';
import {
  ContactDialogTitle,
  ContactDialogWrapper,
  ContactForm,
  CloseButton,
  ContactInputsRow,
  ContactDialogButtonSend,
  ContactDialogFormContainer,
} from './ContactDialog.styles';
import { text } from '../../utils/Text';
import ContactImageBg from '../../assets/images/contactbg.png';
import { IContactDialog } from './ContactDialog.interfaces';
import { FormProvider, useForm, Controller } from 'react-hook-form';

const ContactDialog: FunctionComponent<IContactDialog> = ({ isOpen, onClose }) => {
  const formMethods = useForm();
  const { watch, setValue, handleSubmit, control, formState, reset } = formMethods;

  const handleFormSubmit = () => {
    console.log('success');
    onClose();
  };

  return (
    <ContactDialogWrapper isOpen={isOpen}>
      <FormProvider {...formMethods}>
        <ContactForm ContactImageBg={ContactImageBg} noValidate onSubmit={handleSubmit(handleFormSubmit)}>
          <ContactDialogTitle>{text.CONTACT_US}</ContactDialogTitle>
          <p>{text.CONTACT_DESCRIPTION}</p>
          <ContactDialogFormContainer>
            <input name={'name'} placeholder={text.NAME} />
            <ContactInputsRow>
              <input name={'email'} placeholder={text.EMAIL} />
              <input name={'email'} placeholder={text.PHONE} />
            </ContactInputsRow>
            <input placeholder={text.TOPIC} />
            <textarea placeholder={text.YOUR_MESSAGE} rows={4} />
            <ContactDialogButtonSend type={'submit'}>{text.SEND}</ContactDialogButtonSend>
          </ContactDialogFormContainer>
          <CloseButton onClick={onClose} />
        </ContactForm>
      </FormProvider>
    </ContactDialogWrapper>
  );
};

export default ContactDialog;
