import { FunctionComponent } from 'react';
import {
  ContactDialogTitle,
  ContactDialogWrapper,
  ContactForm,
  CloseButton,
  ContactInputsRow,
  ContactDialogButtonSend,
  ContactDialogFormContainer,
  ContactDialogInput,
  ContactDialogTextarea,
  InputContainer,
  TextareaContainer,
} from './ContactDialog.styles';
import { text } from '../../utils/Text';
import ContactImageBg from '../../assets/images/contactbg.png';
import { IContactDialog } from './ContactDialog.interfaces';
import { FormProvider, useForm } from 'react-hook-form';

interface IForm {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

const ContactDialog: FunctionComponent<IContactDialog> = ({ isOpen, onClose }) => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
    },
    mode: 'onChange',
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = formMethods;

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleFormSubmit = (data: IForm) => {
    handleClose();
  };

  return (
    <ContactDialogWrapper isOpen={isOpen}>
      <FormProvider {...formMethods}>
        <ContactForm
          ContactImageBg={ContactImageBg}
          noValidate
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <ContactDialogTitle>{text.CONTACT_US}</ContactDialogTitle>
          <p>{text.CONTACT_DESCRIPTION}</p>
          <ContactDialogFormContainer>
            <InputContainer>
              <ContactDialogInput
                {...register('name', { required: 'Укажите ваше имя' })}
                type={'text'}
                name={'name'}
                placeholder={text.NAME}
                style={{ border: errors.name?.message ? '1px solid red' : '' }}
              />
              <span>{errors.name?.message}</span>
            </InputContainer>
            <ContactInputsRow>
              <InputContainer>
                <ContactDialogInput
                  {...register('email', {
                    required: 'Укажите ваш email',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Неверный формат почты',
                    },
                  })}
                  type={'email'}
                  name={'email'}
                  placeholder={text.EMAIL}
                  style={{ border: errors.email?.message ? '1px solid red' : '' }}
                />
                <span>{errors.email?.message}</span>
              </InputContainer>
              <InputContainer>
                <ContactDialogInput
                  {...register('phone', {
                    required: 'Укажите ваш номер телефона',
                    pattern: {
                      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      message: 'Некорректный номер телефона',
                    },
                  })}
                  type={'tel'}
                  name={'phone'}
                  placeholder={text.PHONE}
                  style={{ border: errors.phone?.message ? '1px solid red' : '' }}
                />
                <span>{errors.phone?.message}</span>
              </InputContainer>
            </ContactInputsRow>
            <InputContainer>
              <ContactDialogInput
                {...register('topic', { required: 'Заполните тему обращения' })}
                type={'text'}
                name={'topic'}
                placeholder={text.TOPIC}
                style={{ border: errors.topic?.message ? '1px solid red' : '' }}
              />
              <span>{errors.topic?.message}</span>
            </InputContainer>
            <TextareaContainer>
              <ContactDialogTextarea
                {...register('message', { required: 'Поле не может быть пустым' })}
                name={'message'}
                placeholder={text.YOUR_MESSAGE}
                rows={4}
                style={{ border: errors.message?.message ? '1px solid red' : '' }}
              />
              <span>{errors.message?.message}</span>
            </TextareaContainer>
            <ContactDialogButtonSend type={'submit'}>{text.SEND}</ContactDialogButtonSend>
          </ContactDialogFormContainer>
          <CloseButton onClick={handleClose} />
        </ContactForm>
      </FormProvider>
    </ContactDialogWrapper>
  );
};

export default ContactDialog;
