import React from "react";
import { NavLink } from "react-router-dom";
import logo from './Logo_1.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={logo} alt="Kaira Logo" style={{height:'80px', width:'90px'}}></img></a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto d-flex gap-3">
            <NavLink to='/' className='nav-link nav-item fs-5'>Home</NavLink>
            <NavLink to='/About' className='nav-link nav-item fs-5'>About</NavLink>
            <NavLink to='/Product' className='nav-link nav-item fs-5'>Product</NavLink>
            <NavLink to='/Contact' className="nav-link nav-item fs-5">Contact Us</NavLink>
            <i className="nav-link nav-item bi bi-search fs-5 d-flex align-items-center" style={{color:'white'}}></i>
            <i className="nav-link nav-item bi bi-cart4 fs-5 d-flex align-items-center me-2" style={{color:'white'}}></i>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
