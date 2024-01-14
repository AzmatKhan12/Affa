import React from 'react';
import {  Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary ">
      <div className="container-md me-md-5 ">
        <a className="navbar-brand" href='#' > AFFA Enterprises</a>
       
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item me-md-5">
              <Link className="nav-link active"  to="/">Home</Link>
            </li>
            <li className="nav-item me-md-5">
              <Link className="nav-link" to="/aboutUs">About-Us</Link>
            </li>
            <li className="nav-item me-md-5">
              <Link className="nav-link" to="/contactUs">Contact-Us</Link>
            </li>
            <li className="nav-item me-md-5 ">
              <Link className="nav-link" to="/Login">LogIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar