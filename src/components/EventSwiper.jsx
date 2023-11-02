import React, { useEffect, useRef, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

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
  const { error: errorE, loading: loadingE, data: dataE, makeRequest: makeRequestE } = useRequestData();

  useEffect(() => {
    makeRequest("heros")
    makeRequestE("events")
  }, [])

  return (
    <>
      {/*Error*/}
      {(error || errorE) && <Error />}

      {/*Loading*/}
      {(loading || loadingE) && <Loader />}

      {/*Data*/}
      {data && dataE &&
        <>
          <section className='EventPattern position-relative row text-white'>
            <div className='col-12 col-md-10' >
            <h3 className='Highlight'>{data[5].suptitle}</h3>
            <h2 className='Bold'>{data[5].title}</h2>
            </div>
            <div className='col-6 col-md-2'>
            <Link to="/event"><button className='btn btn-primary'>{data[5].buttontext}</button></Link>
            </div>
            <div className='position-relative top-0'>

              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >

                {dataE.map(e =>

                  <SwiperSlide key={e._id}>
                    <img src={"http://localhost:5888/images/event/" + e.image} alt={e.category} className='postion-relative' />
                    <small className='Highlight'>{e.category.category}: {e.title}</small>
                    <p>Lokation: {e.destination}</p>
                  </SwiperSlide>

                )}

              </Swiper>
            </div>
          </section>




        </>
      }
    </>
  );
}
export default EventSwiper