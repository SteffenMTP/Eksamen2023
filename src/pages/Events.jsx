import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import { Link } from 'react-router-dom';
// import Parse from 'html-react-parser';

import useRequestData from '../hooks/useRequestData';

const Events = () => {

  // GET HERO
  const { error, loading, data, makeRequest } = useRequestData();
  // GET EVENTS
  const { error: errorE, loading: loadingE, data: dataE, makeRequest: makeRequestE } = useRequestData();
  // GET CATEGORIES
  const { error: errorC, loading: loadingC, data: dataC, makeRequest: makeRequestC } = useRequestData();
  // GET SPONSERS
  const { error: errorS, loading: loadingS, data: dataS, makeRequest: makeRequestS } = useRequestData();



  useEffect(() => {
    makeRequest("heros")
    makeRequestE("events")
    makeRequestC("eventcategories")
    makeRequestS("sponsors")
  }, [])


  return (
    <>

      {/*Error*/}
      {(error || errorE || errorC || errorS) && <Error />}

      {/*Loading*/}
      {(loading || loadingE || loadingC || loadingS) && <Loader />}

      {/*Data*/}
      {data && dataE && dataC && dataS &&

        <div>
          <section className='text-center mb-5'>
            <h3 className='Highlight'>{data[6].suptitle}</h3>
            <h2 className='Bold'>{data[6].title}</h2>
          </section>

          <div className='d-flex justify-content-center mb-4'>
            {dataC.map(c =>

              <div key={c._id}>
                <button className='btn'>{c.category}</button>
              </div>

            )}
          </div>

          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2'>
            {dataE.map(e =>

              <div className='card' key={e._id}>
                <img src={"http://localhost:5888/images/event/" + e.image} className='rounded EventPic' alt="Events" />
                <div className='card-body'>
                  <p className='Highlight'>{new Date(e.eventdate).toLocaleString("da-dk", { day: "numeric", month: "long", year: "numeric" })} | Målgruppe: {e.category.category}</p>
                  <h4 className='Bold'>{e.title}</h4>
                  {/* <p>{Parse(e.content.slice(0,90))}...</p> */}
                  <Link to={"/event/" + e._id}><button className='btn btn-secondary'>Se mere</button></Link>
                </div>
              </div>
            )}
          </div>

          <div className='Pagination'>
            <button className='btn btn-secondary me-1'>&#8592;</button>
            <button className='btn btn-secondary me-1'>1</button>
            <button className='btn btn-secondary me-1'>2</button>
            <button className='btn btn-secondary me-1'>3</button>
            <button className='btn btn-secondary me-1'>&#8594;</button>
          </div>

          <hr />

          <div className='row row-md-2'>
            <section className='col-12 col-md-4'>
              <h3 className='Highlight'>{data[9].suptitle}</h3>
              <h2 className='Bold'>{data[9].title}</h2>
            </section>
            <div className='col-12 col-md-8 d-flex '>
              {dataS.map(s =>

                <figure key={s._id}>
                  <img src={"http://localhost:5888/images/sponsor/" + s.logo} className='sponsorlogos me-5' alt="Sponsor logos" />
                </figure>

              )}
            </div>
          </div>

          <div className='row contactSectionE text-white'>
            <div className='col-10 p-5'>
              <h3>{data[7].suptitle}</h3>
              <h2>{data[7].title}</h2>
            </div>
            <div className='col-2 p-5'>
              <Link to="/contact"><button className='btn btn-primary'>{data[7].buttontext}</button></Link>
            </div>
          </div>



        </div>


      }



    </>
  )
}

export default Events