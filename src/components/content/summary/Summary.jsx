import React from 'react';
import './summary-styles.scss';
const Summary = () => {
  return (
    <div className="summary">
      <div className="summary__container">
        <div className="summary__info">
          <div className="summary__title title">
            <span>SUMMARY</span>
          </div>
          <div className="summary__text text">
            <p>
              Hey! I have only recently got acquainted with the world of IT, but I am already
              involved in it up to my ears.
            </p>
            <p>
              I like to learn something new and improve existing skills. Now I am actively studying
              JavaScript and in the future I want to become a front-end developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
