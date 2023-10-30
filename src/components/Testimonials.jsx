import { React, useEffect } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import useRequestData from '../hooks/useRequestData';

const Testimonials = () => {

    const { error, loading, data, makeRequest } = useRequestData();
    const { error: errorH, loading: loadingH, data: dataH, makeRequest: makeRequestH } = useRequestData();

    useEffect(() => {
        makeRequest("community")
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
            
            <h3>{dataH[3].subtitle}</h3>  
            
            }
        </>
    )
}

export default Testimonials