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
                            <Link to="goalsadmin" className="nav-link">GOALS - ADMIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="herosfront" className="nav-link">FORSIDE HERO - ADMIN</Link>
                        </li>
                        <li><Logout /></li>
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default AdminNavbar