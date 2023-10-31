import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';


import useRequestData from '../hooks/useRequestData';
import Community from '../components/Community';
import Goals from '../components/Goals';
import Interests from '../components/Interests';
import Testimonials from '../components/Testimonials';
import Events from '../components/Events';
import Eventtwo from '../components/Eventstwo';


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
        <div className='container row'>
          <section className='col-6'>
            <h1>{data[0].title}</h1>
            <p>{data[0].content}</p>
            <button className='btn btn-primary'>{data[0].buttontext}</button>
          </section>
          <figure className='herocontainer col-6'>
            <img src={"http://localhost:5888/images/hero/" + data[0].image} className='heroImg' alt="Young man standing with his mountain bike" />
          </figure>
        </div>}

        <Community/>
        <Goals/>
        <Interests/>
        <Testimonials/>
        {/* <Events/> */}
        <Eventtwo/>

    </>
  )
}

export default Home