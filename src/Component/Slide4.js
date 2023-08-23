import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./Icons/AM1.png";
import logo1 from "./Icons/SI1.png";
import logo2 from "./Icons/IOT1.png";
import logo3 from "./Icons/CC.png";
import logo4 from  "./Icons/BD.png";
import logo5 from "./Icons/AR.png";
import "./card2.css";
import { colors } from '@mui/material';

const Slide4 = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleExploreClick = (url) => {
    window.location.href = url;
  }

  const handleNextClick = () => {
    // navigate to the next page
    console.log("/Autonomous");
  }

  return (
    <div className='product0'>
      {/* <div className='col' id="bg10">
        <h1 style={{ textAlign: "center", paddingTop: "40px" }}></h1>
      </div> */}
      <h2 style={{textAlign:"center"}}>INDUSTRY 4.0 Pillars</h2>

      <div className='home_card'>
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3 moto1" style={{ cursor: "pointer" }}>
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo} alt="Logo" className="logov" />
                <h5 className="card-title">Autonomous Machines</h5>
                <NavLink to="/autonomous" className="navbuttonexp">
                  <button >Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo1} alt="Logo" className="logov" />
                <h5 className="card-title">System Integrations</h5>
                <NavLink to="/integrations" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo2} alt="Logo" className="logov" />
                <h5 className="card-title">Internet of Things (IoT)</h5>
                <NavLink to="/iot" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo3} alt="Logo" className="logov" />
                <h5 className="card-title">Cloud Computing</h5>
                <NavLink to="/cloudcomputing" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo4} alt="Logo" className="logov" />
                <h5 className="card-title">Big Data Analytics</h5>
                <NavLink to="/bigdata" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 moto1">
            <div className="card1">
              <div className="card-body ajay">
                <img src={logo5} alt="Logo" className="logov" />
                <h5 className="card-title">AR/VR Solutions</h5>
                <NavLink to="/arvr" className="navbuttonexp">
                  <button>Explore more</button>
                </NavLink>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide4;
