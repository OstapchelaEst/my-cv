import React from 'react';
const MenuItem = ({ fnScroll, name, scrollValue }) => {
  return (
    <li className="menu__item">
      <a
        href="/"
        className="menu__link"
        onClick={(e) => {
          fnScroll(e, scrollValue);
        }}
      >
        {name}
      </a>
    </li>
  );
};

export default MenuItem;
