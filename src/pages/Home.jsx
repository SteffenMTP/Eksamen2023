import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';


import useRequestData from '../hooks/useRequestData';
import Community from '../components/Community';
import Goals from '../components/Goals';

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
        <div className='container'>
          <section>
            <h1>{data[0].title}</h1>
            <p>{data[0].content}</p>
            <button className='btn btn-primary'>{data[0].buttontext}</button>
          </section>
          <figure>
            <img src={"http://localhost:5888/images/hero/" + data[0].image} className='img-fluid' alt="Young man standing with his mountain bike" />
          </figure>
        </div>}

        <Community/>
        <Goals/>

    </>
  )
}

export default Home