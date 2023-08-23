import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import "./M2M.css";
import logo40 from "../img3/img40.jpg";
import logo41 from "../img3/img41.jpg";
import logo42 from "../img3/img42.jpg";
import logo43 from "../img3/img43.jpg";
import logo44 from "../img3/img44.jpg";
import logo45 from "../img3/img45.jpg";

const M2M = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className='container'>
      <div className='header1'>
        <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Machine To Machine </NavLink>
      </div>
      <header className='header'>
        <img src={logo40} alt="Logo" className="header-image" />
        <h1 className='center'>Machine to Machine Communication</h1>
        <p className='center1'>Machine-to-machine (M2M) communication enables devices and machines to
          exchange data and information automatically without the need for human
          intervention. Our offerings for M2M communication</p>



          <div className="container dataparts">
				<div className="row paragraph1">
					<h3 className="b1">
						<span style={{ color: "red" }}>M2M Connectivity Services</span>
					</h3>
					<div className="col-md-5">
						<img src={logo41} alt="loading..." style={{ height: "350px", width: '100%' }} />
					</div>
					<div className="col-md-5">
          <h5><span style={{ color: "red" }}>M2M connectivity services</span> provide businesses
                with the ability to connect devices and machines to a network, enabling them
                to exchange data and information with other devices and systems.</h5>
              <h6>This
                includes selecting the right connectivity technologies and protocols,
                configuring network settings, and managing connectivity.</h6>
					</div>
				</div>
			</div>


{/* 
        <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>M2M Connectivity Services</h2>
              <img src={logo41} alt="Logo" className="content-image" />
              <h5><span style={{ color: "red" }}>M2M connectivity services</span> provide businesses
                with the ability to connect devices and machines to a network, enabling them
                to exchange data and information with other devices and systems.</h5>
              <h6>This
                includes selecting the right connectivity technologies and protocols,
                configuring network settings, and managing connectivity.</h6>
            </div>
          </div>
        </div> */}

        <hr />

        <div className="container">
				<div className="row">
					<h3 className="b1">
						<span style={{ color: "red" }}>M2M Platform Development</span>
					</h3>
					<div className="col-md-5">
          <h5> <span style={{ color: "red" }}>M2M platform development services</span> help
                businesses create custom M2M platforms that enable them to monitor and
                control their devices and machines remotely.</h5>
              <h6>This includes developing
                software platforms, selecting and integrating hardware components, and
                providing ongoing maintenance and support.</h6>

					</div>
					<div className="col-md-5">
						<img src={logo42} alt="loading..." style={{ height: "300px", width: '80%' }} />
					</div>
				</div>
				</div>




{/* 
        <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>M2M Platform Development</h2>
              <img src={logo42} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>M2M platform development services</span> help
                businesses create custom M2M platforms that enable them to monitor and
                control their devices and machines remotely.</h5>
              <h6>This includes developing
                software platforms, selecting and integrating hardware components, and
                providing ongoing maintenance and support.</h6>
            </div>
          </div>
        </div> */}


        <hr />

        <div className="container">
			<div className="row">
				<h3 className="b1">
					<span style={{ color: "red" }}>M2M Application Development</span>
				</h3>
				<div className="col-md-5">
					<img src={logo43} alt="loading..." style={{ height: "300px", width: '80%' }} />
				</div>
				<div className="col-md-5">
        <h5> <span style={{ color: "red" }}>M2M application development services</span> help
                businesses create custom applications that enable them to access and
                analyze data from their devices and machines.</h5>
              <h6>This includes developing
                software applications, integrating them with existing systems, and providing
                ongoing maintenance and support.</h6>
				</div>
			</div>
		</div>





{/* 
        <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>M2M Application Development</h2>
              <img src={logo43} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>M2M application development services</span> help
                businesses create custom applications that enable them to access and
                analyze data from their devices and machines.</h5>
              <h6>This includes developing
                software applications, integrating them with existing systems, and providing
                ongoing maintenance and support.</h6>
            </div>
          </div>
        </div> */}


        <hr />


        <div className="container">
			<div className="row">
				<h3 className="b1">
					<span style={{ color: "red" }}>M2M Data Analytic</span>
				</h3>
				<div className="col-md-5">
        <h5> <span style={{ color: "red" }}>M2M data analytics services</span> help businesses analyze
                the data collected from their devices and machines to gain insights and make
                data-driven decisions.</h5>
              <h6>This includes developing custom analytics tools and
                dashboards, integrating data from multiple sources, and providing ongoing
                maintenance and support.</h6>
				</div>
				<div className="col-md-5">
					<img src={logo44} alt="loading..." style={{ height: "300px", width: '80%' }} />
				</div>
			</div>
		</div>

        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>M2M Data Analytics</h2>
              <img src={logo44} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>M2M data analytics services</span> help businesses analyze
                the data collected from their devices and machines to gain insights and make
                data-driven decisions.</h5>
              <h6>This includes developing custom analytics tools and
                dashboards, integrating data from multiple sources, and providing ongoing
                maintenance and support.</h6>
            </div>
          </div>
        </div> */}


        <hr />

        <div className="container">
			<div className="row">
				<h3 className="b1">
					<span style={{ color: "red" }}>M2M Security Solutions</span>
				</h3>
				<div className="col-md-5">
					<img src={logo45} alt="loading..." style={{ height: "300px", width: '80%' }} />
				</div>
				<div className="col-md-5">
        <h5> <span style={{ color: "red" }}>M2M Security Solutions</span> help businesses secure their
                M2M systems and prevent unauthorized access or data breaches.</h5>
              <h6>This
                includes implementing encryption and authentication protocols, monitoring
                network activity, and providing ongoing maintenance and support.</h6>
				</div>
			</div>
		</div>

        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>M2M Security Solutions</h2>
              <img src={logo45} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>M2M Security Solutions</span> help businesses secure their
                M2M systems and prevent unauthorized access or data breaches.</h5>
              <h6>This
                includes implementing encryption and authentication protocols, monitoring
                network activity, and providing ongoing maintenance and support.</h6>
            </div>
          </div>
        </div> */}

        <hr />

        <div className='container middle'>
          <div className='row'>
            <div className='col-md-10'>
              <p>Overall, M2M communication offerings provide businesses with the tools and
                expertise they need to connect, manage, and analyze their devices and machines
                remotely, improving operational efficiency, reducing costs, and enhancing the
                customer experience.</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default M2M;
