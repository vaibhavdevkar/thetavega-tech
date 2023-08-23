import React from "react";
import "./IOT.css";
import { NavLink } from 'react-router-dom';
import logo15 from "../img3/img15.jpg";
import logo16 from "../img3/img16.jpg";
import logo17 from "../img3/img17.jpg";
import logo18 from "../img3/img18.jpg";
import logo19 from "../img3/img19.jpg";
import logo20 from "../img3/img20.jpg";
import logo21 from "../img3/img21.jpg";
import logo from "../img3/IOT.png"
import { useEffect } from 'react';


const IOT = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	  }, []);
  return (
    <>
      <div className="bg3 ">
        <p>
          <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Internet of Things </NavLink>
        </p>
      </div>
      <div className="container">
      <header className="bg32">
				<img src={logo} alt="Logo" style={{ height: "380px", width: '100%' }} />
				<div className='AB-text'>
					<h1> <span style={{ color: "red" }}>Internet of Things (IoT)</span> </h1>
					<div className="bg">
						<h6>"Connect your world, unleash the power of <span style={{ color: "red" }}>IoT</span>".</h6>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-10 paragraph">
							<p>
								<span style={{ color: "red" }}>Autonomous machines</span> are machines that can operate and make decisions without human intervention. These machines use sensors, artificial intelligence, and machine learning algorithms to perceive their environment, analyze data, and make decisions. We offer services related to autonomous machines that businesses can leverage to improve their operations.
							</p>
						</div>
					</div>
				</div>
			</header>
      </div>
      {/* --------------------------------SECTION----------------------------------------------------------- */}
      <div className="container">
        <div className="row">
          <h3 className="b1"><span style={{ color: "red" }}> IoT Consultancy</span></h3>
          <div className="col-md-5">
            <img src={logo15} alt="loading..." style={{ height: "300px", width: '100%' }} />
          </div>
          <div className="col-md-5">
            <p>: We provide strategic guidance to businesses looking to implement IoT solutions.</p>
            <p>We help identify the right technologies and solutions that can improve business processes and create new opportunities.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3 className="b1"><span style={{ color: "red" }}>IoT Platform Development</span></h3>
          <div className="col-md-5">
            <p>We offer a complete IoT platform with a software framework that enables businesses to manage, monitor, and control IoT devices and data.</p>
            <p>IoT platform development services provide customized solutions that meet specific business needs.</p>
          </div>
          <div className="col-md-5">
            <img src={logo16} alt="loading..." style={{ height: "300px", width: '100%' }} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3 className="b1"><span style={{ color: "red" }}>IoT Device Management</span></h3>
          <div className="col-md-5">
            <img src={logo17} alt="loading..." style={{ height: "300px", width: '100%' }} />
          </div>
          <div className="col-md-5">
            <p>Our IoT device management services offer device provisioning, monitoring, and maintenance solutions.</p>
            <p>This service helps ensure that devices are secure, reliable, and always connected to the network.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3 className="b1"><span style={{ color: "red" }}>IoT Analytics</span></h3>
<div className="col-md-5">
<p>Our IoT analytics services help businesses derive insights from the data collected by IoT devices.</p>
<p>This service includes data processing, data analysis, and data visualization.</p>
</div>
<div className="col-md-5">
<img src={logo18} alt="loading..." style={{ height: "300px", width: '100%' }} />
</div>
</div>
</div>
<div className="container">
    <div className="row">
      <h3 className="b1"><span style={{ color: "red" }}>IoT Security</span></h3>
      <div className="col-md-5">
        <img src={logo19} alt="loading..." style={{ height: "300px", width: '100%' }} />
      </div>
      <div className="col-md-5">
        <p>Our IoT security services provide solutions to protect IoT devices, networks, and data from cyber threats.</p>
        <p>This includes secure device authentication, data encryption, and secure network connections.</p>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <h3 className="b1"><span style={{ color: "red" }}>IoT Application Development</span></h3>
      <div className="col-md-5">
        <p>We provide IoT application development services which include developing custom applications that run on IoT devices.</p>
        <p>These applications can automate processes, enable remote control, and provide real-time data visualization.</p>
      </div>
      <div className="col-md-5">
        <img src={logo20} alt="loading..." style={{ height: "300px", width: '100%' }} />
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <h3 className="b1"><span style={{ color: "red" }}>IoT Integration</span></h3>
      <div className="col-md-5">
        <img src={logo21} alt="loading..." style={{ height: "300px", width: '100%' }} />
      </div>
      <div className="col-md-5">
        <br />
        <p>: We provide IoT integration services to help businesses integrate IoT solutions with existing systems and processes.</p>
        <p>This includes integrating IoT devices with enterprise software, cloud platforms, and other third-party systems.</p>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="col-md-10">
        <hr />
        <p>Overall, our IoT service offerings provide businesses with the tools and expertise needed to harness the power of IoT and transform their operations. Get in touch with us for more details.</p>
      </div>
    </div>
  </div>
</>
);
};

export default IOT;
