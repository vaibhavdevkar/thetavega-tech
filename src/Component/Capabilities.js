import React from 'react'
import './capabilities.css'
import Footer from './Footer'
import { useEffect } from 'react';


function Capabilities() {
  useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	  }, []);


  return (
    <div id="capabilities1" className='container-fluid'>


      {/* ======= Team Section ======= */}
      <section id="team" className="team section-bg">
        <div className="container" id="capacontainer">
          <div className="section-title">
            {/* <span>Capabilities</span> */}
            <h2>Capabilities</h2>
            {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
          </div>

          <div className="row">
            <div className="container mg-3">
            </div>
            <div className='col content'>
              <div className='span'>
                <h7>Bussiness Enterprise Application</h7>
              </div>
            </div>
            <div className='col-lg-1 content' style={{ textAlign: 'center' }}>
              {/* <img src={arrow} className="img-fluid" alt="" style={{ height: '50px', width: '50px' }} /> */}
            </div>
            {/* <div className='col-lg-1'> */}
            {/* </div> */}
            {/* </div> */}
            <div className='col content'>
              <div className='span'>
                <h7>Data Lake/ Warehouse</h7>
              </div>
            </div>
          </div>
          {/*   */}
          <div className="row">
            <div className="container mt-2"></div>
            <div className='row col-md-6' style={{ border: '1px solid black', width: '44%', marginLeft: '12px', padding: '0px' }}>
              <div className='col content' style={{ marginTop: '20px' }}>
                <div className="member">
                <div className='tablinks'></div>
                  <h6>SCM</h6>
                </div>
              </div>
              <div className='col ' style={{ marginTop: '20px' }}>
                <div className="member">
                  <h6>HRM</h6>
                </div>
              </div>
              <div className='col ' style={{ marginTop: '20px' }}>
                <div className="member">
                  <h6>MES</h6>
                </div>
              </div>
              <div className='col ' style={{ marginTop: '20px' }}>
                <div className="member">
                  <h6>Analytics</h6>
                </div>
              </div>
            </div>

            <div className='col-lg-1 content' style={{ textAlign: 'center', marginLeft: '25px' }}>
              {/* <img src={database} className="img-fluid" alt="" style={{ height: '50px', width: '50px' }} /> */}
            </div>

          
            <div className='col content'>
              <div className='member'>
                <h6>Data Ingestion</h6>
              </div>
            </div>
            <div className='col content'>
              <div className='member'>
                <h6>Data Storage</h6>
              </div>
            </div>
            <div className='col content'>
              <div className='member'>
                <h6>Machine Learning</h6>
              </div>
            </div>


            <div className='row col-md-6' style={{ textAlign: 'center', width: '44%', marginLeft: '12px', padding: '0px' }}>
              {/* <img src={uparrow} className="img-fluid" alt="" style={{ height: '50px', width: '100px', marginLeft: '230px', marginTop: '5px' }} /> */}
            </div>

            {/* <div className=' col-lg-1 d-flex justify-content-center align-items-center'>
              <img src={uparrow} className="img-fluid" alt="" />
            </div> */}

            <div className='col-lg-1 content' style={{ textAlign: 'center', marginLeft: '25px' }}>
            </div>

            <div className='col-lg content'>
              <div className='member'>
                <h6>Data Security</h6>
              </div>
            </div>

            {/* <div className='col-lg-2 content'></div> */}
            <div className='col content'>
              <div className='member'>
                <h6>Data Analytics</h6>
              </div>
            </div>

            {/* <div className='col-lg-2 content'></div> */}
            <div className='col content'>
              <div className='member'>
                <h6>Data Insights</h6>
              </div>
            </div>

            {/* </div> */}



            
          </div>
          <div className="row">
            <div className="container mt-2">
            </div>
            <div className='col content'>
              <div className='span'>
                <h7>DATA VISUALIZATION</h7>
              </div>
            </div>
            <div className='col-lg-1 content' style={{ textAlign: 'center' }}>
              {/* <img src={side} className="img-fluid" alt="" style={{ height: '50px', width: '50px' }} /> */}
            </div>
            <div className='col content'>
              <div className='span'>
                <h7>EDGE ANALYTICS</h7>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container mt-2"></div>
            <div className='col-lg-2 content'>
              <div className="member">
                <h6>Production Planning & Monitoring</h6>
              </div>
            </div>

            <div className='col-lg-2 '>
              <div className="member">
                <h6>Traceability</h6>
              </div>
            </div>

            <div className='col-lg-2 '>
              <div className="member">
                <h6>Data Model Management</h6>
              </div>
            </div>

            {/* <div className="container mt-2">
            </div> */}
            <div className='col-lg-2 content'>
              <div className='member'>
                <h6>Real-Time Data Processing</h6>
              </div>
            </div>
            <div className='col-lg-2 content'>
              <div className='member'>
                <h6>Data Analysis</h6>
              </div>
            </div>
            <div className='col-lg-2 content'>
              <div className='member'>
                <h6>
                  Equipment Monitoring</h6>
              </div>
            </div>
            {/* </div> */}

          </div>

          <div className="row">
            <div className="container mt-2"></div>
            <div className='col-lg-2 content'>
              <div className="member">
                <h6>Utility Management</h6>
              </div>
            </div>

            <div className='col-lg-2 '>
              <div className="member">
                <h6>Mistake Proofing System</h6>
              </div>
            </div>

            <div className='col-lg-2 '>
              <div className="member">
                <h6>Workforce Management</h6>
              </div>
            </div>

            {/* <div className="container mt-2">
            </div> */}
            <div className='col-lg-2 content'>
              <div className='member'>
                <h6>Operation Monitoring</h6>
              </div>
            </div>
            <div className='col-lg-2 content'>
              <div className='member'>
                <h6>Machine Learning
                </h6>
              </div>
            </div>
            <div className='col-lg-2 content'>
              <div className='member'>
                <h6>
                  Preventive Maintenance</h6>
              </div>
            </div>
            {/* </div> */}

          </div>
          <div className="row">
            <div className="container mt-2"></div>
            <div className='col-lg-2 content'>
              <div className="member">
                <h6>Quality control System</h6>
              </div>
            </div>

            <div className='col-lg-2 '>
              <div className="member">
                <h6>Machine to Machine Communication</h6>
              </div>
            </div>

            <div className='col-lg-2 '>
              <div className="member">
                <h6>Data Logging
                </h6>
              </div>
            </div>

            {/* <div className="container mt-2">
            </div> */}
            <div className='col-lg-2 content'>
              <div className='member'>
                <h6>
                  Predictions / Alerts</h6>
              </div>
            </div>
            <div className='col-lg-2 content'>
              <div className='member'>
                <h6>
                  Machine Learning</h6>
              </div>
            </div>
            <div className='col-lg-2 content'>
              <div className='member'>
                <h6>
                  Statistical Process control</h6>
              </div>
            </div>

            <div className="row">
              <div className="container mg-3"></div>
              <div className='col-lg-12 content'>
                <div className='span'>
                  <h7>Data Layer</h7>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="container mg-3">  </div>
              <div className='col-lg-12 content'>
                <div className='span'>
                  <h7>Shop Floor Equipment</h7>
                </div>
              </div>
            </div>

            <div className='col-lg-2 content'>
              <div className='pan'>
                <h6>Sensor</h6>
              </div>
            </div>
            <div className='col-lg-2 content'>
              <div className='pan'>
                <h6>Drive</h6>
              </div>
            </div>
            <div className='col-lg-4 content'>
              <div className='pan'>
                <h6>Proggramable Controller</h6>
              </div>
            </div>
            <div className='col-lg-2 content'>
              <div className='pan'>
                <h6>Mechatronics</h6>
              </div>
            </div>
            <div className='col-lg-2 content'>
              <div className='pan'>
                <h6>Measuring Devices</h6>
              </div>
            </div>
          </div>

        </div>

      </section > {/* End Team Section */}

            {/* <div className='row'>
              <div className='col-12'>
                <Footer />
              </div>
            </div> */}
    </div >
  )
}

export default Capabilities