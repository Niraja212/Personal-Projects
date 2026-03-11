import React from 'react'
import { NavLink } from "react-router-dom";


const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-0" style={{marginBottom: '50px'}}>
      <div className="container-fluid">
      <NavLink className="navbar-brand" to="/Admin/Dashboard">Dashboard</NavLink>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <NavLink to='/Admin/Dashboard' className='nav-link nav-item fs-5'>Dashboard</NavLink>
            <NavLink to='/Admin/AdminProduct' className='nav-link nav-item fs-5'>Product</NavLink>
            <NavLink to='/Admin/AddProduct' className='nav-link nav-item fs-5'>AddProduct</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar
