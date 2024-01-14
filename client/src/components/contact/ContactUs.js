import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from 'axios';


const ContactUs = () => {

   const URL = "https://my-first-backend-dn66.onrender.com/users";

  // async function getUser() {
  //   console.log("first console")
  //   try {
  //     const response = await axios.get(URL);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const [formData,setFormData]= useState({name : "",phone:"",email:"",address:"",description: ""});
  const handleChnage = (e)=>{
      
      setFormData(prevState =>{
        return {...prevState, [e.target.name]: e.target.value}
      })
  }
 
   const submitHandlar =  async(e)=>{
      e.preventDefault();
      console.log("clicked")
      try {
        const response = await axios.post(URL,formData);
        console.log("response ", response.data)
      } catch (error) {
        console.log("Error",error)
      }

   }
  return (
    <div>
      <Navbar/>
      <form onSubmit={submitHandlar}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name = "name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Jhonson"
            onChange={handleChnage}
            value={formData.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name ="phone"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+91"
            onChange={handleChnage}
            value={formData.phone}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name ="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={handleChnage}
            value={formData.email}
          />
        </div>
        <div className="mb-3">
        <label className="form-label">address</label>
        <input
          type="text"
          name ="address"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={handleChnage}
          value={formData.address}
        />
      </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name ="description"
            onChange={handleChnage}
            value={formData.description}
          ></textarea>
        </div>
        <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
      </form>
    </div>
  );
};

export default ContactUs;
