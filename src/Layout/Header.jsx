import { React, useEffect } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import {FaBuilding, FaCalendarAlt, FaEnvelope} from 'react-icons/fa';

import useRequestData from '../hooks/useRequestData';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faX, faFace  } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(fab, faTwitter, faFacebook, faPinterest, faInstagram)

const Header = () => {

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
                            <FaBuilding className='mt-1 m-1'/><p>Klubhuset: {data.address}</p>
                            <FaCalendarAlt className='mt-1 m-1'/><p>{data.openinghours}</p>
                            <FaEnvelope className='mt-1 m-1'/><p>{data.email}</p>
                        </div>
                        <div className='SOME justify-content-end'>
                            {data.some.map(d =>
                                <span key={d._id}>
                                    {d.name}
                                    {/* <FontAwesomeIcon icon={d.icon}/> */}
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