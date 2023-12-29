import React, { useLayoutEffect, useRef } from 'react';
import { useState } from 'react';
import { MenuData } from '../../data/menu-data';
import { arrowSVG } from './arrowSVG';
import MenuItem from './NavMenuItem';
import { useScrollAnimations } from '../../hooks/useScrollAnimations';
import { useScrollHandlers } from '../../hooks/useScrollHandlers';

const NavMenu = ({ setLastScrollValue, customClass, setVisitParth, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuTranslateY, setMenuTranslateY] = useState(0);
  const { visitParth } = useScrollHandlers(() => {}, 0);
  const heightNavMenu = useRef();
  const setCSSvalues = useScrollAnimations();
  console.log(visitParth);
  const onClickHandler = () => {
    if (isOpen) {
      setMenuTranslateY(heightNavMenu.current.offsetHeight);
    } else {
      setMenuTranslateY(0);
    }
    setIsOpen((prev) => !prev);
  };

  const scrollToBlock = (event, step) => {
    event.preventDefault();
    setIsOpen(false);
    document.documentElement.scrollTo(0, step);
    setLastScrollValue(step);
    setCSSvalues(step);
    setVisitParth(`parth-${step}`);
    setMenuTranslateY(heightNavMenu.current.offsetHeight);
  };

  const onResize = () => {
    if (!isOpen) setMenuTranslateY(heightNavMenu.current.offsetHeight);
  };

  useLayoutEffect(() => {
    const heightNawMenu = heightNavMenu.current.offsetHeight;
    setMenuTranslateY(heightNawMenu);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [lang]);

  return (
    <nav
      style={{ transform: `translateY(-${menuTranslateY}px)` }}
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
        onClick={onClickHandler}
        className="menu__btn"
        dangerouslySetInnerHTML={{
          __html: arrowSVG,
        }}
      ></button>
    </nav>
  );
};

export default NavMenu;
