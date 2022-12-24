import React from 'react';
import { showError } from './show-error-fn';
const TextArea = function ({
  propsForm,
  placeholder,
  classNameInput,
  id,
  classNameLabel,
  labelText,
  rw,
  cl,
  name,
  errors,
  lang,
}) {
  return (
    <div className="input-item">
      <div className={`input-item__error-text ${errors[name] ? 'error' : ''}`}>
        {showError(errors, name, lang)}
      </div>
      <label htmlFor={id} className={`input-item__label ${classNameLabel ? classNameLabel : ''}`}>
        {labelText}
      </label>
      <textarea
        {...propsForm}
        name={name}
        rows={rw}
        cols={cl}
        id={id}
        placeholder={placeholder}
        className={`input-item__input ${classNameInput ? classNameInput : ''}`}
      ></textarea>
    </div>
  );
};

export default TextArea;
