import {useEffect, useRef, useState} from 'react'
import Error from '../components/Error';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Parse from 'html-react-parser';
import useRequestData from '../hooks/useRequestData';

const EventsDetail = ({e}) => {

    const [timerDays, setTimerDays] = useState('00');

    let interval = useRef();
    
    const startTimer = () => {
        if (e && e.eventdate){

            const countdownDate = new Date(e.eventdate.getTime());
            console.log(e.eventdate);
            interval = setInterval((()=>{
                const now = new Date().getTime();
                const distance = countdownDate - now;
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                
                if(distance < 0) {
                    // Stop timer
                    clearInterval(interval.current);
                } else {
                    // update timer
                    setTimerDays(days);
                }
                
            },100));
            
        }
        
    };
    
    useEffect(() => {
      startTimer();
      return ()=>{
        clearInterval(interval.current)
      }
    }, [])
    

    // GET data
    const { loading, error, data, makeRequest } = useRequestData();
    // GET PARAM ID FROM EVENT
    const { eventID } = useParams();

    // GET SELECTED EVENT
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
                    <h3 className='text-center Highlight'>{data.category.category}</h3>
                    <figure>
                    <img src={"http://localhost:5888/images/event/" + data.image} className='w-100 rounded' alt={data.title} />
                    </figure>
                    <div className='row'>
                    <div className='col-4 DetailInfo p-3'>
                        <p>Tidspunkt: {new Date(data.eventdate).toLocaleString("da-dk", { day: "numeric", month: "long", year: "numeric" })}</p>
                        <p>Dage til event: {timerDays} </p>
                        <p>Lokation: {data.destination}</p>
                        <p>Distance: {data.distance} km</p>
                        <p>Sværhedsgrad: {data.difficulty}</p>
                    </div>
                    <div className='col-8'>
                        <span>{Parse(data.content)}</span>
                    </div>
                    </div>

                </article>
            }


                
    </>
    )
}

export default EventsDetail