import React from 'react'
import logo from './imgs/slide2.jpg'
import './Home0.css'

const Home2 = () => {
  return (
    <div>
         <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Adisra Thetavega</h1>
              <h2 style={{color:'black'}}>Smart SCADA for Smart Industry <br />
              MONITOR | CONTROL | ANALYSE
              </h2>
              {/* <h2>MONITOR | CONTROL | ANALYSE</h2> */}
              <h2 className='text-justify' style={{color:'black'}}>Enabling Better Visualization of your Machine Data and a Smarter Bottom Line for your Business. 
              </h2>
            <div class="d-flex">
              {/* <a href="#about" class="btn-get-started scrollto">Get Started</a> */}
               {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={logo} class="img-fluid animated" alt="" />
          </div>
      </div>
    </div>
</section>
    </div>
  )
}

export default Home2