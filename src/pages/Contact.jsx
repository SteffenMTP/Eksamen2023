import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';
import {PiClockAfternoon, PiEnvelopeSimple, PiBuildings} from 'react-icons/pi';
import {LiaMapMarkerAltSolid} from 'react-icons/lia';

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
      {(error || errorC) && <Error />}

      {/*Loading*/}
      {(loading || loadingC) && <Loader />}

      {/*Data*/}
      {data && dataC &&
        <>
          <section className='text-center'>
            <h3>{data[4].suptitle}</h3>
            <h2 className='Bold'>{data[4].title}</h2>
            <figure>
              <img src={"http://localhost:5888/images/hero/" + data[4].image} alt="An image of bikerows" />
            </figure>
          </section>

          <div className='row'>
            <div className='col-3 infoCon p-3'>
            <p><span className='infoLogoBg rounded-circle p-1'><PiBuildings className='IconHighlight'/></span> Klubhuset I Grenaa</p>
              <address><span className='infoLogoBg rounded-circle p-1'><LiaMapMarkerAltSolid className='IconHighlight'/></span> {dataC.address}, {dataC.zipcity}</address>
              <p><span className='infoLogoBg rounded-circle p-1'><PiClockAfternoon className='IconHighlight'/></span> {dataC.openinghours}</p>
              <p><span className='infoLogoBg rounded-circle p-1'><PiEnvelopeSimple className='IconHighlight'/></span> {dataC.email}</p>
            </div>
            <div className='col-9 mb-5'>
              <form className='form-control d-flex flex-column'>
                <label htmlFor="name"> Navn
                  <input type="text" className='form-control' required placeholder='Dit navn...' name="name" id="name" />
                </label>
                <label htmlFor="email"> Email
                  <input type="email" className='form-control' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required placeholder='Din email...' name="email" id="email" />
                </label>
                <label htmlFor="phone"> Telefon
                  <input type="text" className='form-control' required placeholder='Dit telefonnummer...' name="phone" id="phone" />
                </label>
                <label htmlFor="message"> Besked
                  <textarea name="message" className='form-control' required placeholder='Din besked...' id="message" rows="5"></textarea>
                </label>
                <div className='my-2'>
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