import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import { Link } from 'react-router-dom';

import useRequestData from '../hooks/useRequestData';

const News = () => {

  // GET HERO
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

        <h2>NEWS</h2>

      }

    </>
  )
}

export default News