import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import SocialBar from "./components/SocialBar";
import Cursor from "./components/Cursor";
import useLenis from "./hooks/useLenis";

function App(){
  useLenis();
return(
<>
  <Hero />
      <About />
      <Works />
      <Skills />
      <Experience />
      <Services />
      <SocialBar />
      <Cursor />
</>

);

}

export default App;