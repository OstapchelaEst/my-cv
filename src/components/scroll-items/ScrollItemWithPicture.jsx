import React from 'react';
import './with-picture-styles.scss';
const ItemWithPicture = ({ src, children, customClass }) => {
  return (
    <div className={`item block-picture-img ${customClass ? customClass : ''}`}>
      <div style={{ backgroundImage: `url(${src})` }} className="block-picture-img__picture"></div>
      {children}
    </div>
  );
};

export default ItemWithPicture;
