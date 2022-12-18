import React from 'react';
const ContactItem = function ({ svg, url, target, classNameLink }) {
  return (
    <li className={`contacts__item ${classNameLink}`}>
      <a
        href={url}
        className="contacts__link"
        target={target}
        dangerouslySetInnerHTML={{ __html: `${svg}` }}
      ></a>
    </li>
  );
};

export default ContactItem;
