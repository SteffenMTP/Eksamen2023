import { useContext } from 'react'

import { LoginContext } from '../context/LoginContext'


// BUTTON TO LOGOUT
const Logout = () => {

    // WHAT WE NEED FROM CONTEXT-FILE - SIGNOUT
    const { signOut } = useContext( LoginContext )

    const handleLogout = () => {
        signOut()
    }

    return (
        <div>
            <button onClick={ handleLogout } className='btn btn-primary'>Log ud</button>
        </div>
    )
}

export default Logout