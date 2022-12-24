import React from 'react';
import './choouse-lang-styles.scss';
const ChooseLang = ({ lang, setLang }) => {
  return (
    <div className={`lang ${lang === 'en' ? 'en' : 'ru'}`}>
      <button
        className="lang__en"
        onClick={() => {
          setLang('en');
        }}
      >
        EN
      </button>
      /
      <button
        className="lang__ru"
        onClick={() => {
          setLang('ru');
        }}
      >
        RU
      </button>
    </div>
  );
};

export default ChooseLang;
