import React from "react";
import "./AutonomousMachine.css";
import { NavLink } from 'react-router-dom';
import logo1 from "../img3/img2.png";
import logo2 from "../img3/img3.jpg";
import logo3 from "../img3/img2.jpg";
import logo4 from "../img3/img4.jpg";
import logo5 from "../img3/img5.jpg";
import logo6 from "../img3/img6.jpg";
import logo7 from "../img3/img7.jpg";
import logo8 from "../img3/img8.jpg";
import { useEffect } from 'react';


const Autonomous = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	}, []);

	return (
		<div className="container">
			<div className="bg0 fixed-top">
				<p>
					<NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Autonomous Machine </NavLink>
				</p>
			</div>

			<header className="bg32">
				<img src={logo1} alt="Logo" style={{ height: "380px", width: '100%' }} />
				<div className='AB-text' >
					<h1><span style={{ color: "orange" }}> Autonomous Machines </span></h1>
					<div className="bg" >
						<h6>"Revolutionize your industry with the power of <span style={{ color: "red" }}>Autonomous Machines</span>".</h6>
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
				{/* --------------------------------------SECTION----------------------------------------------------- */}
				<div className="container dataparts">
					<div className="row paragraph1">
						<h3 className="b1">
							<span style={{ color: "red" }}>Autonomous Machine Consulting</span>
						</h3>
						<div className="col-md-5">
							<img src={logo2} alt="loading..." style={{ height: "350px", width: '100%' }} />
						</div>
						<div className="col-md-5">
							<p>
								We provide autonomous machine consulting services that include strategic guidance to businesses looking to implement autonomous machines. Consultants can help businesses identify the right technologies and solutions that can improve business processes and create new opportunities.
							</p>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<h3 className="b1">
							<span style={{ color: "red" }}>Autonomous Machine Manufacturing</span>
						</h3>
						<div className="col-md-5">
							<p>
								We offer complete end-to-end solutions for designing &amp; development for concept to commissioning services for building autonomous machines &amp; integrating them into your existing manufacturing setup. Explore More
							</p>
						</div>
						<div className="col-md-5">
							<img src={logo3} alt="loading..." style={{ height: "300px", width: '80%' }} />
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<h3 className="b1">
							<span style={{ color: "red" }}>Autonomous Machine Software Development</span>
						</h3>
						<div className="col-md-5">
							<img src={logo4} alt="loading..." style={{ height: "300px", width: '80%' }} />
						</div>
						<div className="col-md-5">
							<p>
								Our autonomous machine software development services provide customized software solutions that enable machines to operate autonomously. This includes developing algorithms, control systems, and machine learning models.
							</p>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<h3 className="b1">
							<span style={{ color: "red" }}>Autonomous Machine Integration</span>
						</h3>
						<div className="col-md-5">
							<p>
								Our autonomous machine integration services help businesses integrate autonomous machines with existing systems and processes. This includes integrating autonomous machines with enterprise software, cloud platforms, and other third-party systems.
							</p>
						</div>
						<div className="col-md-5">
							<img src={logo5} alt="loading..." style={{ height: "300px", width: '80%' }} />
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<h3 className="b1">
							<span style={{ color: "red" }}>Autonomous Machine Maintenance</span>
						</h3>
						<div className="col-md-5">
							<img src={logo6} alt="loading..." style={{ height: "300px", width: '80%' }} />
						</div>
						<div className="col-md-5">
							<p>
								Our autonomous machine maintenance services provide regular maintenance and repair for autonomous machines. This includes software updates, hardware upgrades, and troubleshooting.
							</p>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<h3 className="b1">
							<span style={{ color: "red" }}>Autonomous Machine Monitoring</span>
						</h3>
						<div className="col-md-5">
							<p>
								Monitoring: Our autonomous machine monitoring services enable businesses to monitor the performance and health of autonomous machines in real-time. This includes data analytics, predictive maintenance, and remote monitoring.
							</p>
						</div>
						<div className="col-md-5">
							<img src={logo7} alt="loading..." style={{ height: "300px", width: '80%' }} />
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<h3 className="b1">
							<span style={{ color: "red" }}>Autonomous Machine Security</span>
						</h3>
						<div className="col-md-5">
							<img src={logo8} alt="loading..." style={{ height: "300px", width: '80%' }} />
						</div>
						<div className="col-md-5">
							<br />
							<p>
								Our autonomous machine security services provide solutions to protect autonomous machines, networks, and data from cyber threats. This includes secure machine authentication, data encryption,
								and secure network connections.
							</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-10">
							<hr />
							<p>
								Overall, our autonomous machine service offerings provide businesses with the tools and expertise needed to harness the power of autonomous machines and transform their operations. Get in touch with us for more details.
							</p>
						</div>
					</div>
				</div>

		</div>
	);
};

export default Autonomous;

