import React from 'react';
import { i18ObjEducation } from '../../../data/education';
import './education-style.scss';
const Education = ({ lang }) => {
  return (
    <div className="education">
      <div className="education__container">
        <div className="education__title title">
          <span>{i18ObjEducation[lang].title}</span>
        </div>
        <div className="education__text text">
          <p>{i18ObjEducation[lang].firstParagraph}</p>
          <p>{i18ObjEducation[lang].secondParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
