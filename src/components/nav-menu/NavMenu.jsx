import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { MenuData } from '../../data/menu-data';
import { arrowSVG } from './arrowSVG';
import MenuItem from './NavMenuItem';

const NavMenu = ({ setLastScrollValue, setCSSvalues, customClass, setVisitParth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [howManuPxTranslate, setHowManuPxTranslate] = useState(0);
  const heightNavMenu = useRef();
  function Menu() {
    if (isOpen) {
      setHowManuPxTranslate(heightNavMenu.current.offsetHeight);
    } else {
      setHowManuPxTranslate(0);
    }
    setIsOpen((prev) => !prev);
  }

  const scrollToBlock = (event, step) => {
    event.preventDefault();
    setIsOpen(false);
    document.documentElement.scrollTo(0, step);
    setLastScrollValue(step);
    setCSSvalues(step);
    setVisitParth(`parth-${step}`);
  };
  const onResize = () => {
    if (!isOpen) setHowManuPxTranslate(heightNavMenu.current.offsetHeight);
  };
  useEffect(() => {
    const heightNawMenu = heightNavMenu.current.offsetHeight;
    setHowManuPxTranslate(heightNawMenu);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <nav
      style={{ transform: `translateY(-${howManuPxTranslate}px)` }}
      className={`menu ${isOpen ? 'open' : 'close'} ${customClass ? customClass : ''}`}
    >
      <div className="test-class">
        <ul className="menu__list" ref={heightNavMenu}>
          {MenuData.map((a) => {
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
      </div>
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
