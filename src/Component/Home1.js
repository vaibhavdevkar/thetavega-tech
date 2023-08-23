import React from 'react'
import './Home0.css'
import logo from './imgs/Slide1.jpg'

const Home1 = () => {
  return (

    <section id="hero" class="d-flex align-items-center">
        <div class="container" id="imghome0">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 style={{fontSize:"33px"}}> Automation <span style={{color:"red"}}>|</span> Digitalization <span style={{color:"red"}}>|</span> Traceability </h1>
              {/* <h2>AUTOMATE | CONNECT| MONITOR | CONTROL | ANALYSE | PREDICT |OPTIMISE</h2> */}
              <h2 className='text-justify'>We Provide End-to-End Automation, Digitalization and Traceability Solutions to our Manufacturing Industries. 
              </h2>
            <div class="d-flex">
              {/* <a href="#about" class="btn-get-started scrollto">Get Started</a> */}
              {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={logo} class="img-fluid animated" alt=" " />
          </div>
      </div>
    </div>
</section>
  )
}

export default Home1


