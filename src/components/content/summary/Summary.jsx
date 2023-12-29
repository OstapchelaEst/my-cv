import { memo } from 'react';
import { i18ObjSummary } from '../../../data/summary';
import ScrollItem from '../../../components/scroll-items/ScrollItem';
import { useTranslation } from 'react-i18next';
import './summary-styles.scss';

export const Summary = memo(() => {
  const { t } = useTranslation();
  return (
    <ScrollItem>
      <div className="summary">
        <div className="summary__container">
          <div className="summary__info">
            <div className="summary__title title">
              <span>{t(i18ObjSummary.title)}</span>
            </div>
            <div className="summary__text text">
              <p>{t(i18ObjSummary.firstParagraph)}</p>
              <p>{t(i18ObjSummary.secondParagraph)}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollItem>
  );
});
