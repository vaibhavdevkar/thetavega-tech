import React from 'react'
import "./Datacpture.css"
import { NavLink } from 'react-router-dom';

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import logo6 from '../img2/cloud.jpg'
import { Padding } from '@mui/icons-material';
import { useEffect } from 'react';


const DataCapture = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div>
      <div className="bg0 fixed-top">
        <p>
          <NavLink to="/" className="navbutton1"> Home </NavLink>/ <NavLink to="#" className="navbutton2"> Traceability </NavLink>
        </p>
      </div>
      <div className='container barcode0'>
        <div className='col'>
          <div className='barcode'  style={{marginTop:"130px"}}>
            <h5> Barcode & RFID Solutions</h5>
            <p>Barcode and RFID solutions enable
              businesses to track and manage inventory, assets, and other data using
              specialized scanners or readers. This includes designing and implementing
              barcode and RFID systems, selecting the right hardware and software
              components, and integrating them with existing systems.</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
      <div className='container lime lighten-5'>
        <div className='col heading1'>
          <h2>Barcode Scanner</h2>
          <div className='row'>
            <div className=' col-md-6'>
              <p>A barcode scanner is an electronic device for reading printed barcodes. Like a flatbed scanner, it consists of a light source, a lens and a light sensor translating optical impulses into electrical ones.</p>
            </div>
            <div className='col-md-6 subheading' >
              <h3 className='sub1'>Technology Used</h3>
              <p><BsFillArrowRightCircleFill />Laser scanners
                <br /><BsFillArrowRightCircleFill />Large field-of-view readers
                <br /><BsFillArrowRightCircleFill />Omni-directional barcode scanners
                <br /><BsFillArrowRightCircleFill />Smart phones scanners
                <br /> <BsFillArrowRightCircleFill />Handheld scanner
                <br /><BsFillArrowRightCircleFill />Stationary scanner
                <br /><BsFillArrowRightCircleFill />Fixed-position scanner
                <br /><BsFillArrowRightCircleFill />PDA scanner
                <br /><BsFillArrowRightCircleFill />Cordless scanner (or Wireless scanner)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container  lighten-6 section_mobile'>
        <img src={logo6} alt="loading... " style={{ height: "360px", width: '101%' }} />
        <div className='col mobile-header'>
          <h3>Mobile Computing Solutions</h3>
          <p>Mobile computing solutions enable
            workers to access and collect data from anywhere using<br /> mobile devices such
            as smartphones or tablets. This includes designing and<br /> implementing mobile
            computing systems, developing custom mobile applications,<br /> and providing
            training and support for users.</p>
          <p><BsFillArrowRightCircleFill />Analysis of all your business needs
            <br /><BsFillArrowRightCircleFill />A total cost of ownership analysis
            <br /><BsFillArrowRightCircleFill />Technology selection and vendor liaison
            <br /><BsFillArrowRightCircleFill />Thorough product testing
            <br /><BsFillArrowRightCircleFill />A comprehensive mobile solution</p>
        </div>
      </div>
    </div>
  )
}

export default DataCapture

