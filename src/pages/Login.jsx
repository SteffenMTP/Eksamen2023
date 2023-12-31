import React, { useContext } from 'react'
import { Navigate } from "react-router-dom"

// import logincontext for at kunne gemme globalt om der er logget ind
import { LoginContext } from '../context/LoginContext'


const Login = () => {

  const { signIn, adminUser } = useContext(LoginContext)

  // IF ADMIN USER IS LOGGED IN - NAVIGATE TO ADMIN HOME PAGE
  if (adminUser) {
    return <Navigate to="/admin" replace />
  }

  // HANDLE LOGIN
  const handleLogin = (e) => {

    e.preventDefault()
    // SIMULATE LOGIN
    signIn(e.target.email.value)

  }

  return (
    <>
      <div className='row'>

        <h1>Login</h1>

        <div className='col-3 mx-auto'>
          <form onSubmit={handleLogin} className='form-control'>


            <label>Email:
              <input type="email" name="email" className='form-control my-2' required placeholder="Email" />
            </label>



            <label>Password:
              <input type="password" name="password" className='form-control my-2' required placeholder="Password" />
            </label>

            <div>
            <button type="submit" className='btn btn-primary'>Login</button>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}

export default Login