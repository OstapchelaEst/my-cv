import React, { useEffect, useState } from 'react';
import './response-statys-styles.scss';
const ResponseStatus = ({ payload, setClose, setAddedValue }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  const close = () => {
    setVisible(false);
    setAddedValue(200);
    setTimeout(() => {
      setClose(false);
    }, 300);
  };
  return (
    <div className={`response-status ${visible ? 'visible' : ''}`}>
      <div className="response-status__body">
        <div className="response-status__payload">{payload}</div>
        <button type="button" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ResponseStatus;
