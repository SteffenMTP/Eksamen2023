import { React, useEffect } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';


import useRequestData from '../hooks/useRequestData';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCrown, faBiking, faMap, faHandshake } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(fab, faCrown, faBiking, faMap, faHandshake)

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