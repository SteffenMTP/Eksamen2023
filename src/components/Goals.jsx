import { React, useEffect, useState } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

// GOALCOUNT ASSETS
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

// IMPORT HOOK
import useRequestData from '../hooks/useRequestData';

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCrown, faBiking, faMap, faHandshake, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCrown, faBiking, faMap, faHandshake)

const Goals = () => {

  const [counterOn, setCounterOn] = useState(false)

  // GET HEROS
  const { error: errorH, loading: loadingH, data: dataH, makeRequest: makeRequestH } = useRequestData();
  // GET GOALS
  const { error, loading, data, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("goals")
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

        <div className='GoalMain'>

          <section className='col-12 col-md-6'>

            <h3 className='Highlight'>{dataH[2].suptitle}</h3>
            <h2 className='Bold'>{dataH[2].title}</h2>
            <p>{dataH[2].content}</p>

          </section>

          <div className='row GoalCounters text-white position-relative'>
            
            {data.sort((a,b)=>(a.order > b.order) ? 1: -1).map((g) => (
              <div key={g._id} className='col-12 col-md-3 mt-5 text-center'>

                <div className='GoalBg mx-auto'>
                  <FontAwesomeIcon icon={g.icon} className='GoalIcon mt-2' />
                </div>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn &&
                    <CountUp className='Goalcount' start={0} end={g.goalcount} duration={2} delay={0} />
                  }
                </ScrollTrigger>
                <p className='Highlight'>{g.goal}</p>

              </div>
            ))}
            <figure className='col-12 col-md-12'>
              <img src={"http://localhost:5888/images/hero/" + dataH[2].image} className='Goalpic' alt="Closeup of a man riding a bike with a play button in the bottom right corner for a video" />
              <div>
                <FontAwesomeIcon icon={faPlayCircle} className='PlayIconGoal position-absolute bottom-0 end-0' />
              </div>
            </figure>
          </div>
        </div>
      }
    </>
  )
}

export default Goals