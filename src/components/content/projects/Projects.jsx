import React from 'react';
import SwiperBlock from './Swiper';
import './swiper-style.scss';
const Projects = function () {
  return (
    <div className="item projects">
      <div className="projects__container">
        <div className="projects__title title">
          <span>My Projects</span>
        </div>
      </div>
      <SwiperBlock />
    </div>
  );
};

export default Projects;
