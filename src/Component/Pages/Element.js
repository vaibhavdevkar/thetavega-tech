import React, { useState } from 'react';
import logo from "../Icons/qr.png"
import logo1 from "../Icons/eye.png"
import logo2 from "../Icons/online-analytical.png"
import logo3 from "../Icons/charts.png"
import logo4 from  "../Icons/internet-of-things.png"
import logo5 from "../Icons/AR.png"
import './Element.css'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';





const Element = () => {
  useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
	  }, []);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleExploreClick = (url) => {
    window.location.href = url;
  }

  const handleNextClick = () => {
    // navigate to the next page
    console.log("/Autonomous");
  }

  return (
    <>
          <h3 className='track1' style={{textAlign:"left", marginLeft:"58px"}}>
              <span style={{ color: 'red' }}>&gt;</span> Major{' '}
              <span style={{ color: 'red' }}>Elements</span>
            </h3>
          {/* <h3 className='bg20' > <p style={{textAlign:"center"}}>Major Elements</p>  </h3>  */}
       
      <div className='element'>
      <table >
        <ul class='power-supply-box-row'>
          <section class='home_card'>
            <div className="row justify-content-center">
              <div class="col-sm-3 slide1" >
                <div class="card1"> 
                  <div class="card-body ajay">
                    <img src={logo} alt="Logo" className="logov" />
                    <h6 class="card-title">Automated Identification</h6>
                    <NavLink to="/datacapture" className="navbutton">   Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
        
              <div class="col-sm-3 slide1 ">
                <div class="card1">
                  <div class="card-body ajay ">
                    <img src={logo1} alt="Logo" className="logov" />
                    <h6 class="card-title">Machine Vision</h6>
                    
                    <NavLink to="/machinevision" className="navbutton">   Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                  
                </div>
              </div>
              <div class="col-sm-3 slide1">
                <div class="card1">
                  <div class="card-body ajay">
                    <img src={logo2} alt="Logo" className="logov" />
                    <h6 class="card-title"> Machine to Machine Communication</h6>
                    <NavLink to="/m2m" className="navbutton">   Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>

              <div class="col-sm-3 slide1">
                <div class="card1">
                  <div class="card-body ajay">
                    <img src={logo3} alt="Logo" className="logov" />
                    <h6 class="card-title">Statical Process Control </h6>
                    <NavLink to="/statistical" className="navbutton">  Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 slide1">
                <div class="card1">
                  <div class="card-body ajay">
                    <img src={logo4} alt="Logo" className="logov" />
                    <h6 class="card-title">Data Integration</h6>
                    <NavLink to="/dataintegration" className="navbutton">   Explore more</NavLink>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              
</div>
</section>
</ul>
</table>
<hr className='hrtag'/>
</div>

    </>
  )
}

export default Element;

