import React from "react";
import "./Integrations.css"
import { NavLink } from 'react-router-dom';
import logo from "../img3/integration.jpg"
import logo9 from "../img3/img9.jpg"
import logo10 from "../img3/img10.jpg"
import logo11 from "../img3/img11.jpg"
import logo12 from "../img3/img12.jpg"
import logo13 from "../img3/img13.jpg"
import logo14 from "../img3/img14.jpg"
import { useEffect } from 'react';


const Integrations = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	}, []);
	return (
		<>
			<div className="bg2 ">
				<p> <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> system integration </NavLink> </p>
			</div>
			<div className="container">
				<header className="bg32">
					<img src={logo} alt="Logo" style={{ height: "380px", width: '100%' }} />
					<div className='AB-text'>
						<h1> <span style={{ color: "orange" }}> System Integration</span> </h1>
						<div className="bg">
							<h6 style={{color:"white"}}>"Streamline your operations and achieve your business goals with our system  <span style={{ color: "red" }}>integration services</span>".</h6>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-10 paragraph">
								<p>
									Industry 4.0 is the fourth industrial revolution, characterized by the integration of advanced technologies such as the<span style={{ color: "red" }}> Internet of Things (IoT)</span>,<span style={{ color: "orange" }}> artificial intelligence (AI)</span>, and <span style={{ color: "blue" }}> machine learning (ML)</span> into the manufacturing process.</p>
								<p> System integration is a critical component of Industry 4.0, as it enables the integration of different systems and technologies into a single, cohesive ecosystem.
								</p>
							</div>
						</div>
					</div>
				</header>
			</div>

			{/* --------------------------------------SECTION--------------------------------------------------- */}


			<div className="container ">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Digital Transformation Consulting</span></h3>
					<div className="col-5 ">
						<img src={logo9} alt="loading... " style={{ height: "300px", width: '80%' }} />
					</div>
					<div className="col-5 ">
						<p> Our Digital transformation consulting services provide strategic guidance to businesses looking to adopt Industry 4.0 technologies. </p>
						<p>We can help businesses identify the right technologies and solutions that can improve business processes and create new opportunities.</p>

					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>IoT Integration</span></h3>
					<div className="col-5">
						<p>Our IoT integration services help businesses integrate IoT solutions with existing systems and processes.</p>
						<p>This includes integrating IoT devices with enterprise software, cloud platforms, and other third-party systems.</p>
					</div>
					<div className="col-5">
						<img src={logo10} alt="loading... " style={{ height: "300px", width: '80%' }} />

					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}> AI and ML Integration</span></h3>
					<div className="col-5">
						<img src={logo11} alt="loading... " style={{ height: "300px", width: '80%' }} />
					</div>
					<div className="col-5">
						<p>Our AI and ML integration services help businesses integrate AI and ML technologies into their systems and processes. </p>
						<p>This includes developing and integrating machine learning models, natural language processing, and computer vision algorithms.</p>

					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Cybersecurity Integration</span></h3>
					<div className="col-5">
						<p>Our Cybersecurity integration services provide solutions to protect Industry 4.0 systems, networks, and data from cyber threats. This includes secure authentication, data encryption, and secure network connections.</p>
					</div>
					<div className="col-5">
						<img src={logo12} alt="loading... " style={{ height: "300px", width: '80%' }} />

					</div>
				</div>
			</div>


			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Cloud Integration</span></h3>
					<div className="col-5">
						<img src={logo13} alt="loading... " style={{ height: "300px", width: '80%' }} />

					</div>
					<div className="col-5">
						<p>our Autonomous machine maintenance
							services provide regular maintenance and repair for autonomous machines. This
							includes software updates, hardware upgrades, and troubleshooting.</p>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<h3 className="b1"><span style={{ color: "red" }}>Digital Twin Development</span></h3>
					<div className="col-5">
						<p>Our Digital twin development services create virtual models of physical systems and processes</p>
						<p>This includes data analytics, predictive maintenance, and
							remote monitoring.</p>
					</div>
					<div className="col-5">
						<img src={logo14} alt="loading... " style={{ height: "300px", width: '80%' }} />
					</div>
				</div>
			</div>


			<div className="container">
				<div className="row">
					<div className="col-10">
						<hr />
						<p>Our Overall, system integration Industry 4.0 offerings provide businesses with the tools and expertise needed to transform their operations and take advantage of the latest Industry 4.0 technologies.<span style={{ color: "red" }}> Get in touch with us for more Details</span> </p>
					</div>
				</div>
			</div>


		</>
	);
};

export default Integrations;
