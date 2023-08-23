import React from "react";
import logo from "./imgs/logo.jpg";
import { NavLink } from "react-router-dom";
import './Navbar.css'
// import { useState } from "react";

// import Industries from './Industries'

const Navbar = () => {  
  return (
        <>
          <div className="  fixed-top nav5">
            <div className="row" id="trans">
              <div className="col-12 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <NavLink className="navbar-brand mt-n3 mb-n1" to="/">
                    <img src={logo} alt="not found" height="35%" width="38%" />
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                  
                    <span className="navbar-toggler-icon"></span>
                 </button>
    
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     
                    <ul className="navbar-nav ml-auto" id="navItems">
                      <li className="nav-item ">
                        {/* <NavLink className="nav-link  "  to="/"  >
                          Home <span class="sr-only">(current)</span>
                        </NavLink> */}
                      </li>
                      
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/about" id="navItems">
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="navItems">Industries</span>
                        </NavLink>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >

                          <NavLink className="dropdown-item" to="/industries/automotion">
                            Automation & Ancilliries <span class="caret"></span>
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/smartcity">
                            BMS, EMS & Smart-city
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/defense">
                            Defence & Aerospace
                          </NavLink>
                          <NavLink className="dropdown-item" to="/industries/pharma">
                            Pharma & Others
                          </NavLink>
                          
                        </div>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/panels" id="navItems">
                          Panels
                        </NavLink>
                      </li>
                          
                      {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/product" id="navItems">
                          Product
                        </NavLink>
                      </li> */}
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/capabilities" id="navItems">
                          Capabilities
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="navItems">Adisra-Thetavega</span>
                        </NavLink>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >

                          <NavLink className="dropdown-item" to="/adisra/product">
                            Project Strategy <span class="caret"></span>
                          </NavLink>
                          <NavLink className="dropdown-item" to="adisra/standards">
                            Standards
                          </NavLink>
                          <NavLink className="dropdown-item" to="adisra/building">
                            Building Blocks
                          </NavLink>
                          <NavLink className="dropdown-item" to="adisra/worldwide">
                            Worldwide Acclaim
                          </NavLink>
                          {/* <NavLink className="dropdown-item" to="adisra/helpsite">Help Site</NavLink> */}
                          <NavLink className="dropdown-item" to="adisra/programs">
                            Programs
                          </NavLink>
                          <NavLink className="dropdown-item" to="adisra/about">
                            About
                          </NavLink>
                          
                        </div>
                      </li>
                      {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/adisara" id="navItems">
                          Adisra-Thetavega
                        </NavLink>
                      </li> */}
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" id="navItems">
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                
                </nav>
              </div>
            </div>
          </div>
        </>
      )
    };
    

export default Navbar;
