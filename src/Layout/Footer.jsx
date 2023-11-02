import { React, useEffect } from 'react';
import { Link } from "react-router-dom";
import Error from '../components/Error';
import Loader from '../components/Loader';
import { FaHouseChimney, FaEnvelope } from 'react-icons/fa6';

import '../SASS/General.scss';

import useRequestData from '../hooks/useRequestData';

const Footer = () => {

    const { error, loading, data, makeRequest } = useRequestData();
    const { error: errorE, loading: loadingE, data: dataE, makeRequest: makeRequestE } = useRequestData();

    useEffect(() => {
        makeRequest("contactinformation")
        makeRequestE("events")
    }, [])

    return (
        <>

            {/*Error*/}
            {error && <Error />}

            {/*Loading*/}
            {loading && <Loader />}

            {/*Data*/}
            {data &&
                <footer className="p-4">
                    <div className="row justify-content-between">
                        <section className="col-12 col-md-3 mb-3 text-white">
                            <Link to="/">
                                <img src="./logo.png" alt="Bikelane logo" className='logofooter' />
                            </Link>
                            <p>{data.companypayoff}</p>
                            <div>
                                <address> <span><FaHouseChimney fill='#D45D79' className='IconHighlight' /></span> Klubhuset: {data.address}, {data.zipcity}</address>
                                <p> <span><FaEnvelope fill='#D45D79' /></span> {data.email}</p>
                            </div>
                        </section>

                        <div className="col-12 col-md-3 mb-3 text-white">
                            <h5>Kommende events</h5>
                            <hr />
                            {dataE && dataE.slice(0, 4).map(e =>

                                <p key={e._id}>&#x3E; {e.title}</p>

                            )}

                        </div>

                        <div className="col-12 col-md-1 mb-3 text-white">
                            <h5>Indhold</h5>
                            <hr />
                            <ul className="nav flex-column">
                                <Link to="/aboutus" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Om os</Link>
                                <Link to="/event" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Events</Link>
                                <Link to="/contact" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Kontakt</Link>
                                <Link to="/news" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Nyheder</Link>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4 mb-3 text-white">
                            <h5>Galleri</h5>
                            <hr />
                            <div className='row'>

                                {dataE && dataE.slice(0, 6).map(p =>
                                    <figure className='col-4 GalleryImg' key={p._id}>
                                        <img src={"http://localhost:5888/images/event/" + p.image} alt="Gallery of events" />
                                    </figure>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white">
                        <p> © Copyright 2012 Bikelane.</p>

                    </div>
                </footer>
            }
        </>
    )



}

export default Footer;