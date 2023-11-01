import React from 'react';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';

import Layout from './Layout/Layout.jsx';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import Events from './pages/Events.jsx';
import EventsDetail from './pages/EventsDetail.jsx';
import News from './pages/News.jsx';
import NewsDetail from './pages/NewsDetail.jsx';

import NoMatch from './pages/NoMatch.jsx';


// ADMIN PAGES
import Login from './pages/Login.jsx';
import AdminLayout from './Layout/admin/AdminLayout.jsx';
import HomeAdmin from './pages/admin/HomeAdmin.jsx';
import EventAdmin from './pages/admin/Event/EventAdmin.jsx';
import EventCreate from './pages/admin/Event/EventCreate.jsx';
import EventEdit from './pages/admin/Event/EventEdit.jsx';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        {/* PUBLIC */}
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="aboutus" element={< AboutUs />} />
          <Route path="event" element={< Events />} />
          <Route path="event/:eventID" element={< EventsDetail />} />
          <Route path="news" element={< News />} />
          <Route path="news/:newsID" element={< NewsDetail />} />
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
          <Route path='eventadmin' element={<EventAdmin/>}/>
          <Route path='eventadmin/create' element={<EventCreate/>}/>
          <Route path='eventadmin/edit/:eventID' element={<EventEdit/>}/>
          
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
