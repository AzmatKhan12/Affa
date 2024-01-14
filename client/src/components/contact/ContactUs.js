import React from "react";
import Navbar from "../navbar/Navbar";
import axios from 'axios';

const ContactUs = () => {

  const URL = "https://my-first-backend-dn66.onrender.com/users";

  async function getUser() {
    console.log("first console")
    try {
      const response = await axios.get(URL);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar/>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Jhonson"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="123456789"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
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
