import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import useRequestData from '../hooks/useRequestData';

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
      {dataH &&
        <div>

          <section>

            <h3>{dataH[2].suptitle}</h3>
            <h2>{dataH[2].title}</h2>

          </section>
          <section>
            {dataH[2].content}
          </section>
        </div>
      }
      {data && (
        <div className='row'>
          {data.map((g) => (
            <div key={g._id} className='col-3'>
              <div className=''>
                <i>{g.icon}</i>
                <p>{g.goalcount}</p>
                <p>{g.goal}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Goals