import React from 'react';
import { useEffect, useState } from 'react';
import { MenuData } from '../../data/menu-data';
import MenuItem from './NavMenuItem';

const NavMenu = ({ fnScrollMode }) => {
  const [hiddenMenu, setHiddenMenu] = useState('0px');
  const arrow = document.querySelector('.menu__btn');

  useEffect(() => {
    setHiddenMenu(document.querySelector('.menu__list').offsetHeight + 'px');
    window.onresize = () =>
      setHiddenMenu(document.querySelector('.menu__list').offsetHeight + 'px');
  }, []);

  function Menu() {
    if (hiddenMenu === '0px') {
      closeMenu();
    } else {
      showMenu();
    }
  }

  function scrollToBlock(event, step) {
    console.log('work', event, step);
    closeMenu();
    event.preventDefault();
    fnScrollMode('nav-menu');
    setTimeout(() => {
      fnScrollMode('main');
    }, 300);
    document.documentElement.scrollTo(0, step);
  }

  function closeMenu() {
    setHiddenMenu(document.querySelector('.menu__list').offsetHeight + 'px');
    arrow.style.transform = 'rotate(0deg)';
    arrow.style.animationName = 'btnJumpDown';
  }

  function showMenu() {
    setHiddenMenu('0px');
    arrow.style.transform = 'rotate(180deg)';
    arrow.style.animationName = 'btnJump';
  }

  return (
    <nav className="menu" style={{ top: `-${hiddenMenu}` }}>
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
          __html: `<svg width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1792 1792" style="enable-background:new 0 0 1792 1792;" xml:space="preserve">
                    <path d="M895.8,1696l371.6-546.4h-259.5c-13.5-5.7-25.6-13.2-30.6-22.4c-10.3-20.3-6.4-88.3,75.1-215
                    c102.2-158.8,136.7-315.4,102.2-465.6C1103,220.6,910.4,101,902.2,96L777.6,300c1.1,0.7,115,73.3,143.8,199.7
                    c19.6,85.1-4.3,180.5-70.1,283C773,904,733.9,1012.2,733.9,1105.1c0,15.3,1.4,29.9,3.6,44.1H524.6L895.8,1696z"/>
                  </svg>
                `,
        }}
      ></button>
    </nav>
  );
};

export default NavMenu;
