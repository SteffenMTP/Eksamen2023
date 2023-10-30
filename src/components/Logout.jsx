import { useContext } from 'react'

import { LoginContext } from '../context/LoginContext'


// Button til logud
const Logout = () => {

    // det vi skal bruge fra context-filen - signOut
    const { signOut } = useContext( LoginContext )



    const handleLogout = () => {
        signOut()
    }


    return (
        <div>
            <button onClick={ handleLogout }>Log ud</button>
        </div>
    )
}

export default Logout