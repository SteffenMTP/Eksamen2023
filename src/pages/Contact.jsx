import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';
import {PiClockAfternoon,   } from 'react-icons/pi';

import useRequestData from '../hooks/useRequestData';

import LeafletMap from '../helpers/LeafletMap';

const Contact = () => {

  // GET HERO
  const { error, loading, data, makeRequest } = useRequestData();
  const { error: errorC, loading: loadingC, data: dataC, makeRequest: makeRequestC } = useRequestData();

  useEffect(() => {
    makeRequest("heros")
    makeRequestC("contactinformation")
  }, [])



  return (
    <>

      {/*Error*/}
      {error && <Error />}

      {/*Loading*/}
      {loading && <Loader />}

      {/*Data*/}
      {data && dataC &&
        <>
          <section>
            <h3>{data[4].suptitle}</h3>
            <h2>{data[4].title}</h2>
            <figure>
              <img src={"http://localhost:5888/images/hero/" + data[4].image} alt="An image of bikerows" />
            </figure>
          </section>

          <div className='row'>
            <div className='col-2 infoCon'>
              <p>Klubhuset I Grenaa</p>
              <address>{dataC.address}, {dataC.zipcity}</address>
              <p>{dataC.openinghours}</p>
              <p>{dataC.email}</p>
            </div>
            <div className='col-10 mb-5'>
              <form className='form-control d-flex flex-column'>
                <label htmlFor="name"> Navn
                  <input type="text" className='form-control' placeholder='Dit navn...' name="name" id="name" />
                </label>
                <label htmlFor="email"> Email
                  <input type="email" className='form-control'placeholder='Din email...' name="email" id="email" />
                </label>
                <label htmlFor="phone"> Telefon
                  <input type="text" className='form-control'placeholder='Dit telefonnummer...' name="phone" id="phone" />
                </label>
                <label htmlFor="message"> Besked
                  <textarea name="message" className='form-control'placeholder='Din besked...' id="message" cols="30" rows="10"></textarea>
                </label>
                <div>
                <button type="submit" className='btn btn-primary'>Send besked</button>
                </div>
              </form>
            </div>
          </div>
        </>

      }

      <div className='mapContainer'>
        <LeafletMap />
      </div>
    </>
  )
}

export default Contact