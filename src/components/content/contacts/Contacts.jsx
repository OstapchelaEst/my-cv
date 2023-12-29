import React from 'react';
import { SVG } from '../../../data/constactsSVG';
import ContactItem from './ContactItem';
import FormContact from './form/FormContact';
import './contacts-styles.scss';
import { i18ObjContacts } from '../../../data/contacts';
import ScrollItemWithPicture from '../../scroll-items/ScrollItemWithPicture';
import ContactIMG from '../../../assets/contacts.svg';

const Contacts = ({ lang }) => {
  return (
    <ScrollItemWithPicture src={ContactIMG} customClass={'black_bg my-contacts'}>
      <div className="contacts">
        <div className="contacts__container">
          <div className="contacts__title">{i18ObjContacts[lang].title}</div>
          <FormContact lang={lang} />
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
    </ScrollItemWithPicture>
  );
};

export default Contacts;
