import { React, useEffect } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';

// IMPORT ICONS
import { FaBuilding, FaCalendarAlt, FaEnvelope, FaUser } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//IMPORT HOOK
import useRequestData from '../hooks/useRequestData';
import { Link } from 'react-router-dom';

const Header = () => {

    // GET CONTACTINFORMATION
    const { error, loading, data, makeRequest } = useRequestData();

    useEffect(() => {
        makeRequest("contactinformation")
    }, [])


    return (
        <>
            <header>

                {/*Error*/}
                {error && <Error />}

                {/*Loading*/}
                {loading && <Loader />}

                {/*Data*/}
                {data && data.some &&
                    <section className='d-flex justify-content-between'>
                        <div className='ContactInfo d-flex justify-content-start'>
                            <Link to="/admin">
                                <FaUser className='m-1 loginbtn' />
                            </Link>
                            <FaBuilding className='mt-1 m-1' /><p>Klubhuset: {data.address}</p>
                            <FaCalendarAlt className='mt-1 m-1' /><p>{data.openinghours}</p>
                            <FaEnvelope className='mt-1 m-1' /><p>{data.email}</p>
                        </div>
                        <div className='justify-content-end'>
                            {data.some.map(d =>
                                <span key={d._id} className='SOME mx-2'>
                                    <FontAwesomeIcon icon={"fab fa" + d.icon} />
                                </span>
                            )}
                        </div>

                    </section>


                }

            </header>
        </>
    )



}

export default Header;