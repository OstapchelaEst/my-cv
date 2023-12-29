import React, { useContext, useRef, useState } from 'react';
import FormInput from './formInput';
import FormButton from './FormButton';
import TextArea from './TextArea';
import emailjs from '@emailjs/browser';
import './form-styles.scss';
import { useForm } from 'react-hook-form';
import { i18ObjContacts } from '../../../../data/contacts';
import { BlockScrollProvider } from '../../../../providers/BlockScrollProvider';
import { Loader } from '../../../Loader/Loader';
import IsLoadingIMG from '../../../../assets/projectsPhotos/isLoadingGifTwo.gif';
import ResponseStatus from '../../show-response-status/ResponseStatus';

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

const FormContact = ({ lang, className }) => {
  const { setScrollAllow } = useContext(BlockScrollProvider);
  const [isLoading, setIsLoading] = useState(false);
  const [responsePayload, setResponsePayload] = useState(null);
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const finishRequest = (message) => {
    setResponsePayload(message);
    setIsLoading(false);
  };

  function sendEmail() {
    setIsLoading(true);
    setScrollAllow(false);
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
              ...register('form-contact-name', {
                required: true,
                validate: {
                  customFn: (value) => validationName(value),
                },
              }),
            }}
            name={'form-contact-name'}
            labelText={i18ObjContacts[lang].inputName}
            id={'form-contact-name'}
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
        {isLoading && <Loader picture={IsLoadingIMG} />}
        {responsePayload && (
          <ResponseStatus setClose={setResponsePayload} payload={responsePayload} />
        )}
      </div>
    </>
  );
};

export default FormContact;
