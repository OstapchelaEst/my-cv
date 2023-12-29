import React, { useEffect, useState } from 'react';
import './loader-styles.scss';

export const Loader = ({ picture }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div className={`is-loading ${visible ? 'visible' : ''}`}>
      <div className="is-loading__body" style={{ backgroundImage: `url(${picture})` }}></div>
    </div>
  );
};
