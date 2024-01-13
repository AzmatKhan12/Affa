import React from 'react';
import {  Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-primary ">
      <div class="container-md me-md-5 ">
        <a class="navbar-brand" href='#' > AFFA Enterprises</a>
       
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item me-md-5">
              <Link class="nav-link active"  to="/">Home</Link>
            </li>
            <li class="nav-item me-md-5">
              <Link class="nav-link" to="/aboutUs">About-Us</Link>
            </li>
            <li class="nav-item me-md-5">
              <Link class="nav-link" to="/contactUs">Contact-Us</Link>
            </li>
            <li class="nav-item me-md-5 ">
              <Link class="nav-link" to="/Login">LogIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar