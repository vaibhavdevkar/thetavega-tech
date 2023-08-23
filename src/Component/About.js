import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol

} from 'mdb-react-ui-kit';
import './About.css'
import 'animate.css';
import home1 from './imgs/Slide1.jpg'
import logo1 from './imgs/custo.webp'
import Business from './imgs/BusinessEthisc.png'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

//import ScrollAnimation from 'react-animate-on-scroll';


export default function About() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value, string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (

    <div className='janu container-fluid' >
      {/* <div style={{position:"fixed" , height:"40px", with:"auto"}} > */}
      <MDBTabs fill className='mb-3' id="janu2" >
        <MDBTabsItem  >
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            About
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
            Innovation
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
            Infrastructure
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'}>
            Skills
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab5')} active={fillActive === 'tab5'}>
            Our Approach
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>


      <br />
      <MDBTabsContent>

        <MDBTabsPane show={fillActive === 'tab1'}>
          <div className='row'>
            <div className='col-md-6 order-md-1 '>
              <span style={{ color: "black" }}>
                <p className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; We are a smart Technological Solutions Providing Company offering Turnkey Automation, Digitalization and Traceability Solutions to the Manufacturing Industries as a partner to conceptualize and realize technology driven business transformation Initiatives. We provide solution for any Dynamic Environment where Business and Technology Strategies converge to enhance their Productivity and Profitability Together by using innovative ways of Technologies combining both Information Technology and Operational Technology which includes Smart Autonomous Machines, System Integration, IIOT, Could Computing, Big Data Analytics, and AR & VR Solutions.
                  <br /> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; We work with large Global Corporations and new Generation Technologies to build new Products or Services and to Implement Sensible Business and Technology Strategies in Dynamic Digital Environment We deliver our services across industry sectors such as Automotive & Ancillaries, Steel & Infrastructure, White Goods, Pharmaceuticals, Defence & Aerospace, Energy & Gas, Smart City and Building Management.
                  <br />
                  <h5 className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>
                    <b> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;We always strive to improve our systems and processes to deliver Predictable Quality continuously. We have received the following global accreditations:</b>
                  </h5>
                  <h4 className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}> ISO 9001:2015: Quality Management System (QMS).</h4>
                  <h4 className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "15px" }}>ISO 27001:2013: Information Security Management System (ISMS).</h4>
                </p>
              </span>
              <br />
              <br />


            </div>
            <div className='col-md-6 order-md-2'>
              {/* column 2 content */} <img src={home1} alt="not found" style={{ height: '80%', width: '100%' }} fluid />
            </div>
          </div >

          <span style={{ color: "black" }}>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12" id="bg1">
                  <h1 class="text-center pt-5">Our Belief</h1>
                  <h1 class="text-center">Continuous Improvement – Change </h1>
                </div>
              </div>
            </div>
            <br />

            <div class="container">
              <div class="row">
                <div class="col order-sm-1 bg-light" id="bg3-1" >
                  <h1 style={{ textAlign: 'center', marginTop: "50px" }} >
                    Mission
                  </h1>
                  <p>
                    To be the Global Partner of choice for organizations committed to excellence through Continuous Improvement in Manufacturing Technologies
                  </p>
                </div>
                <div class="col order-sm-2 bg-secondary" id="bg3-2">
                  <h1 style={{ textAlign: 'center', marginTop: "50px" }}>
                    Vision
                  </h1>
                  <p>
                    To exist in the heart of every Manufacturing Industry, through deep diving into manufacturing process and serve the industry through our Innovations for improving Productivity, Quality, and Delivery of the products
                  </p>
                </div>
              </div>
            </div>
          </span>

          <br />

          <span style={{ color: "black" }}>
            <div className='container-fluid'>
              <div className='row' >
                <div className='col' id="bg4">
                  <h1 style={{ textAlign: "center", paddingTop: "80px", justifyContent: "center" }} >Business Ethics </h1>
                </div>
              </div>
            </div>

            <div className='container-fluid'>
              <div className='row'>
                <div className='col' id="bg4-2">
                  <img src={Business} alt='not found' fluid style={{ height: '350px', width: '100%' }} />
                </div>
              </div>
            </div>
            <br />

            <div className='container-fluid'>
              <div className='row' >
                <div className='col' id="bg5">
                  <h1 style={{ textAlign: "center", paddingTop: "40px" }} >Core Value </h1>
                  {/* <h1 style={{textAlign:"center"}}>Continuous Improvement – Change </h1> */}

                </div>
              </div>
            </div>
          </span>
          <br />

          <span style={{ color: "black" }}>
            <div className='container'>
              <div className='row'>
                <div className='col-md-5 mb-3'>
                  <MDBCard style={{ maxWidth: '540px' }}>
                    <MDBRow className='g-0'>
                      <MDBCol md='3'>
                        <MDBCardImage src={logo1} alt='...' fluid />
                      </MDBCol>
                      <MDBCol md='9'>
                        <MDBCardBody className='card-body'>
                          <MDBCardTitle className='fw-bold'>Customer Centric</MDBCardTitle>
                          <MDBCardText>
                            Customer satisfaction forms the crux of all sorts of deliverables from Thetavega
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </div>

                <div className='col-md-5 mb-3'>
                  <MDBCard >
                    <MDBRow className='g-0'>
                      <MDBCol md='3'>
                        <MDBCardImage src='https://thumbs.dreamstime.com/z/bulb-lamp-innovation-ideas-logo-illustrator-vector-clipart-wrench-innovation-ideas-icon-isolated-white-background-177173150.jpg' alt='...' fluid />
                      </MDBCol>
                      <MDBCol md='9'>
                        <MDBCardBody>
                          <MDBCardTitle className='fw-bold'>Innovation</MDBCardTitle>
                          <MDBCardText className='text-justify'>
                            Out-of-the-box thinking sets us apart and brings all our stakeholders the best solution for a win-win situation
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-5 mb-3'>
                  <MDBCard style={{ maxWidth: '540px' }}>
                    <MDBRow className='g-0'>
                      <MDBCol md='3'>
                        <MDBCardImage src='https://d3j0t7vrtr92dk.cloudfront.net/artsclub/1434026852_Ownership.png' alt='...' fluid />
                      </MDBCol>
                      <MDBCol md='9'>
                        <MDBCardBody>
                          <MDBCardTitle className='fw-bold'>Ownership & Accountability </MDBCardTitle>
                          <MDBCardText className='text-justify'>
                            We take accountability for our actions and own the results to improve and enhance all your needs
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </div>

                <div className='col-md-5 mb-3'>
                  <MDBCard >
                    <MDBRow className='g-0'>
                      <MDBCol md='3'>
                        <MDBCardImage src='https://gust-production.s3.amazonaws.com/uploads/accelerator/logo_image/15915/FFCP_20Logo.jpg' alt='...' fluid />
                      </MDBCol>
                      <MDBCol md='9'>
                        <MDBCardBody>
                          <MDBCardTitle className='fw-bold'>Trust & Mutual Respect </MDBCardTitle>
                          <MDBCardText className='text-justify'>
                            Transparent and open communication at Thetavega values your opinions and suggestions
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-5 mb-3'>
                  <MDBCard style={{ maxWidth: '540px' }}>
                    <MDBRow className='g-0'>
                      <MDBCol md='3'>
                        <MDBCardImage src='https://as1.ftcdn.net/v2/jpg/03/91/37/12/1000_F_391371227_OOPKuywmf6dqwOTsw4Dfu0iDejLKyZZC.jpg' alt='...' fluid />
                      </MDBCol>
                      <MDBCol md='9'>
                        <MDBCardBody>
                          <MDBCardTitle className='fw-bold'>Teamwork</MDBCardTitle>
                          <MDBCardText className='text-justify'>
                            Cooperative working brings the best results as trust is shared and result is achieved through collaborative efforts
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </div>

                <div className='col-md-5 mb-3'>
                  <MDBCard >
                    <MDBRow className='g-0'>
                      <MDBCol md='3'>
                        <MDBCardImage src='https://icon-library.com/images/ethics-icon/ethics-icon-16.jpg' alt='...' fluid />
                      </MDBCol>
                      <MDBCol md='9'>
                        <MDBCardBody>
                          <MDBCardTitle className='fw-bold '>Integrity Fair, ethical and transparent </MDBCardTitle>
                          <MDBCardText>
                            Functioning makes us unique
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </div>
              </div>
            </div>
          </span>

          <br />

        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>
          <span style={{ color: "black" }}>
            <p className='text-justify animate__animated animate__bounceInLeft' style={{ fontSize: "16px" }}> &nbsp; &nbsp;&nbsp;&nbsp;At Thetavega our speed and Imagination is
              emphasized in whatever we do for our clients, Employees, Investors, and
              for the Society at large by Providing Smart Automation & Software
              Solutions on: <br />
              <b>
                {" "}
                <div className='col-10'>

                  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> Assembly & Material Handling</p>
                  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> Part Traceability & Quality Data Management (Track and Trace
                    Systems)</p>
                  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> Production: Planning, Monitoring and Controlling </p>
                  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> Data Logging & Remote Monitoring</p>
                  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> Quality Testing & Assurance System</p>
                  <p><BsFillArrowRightCircleFill style={{color:"orangered"}}/> A Machine Vision and Sensors</p>
                </div>
        
              </b>
              that combine with topical thought leadership to demonstrate Innovation
              in Solution Definition and Engagement Delivery for the client. Our
              commitment to excel through Innovation extends beyond IIoT and IT
              Solutions. It is equally important that how we manage our Business
              Operations in our process Management and Leadership, and how we build
              our Physical Technology and People Infrastructure.
            </p>
          </span>
        </MDBTabsPane>
        <MDBTabsPane className='text-justify animate__animated animate__bounceInLeft' show={fillActive === 'tab3'}>
          <span style={{ color: "black" }}>
            &nbsp; &nbsp; &nbsp;&nbsp; With sustained Infrastructure Investment, we
            have created a Premier Knowledge Networked Environment from where our
            employees provide High Quality Solutions to Clients. These investments
            enhance Employee productivity and reduce engagement risk for our
            clients. <br /> <br /> &nbsp; &nbsp; &nbsp;&nbsp;A Multi –Dimensional
            approach, planned to support Growth and Technology Advancement, ensures
            that the solutions we Architect for our clients are built in a most
            Productive and Effective
          </span>
        </MDBTabsPane>
        <MDBTabsPane className='text-justify animate__animated animate__bounceInLeft' show={fillActive === 'tab4'}>
          <span style={{ color: "black" }}>
            &nbsp; &nbsp; &nbsp;&nbsp;Multiple Skills and Competencies combine to
            realize Technology Driven Business Transformation. As Organization
            constantly strive to iterate their Business and Technology Strategies,
            Optimize and align our Client’s Business Strategy with Technology
            Initiatives.
            <br /> <br />
            &nbsp; &nbsp; &nbsp;&nbsp; Our Development team is skilled on Machine
            Interfacing, Networking, Embedded Systems, Microsoft technologies
            Development Technologies, SAP Integration, database management, Could
            Computing, Artificial Intelligence, Deep Learning Algorithms, PLC,
            SCADA, Image Processing, Sound Processing, and Mechanical System design
          </span>
        </MDBTabsPane>
        <MDBTabsPane className='text-justify animate__animated animate__bounceInLeft' show={fillActive === 'tab5'}>
          <span style={{ color: "black" }}>
            <h5>
              Starting from the beginning is the key to a successful technology
              transformational journey
            </h5>
            <br />
            <div className='container-fluid ' >
              <div className='row'>
                <div className='col text-justify' id="bg1" style={{ paddingTop: "30px" }} >
                  <h1> <center>UNDERSTAND -  SIMPLIFY – OPTIMISE- TRANSFORM</center> </h1><br />
                  <h2><center>Consulting - Pain Point Analysis -Solution Designing- Turnkey Manufacturing</center></h2>

                </div>
              </div>
            </div>
            <br />

            &nbsp; &nbsp; &nbsp;&nbsp; One of your core business objectives is to
            assist your company in transforming through the use of technology. This
            journey, like all others, begins with a knowledge of your present
            conditions. As a result, we begin our one-of-a-kind strategy by
            establishing a thorough, shared understanding of your present challenges
            and where you are devoting time and money. And after detailed
            Understanding we provide a solution where you can optimise your
            complexities and improve you Productivity, Quality, Cost, Delivery,
            safety in manufacturing & Morale of Manufacturing.
          </span>
        </MDBTabsPane>

      </MDBTabsContent>

    </div>

  )
}
