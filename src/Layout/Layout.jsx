import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from './Header'
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollButton from '../components/ScrollButton';

const Layout = () => {
  return (
    <div>

        <Header/>
        <Navbar/>

        <main>
            <Outlet/>
            <ScrollButton/>
        </main>

      <Footer/>

    </div>
  )
}

export default Layout