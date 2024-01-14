import React, { useEffect, useState } from 'react'
import Card from '../cards/Card';
import Navbar from '../navbar/Navbar';
import axios from 'axios';

const Home = () => {

  useEffect(()=>{
    getUser();
  },[])

  const [getdata ,setdata] =useState([])
  const URL ="https://my-first-backend-dn66.onrender.com/users";
  //"https://jsonplaceholder.typicode.com/users"

  async function getUser() {
    console.log("first console")
    try {
    
       const response = await axios.get(URL);
     
      console.log(response.data);
      setdata(response.data)
     
    } catch (error) {
      console.error(error);
    }
    console.log("last console")
  }
   const APiData = <pre>{JSON.stringify(getdata, null, 2)}</pre>
  
  return (
    <>
     <Navbar/>
     <h3>Data from the API:</h3>
      {APiData}
      <Card/>
      
    </>
  )
}

export default Home