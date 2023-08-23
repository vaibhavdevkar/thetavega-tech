import React from 'react';
import "./Trace.css";
import { NavLink } from 'react-router-dom';

// import logo from "../Icons/AM.png";
// import logo1 from '../Icons/AR.png';
// import logo2 from '../Icons/BD.png';
// import logo3 from '../Icons/CC.png';
// import logo4 from '../Icons/CS.png';
// import logo5 from '../Icons/DS.png';
// import logo6 from '../img2/H&S.jpg';
import { useEffect } from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Trace = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <>
      <div className="bg0 fixed-top">
        <p>
          <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Traceability </NavLink>
        </p>
      </div>
      <div className='topside' style={{marginTop:"130px"}}>
        <h2 style={{color:"purple", fontWeight:"bold"}}>Solution Design And Planning</h2>
        <p style={{color:"black"}}>We offer Traceability solution design and planning services to help businesses design and plan their traceability systems, including defining requirements, selecting technologies, and identifying integration strategies.</p>
      </div>
      <div className='container'>
        <div className='row'>
          {/* <div className='col-2'>
            <img src={logo} alt="Logo" className="logov" />
            <img src={logo1} alt="Logo" className="logov" />
            <img src={logo2} alt="Logo" className="logov" />
            <img src={logo3} alt="Logo" className="logov" />
            <img src={logo4} alt="Logo" className="logov" />
            <img src={logo5} alt="Logo" className="logov" />
          </div> */}
          <div className='col-10' style={{marginBottom:"50px"}}>
            <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Understand the requirements: Before starting the design process, it is important to understand the requirements and constraints of the system. This includes gathering information about the problem space, performance requirements, scalability needs, and security concerns.</p>
            <hr />
            <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Identify the major components: Identify the major components of the system and how they interact with each other. This includes determining the relationships between different components and how they contribute to the overall functionality of the system.</p>
            <hr />
            <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Choose appropriate technology: Based on the requirements and components, choose the appropriate technology to implement the system. This may involve choosing hardware and software platforms, databases, programming languages, and tools.</p>
            <hr />
            <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Define the interface: Define the interface between different components of the system, including APIs, protocols, and data formats.</p>
            <hr />
            <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Design the data model: Design the data model for the system, including the schema for the database, the structure of data files, and the data flow between components.</p>
            <hr />    
            <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Consider scalability and performance: Consider scalability and performance implications of the design, including factors such as load balancing, caching, and database optimization.</p>
          </div>
        </div>
      </div>
      <div className='Hardware1' >
        {/* <img src={logo6} alt="loading..." style={{ height: "350px", width: '100%' }} /> */}
        <div className='topside2'>
          <h2  style={{color:"purple", fontWeight:"bold"}}>Hardware & Software Implementation</h2>
          <p style={{color:"black"}}> Our Hardware and software implementation services help businesses implement and configure the necessary hardware and software components for their traceability systems, including barcoding or RFID technologies, data collection devices, and software applications.</p>
        </div>
        <div className='container Hardware'>
          <div className='row'>
            <div className='col-10'>
              <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Understand the requirements: Before starting the design process, it is important to understand the requirements and constraints of the system. This includes gathering information about the problem space, performance requirements, scalability needs, and security concerns.</p>
              <hr />
              <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Identify the major components: Identify the major components of the system and how they interact with each other. This includes determining the relationships between different components and how they contribute to the overall functionality of the system.</p>
              <hr />
              <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Choose appropriate technology: Based on the requirements and components, choose the appropriate technology to implement the system. This may involve choosing hardware and software platforms, databases, programming languages, and tools.</p>
              <hr />
              <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Define the interface: Define the interface between different components of the system, including APIs, protocols, and data formats.</p>
              <hr />
              <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Design the data model: Design the data model for the system, including the schema for the database, the structure of data files, and the data flow between components.</p>
              <hr />
              <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/>&nbsp;&nbsp;&nbsp;&nbsp;Consider scalability and performance: Consider scalability and performance implications of the design, including factors such as load balancing, caching, and database optimization.</p>
            </div>
            {/* <div className='col-2'>
              <img src={logo} alt="Logo" className="logov" />
              <img src={logo1} alt="Logo" className="logov" />
              <img src={logo2} alt="Logo" className="logov" />
              <img src={logo3} alt="Logo" className="logov" />
              <img src={logo4} alt="Logo" className="logov" />
              <img src={logo5} alt="Logo" className="logov" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Trace;
