import React, { useEffect, useState } from 'react';
import NavMenu from './components/nav-menu/NavMenu';
import ItemWithPicture from './components/scroll-items/ScrollItemWithPicture';
import FirstScreen from './components/content/first-screan/FirstScrean';
import { Summary } from './components/content/summary/Summary';
import { Education } from './components/content/education/Education';
import { MyCertificates } from './components/content/my-certificates/MyCertificates';
import Projects from './components/content/projects/Projects';
import Contacts from './components/content/contacts/Contacts';
import SummaryIMG from './assets/summary__img.png';

import { useScrollAnimations } from './hooks/useScrollAnimations';
import { useScrollHandlers } from './hooks/useScrollHandlers';
import { NavSettings } from './components/NavSettings';

function App() {
  const [lang, setLang] = useState('en');

  const setCSSvalues = useScrollAnimations();
  const {
    scrollOnTouch,
    scrollOnWheel,
    setStartTouchCords,
    visitParth,
    setVisitParth,
    setLastScrollValue,
  } = useScrollHandlers(setCSSvalues, 200);

  useEffect(() => {
    document.body.classList.add('active');
    setCSSvalues(0);
  }, []);

  return (
    <>
      <div
        className="App"
        onWheel={scrollOnWheel}
        onTouchStart={setStartTouchCords}
        onTouchEnd={scrollOnTouch}
      >
        <NavSettings />

        <NavMenu
          customClass={visitParth}
          setLastScrollValue={setLastScrollValue}
          setVisitParth={setVisitParth}
          lang={lang}
        />
        <div className="container">
          <section className="blocks">
            <FirstScreen />
            <Summary />
            <ItemWithPicture customClass={'summary-img'} src={SummaryIMG} />
            <Education />
            <MyCertificates />
            <Projects lang={lang} />
            <Contacts lang={lang} />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
