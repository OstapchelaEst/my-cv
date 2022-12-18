import React, { useEffect, useState } from 'react';
import './Is-loading-styles.scss';
const IsLoading = ({ picture }) => {
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

export default IsLoading;
