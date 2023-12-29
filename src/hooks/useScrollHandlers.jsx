import { useCallback, useContext, useRef, useState } from 'react';
import { arrScrollValues } from '../data/menu-data';
import { BlockScrollProvider } from '../providers/BlockScrollProvider';

export const useScrollHandlers = (callback, scrollDelay) => {
  const { isScrollAllow, setScrollAllow } = useContext(BlockScrollProvider);

  const [visitParth, setVisitParth] = useState('parth');
  const lastScrollValue = useRef(0);
  const startTouchCordsY = useRef(0);
  const startTouchCordsX = useRef(0);

  const isVisit = (scrollValue, arrScrollValues) => {
    if (arrScrollValues.includes(scrollValue)) {
      setVisitParth(`parth-${scrollValue}`);
    } else {
      setVisitParth(`parth`);
    }
  };

  const scrollOnWheel = (event) => {
    if (!isScrollAllow) return null;
    const countYscroll = event.deltaY;
    if (countYscroll > 0 && lastScrollValue.current < 1200) {
      lastScrollValue.current += 200;
    } else if (countYscroll < 0 && lastScrollValue.current > 0) {
      lastScrollValue.current -= 200;
    }
    document.documentElement.scrollTop = lastScrollValue.current;
    isVisit(lastScrollValue.current, arrScrollValues);
    callback(lastScrollValue.current);
    setScrollAllow(false);

    setTimeout(() => {
      setScrollAllow(true);
    }, scrollDelay);
  };

  const scrollOnTouch = (event) => {
    if (!isScrollAllow) return null;

    const touchEndCordsY = event.changedTouches[0].clientY;
    const touchEndCordsX = event.changedTouches[0].clientX;
    const axisY = Math.abs(startTouchCordsY.current - touchEndCordsY);
    const axisX = Math.abs(startTouchCordsX.current - touchEndCordsX);
    if (axisY < axisX) return;
    if (axisY < 20) return;
    if (startTouchCordsY.current === touchEndCordsY) return;
    if (startTouchCordsY.current > touchEndCordsY) {
      if (lastScrollValue.current < 1200) {
        lastScrollValue.current += 200;
      }
    } else if (lastScrollValue.current > 0) {
      lastScrollValue.current -= 200;
    }
    callback(lastScrollValue.current);
    isVisit(lastScrollValue.current, arrScrollValues);
  };

  const setStartTouchCords = useCallback((event) => {
    startTouchCordsY.current = event.changedTouches[0].clientY;
    startTouchCordsX.current = event.changedTouches[0].clientX;
  }, []);

  const setLastScrollValue = (value) => {
    lastScrollValue.current = value;
  };

  return {
    scrollOnTouch,
    scrollOnWheel,
    setStartTouchCords,
    setLastScrollValue,
    setVisitParth,
    visitParth,
  };
};
