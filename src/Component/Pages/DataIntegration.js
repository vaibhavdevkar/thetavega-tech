import React from 'react'
import { useEffect } from 'react';
import "./DataIntegration.css"
import logo40 from "../img3/img40.jpg";
import logo41 from "../img3/img41.jpg";
import logo42 from "../img3/img42.jpg";
import logo43 from "../img3/img43.jpg";
import logo44 from "../img3/img44.jpg";
import logo45 from "../img3/img45.jpg";
import { NavLink } from 'react-router-dom';




const DataIntegration = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
  
    <div className='container'>
      <div className='header1'>
        <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Data integration services</NavLink>
      </div>
      <header className='header'>
        <img src={logo40} alt="Logo" className="header-image" />
        <h1 className='center'>Data integration services</h1>
        <p className='center1'>help businesses bring together data from multiple
sources and systems to create a unified and comprehensive view of their operations.
Here are some common offerings for data integration services</p>


<div className="container dataparts">
				<div className="row paragraph1">
					<h3 className="b1">
						<span style={{ color: "red" }}>Data Architecture Design</span>
					</h3>
					<div className="col-md-5">
						<img src={logo41} alt="loading..." style={{ height: "350px", width: '100%' }} />
					</div>
					<div className="col-md-5">
          <h5><span style={{ color: "red" }}>Data architecture design services</span> help
businesses design a data architecture that can accommodate various types of
data sources and formats, as well as support different integration patterns and
technologies.</h5>
					</div>
				</div>
			</div>





        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>Data Architecture Design</h2>
              <img src={logo41} alt="Logo" className="content-image" />
              <h5><span style={{ color: "red" }}>Data architecture design services</span> help
businesses design a data architecture that can accommodate various types of
data sources and formats, as well as support different integration patterns and
technologies.</h5>
              
            </div>
          </div>
        </div> */}


        <hr />

        
			<div className="container">
				<div className="row">
					<h3 className="b1">
						<span style={{ color: "red" }}>Data Integration Planning</span>
					</h3>
					<div className="col-md-5">
          <h5> <span style={{ color: "red" }}>Data Integration Planning</span> help
businesses plan and prioritize their data integration initiatives, including
defining goals, selecting data sources, and identifying integration strategies
and tools.</h5>
					</div>
					<div className="col-md-5">
						<img src={logo42} alt="loading..." style={{ height: "300px", width: '80%' }} />
					</div>
				</div>
				</div>
		






        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>Data Integration Planning</h2>
              <img src={logo42} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>Data Integration Planning</span> help
businesses plan and prioritize their data integration initiatives, including
defining goals, selecting data sources, and identifying integration strategies
and tools.</h5>
              <h6></h6>
            </div>
          </div>
        </div> */}


        
        <hr />


        <div className="container">
			<div className="row">
				<h3 className="b1">
					<span style={{ color: "red" }}>Data Integration Development</span>
				</h3>
				<div className="col-md-5">
					<img src={logo43} alt="loading..." style={{ height: "300px", width: '80%' }} />
				</div>
				<div className="col-md-5">
        <h5> <span style={{ color: "red" }}> Data integration development services</span> help
businesses develop and implement data integration solutions using various
integration technologies, such as APIs, ETL, and middleware..</h5>
				</div>
			</div>
		</div>






        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>Data Integration Development</h2>
              <img src={logo43} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}> Data integration development services</span> help
businesses develop and implement data integration solutions using various
integration technologies, such as APIs, ETL, and middleware..</h5>
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
					<span style={{ color: "red" }}>Data Integration Testing</span>
				</h3>
				<div className="col-md-5">
        <h5> <span style={{ color: "red" }}>Data integration testing services</span>  services help businesses
validate and verify the accuracy, completeness, and consistency of their data
integration solutions, including testing data quality, data mapping, and data
transformation..</h5>
				</div>
				<div className="col-md-5">
					<img src={logo44} alt="loading..." style={{ height: "300px", width: '80%' }} />
				</div>
			</div>
		</div>







{/* 
        <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>Data Integration Testing</h2>
              <img src={logo44} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>Data integration testing services</span>  services help businesses
validate and verify the accuracy, completeness, and consistency of their data
integration solutions, including testing data quality, data mapping, and data
transformation..</h5>
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
					<span style={{ color: "red" }}>Data Integration Maintenance and Support</span>
				</h3>
				<div className="col-md-5">
					<img src={logo45} alt="loading..." style={{ height: "300px", width: '80%' }} />
				</div>
				<div className="col-md-5">
        <h5> <span style={{ color: "red" }}>Data Integration Maintenance and Support services</span>help businesses maintain and support their data
integration solutions, including monitoring performance, resolving issues, and
providing ongoing maintenance and support.</h5>
				</div>
			</div>
		</div>






        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>Data Integration Maintenance and Support</h2>
              <img src={logo45} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>Data Integration Maintenance and Support services</span>help businesses maintain and support their data
integration solutions, including monitoring performance, resolving issues, and
providing ongoing maintenance and support.</h5>
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
              <p>Overall, data integration offerings provide businesses with the tools and expertise
they need to bring together data from disparate sources, enabling them to make
more informed decisions, improve operational efficiency, and enhance the customer
experience.</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default DataIntegration