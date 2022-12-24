import React from 'react';
import { SVG } from '../../../data/constactsSVG';
import ContactItem from './ContactItem';
import FormContact from './form/FormContact';
import './contacts-styles.scss';
import { i18ObjContacts } from '../../../data/contacts';

const Contacts = ({
  setOpenIsLoading,
  setPermissionScroll,
  setResponsePayload,
  setShowResponse,
  lang,
}) => {
  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__title">{i18ObjContacts[lang].title}</div>
        <FormContact
          lang={lang}
          setOpenIsLoading={setOpenIsLoading}
          setPermissionScroll={setPermissionScroll}
          setResponsePayload={setResponsePayload}
          setShowResponse={setShowResponse}
        />
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
