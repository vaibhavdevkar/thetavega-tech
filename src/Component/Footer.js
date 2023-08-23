import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {

  return (
    <footer id="footer" className="footer-1" style={{ marginTop: "4px" }}>
      <div className="main-footer widgets-dark typo-light" >
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-xs-12 col-sm-6 col-md-3"> */}
            {/* <div className="widget subscribe no-box"  >
                <h5 className="widget-title" >
                    About Us<span></span>
                </h5>
                <ul className="thumbnail-widget"style={{fontSize:"13px"}}>
                  <li>
                    <div className="thumb-conten" > 
                      <NavLink to="/"> About Us</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content" >
                    <NavLink to="/">OUR APPROACH</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">                      
                      <NavLink to="/">SKILLS</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">                 
                      <NavLink to="/">INFRASTRUCTURE</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">                      
                      <NavLink to="/">INNOVATION</NavLink>
                    </div>
                  </li>
                </ul>
              </div> */}
            {/* </div> */}
            {/* ---------------------------SECTION---------------------------------------------------------------- */}
            {/* <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Industries<span></span>
                </h5>
                <ul className="thumbnail-widget" style={{fontSize:"13px"}}>
                  <li>
                    <div className="thumb-content">                      
                      <NavLink to="/">Pharma & Other</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/" >Defence & Aerospace</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">                      
                      <NavLink to="/">Smart City</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">                      
                      <NavLink to="/">Automation & Ancilliries</NavLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* ------------------------------------------------SECTION---------------------------------------------- */}
            {/* <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Products<span></span>
                </h5>
                <ul className="thumbnail-widget" style={{fontSize:"13px"}}>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">ADISARA-Knowledge</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">ADISARA-Insight</NavLink>

                    </div>
                  </li>
                  
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">ADISARA- Smart 4.0</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">Manufacturing Execution System</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">IOT Gateway</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">Smart Display</NavLink>

                    </div>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* --------------------------------SECTION-------------------------------------------------------- */}
            {/* <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Adisara<span></span>
                </h5>
                <ul className="thumbnail-widget" style={{fontSize:"13px"}}>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">About Us</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                    
                      <NavLink to="/">Programs</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">Help Site</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">Worldwide Acclaim</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">Building Blocks</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">Standards</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      
                      <NavLink to="/">Product Strategy</NavLink>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
             <hr/> */}
            {/* ----------------------------------SECTION----------------------------------------------------- */}
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  About<span></span>
                </h5>
                <p className=" thumbnail-widget " style={{ fontSize: "13px" }}>
                  We Offering, IIoT based Smart Automation Digitalization &
                  Traceability Solutions to Manufacturing Industries-as partner
                  to conceptualize and realize technology-driven business
                  transformation
                </p>
              </div>
            </div>
            {/* ---------------------------------------SECTION---------------------------------------------------- */}
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Getting Started<span></span>
                </h5>
                <ul className="thumbnail-widget" style={{ fontSize: "13px", lineHeight: '1' }}>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/csharp">C# Scripting</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/prosetting">Project Setting</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <NavLink to="/addfiles">Add Documents & Files</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/createnew">Create New Project</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/launch">Launch ADISARA SmartView</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/licensing">Licensing</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/downi">Download & Installation</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/requirement">Requirements</NavLink>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* ------------------------------------SECTION------------------------------------------------------ */}
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  Services<span></span>
                </h5>

                <ul className="thumbnail-widget" style={{ fontSize: "13px", lineHeight: '1' }}>

                  <li>
                    <div className="thumb-content">

                      <NavLink to="/trace">Track and Trace</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/arvr">AR/VR Solutions</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/bigdata">Big Data Analytics</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <NavLink to="/cloudcomputing">Cloud Computing</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <NavLink to="/iot">Internet of Things (IoT)</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/integrations">System Integrations</NavLink>

                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">

                      <NavLink to="/autonomous" >Autonomous Machines</NavLink>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* ---------------------------------SECTION---------------------------------------------------------- */}
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box" >
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>
                <p className=" thumbnail-widget " style={{ fontSize: "13px" }}>
                  Block No. 02, Sadafuli, Rana Nagar, Aurangabad, Maharashtra 431001
                </p>
                <p className=" thumbnail-widget " style={{ fontSize: "13px" }}>
                  Email at us: <br></br>
                  info@thetavega.tech <br></br>
                </p>
                <div className="social-icons" style={{marginLeft:"10%"}}>
                  {/* Using Font Awesome */}
                  <p style={{ fontSize: "13px" }}>Follow Us On: <br></br></p>
                  <a href="https://www.facebook.com/thetavega/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook}  style={{ fontSize: '20px', marginRight: '40px' }}/>
                  </a>
                  <a href="https://www.twitter.com/your-twitter-url" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '20px', marginRight: '40px' }}/>
                  </a>
                  <a href="https://in.linkedin.com/company/thetavegatech" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '20px', marginRight: '40px' }}/>
                  </a>
                </div>
                {/* <p className=" thumbnail-widget " style={{ fontSize: "13px" }}>

                  Follow Us On: <br></br>
                  Facebook
                  Instagram
                  Twitter
                  Linkedln
                </p> */}

                {/* <p style={{ fontSize: "13px" }}>Block No. 02, Sadafuli, Rana Nagar, Aurangabad, Maharashtra 431001</p>
                <p style={{ fontSize: "13px" }}>Email at us: <br></br>
                  info@thetavega.tech <br></br></p>
                <p style={{ fontSize: "13px" }}>
                  Follow Us On: <br></br>
                  Facebook
                  Instagram
                  Twitter
                  Linkedln
                </p> */}
                {/* <p className=" thumbnail-widget " style={{fontSize:"13px"}}>
                Follow Us On<br></br>
                  Facebook<br></br>
                  Instagram<br></br>
                  Twitter<br></br>
              </p> */}
              </div>
            </div>
          </div>
        </div>


        <div className="container" >
          <div className="row" >
            <div className="col-md-10 text-center">
              <p>
                &copy; COPYRIGHT 2023 - Thetavega Tech Pvt Ltd
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
