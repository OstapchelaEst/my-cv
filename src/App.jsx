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
import ChooseLang from './components/choose-lang/ChoouseLang';
import { arrScrollValues } from './data/menu-data';
import ControllsMenu from './components/controlls-menu/controllsMenu';

function App() {
  const permissionToScrollFUnction = useRef(true);
  const lastScrollValue = useRef(0);
  const allItems = useRef([]);
  const startTouchCordsY = useRef(0);
  const startTouchCordsX = useRef(0);

  const [openIsLoading, setOpenIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [responsePayload, setResponsePayload] = useState('');
  const [lang, setLang] = useState('en');
  const [visitParth, setVisitParth] = useState('parth');
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
          vis = zVals[i] < Math.abs(zSpasing) / 30 ? 'visible' : 'hidden',
          pointerEvents =
            zVals[i] < Math.abs(zSpasing) / 30 ? (zVals[i] <= -500 ? 'none' : 'all') : 'none';
        frame.setAttribute(
          'style',
          `      
          transform:${transform}; 
          opacity:${opacity}; 
          visibility:${vis};
          pointer-events:${pointerEvents};
          `
        );
      });
    };
  }, []);
  const setCSSvalues = setClosesCSSvalues();
  const isVisit = useCallback((scrollValue, arrScrollValues) => {
    if (arrScrollValues.includes(scrollValue)) {
      setVisitParth(`parth-${scrollValue}`);
    } else {
      setVisitParth(`parth`);
    }
  }, []);
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
  const scrollOnWheel = useCallback(
    (event) => {
      if (permissionToScrollFUnction.current) {
        const countYscroll = event.deltaY;
        if (countYscroll > 0 && lastScrollValue.current < 1200) {
          lastScrollValue.current += 200;
        } else if (countYscroll < 0 && lastScrollValue.current > 0) {
          lastScrollValue.current -= 200;
        }
        document.documentElement.scrollTop = lastScrollValue.current;
        isVisit(lastScrollValue.current, arrScrollValues);
        setCSSvalues(lastScrollValue.current);
        permissionToScrollFUnction.current = false;

        setTimeout(() => {
          permissionToScrollFUnction.current = true;
        }, 150);
      }
    },
    [setCSSvalues, isVisit]
  );
  const scrollOnTouch = useCallback(
    (event) => {
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
        isVisit(lastScrollValue.current, arrScrollValues);
      }
    },
    [setCSSvalues, isVisit]
  );

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
        <ControllsMenu>
          <>
            <ChooseLang lang={lang} setLang={setLang} />
            <FullScreanButton />
          </>
        </ControllsMenu>

        <NavMenu
          customClass={visitParth}
          setLastScrollValue={setLastScrollValue}
          setCSSvalues={setCSSvalues}
          setVisitParth={setVisitParth}
          lang={lang}
        />
        <div className="container">
          <section className="blocks">
            <ScrollItem>
              <FirstScrean />
            </ScrollItem>
            <ScrollItem>
              <Symmary lang={lang} />
            </ScrollItem>
            <ItemWithPicture customClass={'summary-img'} src={SummaryIMG}></ItemWithPicture>
            <ScrollItem>
              <Education lang={lang} />
            </ScrollItem>
            <ItemWithPicture src={EducationIMG} customClass={'black_bg my-certificates'}>
              <MyCertificates lang={lang} />
            </ItemWithPicture>
            <Projects lang={lang} />
            <ItemWithPicture src={ContactIMG} customClass={'black_bg my-contacts'}>
              <Contacts
                lang={lang}
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
