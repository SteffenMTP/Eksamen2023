import {useEffect} from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';

import { useParams } from 'react-router-dom';

import useRequestData from '../hooks/useRequestData';

const EventsDetail = () => {

    // GET data
    const { loading, error, data, makeRequest } = useRequestData();

    const { eventID } = useParams();
    console.log(eventID)

    // GET udvalgt nyhed - ud fra ID (parameter i rul - useParams)
    useEffect(() => {

        makeRequest(`events/${eventID}`)


    }, [])


    return (
        <>

            {/* Error */}
            {error && <Error />}

            {/* Loading */}
            {loading && <Loader />}

            {data &&
            
                <h2>{data.title}</h2>

            }


                
    </>
    )
}

export default EventsDetail