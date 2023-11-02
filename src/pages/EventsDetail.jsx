import { useEffect, useState } from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Parse from 'html-react-parser';
import useRequestData from '../hooks/useRequestData';

const EventsDetail = () => {

    // STATE TIL COUNTDOWN
    const [countdown, setCountdown] = useState(0);

    // GET data
    const { loading, error, data, makeRequest } = useRequestData();
    // GET PARAM ID FROM EVENT
    const { eventID } = useParams();

    // GET SELECTED EVENT
    useEffect(() => {
        makeRequest(`events/${eventID}`)
    }, [])

    useEffect(() => {
        if (data && data.eventdate) {
            const daysRemaining = calculateCountdown(data.eventdate);
            setCountdown(daysRemaining);
        }
    }, [data]);

    // FUNCTION THAT CALCULATES THE COUNTDOWN
    const calculateCountdown = (eventDate) => {
        const eventDateTime = new Date(eventDate).getTime(); // CONVERTS THE EVENT DATE STRING 
        const currentTime = new Date().getTime(); // GETS CURRENT DATE
        const timeDifference = eventDateTime - currentTime; // CALCULATE THE DIFFERENCE BETWEEN EVENT DATE AND CURRENT DATE
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); //CONVERTS THE TIME INTO DAYS
        return daysRemaining;
    };

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
                    <h3 className='text-center Highlight'>{data.category.category}</h3>
                    <figure>
                        <img src={"http://localhost:5888/images/event/" + data.image} className='w-100 rounded' alt={data.title} />
                    </figure>
                    <div className='row'>
                        <div className='col-12 col-md-4 DetailInfo p-2'>
                            <p>Tidspunkt: {new Date(data.eventdate).toLocaleString("da-dk", { day: "numeric", month: "long", year: "numeric" })}</p>
                            <p>Dage til event: {countdown}</p>
                            <p>Lokation: {data.destination}</p>
                            <p>Distance: {data.distance} km</p>
                            <p>Sværhedsgrad: {data.difficulty}</p>
                        </div>
                        <div className='col-12 col-md-8'>
                            <span>{Parse(data.content)}</span>
                        </div>
                    </div>

                </article>
            }



        </>
    )
}

export default EventsDetail