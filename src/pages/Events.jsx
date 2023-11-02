import { React, useEffect, useState } from 'react'
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

  const [category, setCategory] = useState("")
  const currentDate = new Date();

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
            {dataC.slice().reverse().map(c => (

              <div key={c._id}>
                <button className='btn' onClick={()=>setCategory(c.category)}>{c.category}</button>
              </div>

            ))}
            <div>
                <button className='btn' onClick={()=>setCategory("")}>Fjern filter</button>
              </div>
          </div>

          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2'>
            {/* TODO SORTÉR EFTER DATO */}
            {dataE.filter((e)=>new Date(e.eventdate) > currentDate).filter((e)=>category === "" || e.category.category === category)
            .sort((a,b) => new Date(a.eventdate - new Date(b.eventdate))).map(e =>

              <Link to={"/event/" + e._id} key={e._id} className='text-decoration-none'>
                <div className='card h-100'>
                  <img src={"http://localhost:5888/images/event/" + e.image} className='rounded' alt="Events" />
                  <div className='card-body'>
                    <p className='Highlight'>{new Date(e.eventdate).toLocaleString("da-dk", { day: "numeric", month: "long", year: "numeric" })} | Målgruppe: {e.category.category}</p>
                    <h4 className='Bold'>{e.title}</h4>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* OBS!! TODO TILVALGSOPGAVE PAGINATION */}
          <div className='Pagination my-2'>
            <button className='btn btn-secondary me-1'>&#8592;</button>
            <button className='btn btn-secondary me-1'>1</button>
            <button className='btn btn-secondary me-1'>2</button>
            <button className='btn btn-secondary me-1'>3</button>
            <button className='btn btn-secondary me-1'>&#8594;</button>
          </div>

          <hr />

          {/* OBS!!! TODO TILVALGSOPGAVE LOGO SLIDER */}
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

          <div className='row contactSectionE text-white p-5'>
            <div className='col-10 p-5'>
              <h4 className='Highlight'>{data[7].suptitle}</h4>
              <h2 className='Bold'>{data[7].title}</h2>
            </div>
            <div className='col-2 mt-5'>
              <Link to="/contact"><button className='btn btn-primary text-white'>{data[7].buttontext}</button></Link>
            </div>
          </div>

        </div >

      }

    </>
  )
}

export default Events