import { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ( props ) => {

    // STATE TO REMEMBER IF A USER IS LOGGED IN
    const [ adminUser, setAdminUser ] = useState()

    // SIGNIN - SAVES ADMINUSER 
    let signIn = ( authedUser ) => {
        setAdminUser( authedUser )
    }
    
    // SIGNOUT - DELETES ADMINUSER
    let signOut = () => {
        setAdminUser( null )
    }

    return (
        <LoginContext.Provider value={ { adminUser, signIn, signOut } }>
            { props.children }
        </LoginContext.Provider>
    )
}

export default LoginContextProvider