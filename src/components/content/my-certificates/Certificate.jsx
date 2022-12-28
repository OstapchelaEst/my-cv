import React from 'react';
import certificateSVG from '../../../assets/certificate.svg';
const Certificat = function ({ text, url }) {
  return (
    <li className="certificates__item">
      <a target="__blank" href={url}>
        {text}
      </a>
      <a target="__blank" href={url}>
        <img className="certificates__picture" src={certificateSVG} alt="certeficate picture" />
      </a>
    </li>
  );
};

export default Certificat;
