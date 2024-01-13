import React from "react";
import Navbar from "../navbar/Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <form>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Jhonson"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="123456789"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
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
