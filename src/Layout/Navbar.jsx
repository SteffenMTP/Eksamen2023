import React from 'react';
import { NavLink, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
    return (

        //NAVBAR WORK IN PROGRESS

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand" href="#" to="/">
                    <img src="./logo-black.png" alt="logo" width="80" />
                </Link>

                {/* Burger Menu */}
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className='offcanvas-body'>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink end className="nav-link" aria-current="page" to="/">Forside</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/aboutus">Om Os</NavLink>
                            </li>

                            {/* EVENTS */}
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Events</span>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/Users">Event 1</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/Users">Event 2</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/contact">Kontakt</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/news">Nyheder</NavLink>
                            </li>

                            <button className='btn btn-primary'>Gratis Prøveperiode</button>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;