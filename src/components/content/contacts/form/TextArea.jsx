import React from 'react';

const TextArea = function ({
  errorText,
  propsForm,
  placeholder,
  classNameInput,
  id,
  classNameLabel,
  labelText,
  rw,
  cl,
  name,
}) {
  return (
    <div className="input-item">
      <div className={`input-item__error-text ${errorText[name] ? 'error' : ''}`}>
        {errorText[name] ? (errorText[name].message ? errorText[name].message : 'Requerid') : ''}
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
