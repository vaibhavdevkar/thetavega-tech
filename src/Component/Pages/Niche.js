import React from 'react';
import './Niche.css';
import { NavLink } from 'react-router-dom';
import logo6 from '../img3/search.png';

const Niche = () => {
  return (
    <div>
      <h2 className='header1'>
        <hr className='hrtag' />
        <p style={{textAlign:"center", marginTop:"50px"}}>OUR CORE SOLUTIONS</p>
        <hr />
      </h2>

      <section className='our'>
        <div className='row'>
          <div className='col-10 col-sm-9 track'>
            <h3 className='track1' style={{textAlign:"left"}}>
              <span style={{ color: 'red' }}>&gt;</span> Track n{' '}
              <span style={{ color: 'red' }}>Trace</span>
            </h3>
            <p>
              Traceability systems are used in manufacturing to track and monitor the movement of
              materials, components, and finished goods throughout the production process, enabling
              businesses to improve quality control, increase productivity, and ensure regulatory
              compliance.
              <br />
              We offer a variety of traceability systems in manufacturing like: 
              <NavLink to='/trace' className='navbutton'>
                 Explore more
              </NavLink>
            </p>
          </div>
          <div className='col-2 col-sm-2 anima hide-on-mobile'>
            <img src={logo6} alt='loading...' style={{ height: '150px', width: '80%' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Niche;
