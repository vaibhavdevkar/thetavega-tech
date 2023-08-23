import React from "react";
import "./BigData.css";
import logo1 from "../imgs/about.png";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import logo from "../img3/BigData.jpg"
import logo29 from "../img3/img29.jpg"
import logo30 from "../img3/img30.jpg"
import logo31 from "../img3/img31.jpg"
import logo32 from "../img3/img32.jpg"
import logo33 from "../img3/img33.jpg"
import logo34 from "../img3/img34.jpg"



const BigData = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <>
      <div className="bg5 fixed-top">
        <p>
          <NavLink to="/" className="navbutton1">
            Home
          </NavLink>{" "}
          /{" "}
          <NavLink to="#" className="navbutton2">
            Big Data Analytics
          </NavLink>{" "}
        </p>
      </div>
      <div className="container">
        <header className="bg32">
          <img src={logo} alt="Logo" style={{ height: "380px", width: '100%' }} className="headerpic" />
          <div className='AB-text'>
            <h1 className="title">Big Data Analytics</h1>

            <h6 className="title">"Unlock the insights hidden in your data with
              our <span style={{ color: "red" }}>big data analytics solutions</span>".</h6>

          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 paragraph">
                <p>
                  <span style={{ color: "red" }}>Autonomous machines</span> are machines that can operate and make decisions without human intervention. These machines use sensors, artificial intelligence, and machine learning algorithms to perceive their environment, analyze data, and make decisions. We offer services related to autonomous machines that businesses can leverage to improve their operations.
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* ----------------------------SECTION----------------------------------------------------------- */}
      <div className="container">
        <h3 className="b1">
          <span style={{ color: "red" }}>Big Data Consulting</span>
        </h3>
        <div className="row">
          <div className="col-md-5">
            <img
              src={logo29}
              alt="loading... "
              style={{ height: "300px", width: "80%" }}
            />
          </div>
          <div className="col-md-5">
            <p>
              Our Big data consulting services provide businesses with guidance
              on how to design and implement big data analytics solutions
            </p>
            <p>
              This includes defining business requirements, identifying data
              sources, selecting the right technologies and tools, and creating
              a roadmap for implementation.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3 className="b1">
            <span style={{ color: "red" }}>Data Warehousing</span>
          </h3>
          <div className="col-md-5">
            <p>
              Data warehousing is the process of consolidating data from
              multiple sources into a single, central repository for analysis.
            </p>
            <p>
              Our Data warehousing services provide businesses with a
              centralized storage solution that can scale to meet their needs.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={logo30}
              alt="loading... "
              style={{ height: "300px", width: "80%" }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3 className="b1">
            <span style={{ color: "red" }}>Data Integration</span>
          </h3>
          <div className="col-md-5">
            <img
              src={logo31}
              alt="loading... "
              style={{ height: "300px", width: "80%" }}
            />
          </div>
          <div className="col-md-5">
            <p>
              : Our Data integration services help businesses
              combine data from different sources into a single, unified view.
            </p>
            <p>
              This includes integrating data from on-premise systems, cloud-based applications, and external data sources.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h3 className="b1">
            <span style={{ color: "red" }}>Data Visualization</span>
          </h3>
          <div className="col-md-5">
            <p>
              Our Data visualization services help businesses create interactive dashboards and reports that enable users to explore and analyze data in real-time.
            </p>
            <p>
              This includes creating charts, graphs, and other visualizations that provide insights into data trends and patterns.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={logo32}
              alt="loading... "
              style={{ height: "300px", width: "80%" }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3 className="b1">
            <span style={{ color: "red" }}>Machine Learning and AI</span>
          </h3>
          <div className="col-md-5">
            <img
              src={logo33}
              alt="loading... "
              style={{ height: "300px", width: "80%" }}
            />
          </div>
          <div className="col-md-5">
            <p>
              Our Machine learning and AI services help businesses leverage advanced algorithms to uncover insights from their data.
            </p>
            <p>
              This includes creating predictive models that can be used to forecast trends and patterns, and to automate business processes.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3 className="b1">
            <span style={{ color: "red" }}>Data Security</span>
          </h3>
          <div className="col-md-5">
            <p>
              Our Data security services help businesses protect their data from unauthorized access, theft, or other cyber threats.
            </p>
            <p>
              This includes implementing data encryption, access controls, and other security measures to ensure the integrity and confidentiality of data.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={logo34}
              alt="loading... "
              style={{ height: "300px", width: "80%" }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <hr />
            <p>
              Our Overall, big data analytics offerings provide businesses with the tools and expertise they need to turn their data into actionable insights, enabling them to make better decisions, optimize their operations, and create new opportunities. Get in touch with us for more Details
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigData;