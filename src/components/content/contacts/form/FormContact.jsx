import React, { useRef } from 'react';
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

const FormContact = function ({ className }) {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  function sendEmail() {
    emailjs.sendForm('default_service', 'template_hckb14r', form.current, 'Xm8_bmuuMzAR29I3L').then(
      (result) => {
        console.log('All ok');
      },
      (error) => {
        console.log('Error');
      }
    );
  }
  return (
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
  );
};

export default FormContact;
