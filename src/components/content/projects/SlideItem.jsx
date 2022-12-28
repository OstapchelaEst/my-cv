import React from 'react';
const SlideItem = function ({ name, description, src, tools, url }) {
  return (
    <div className="slide-item">
      <div className="slide-item__title">{name}</div>
      <img src={src} alt="" />
      <div className="slide-item__description">{description}</div>
      <div className="slide-item__tools">{tools}</div>
      <a href={url} target="__blank" className="slide-item__link">
        Show
      </a>
    </div>
  );
};

export default SlideItem;
