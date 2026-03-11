import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Logo1.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white  ">
      <div className="container text-center text-md-start" >
        <div className="row" >
          
          {/* Column 1: Brand */}
          <div className="col-md-3 mx-auto mt-3" style={{color:'white'}}>
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">
              Kaira
            </h5>
            <p className="text-white ">
              Premium solutions for your digital needs. Quality and trust since 2010.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-md-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Links</h6>
            <ul className="list-unstyled">
              <li><NavLink to="/Home" className="text-white text-decoration-none">Home</NavLink></li>
              <li><NavLink to="/About" className="text-white  text-decoration-none">About</NavLink></li>
              <li><NavLink to="/Product" className="text-white  text-decoration-none">Products</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
            {/* <p className="text-white  mb-1">Surat, Gujarat, India</p> */}
            <p className=" mb-1 text-secondary"><b>Do you have any questions or suggestions?</b></p>
            <p className="text-white mb-1">info@kaira.com</p>
            <p className=" mb-1 text-secondary"><b>Do you need any support? Give us a call. </b></p>
            <p className="text-white ">+91 98765 43210</p>
          </div>

        </div>

        <hr className="my-4 border-light opacity-100" />

        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white">
            <strong>&copy; 2025 Kaira</strong>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
