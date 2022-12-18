import React from 'react';
const Certificat = function ({ text, url, svg }) {
  return (
    <li className="certificates__item">
      {text}
      <a target="__blank" href={url} dangerouslySetInnerHTML={{ __html: `${svg}` }}></a>
    </li>
  );
};

export default Certificat;
