import {FunctionComponent} from 'react';
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
  LeftWrapper,
  RightWrapper,
} from './ContactDialog.styles';
import {text} from '../../utils/Text';
import {IContactDialog, IForm} from './ContactDialog.interfaces';
import {FormProvider, useForm} from 'react-hook-form';

const ContactDialog: FunctionComponent<IContactDialog> = ({isOpen, onClose}) => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
      link: '',
    },
    mode: 'onChange',
  });

  const {
    register,
    formState: {errors},
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
          noValidate
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <ContactDialogTitle>{text.CONTACT_US}</ContactDialogTitle>
          <div style={{display: 'flex'}}>
            <LeftWrapper>
              <p>{text.CONTACT_DESCRIPTION}</p>
              <ContactDialogFormContainer>
                <InputContainer>
                  <ContactDialogInput
                    {...register('name', {required: 'Укажите ваше имя'})}
                    type={'text'}
                    name={'name'}
                    placeholder={text.NAME}
                    style={{border: errors.name?.message ? '1px solid red' : ''}}
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
                      style={{border: errors.email?.message ? '1px solid red' : ''}}
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
                      style={{border: errors.phone?.message ? '1px solid red' : ''}}
                    />
                    <span>{errors.phone?.message}</span>
                  </InputContainer>
                </ContactInputsRow>
                <InputContainer>
                  <ContactDialogInput
                    {...register('topic', {required: 'Заполните тему обращения'})}
                    type={'text'}
                    name={'topic'}
                    placeholder={text.TOPIC}
                    style={{border: errors.topic?.message ? '1px solid red' : ''}}
                  />
                  <span>{errors.topic?.message}</span>
                </InputContainer>
                <TextareaContainer>
                  <ContactDialogTextarea
                    {...register('message', {required: 'Поле не может быть пустым'})}
                    name={'message'}
                    placeholder={text.YOUR_MESSAGE}
                    rows={4}
                    style={{border: errors.message?.message ? '1px solid red' : ''}}
                  />
                  <span>{errors.message?.message}</span>
                </TextareaContainer>
              </ContactDialogFormContainer>
              <CloseButton onClick={handleClose}/>
            </LeftWrapper>
            <RightWrapper>
              <p>{text.RESUME_LINK}</p>
              <InputContainer>
                <ContactDialogInput
                  {...register('link')}
                  type={'url'}
                  name={'link'}
                  placeholder={text.RESUME_LINK_DESC}
                  style={{border: errors.topic?.message ? '1px solid red' : '', marginTop: '3.25rem'}}
                />
              </InputContainer>
            </RightWrapper>
          </div>
          <ContactDialogButtonSend type={'submit'}>{text.SEND}</ContactDialogButtonSend>
        </ContactForm>
      </FormProvider>
    </ContactDialogWrapper>
  );
};

export default ContactDialog;
