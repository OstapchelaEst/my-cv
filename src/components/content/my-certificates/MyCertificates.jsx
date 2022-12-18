import React from 'react';
import SVG from './svg-certificate';
import Certificat from './Certificate';
import { certificates } from '../../../data/cetrificates-data';
import './my-certificates.scss';

const MyCertificates = () => {
  return (
    <div className="certificates">
      <div className="certificates__title title">
        <span>sertificates</span>
      </div>
      <ul className="certificates__list">
        {certificates.map((a, i) => {
          return <Certificat key={i} text={a.text} url={a.url} svg={SVG} />;
        })}
      </ul>
    </div>
  );
};

export default MyCertificates;
