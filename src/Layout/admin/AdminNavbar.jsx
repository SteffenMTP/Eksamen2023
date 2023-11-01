import { Link } from "react-router-dom";
import Logout from "../../components/Logout";

const AdminNavbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/admin" className="nav-link">Home - ADMIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="eventadmin" className="nav-link">EVENTS - ADMIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="aboutadmin" className="nav-link">About ADMIN</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Dropdown</span>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/event">Alle</Link></li>
                                <li className="dropdown-item" href="#">Another action</li>
                                <li className="dropdown-item" href="#">Something else here</li>
                            </ul>
                        </li>
                        <li><Logout /></li>
                    </ul>
                </div>
            </nav>







            <nav className="navbar navbar-expand-lg justify-content-between">
                <ul className="navbar-nav">
                    <li className="nav-item active">

                    </li>
                    <li className="nav-item">

                    </li>
                    <li className="nav-item">

                    </li>


                </ul>
            </nav>



            {/* <div className="container">
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">

                        </li>

                        <li className="nav-item">
                            
                        </li>

                        <li className="nav-item">
                            
                        </li>

                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        
                    </ul>
                </nav>

            </div> */}
        </>

    )
}

export default AdminNavbar