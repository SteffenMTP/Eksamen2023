import React, { useContext } from 'react'
import { Navigate } from "react-router-dom"

// import logincontext for at kunne gemme globalt om der er logget ind
import { LoginContext } from '../context/LoginContext'


const Login = () => {

  const { signIn, adminUser } = useContext( LoginContext )

  // hvis der er en bruger/logget ind så send direkte videre til admin
  if ( adminUser ) {
    return <Navigate to="/admin" replace />
  }

  // Håndter loginformularens submit
  const handleLogin = ( e ) => {

    e.preventDefault()
    // simulerer login
    signIn( e.target.email.value )

  }


  return (
    <div className="Login">

      <h1>Login</h1>

      <form onSubmit={ handleLogin }>

        <div>
          <label>Email:
            <input type="email" name="email" required placeholder="Email" />
          </label>
        </div>

        <div>
          <label>Password:
            <input type="password" name="password" required placeholder="Password" />
          </label>
        </div>

        <button type="submit">Login</button>

      </form>

    </div>
  )
}

export default Login