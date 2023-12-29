import React, { useContext, useEffect, useState } from 'react';
import './response-statys-styles.scss';
import { BlockScrollProvider } from '../../../providers/BlockScrollProvider';

const ResponseStatus = ({ payload, setClose }) => {
  const { setScrollAllow } = useContext(BlockScrollProvider);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const close = () => {
    setVisible(false);
    setScrollAllow(true);
    setTimeout(() => {
      setClose(null);
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
