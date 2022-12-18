import React from 'react';
const FormInput = function ({
  type,
  placeholder,
  classNameInput,
  id,
  classNameLabel,
  labelText,
  errorText,
  name,
  propsForm,
}) {
  return (
    <div className="input-item">
      <div className={`input-item__error-text ${errorText[name] ? 'error' : ''}`}>
        {errorText[name] ? (errorText[name].message ? errorText[name].message : 'Requerid') : ''}
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
