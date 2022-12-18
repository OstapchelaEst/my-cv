import React from 'react';
import { SVG } from '../../../data/constactsSVG';
import ContactItem from './ContactItem';
import FormContact from './form/FormContact';
import './contacts-styles.scss';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__title">{`I'm waiting for your message :`}</div>
        <FormContact />
        <ul className="contacts__list">
          {SVG.map((a, i) => (
            <ContactItem
              key={i}
              svg={a.svg}
              url={a.link}
              classNameLink={a.name}
              target={a.target}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
