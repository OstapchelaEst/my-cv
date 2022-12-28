import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
import { ProjectsInfo } from '../../../data/projects';
import SlideItem from './SlideItem';

export const SwiperBlock = ({ lang }) => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {ProjectsInfo.map((a, i) => {
          return (
            <SwiperSlide key={i}>
              <SlideItem
                name={a.name}
                description={a.description[lang]}
                tools={a.tools[lang]}
                src={a.imgSrc}
                url={a.url}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperBlock;
