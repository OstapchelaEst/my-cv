import React, { useRef, useEffect, useState } from 'react';
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
  const addedValue = useRef(200);
  const scrollMode = useRef('main');
  const delayScroll = useRef(400);
  const [openIsLoading, setOpenIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [responsePayload, setResponsePayload] = useState('');
  const setScrollMode = (mode) => {
    scrollMode.current = mode;
  };
  const setAddedValue = (value) => {
    addedValue.current = value;
  };

  useEffect(() => {
    document.body.classList.add('active');
    let zSpasing = -1000;
    let lastPos = zSpasing / 5;
    const items = document.querySelectorAll('.item');
    const zVals = [];
    let isFirstRender = true;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    delayScroll.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? 1200
      : 400;
    const setCSSvalues = (top) => {
      let delta = lastPos - top;
      lastPos = top;
      items.forEach((e, i) => {
        zVals.push(i * zSpasing + zSpasing);
        zVals[i] += delta * -5;
        const frame = items[i],
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

    setCSSvalues(0);
    window.onscroll = () => {
      if (!isFirstRender) {
        if (permissionToScrollFUnction.current) {
          console.log('DAYYYYN');
          const actualScrollValue = document.documentElement.scrollTop;
          console.log('ACTUALE SCROLL VALUE', actualScrollValue);
          console.log('LAST SCROLL VALUE', lastScrollValue.current);
          const comparisonValues = actualScrollValue - lastScrollValue.current;
          console.log('COMPARISION VALUES =========', comparisonValues);
          if (scrollMode.current !== 'nav-menu' && !isMobile) {
            permissionToScrollFUnction.current = false;
            setTimeout(() => {
              permissionToScrollFUnction.current = true;
            }, delayScroll.current);
            if (comparisonValues > 0) {
              lastScrollValue.current += addedValue.current;
            } else if (comparisonValues < 0) {
              lastScrollValue.current += -addedValue.current;
            } else {
              return;
            }
            if (lastScrollValue.current > 1200) {
              lastScrollValue.current = 1200;
              return;
            }
            setCSSvalues(lastScrollValue.current);
          } else {
            lastScrollValue.current = actualScrollValue;
            setCSSvalues(actualScrollValue);
          }
        } else {
          document.documentElement.scrollTop = lastScrollValue.current;
        }
      }
      isFirstRender = false;
    };
  }, []);

  return (
    <>
      {openIsLoading && <IsLoading picture={IsLoadingIMG} />}
      {showResponse && (
        <ResponseStatus
          setClose={setShowResponse}
          payload={responsePayload}
          setAddedValue={setAddedValue}
        />
      )}
      <div className="App">
        <FullScreanButton />
        <NavMenu fnScrollMode={setScrollMode} />
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
                setAddedValue={setAddedValue}
                setResponsePayload={setResponsePayload}
                setShowResponse={setShowResponse}
              />
            </ItemWithPicture>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
