import React from 'react'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import "./Statistical.css"
import logo46 from "../img3/img46.jpg"
import logo47 from "../img3/img47.png"
import logo48 from "../img3/img48.png"
import logo49 from "../img3/img49.png"
import logo50 from "../img3/img50.png"





export const Statistical = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className='container'>
      <div className='header2'>
        <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Statical Process Control </NavLink>
      </div>

      <header className='header'>
        <img src={logo46} alt="Logo" className="header-image" />
        <h1 className='center'>Statistical process control (SPC)</h1>
        <p className='center1'>analytics services help businesses monitor and
          improve the quality and consistency of their products or services. our offerings for
          SPC analytics services</p>


          <div className="container dataparts">
				<div className="row paragraph1">
					<h3 className="b1">
						<span style={{ color: "red" }}>Process Improvement Services</span>
					</h3>
					<div className="col-md-5">
						<img src={logo47} alt="loading..." style={{ height: "350px", width: '100%' }} />
					</div>
					<div className="col-md-5">
          <h5><span style={{ color: "red" }}>Process Improvement Services</span> help
                businesses identify areas where they can improve their production processes
                to reduce waste, increase efficiency, and improve quality.</h5>
              <h6>This includes
                analysing process data, identifying trends and patterns, and recommending
                process improvements.</h6>
					</div>
				</div>
			</div>

        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>Process Improvement Services</h2>
              <img src={logo47} alt="Logo" className="content-image" />
              <h5><span style={{ color: "red" }}>Process Improvement Services</span> help
                businesses identify areas where they can improve their production processes
                to reduce waste, increase efficiency, and improve quality.</h5>
              <h6>This includes
                analysing process data, identifying trends and patterns, and recommending
                process improvements.</h6>
            </div>
          </div>
        </div> */}


        <hr />

        <div className="container">
				<div className="row">
					<h3 className="b1">
						<span style={{ color: "red" }}>Quality Control Services</span>
					</h3>
					<div className="col-md-5">
          <h5> <span style={{ color: "red" }}>Quality control services</span> help businesses monitor the
                quality of their products or services to ensure they meet customer
                requirements and standards.</h5>
              <h6>This includes developing quality control plans,
                collecting and analysing quality data, and implementing corrective actions.</h6>
					</div>
					<div className="col-md-5">
						<img src={logo48} alt="loading..." style={{ height: "300px", width: '80%' }} />
					</div>
				</div>
				</div>



        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>Quality Control Services</h2>
              <img src={logo48} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>Quality control services</span> help businesses monitor the
                quality of their products or services to ensure they meet customer
                requirements and standards.</h5>
              <h6>This includes developing quality control plans,
                collecting and analysing quality data, and implementing corrective actions.</h6>
            </div>
          </div>
        </div> */}


        <hr />

        <div className="container">
			<div className="row">
				<h3 className="b1">
					<span style={{ color: "red" }}>Root Cause Analysis Services</span>
				</h3>
				<div className="col-md-5">
					<img src={logo49} alt="loading..." style={{ height: "300px", width: '80%' }} />
				</div>
				<div className="col-md-5">
        <h5> <span style={{ color: "red" }}>Root cause analysis services</span> help businesses
                identify the underlying causes of quality issues or defects in their products or
                services.</h5>
              <h6>This includes using statistical methods and data analysis tools to
                identify trends and patterns, and recommending corrective actions.</h6>
				</div>
			</div>
		</div>

        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>Root Cause Analysis Services</h2>
              <img src={logo49} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>Root cause analysis services</span> help businesses
                identify the underlying causes of quality issues or defects in their products or
                services.</h5>
              <h6>This includes using statistical methods and data analysis tools to
                identify trends and patterns, and recommending corrective actions.</h6>
            </div>
          </div>
        </div> */}
        <hr />

        <div className="container">
			<div className="row">
				<h3 className="b1">
					<span style={{ color: "red" }}>Statistical Process Control Training</span>
				</h3>
				<div className="col-md-5">
        <h5> <span style={{ color: "red" }}>Statistical process control training </span> services help businesses train their employees on the principles and
                techniques of SPC analytics, enabling them to monitor and improve
                production processes independently.</h5>
              <h6>This includes developing training
                materials and delivering training programs.</h6>
				</div>
				<div className="col-md-5">
					<img src={logo50} alt="loading..." style={{ height: "300px", width: '80%' }} />
				</div>
			</div>
		</div>

        {/* <div className='container middle'>
          <div className='row'>
            <div className='col-md-7'>
              <h2>Statistical Process Control Training</h2>
              <img src={logo50} alt="logo" className="content-image" />
              <h5> <span style={{ color: "red" }}>Statistical process control training </span> services help businesses train their employees on the principles and
                techniques of SPC analytics, enabling them to monitor and improve
                production processes independently.</h5>
              <h6>This includes developing training
                materials and delivering training programs.</h6>
            </div>
          </div>
        </div> */}

        <hr />
        <div className='container middle'>
          <div className='row'>
            <div className='col-md-10'>
              <p>Overall, SPC analytics offerings provide businesses with the tools and expertise they
                need to monitor and improve the quality of their products or services, reducing
                waste, increasing efficiency, and improving customer satisfaction.</p>
            </div>
          </div>
        </div>




      </header>
    </div>
  )
}
