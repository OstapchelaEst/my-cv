import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { MenuData } from '../../data/menu-data';
import { arrowSVG } from './arrowSVG';
import MenuItem from './NavMenuItem';

const NavMenu = ({ setLastScrollValue, setCSSvalues, customClass, setVisitParth, lang }) => {
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
    setHowManuPxTranslate(heightNavMenu.current.offsetHeight);
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

  useEffect(() => {
    const heightNawMenu = heightNavMenu.current.offsetHeight;
    setHowManuPxTranslate(heightNawMenu);
  }, [lang]);
  return (
    <nav
      style={{ transform: `translateY(-${howManuPxTranslate}px)` }}
      className={`menu ${isOpen ? 'open' : 'close'} ${customClass ? customClass : ''}`}
    >
      <ul className="menu__list" ref={heightNavMenu}>
        {MenuData.map((a) => {
          return (
            <MenuItem
              key={a.name[lang] + a.scrollValue}
              name={a.name[lang]}
              customClassName={a.name.en}
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
