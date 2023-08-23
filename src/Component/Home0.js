import React from 'react'
import './Home0.css'
import logo from './imgs/homeimg.jpg'


const Home = () => {
  return (
  
        <section id="hero" class="d-flex align-items-center " >
         
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center  ">
              <h1>Mission Automation</h1>
              <h2 > <span  style={{color: "red"}}>AUTOMATE</span>|<span style={{color: "green"}}>CONNECT</span> |<span  style={{color: "#41e2ba"}}>PRIDICT</span> | <span  style={{color: "#DD105E"}}>MONITER</span> | <span  style={{color: "aqua"}}>CONTROL</span> | <span  style={{color: "#113A5D"}}>ANALYSE</span> | <span  style={{color: "#FACF5A"}}>OPTIMISE</span></h2>
              <h2 className='' style={{color:"black"}}>We Team with our customers to achieve manufacturing excellence by delivering the right Automation, Digitalization, and Traceability solutions 
              </h2>
            <div class="d-flex">
            {/* <button class="button-4" role="button" id="explorebutton">Explore More</button> */}
              {/* <a href="#about" class="btn-get-started scrollto">Get Started</a> */}
              {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={logo} class="img-fluid animated"  alt="" />
          </div>
      </div>
    </div>
</section>
    
  
  
  )
}

export default Home


