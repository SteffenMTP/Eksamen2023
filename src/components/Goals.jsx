import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import useRequestData from '../hooks/useRequestData';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCrown, faBiking, faMap, faHandshake, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCrown, faBiking, faMap, faHandshake)


const Goals = () => {

  const { error: errorH, loading: loadingH, data: dataH, makeRequest: makeRequestH } = useRequestData();
  const { error, loading, data, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("goals")
  }, [])

  useEffect(() => {
    makeRequestH("heros")
  }, [])

  return (
    <>

      {/*Error*/}
      {(error || errorH) && <Error />}

      {/*Loading*/}
      {(loading || loadingH) && <Loader />}

      {/*Data*/}
      {data && dataH &&

        <div>

          <section>

            <h3>{dataH[2].suptitle}</h3>
            <h2>{dataH[2].title}</h2>
            <p>{dataH[2].content}</p>

          </section>

          <div className='row GoalCounters text-white position-relative'>
            {data.map((g) => (
              <div key={g._id} className='col-3'>
                <div className=''>
                  <i>{g.icon}</i>
                  {/* <FontAwesomeIcon icon={g.icon}/> */}
                  <p>{g.goalcount}</p>
                  <p>{g.goal}</p>
                </div>
              </div>
            ))}
            <figure className='position-relative'>
              <div>
                <FontAwesomeIcon icon={faPlayCircle} className='PlayIcon position-absolute top-0 end-0 mt-3 mx-3' />
              </div>
              <img src={"http://localhost:5888/images/hero/" + dataH[2].image} className='Goalpic' alt="Closeup of a man riding a bike with a play button in the bottom right corner for a video" />
            </figure>
          </div>
        </div>
      }
    </>
  )
}

export default Goals