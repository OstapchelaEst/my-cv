import React from 'react';
import { useState } from 'react';
import { MenuData } from '../../data/menu-data';
import { arrowSVG } from './arrowSVG';
import MenuItem from './NavMenuItem';

const NavMenu = ({ setLastScrollValue, setCSSvalues, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  function Menu() {
    setIsOpen((prev) => !prev);
  }

  function scrollToBlock(event, step) {
    event.preventDefault();
    setIsOpen(false);
    document.documentElement.scrollTo(0, step);
    setLastScrollValue(step);
    setCSSvalues(step);
  }

  return (
    <nav className={`menu ${isOpen ? 'open' : 'close'} ${customClass ? customClass : ''}`}>
      <ul className="menu__list">
        {MenuData.map((a, i) => {
          return (
            <MenuItem
              key={a.name + a.scrollValue}
              name={a.name}
              scrollValue={a.scrollValue}
              fnScroll={scrollToBlock}
            />
          );
        })}
      </ul>
      <button
        onClick={Menu}
        className="menu__btn"
        dangerouslySetInnerHTML={{
          __html: arrowSVG,
        }}
      ></button>
    </nav>
  );
};

export default NavMenu;
