import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import SocialBar from "./components/SocialBar";
import Cursor from "./components/Cursor";
import useLenis from "./hooks/useLenis";
import CTA from "./components/Cta";
import Aboutme from "./components/Aboutme";
import rocket from "./assets/newrocket1.png";
import fire from "./assets/fire.gif";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App(){
  useLenis();
return(
<>

      <div className="rocket-global">

        <div className="rocket-wrapper">
          <img src={rocket} className="rocket-img" alt="rocket" />
          <img src={fire} className="rocket-fire" alt="fire" />
        </div>

      </div>
      <Navbar />
  <Hero />
   <Aboutme />
      <About />
      <Works />
      <Skills />
      <Experience />
      <Services />
      <SocialBar />
      <Cursor />
      <Testimonial />
      <CTA />
</>

);

}

export default App;