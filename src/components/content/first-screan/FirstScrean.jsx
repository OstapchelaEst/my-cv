import React from 'react';
import './first-screan-styles.scss';
import ScrollItem from '../../../components/scroll-items/ScrollItem';

const FirstScrean = () => {
  return (
    <ScrollItem>
      <div className="first-screan ">
        <h1>Astapchuk Dzmitry</h1>
        <h2>front-end developer</h2>
      </div>
    </ScrollItem>
  );
};

export default FirstScrean;
