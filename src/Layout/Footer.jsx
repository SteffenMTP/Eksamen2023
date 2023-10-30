import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Error from '../components/Error';
import Loader from '../components/Loader';



const Footer = () => {
    
   

    return (
        <>

            {/*Error*/}
            { <Error />}

            {/*Loading*/}
            { <Loader />}

            {/*Data*/}
            {data &&
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <img src="./logo-2.png" alt="Stroem logo" />
                            <p>Som medlem af Elinstallatørernes Landsorganisation, ELFO, er vi tilsluttet et ankernævn og en garantiordning.</p>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Link</h5>
                            <ul className="nav flex-column">
                                <Link to="/faq" className="nav-foot-item mb-2 text-decoration-none">&#x3E; FAQ</Link>
                                <Link to="/aboutus" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Om os</Link>
                                <Link to="/contact" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Kontakt os</Link>
                                <Link to="/service" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Services</Link>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Kontakt os</h5>
                            <address className='m-1'>Adresse:  {data.address}</address>
                            <p className='m-1'>Telefon:  {data.phone}</p>
                            <p className='m-1'>Email:  {data.email}</p>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form onSubmit={handleSubscribe}>
                                <h5>Nyhedsbrev</h5>
                                <p>Tilmeld dig vores nyhedsbrev her</p>
                                <div className="d-flex flex-column flex-sm-row w-50 gap-2">
                                    <label htmlFor="newsletter" className="visually-hidden">Email address</label>
                                    <input type="email" name="email" id="email" placeholder='Din email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <button className="btn btn-primary" type="submit" disabled={isSubscribed} >Tilmeld</button>
                                </div>
                            </form>
                            {isSubscribed && (
                                <div className="alert alert-success mt-3">
                                    Subscribed to newsletter
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>Strøm © 2017 All Right Reserved</p>
                        {data && data.some && data.some.map((d) =>
                            <div key={d._id}>
                                <span>{iconMappings[d.icon]}</span>
                            </div>
                        )}
                    </div>
                </footer>
            }
        </>
    )



}

export default Footer;