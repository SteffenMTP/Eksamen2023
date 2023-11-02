import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

//Import Icons
import {PiClockAfternoon, PiEnvelopeSimple, PiBuildings} from 'react-icons/pi';
import {LiaMapMarkerAltSolid} from 'react-icons/lia';

//Import Hook
import useRequestData from '../hooks/useRequestData';

// Import LeafletMap component
import LeafletMap from '../helpers/LeafletMap';

const Contact = () => {

  // GET HERO
  const { error, loading, data, makeRequest } = useRequestData();
  // Get CONTACTINFO
  const { error: errorC, loading: loadingC, data: dataC, makeRequest: makeRequestC } = useRequestData();
  // Get INQUIRIES
  const { error: errorI, loading: loadingI, data: dataI, makeRequest: makeRequestI } = useRequestData();

  useEffect(() => {
    makeRequest("heros")
    makeRequestC("contactinformation")
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault()

        const fd = new FormData(e.target)

        // POST til API
        makeRequestI("inqueries", null, null, "POST", fd)
  }

  return (
    <>

      {/*Error*/}
      {(error || errorC || errorI) && <Error />}

      {/*Loading*/}
      {(loading || loadingC || loadingI) && <Loader />}

      {/*Data*/}
      {data && dataC &&
        <>
          <section className='text-center contactSection text-white'>
            <h3>{data[4].suptitle}</h3>
            <h2 className='Bold'>{data[4].title}</h2>
            <figure className='container'>
              <img src={"http://localhost:5888/images/hero/" + data[4].image} className='img-fluid' alt="Bikerows" />
            </figure>
          </section>

          <div className='row'>
            <div className='col-12 col-md-3 infoCon p-3'>
            <p><span className='infoLogoBg rounded-circle p-1'><PiBuildings className='IconHighlight'/></span> Klubhuset I Grenaa</p>
              <address><span className='infoLogoBg rounded-circle p-1'><LiaMapMarkerAltSolid className='IconHighlight'/></span> {dataC.address}, {dataC.zipcity}</address>
              <p><span className='infoLogoBg rounded-circle p-1'><PiClockAfternoon className='IconHighlight'/></span> {dataC.openinghours}</p>
              <p><span className='infoLogoBg rounded-circle p-1'><PiEnvelopeSimple className='IconHighlight'/></span> {dataC.email}</p>
            </div>
            <div className='col-12 col-md-9 mb-5'>
              {dataI && <h2 className='text-center mt-5'>Tak for din besked, vi vil vende tilbage indenfor 3-4 hverdage</h2>}
              {!dataI &&
              <form onSubmit={handleSubmit} className='form-control d-flex flex-column'>
                <label htmlFor="name" className='mb-2'> Navn
                  <input type="text" className='form-control' required placeholder='Dit navn...' name="name" id="name" />
                </label>

                <label htmlFor="email" className='mb-2'> Email
                  <input type="email" className='form-control' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required placeholder='Din email...' name="email" id="email" />
                </label>

                <label htmlFor="phone" className='mb-2'> Telefon
                  <input type="text" className='form-control' pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" required placeholder='Dit telefonnummer...' name="phone" id="phone" />
                </label>

                <label htmlFor="message" className='mb-2'> Besked
                  <textarea name="message" className='form-control' required placeholder='Din besked...' id="message" rows="5"></textarea>
                </label>
                <div className='my-2'>
                <button type="submit" className='btn btn-secondary'>Send besked</button>
                </div>
              </form>
              }
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