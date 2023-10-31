import React, { useEffect, useRef, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import SCSS
import '../SASS/Swiper.scss'

//Import Hook
import useRequestData from '../hooks/useRequestData';

const EventSwiper = () => {

  const { error, loading, data, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("heros")
  }, [])


  return (
    <>
      {/*Error*/}
      {error && <Error />}

      {/*Loading*/}
      {loading && <Loader />}

      {/*Data*/}
      {data &&
        <>
          <section>
            <h3>{data[5].suptitle}</h3>
            <h2>{data[5].title}</h2>
            <button className='btn btn-primary'>{data[5].buttontext}</button>
          </section>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
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
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>

          </Swiper>
        </>
      }
    </>
  );
}
export default EventSwiper