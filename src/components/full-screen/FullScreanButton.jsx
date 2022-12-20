import React, { useEffect, useState } from 'react';
import './full-screan-button.scss';
import { setFullScrean, closeFullScrean } from './FullScreanSVG';
import fscreen from 'fscreen';
const FullScreanButton = () => {
  const [isFullScrean, setIsFullScran] = useState(false);
  const toogleFullScrean = () => {
    isFullScrean ? fscreen.exitFullscreen() : fscreen.requestFullscreen(document.documentElement);
    setIsFullScran((prev) => !prev);
  };
  useEffect(() => {
    const handlerFullScreen = () => {
      if (fscreen.fullscreenElement !== null) {
        setIsFullScran(true);
      } else {
        setIsFullScran(false);
      }
    };
    fscreen.addEventListener('fullscreenchange', handlerFullScreen);
  }, []);
  return (
    <div className="full-screan">
      <button className="full-screan__button" type="button" onClick={toogleFullScrean}>
        {isFullScrean ? setFullScrean : closeFullScrean}
      </button>
    </div>
  );
};

export default FullScreanButton;
