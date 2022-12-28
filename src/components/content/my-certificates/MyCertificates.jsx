import React from 'react';
import Certificat from './Certificate';
import { certificates, certificatesTitle } from '../../../data/cetrificates-data';
import './my-certificates.scss';

const MyCertificates = ({ lang }) => {
  return (
    <div className="certificates">
      <div className="certificates__container">
        <div className="certificates__title title">
          <span>{certificatesTitle[lang]}</span>
        </div>
        <ul className="certificates__list">
          {certificates.map((a, i) => {
            return <Certificat key={i} text={a.text[lang]} url={a.url} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyCertificates;
