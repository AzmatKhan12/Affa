import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/about/AboutUs';
import ContactUs from './components/contact/ContactUs';

import { Route,Routes } from 'react-router-dom';
import LogIn from './components/login/Login';


const App = () => {
  return (
    <>
     
    <Routes>
      
       <Route path='/' element = {<Home/>}/>
       <Route path='home' element = {<Home/>}/> 
       <Route path='aboutUs' element = {<AboutUs/>}/> 
       <Route path='contactUs' element = {<ContactUs/>}/> 
       <Route path ="Login" element ={<LogIn/>}/>
     </Routes>
     
    </>
  )
}

export default App