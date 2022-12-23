import React, { useRef, useEffect, useState, useCallback } from 'react';
import NavMenu from './components/nav-menu/NavMenu';
import ScrollItem from './components/scroll-items/ScrollItem';
import ItemWithPicture from './components/scroll-items/ScrollItemWithPicture';
import FirstScrean from './components/content/first-screan/FirstScrean';
import Symmary from './components/content/summary/Summary';
import Education from './components/content/education/Education';
import MyCertificates from './components/content/my-certificates/MyCertificates';
import Projects from './components/content/projects/Projects';
import Contacts from './components/content/contacts/Contacts';
import IsLoading from './components/isLoading/IsLoading';
import ResponseStatus from './components/content/show-response-status/ResponseStatus';

import EducationIMG from './assets/education1.png';
import SummaryIMG from './assets/summary__img.png';
import ContactIMG from './assets/contacts.svg';
import IsLoadingIMG from './assets/projectsPhotos/isLoadingGifTwo.gif';
import FullScreanButton from './components/full-screen/FullScreanButton';

function App() {
  const permissionToScrollFUnction = useRef(true);
  const lastScrollValue = useRef(0);
  const allItems = useRef([]);
  const startTouchCordsY = useRef(0);
  const startTouchCordsX = useRef(0);

  const [openIsLoading, setOpenIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [responsePayload, setResponsePayload] = useState('');

  const setLastScrollValue = useCallback((value) => {
    lastScrollValue.current = value;
  }, []);
  const setPermissionScroll = useCallback((value) => {
    permissionToScrollFUnction.current = value;
  }, []);
  const setStartTouchCords = useCallback((event) => {
    startTouchCordsY.current = event.changedTouches[0].clientY;
    startTouchCordsX.current = event.changedTouches[0].clientX;
  }, []);
  const scrollOnWheel = useCallback((event) => {
    if (permissionToScrollFUnction.current) {
      const countYscroll = event.deltaY;
      if (countYscroll > 0 && lastScrollValue.current < 1200) {
        lastScrollValue.current += 200;
      } else if (countYscroll < 0 && lastScrollValue.current > 0) {
        lastScrollValue.current -= 200;
      }
      document.documentElement.scrollTop = lastScrollValue.current;
      setCSSvalues(lastScrollValue.current);
      permissionToScrollFUnction.current = false;
      setTimeout(() => {
        permissionToScrollFUnction.current = true;
      }, 150);
    }
  }, []);
  const scrollOnTouch = useCallback((event) => {
    if (permissionToScrollFUnction.current) {
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
      setCSSvalues(lastScrollValue.current);
    }
  }, []);
  const setClosesCSSvalues = useCallback(() => {
    let zSpasing = -1000;
    let lastPos = zSpasing / 5;
    const zVals = [];
    return function (top) {
      let delta = lastPos - top;
      lastPos = top;
      allItems.current.forEach((e, i) => {
        zVals.push(i * zSpasing + zSpasing);
        zVals[i] += delta * -5;
        const frame = allItems.current[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpasing) / 30 ? 1 : 0,
          pointerEvents =
            zVals[i] < Math.abs(zSpasing) / 30 ? (zVals[i] <= -500 ? 'none' : 'all') : 'none';
        frame.setAttribute(
          'style',
          `
      transform:${transform}; 
      opacity:${opacity}; 
      pointer-events:${pointerEvents}
      `
        );
      });
    };
  }, []);

  const setCSSvalues = setClosesCSSvalues();

  useEffect(() => {
    document.body.classList.add('active');
    allItems.current = document.querySelectorAll('.item');
    setCSSvalues(0);
  }, []);

  return (
    <>
      {openIsLoading && <IsLoading picture={IsLoadingIMG} />}
      {showResponse && (
        <ResponseStatus
          setPermissionScroll={setPermissionScroll}
          setClose={setShowResponse}
          payload={responsePayload}
        />
      )}
      <div
        className="App"
        onWheel={scrollOnWheel}
        onTouchStart={setStartTouchCords}
        onTouchEnd={scrollOnTouch}
      >
        <FullScreanButton />
        <NavMenu setLastScrollValue={setLastScrollValue} setCSSvalues={setCSSvalues} />
        <div className="container">
          <section className="blocks">
            <ScrollItem>
              <FirstScrean />
            </ScrollItem>
            <ScrollItem>
              <Symmary />
            </ScrollItem>
            <ItemWithPicture src={SummaryIMG}></ItemWithPicture>
            <ScrollItem>
              <Education />
            </ScrollItem>
            <ItemWithPicture src={EducationIMG} customClass={'black_bg'}>
              <MyCertificates />
            </ItemWithPicture>
            <Projects />
            <ItemWithPicture src={ContactIMG} customClass={'black_bg'}>
              <Contacts
                setOpenIsLoading={setOpenIsLoading}
                setResponsePayload={setResponsePayload}
                setShowResponse={setShowResponse}
                setPermissionScroll={setPermissionScroll}
              />
            </ItemWithPicture>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
