import { React, useEffect } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
// import { FaTwitter, FaFacebook } from 'react-icons/fa'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';

import useRequestData from '../hooks/useRequestData';



const Header = () => {

    const { error, loading, data, makeRequest } = useRequestData();

    useEffect(() => {
        makeRequest("contactinformation")
    }, [])

    // const iconMappings = {
    //     'Instagram': fab.faInstagram,
    //     'Pinterest': fab.faPinterest,
    //     'Twitter': fab.faTwitter,
    //     'Facebook': fab.faFacebook,
    // };


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
                            <p>Klubhuset: {data.address}</p>
                            <p>{data.openinghours}</p>
                            <p>{data.email}</p>
                        </div>
                        <div className='SOME justify-content-end'>
                            {data.some.map(d =>
                                <span key={d._id}>
                                    {d.name}
                                    {/* <FontAwesomeIcon icon={"fa"[d.name]}/> */}
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