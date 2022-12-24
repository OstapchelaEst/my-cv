import React from 'react';
const MenuItem = ({ fnScroll, name, scrollValue }) => {
  return (
    <li className="menu__item">
      <a
        href="/"
        className={`menu__link ${'parth-' + name.toLowerCase()}`}
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
