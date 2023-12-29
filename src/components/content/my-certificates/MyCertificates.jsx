import React, { memo } from 'react';
import Certificat from './Certificate';
import { certificates, certificatesTitle } from '../../../data/cetrificates-data';
import './my-certificates.scss';
import ScrollItemWithPicture from '../../scroll-items/ScrollItemWithPicture';
import EducationIMG from '../../../assets/education1.png';
import { useTranslation } from 'react-i18next';

export const MyCertificates = memo(() => {
  const { t } = useTranslation();

  return (
    <ScrollItemWithPicture src={EducationIMG} customClass={'black_bg my-certificates'}>
      <div className="certificates">
        <div className="certificates__container">
          <div className="certificates__title title">
            <span>{t(certificatesTitle)}</span>
          </div>
          <ul className="certificates__list">
            {certificates.map((a, i) => {
              return <Certificat key={i} text={t(a.text)} url={a.url} />;
            })}
          </ul>
        </div>
      </div>
    </ScrollItemWithPicture>
  );
});
