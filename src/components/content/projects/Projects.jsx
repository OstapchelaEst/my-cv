import React from 'react';
import { projectsTitle } from '../../../data/projects';
import SwiperBlock from './Swiper';
import './swiper-style.scss';
const Projects = ({ lang }) => {
  return (
    <div className="item projects">
      <div className="projects__container">
        <div className="projects__title title">
          <span>{projectsTitle[lang]}</span>
        </div>
      </div>
      <SwiperBlock lang={lang} />
    </div>
  );
};

export default Projects;
