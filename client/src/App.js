import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/about/AboutUs';
import ContactUs from './components/contact/ContactUs';

import { Route,Routes } from 'react-router-dom';
import LogIn from './components/login/Login';
import axios from 'axios';

const App = () => {


  const URL ="https://my-first-backend-dn66.onrender.com/users";
  //"https://jsonplaceholder.typicode.com/users"

  async function getUser() {
    console.log("first console")
    try {
    
       const response = await axios.get(URL);
     
      console.log(response.data);
     
    } catch (error) {
      console.error(error);
    }
    console.log("last console")
  }
  getUser();
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