import React, { useRef, useState } from 'react';
import FormInput from './formInput';
import FormButton from './FormButton';
import TextArea from './TextArea';
import emailjs from '@emailjs/browser';
import './form-styles.scss';
import { useForm } from 'react-hook-form';
import { i18ObjContacts } from '../../../../data/contacts';

const validationName = (str) => {
  return str.length >= 2 ? true : JSON.stringify({ en: 'Too short', ru: 'Слишком короткое' });
};
const validationText = (str) => {
  return str.length >= 5 ? true : JSON.stringify({ en: 'So little ? :(', ru: 'Так мало? :(' });
};
const validationEmail = (str) => {
  const template = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{1,4})$/;
  return template.test(str)
    ? true
    : JSON.stringify({ en: 'Not valid email', ru: 'Некорректный адрест почты' });
};

const FormContact = ({
  lang,
  className,
  setOpenIsLoading,
  setPermissionScroll,
  setResponsePayload,
  setShowResponse,
}) => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const finishRequest = (message) => {
    setShowResponse(true);
    setResponsePayload(message);
    setOpenIsLoading(false);
  };

  function sendEmail() {
    setOpenIsLoading(true);
    setPermissionScroll(false);
    emailjs
      .sendForm('default_service', 'template_hckb14r', form.current, 'Xm8_bmuuMzAR29I3L')
      .then(() => {
        reset();
        finishRequest(i18ObjContacts[lang].successfullyResponse);
      })
      .catch(() => {
        finishRequest(i18ObjContacts[lang].errorResponse);
      });
  }
  return (
    <>
      <div className="form-wrapper">
        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className={`default-form ${className ? className : ''}`}
        >
          <FormInput
            propsForm={{
              ...register('name', {
                required: true,
                validate: {
                  customFn: (value) => validationName(value),
                },
              }),
            }}
            name={'name'}
            labelText={i18ObjContacts[lang].inputName}
            id={'name'}
            type={'text'}
            placeholder={'Till'}
            lang={lang}
            errors={errors}
          />

          <FormInput
            propsForm={{
              ...register('form-contact-email', {
                required: true,
                validate: {
                  customFn: (value) => validationEmail(value),
                },
              }),
            }}
            name={'form-contact-email'}
            labelText={i18ObjContacts[lang].inputEmail}
            id={'form-contact-email'}
            type={'email'}
            placeholder={'Lindemann@example.com'}
            lang={lang}
            errors={errors}
          />

          <TextArea
            propsForm={{
              ...register('form-contact-message', {
                required: true,
                validate: {
                  customFn: (value) => validationText(value),
                },
              }),
            }}
            name={'form-contact-message'}
            labelText={i18ObjContacts[lang].inputMessage}
            id={'form-contact-message'}
            classNameInput={'custom-text-area'}
            rw={3}
            lang={lang}
            errors={errors}
          />
          <FormButton type={'submit'}>{i18ObjContacts[lang].buttonWrite}</FormButton>
        </form>
      </div>
    </>
  );
};

export default FormContact;
