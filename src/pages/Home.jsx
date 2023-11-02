import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import useRequestData from '../hooks/useRequestData';

import Community from '../components/Community';
import Goals from '../components/Goals';
import Interests from '../components/Interests';
import Testimonials from '../components/Testimonials';
import EventSwiper from '../components/EventSwiper';


const Home = () => {

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
        <div className='container-fluid row'>
          <section className='col-12 col-md-6'>
            <h1 className='Bold'>{data[0].title}</h1>
            <p>{data[0].content}</p>
            <Link to="/contact"><button className='btn btn-primary'>{data[0].buttontext}</button></Link>
          </section>
          <figure className='herocontainer col-12 col-md-6 position-relative'>
          <div>
            <FontAwesomeIcon icon={faPlayCircle} className='PlayIcon position-absolute top-0 end-0 mt-3 mx-3' />
          </div>
            <img src={"http://localhost:5888/images/hero/" + data[0].image} className='heroImg' alt="Young man standing with his mountain bike" />
          </figure>
        </div>}

        <Community/>
        <Goals/>
        <Interests/>
        <Testimonials/>
        <EventSwiper/>

    </>
  )
}

export default Home