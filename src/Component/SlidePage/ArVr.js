import React from "react";
import "./ArVr.css"
import { NavLink } from 'react-router-dom';
import logo1 from "../imgs/about.png"
import logo9 from "../img3/img9.jpg"
import { useEffect } from 'react';
import logo35 from "../img3/img35.jpg"
import logo36 from "../img3/img36.jpg"
import logo37 from "../img3/img37.jpg"
import logo38 from "../img3/img38.jpg"
import logo39 from "../img3/img39.jpg"




const ArVr = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	}, []);
	return (
		<>
			<div className="bg1 fixed-top">
				<p> <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> AR & VR solutions </NavLink> </p>
			</div>
			<div className="arvr">

				<div className="bg11" >
					<h1 style={{ textAlign: "center", paddingTop: "60px" }} ></h1>


					<h1>AR & VR Solutions</h1>
					<p>"Experience the future of work with our <span style={{ color: "red" }}>AR & VR solutions</span> ."</p>
				</div>
			</div>

			{/* -------------------------SECTION--------------------------------------------------------------					 */}
			<div className="container">
				<div className="row">



					<div className="container">
						<div className="row">
							<h3 className="b1"><span style={{ color: "red" }}>AR-based Manufacturing Operations</span></h3>
							<div className="col-5">
								<img src={logo35} alt="loading... " style={{ height: "300px", width: '80%' }} />
							</div>
							<div className="col-5">
								<p>Our AR-based Tool Operation solutions enable workers to track and manage Operational processes in real-time. </p>
								<p>This includes using AR headsets to overlay digital information onto physical products, such as DC Tool Operations, Testing’s, Product Management, Setup Change, Etc.</p>

							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<h3 className="b1"><span style={{ color: "red" }}>AR-based Maintenance and Repair</span></h3>
							<div className="col-5">
								<p>: Our AR-based maintenance and repair solutions provide workers with real-time, hands-free access to information, enabling them to perform maintenance and repair tasks more efficiently. </p>
								<p>This includes using AR headsets to overlay digital information onto physical equipment, such as maintenance procedures, equipment manuals, and repair instructions.</p>
							</div>
							<div className="col-5">
								<img src={logo36} alt="loading... " style={{ height: "300px", width: '80%' }} />

							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<h3 className="b1"><span style={{ color: "red" }}> VR-based Training and Simulation</span></h3>
							<div className="col-5">
								<img src={logo37} alt="loading... " style={{ height: "300px", width: '80%' }} />
							</div>
							<div className="col-5">
								<p>: Our VR-based training and simulation solutions enable workers to practice and learn complex manufacturing processes and systems in a safe, virtual environment. </p>
								<p>This includes simulating equipment operation, assembly lines, and other manufacturing processes, allowing workers to gain hands-on experience without the risk of injury or damage to equipment.</p>

							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<h3 className="b1"><span style={{ color: "red" }}>AR-based Quality Control</span></h3>
							<div className="col-5">
								<p>Our AR-based quality control solutions enable workers to identify defects and anomalies in real-time, improving the accuracy and efficiency of quality control processes. </p>
								<p>This includes using AR headsets to overlay digital information onto physical products, such as inspection criteria, quality standards, and defect detection algorithms.</p>
							</div>
							<div className="col-5">
								<img src={logo38} alt="loading... " style={{ height: "300px", width: '80%' }} />

							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<h3 className="b1"><span style={{ color: "red" }}>VR-based Design and Visualization</span></h3>
							<div className="col-5">
								<img src={logo39} alt="loading... " style={{ height: "300px", width: '80%' }} />

							</div>
							<div className="col-5">
								<p>Our VR-based design and visualization solutions enable engineers and designers to create and visualize product designs in a virtual environment.</p>
								<p>This includes creating 3D models, prototypes, and simulations of products, enabling designers to optimize designs and reduce the need for physical prototypes.</p>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-10">
								<hr />
								<p>Our Overall, AR and VR offerings for manufacturing industries provide businesses with the tools and technologies they need to optimize their operations, improve efficiency, and reduce costs, while also enhancing worker safety and productivity. Get in touch with us for more Details</p>
							</div>
						</div>
					</div>

				</div>
			</div>

		</>
	)
};

export default ArVr;
