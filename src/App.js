
import './App.css';
//import Home from './Component/Home';
import About from './Component/About';
import Capabilities from './Component/Capabilities';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Maincomp from './Maincomp';
import Error from './Component/Error';
import Slides from './Component/Slides';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './Component/Footer.js'
import Automotion from './Component/Industries/Automotion.js'
import Defense from './Component/Industries/Defense';
import Smartcity from './Component/Industries/Smartcity'
import Pharma from './Component/Industries/Pharma';
import GoToBtn from './Component/GoToBtn';
import Display from './Component/product/Display';
import Autonomous from './Component/SlidePage/Autonomous';
import IOT from './Component/SlidePage/IOT'
import ArVr from './Component/SlidePage/ArVr';
import BigData from './Component/SlidePage/BigData';
import CloudComputing from './Component/SlidePage/CloudComputing';
import Integrations from './Component/SlidePage/Integrations'
import DataCapture from './Component/Pages/DataCapture';
import Trace from './Component/Pages/Trace';
import MachineVision from './Component/Pages/MachineVision';
import M2M from './Component/Pages/M2M';
import { Statistical } from './Component/Pages/Statistical';
import DataIntegration from './Component/Pages/DataIntegration';
import Gstart from './Component/SlidePage/Gstart';
import Downi from './Component/SlidePage/Downi';
import Licensing from './Component/SlidePage/Licensing';
import Launch from './Component/SlidePage/Launch';
import Createnew from './Component/SlidePage/Createnew';
import Addfiles from './Component/SlidePage/Addfiles';
import Projectsetting from './Component/SlidePage/Projectsetting';
import Csharp from './Component/SlidePage/Csharp';
import Productstr from './Component/Aditheta/Productstr';
import Standards from './Component/Aditheta/Standards';
import Buildingblocks from './Component/Aditheta/Buildingblocks';
import Worldwide from './Component/Aditheta/Worldwide';
import Helpsite from './Component/Aditheta/Helpsite';
import Programsadi from './Component/Aditheta/Programsadi';
import Aboutadi from './Component/Aditheta/Aboutadi';
import Panels from './Component/Panels';




function App() {
  return (
    <div className='App1'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Maincomp />} />
          <Route path='/' index element={<Slides />} />
          <Route path="/about" element={<About />} />

          <Route path="industries/automotion" element={<Automotion />} />
          <Route path="industries/defense" element={<Defense />} />
          <Route path="industries/smartcity" element={<Smartcity />} />
          <Route path="industries/pharma" element={<Pharma />} />

          <Route path="panels" element={<Panels />} />

          <Route path="capabilities" element={<Capabilities />} />

          <Route path="adisra/product" element={<Productstr />} />
          <Route path="adisra/standards" element={<Standards />} />
          <Route path="adisra/building" element={<Buildingblocks />} />
          <Route path="adisra/worldwide" element={<Worldwide />} />
          <Route path="adisra/helpsite" element={<Helpsite />} />
          <Route path="adisra/programs" element={<Programsadi />} />
          <Route path="adisra/about" element={<Aboutadi />} />

          <Route path="contact" element={<Contact />} />

          {/* Dont Remove Product and Display */}
          <Route path="product" element={<Product />} />
          <Route path="display" element={<Display />} />
          {/* Dont Remove Product and Display */}


          <Route path="/autonomous" element={<Autonomous />} />
          <Route path="/iot" element={<IOT />} />
          <Route path="/arvr" element={<ArVr />} />
          <Route path="/bigdata" element={<BigData />} />
          <Route path="/cloudcomputing" element={<CloudComputing />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/datacapture" element={<DataCapture />} />
          <Route path="/trace" element={<Trace />} />
          <Route path="/machinevision" element={<MachineVision />} />
          <Route path="/m2m" element={<M2M />} />
          <Route path="/statistical" element={<Statistical />} />
          <Route path="/dataintegration" element={<DataIntegration />} />
          <Route path="/requirement" element={<Gstart />} />
          <Route path="/downi" element={<Downi />} />
          <Route path="/licensing" element={<Licensing />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/createnew" element={<Createnew />} />
          <Route path="/addfiles" element={<Addfiles />} />
          <Route path="/prosetting" element={<Projectsetting />} />
          <Route path="/csharp" element={<Csharp />} />

          <Route path="*" element={<Error />} />
        </Routes>

        <GoToBtn />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
