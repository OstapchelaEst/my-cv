import React, { memo } from 'react';
import './choouse-lang-styles.scss';
import i18n from '../../utils/i18n';
import { useTranslation } from 'react-i18next';

export const ChooseLang = memo(() => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <div className={`lang ${language === 'en' ? 'en' : 'ru'}`}>
      <button
        className="lang__en"
        onClick={() => {
          i18n.changeLanguage('en');
        }}
      >
        EN
      </button>
      /
      <button
        className="lang__ru"
        onClick={() => {
          i18n.changeLanguage('ru');
        }}
      >
        RU
      </button>
    </div>
  );
});
