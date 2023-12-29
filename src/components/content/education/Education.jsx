import React, { memo } from 'react';
import { i18ObjEducation } from '../../../data/education';
import './education-style.scss';
import ScrollItem from '../../../components/scroll-items/ScrollItem';
import { useTranslation } from 'react-i18next';

export const Education = memo(() => {
  const { t } = useTranslation();

  return (
    <ScrollItem>
      <div className="education">
        <div className="education__container">
          <div className="education__title title">
            <span>{t(i18ObjEducation.title)}</span>
          </div>
          <div className="education__text text">
            <p>{t(i18ObjEducation.firstParagraph)}</p>
            <p>{t(i18ObjEducation.secondParagraph)}</p>
          </div>
        </div>
      </div>
    </ScrollItem>
  );
});
