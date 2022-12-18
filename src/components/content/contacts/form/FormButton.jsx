import React from 'react';
const FormButton = function ({ classNameButton, children, type, OnClickFn }) {
  return (
    <button
      type={type}
      onClick={OnClickFn}
      className={`input-item__button ${classNameButton ? classNameButton : ''}`}
    >
      {children}
    </button>
  );
};

export default FormButton;
