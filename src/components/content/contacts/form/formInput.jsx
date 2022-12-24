import React from 'react';
import { showError } from './show-error-fn';

const FormInput = function ({
  type,
  placeholder,
  classNameInput,
  id,
  classNameLabel,
  labelText,
  name,
  propsForm,
  lang,
  errors,
}) {
  return (
    <div className="input-item">
      <div className={`input-item__error-text ${errors[name] ? 'error' : ''}`}>
        {showError(errors, name, lang)}
      </div>
      <label htmlFor={id} className={`input-item__label ${classNameLabel ? classNameLabel : ''}`}>
        {labelText}
      </label>
      <input
        {...propsForm}
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`input-item__input ${classNameInput ? classNameInput : ''}`}
      />
    </div>
  );
};

export default FormInput;
