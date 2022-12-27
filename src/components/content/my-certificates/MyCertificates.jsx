import React from 'react';
import SVG from './svg-certificate';
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
            return <Certificat key={i} text={a.text[lang]} url={a.url} svg={SVG} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyCertificates;
