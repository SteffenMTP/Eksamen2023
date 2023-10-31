import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import useRequestData from '../hooks/useRequestData';
import Community from '../components/Community';
import Goals from '../components/Goals';

const AboutUs = () => {

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
        <section className='row'>
          <div className='col-6'>
            <h3>{data[1].suptitle}</h3>
            <h2>{data[1].title}</h2>
          </div>
          <div className='col-6'>
            <p>{data[1].content}</p>
            <button className='btn btn-primary'>{data[1].buttontext}</button>
          </div>
          <figure>
            <img src={"http://localhost:5888/images/hero/" + data[1].image} className='img-fluid' alt="A male person riding a bike during sunset" />
          </figure>
        </section>
        <article className='row aboutContainer text-white'>
          <div className='col-6'>
          <h3 className='Highlight'>{data[3].suptitle}</h3>
          <h2 className='Bold'>{data[3].title}</h2>
          <p>{data[3].content.slice(0,219)}</p>
          </div>
          <div className='col-6'>
            <img src={"http://localhost:5888/images/hero/" + data[3].image} alt="A member expressing his experience with bikelane" />
          </div>
        </article>
        <section className='mt-4'>
        <Community/>
        </section>
        
        <section>
          <Goals/>
        </section>


        </>

      }
    </>
  )
}

export default AboutUs