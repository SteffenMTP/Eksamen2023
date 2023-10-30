import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from './Header'
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>

        <Header/>
        <Navbar/>

        <main>
            <Outlet/>
        </main>



    </div>
  )
}

export default Layout