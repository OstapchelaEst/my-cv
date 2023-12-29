import fscreen from 'fscreen';
import { memo, useEffect, useState } from 'react';
import { setFullScreen, closeFullScreen } from './FullScreanSVG';
import './full-screan-button.scss';

export const FullScreenButton = memo(() => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScrean = () => {
    isFullScreen ? fscreen.exitFullscreen() : fscreen.requestFullscreen(document.documentElement);
    setIsFullScreen((prev) => !prev);
  };

  useEffect(() => {
    const handlerFullScreen = () => {
      if (fscreen.fullscreenElement !== null) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };
    fscreen.addEventListener('fullscreenchange', handlerFullScreen);
    return () => {
      fscreen.removeEventListener('fullscreenchange', handlerFullScreen);
    };
  }, []);

  return (
    fscreen.fullscreenEnabled && (
      <div className="full-screan">
        <button className="full-screan__button" type="button" onClick={toggleFullScrean}>
          {isFullScreen ? setFullScreen : closeFullScreen}
        </button>
      </div>
    )
  );
});
