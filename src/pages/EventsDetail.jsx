import {useEffect} from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Parse from 'html-react-parser';
import useRequestData from '../hooks/useRequestData';

const EventsDetail = () => {

    // GET data
    const { loading, error, data, makeRequest } = useRequestData();

    const { eventID } = useParams();

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
                <article>
                    <div>
                        <Link to="/event"><button className='btn btn-primary'> &#8592; Events</button></Link>
                    </div>
                    <h1 className='text-center Bold'>{data.title}</h1>
                    <figure>
                    <img src={"http://localhost:5888/images/event/" + data.image} className='w-100' alt={data.title} />
                    </figure>
                    <div className='row'>
                    <div className='col-4 DetailInfo p-3'>
                        <p>Tidspunkt: {new Date(data.eventdate).toLocaleString("da-dk", { day: "numeric", month: "long", year: "numeric" })}</p>
                        <p>Lokation: {data.destination}</p>
                        <p>Distance: {data.distance} km</p>
                        <p>Sværhedsgrad: {data.difficulty}</p>
                    </div>
                    <div className='col-8'>
                        <p>{Parse(data.content)}</p>
                    </div>
                    </div>

                </article>
            }


                
    </>
    )
}

export default EventsDetail