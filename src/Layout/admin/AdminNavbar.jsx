import { Link } from "react-router-dom"
import Logout from "../../components/Logout"

const AdminNavbar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/admin">ADMINHome</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="newsadmin">NEWS ADMIN</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="aboutadmin">About ADMIN</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li><Logout /></li>
                    </ul>
                </nav>

            </div>
        </>

    )
}

export default AdminNavbar