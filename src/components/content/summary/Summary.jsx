import React from 'react';
import { i18ObjSummary } from '../../../data/summary';
import './summary-styles.scss';
const Summary = ({ lang }) => {
  return (
    <div className="summary">
      <div className="summary__container">
        <div className="summary__info">
          <div className="summary__title title">
            <span>{i18ObjSummary[lang].title}</span>
          </div>
          <div className="summary__text text">
            <p>{i18ObjSummary[lang].firstParagraph}</p>
            <p>{i18ObjSummary[lang].secondParagraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
