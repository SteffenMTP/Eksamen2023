import React from 'react';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';

import Layout from './Layout/Layout.jsx';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import News from './pages/News.jsx';
import NoMatch from './pages/NoMatch.jsx';

import Login from './pages/Login.jsx';
import AdminLayout from './Layout/admin/AdminLayout.jsx';
import HomeAdmin from './pages/admin/HomeAdmin.jsx';





function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        {/* PUBLIC */}
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="aboutus" element={< AboutUs />} />
          {/* <Route path="service" element={< Service />} /> */}
          {/* <Route path="faq" element={< FAQ />} /> */}
          <Route path="news" element={< News />} />
          {/* <Route path="news/:newsID" element={< NewsDetail />} /> */}
          <Route path="contact" element={< Contact />} />

          <Route path='login' element={<Login/>}/>

          <Route path="*" element={<NoMatch />} />

        </Route>


        {/* ADMIN */}
        <Route path='/admin' element={<AdminLayout/>}>

          <Route index element={<HomeAdmin/>}/>

          {/* booking */}
          {/* <Route path='bookingadmin'/> */}
          
          {/* news */}
          {/* <Route path='newsadmin' element={<NewsAdmin/>}/>
          <Route path='newsadmin/create' element={<NewsCreate/>}/>
          <Route path='newsadmin/edit/:newsID' element={<NewsEdit/>}/> */}
          
          {/* about */}
          {/* <Route path='aboutadmin' element={<AboutAdmin/>}/> */}

          <Route path="*" element={<NoMatch />} />

        </Route>

      </>
    )
  )

  return (
    <main className='container'>
      <RouterProvider router={router}/>
    </main>
  );
}

export default App;