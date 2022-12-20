import React, { useRef, useState } from 'react';
import FormInput from './formInput';
import FormButton from './FormButton';
import TextArea from './TextArea';
import emailjs from '@emailjs/browser';
import './form-styles.scss';
import { useForm } from 'react-hook-form';

const validationName = (str) => {
  console.log('VALUE NAME', str);
  return str.length >= 2 ? true : 'Too short';
};
const validationText = (str) => {
  console.log(str.length);
  return str.length >= 5 ? true : 'So little ? :(';
};
const validationEmail = (str) => {
  const template = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{1,4})$/;
  return template.test(str) ? true : 'Not valid email';
};

const FormContact = function ({
  className,
  setOpenIsLoading,
  setAddedValue,
  setResponsePayload,
  setShowResponse,
}) {
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
    setAddedValue(0);
    emailjs
      .sendForm('default_service', 'template_hckb14r', form.current, 'Xm8_bmuuMzAR29I3L')
      .then(() => {
        reset();
        finishRequest('Your message has been successfully delivered!');
      })
      .catch(() => {
        finishRequest('Uuuups, something is wrong with the service, repeat the attempt later :(');
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
            errorText={errors}
            name={'form-contact-name'}
            labelText={'You name:'}
            id={'form-contact-name'}
            type={'text'}
            placeholder={'Till'}
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
            errorText={errors}
            name={'form-contact-email'}
            labelText={'You email:'}
            id={'form-contact-email'}
            type={'email'}
            placeholder={'Lindemann@example.com'}
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
            errorText={errors}
            name={'form-contact-message'}
            labelText={'You message:'}
            id={'form-contact-message'}
            classNameInput={'custom-text-area'}
            rw={3}
          />
          <FormButton type={'submit'}>Write me</FormButton>
        </form>
      </div>
    </>
  );
};

export default FormContact;
