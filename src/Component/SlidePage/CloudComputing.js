import React from "react";
import { useEffect } from 'react';

import "./CloudComputing.css";
import { NavLink } from 'react-router-dom';
import logo22 from "../img3/img22.jpg";
import logo23 from "../img3/img23.jpg";
import logo24 from "../img3/img24.jpg";
import logo25 from "../img3/img25.jpg";
import logo26 from "../img3/img26.jpg";
import logo27 from "../img3/img27.jpg";
import logo28 from "../img3/img28.jpg";
import logo from "../img3/cloud computing.jpg";


const CloudComputing = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	  }, []);
	return (
		<>
			<div className="bg4 ">
				<p>
					<NavLink to="/" className="navbutton1">Home</NavLink>/
					<NavLink to="#" className="navbutton2">Cloud Computing</NavLink>
				</p>
			</div>
    <div className="container">
			<header className="bg32">
				<img src={logo} alt="Logo" style={{ height: "380px", width: '100%' }} />
				
					<div className="centered">
						{/* "Transform your business with the limitless potential of <span style={{ color: "red" }}>cloud computing </span>". */}
					</div>
				
				<div className="container">
					<div className="row">
						<div className="col-md-10 paragraph">
							<p>
								 Industry 4.0 is the fourth industrial revolution, characterized by the integration of advanced technologies such as the Internet of Things (IoT), artificial intelligence (AI), and machine learning (ML) into the manufacturing process. </p>
								<p> <span style={{ color: "red" }}>Cloud computing </span>is a critical component of Industry 4.0, as it provides a scalable and flexible infrastructure for Industry 4.0 solutions. 
							</p>
						</div>
					</div>
				</div>
			</header>
			</div>
			{/* ----------------------------------------SECTION------------------------------------------------- */}
			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Autonomous Machine Software Development</span></h3>
					<div className="col-md-5">
						<img src={logo22} alt="loading..." style={{ height: "300px", width: '100%' }} />
					</div>
					<div className="col-md-5">
						<p>A digital twin is a virtual model of a physical system or process that enables businesses to simulate and optimize their operations.</p>
						<p>Our Cloud-based digital twin development services create and host digital twins in the cloud, enabling businesses to access their digital twins from anywhere in the world.</p>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Cloud-based Application Development</span></h3>
					<div className="col-md-5">
						<p>Our Cloud-based application development services create custom applications that run on cloud infrastructure and are designed to meet the specific needs of Industry 4.0 solutions.</p>
						<p>These applications can automate processes, enable remote control, and provide real-time data visualization.</p>
					</div>
					<div className="col-md-5">
						<img src={logo23} alt="loading..." style={{ height: "300px", width: '100%' }} />
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Cloud-based IoT Device Management</span></h3>
					<div className="col-md-5">
						<img src={logo24} alt="loading..." style={{ height: "300px", width: '100%' }} />
					</div>
					<div className="col-md-5">
						<p>Our Cloud-based IoT device management services offer device provisioning, monitoring, and maintenance solutions.</p>
						<p>This service helps ensure that devices are secure, reliable, and always connected to the network.</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Cloud-based IoT Integration</span></h3>
					<div className="col-md-5">
						<p>Our Cloud-based IoT integration services help businesses integrate IoT solutions with existing systems and processes hosted in the cloud.</p>
						<p>This includes integrating IoT devices with enterprise software, cloud platforms, and other third-party systems.</p>
					</div>
					<div className="col-md-5">
						<img src={logo25} alt="loading..." style={{ height: "300px", width: '100%' }} />
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Cloud-based IoT Platform Development</span></h3>
					<div className="col-md-5">
						<img src={logo26} alt="loading..." style={{ height: "300px", width: '100%' }} />
					</div>
					<div className="col-md-5">
						<p>A cloud-based IoT platform is a software framework that enables businesses to manage, monitor, and control IoT devices and data.</p>
						<p>Our Cloud-based IoT platform development services provide customized solutions that meet specific business needs and can be scaled as the business grows.</p>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Cloud-based AI and ML Development</span></h3>
					<div className="col-md-5">
						<p>Our Cloud-based AI and ML development services help businesses develop and deploy AI and ML models in the cloud.</p>
						<p>This includes developing and integrating machine learning models, natural language processing, and computer vision algorithms.</p>
					</div>
					<div className="col-md-5">
						<img src={logo27} alt="loading..." style={{ height: "300px", width: '100%' }} />
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Cloud-based Big Data Analytics</span></h3>
					<div className="col-md-5">
						<img src={logo28} alt="loading..." style={{ height: "300px", width: '100%' }} />
					</div>
					<div className="col-md-5">
						<p>Our Cloud-based big data analytics services help businesses process and analyze large amounts of data collected from Industry 4.0 solutions.</p>
						<p>This includes data processing, data analysis, and data visualization in the cloud, allowing businesses to scale their analytics capabilities to meet their needs.</p>
					</div>
				</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-10">
							<hr />
							<p>Our Overall, cloud computing Industry 4.0 offerings provide businesses with the infrastructure and expertise needed to leverage the power of cloud computing and Industry 4.0 technologies together, enabling them to improve their operations and create new opportunities.</p>
					
						</div>
						
					</div>
				</div>
				
			

		</>
	);
};
export default CloudComputing;






