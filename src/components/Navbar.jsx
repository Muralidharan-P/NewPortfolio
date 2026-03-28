import { useState, useEffect } from "react";
import resume from "../assets/resume.pdf";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // cursor follow effect
  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "hide" : ""}`}
        onClick={() => setOpen(true)}
      >
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <div className={`menu-overlay ${open ? "show" : ""}`}>
        
        {/* CLOSE */}
        <div className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </div>

        <div className="menu-content">
          <a href="#home" className="menu-item active"> HOME</a>
          <a href="#work" className="menu-item"> WORK</a>
          <a href="#about" className="menu-item"> ABOUT</a>
          <a href="#contact" className="menu-item"> CONTACT</a>

         
<div className="menu-socials">

  <a 
    href="https://wa.me/917695973188" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-icon whatsapp"
  >
    <i className="fa-brands fa-whatsapp"></i>
  </a>

  <a 
    href="tel:+917695973188" 
    className="social-icon call"
  >
    <i className="fa-solid fa-phone"></i>
  </a>

  <a 
    href="https://www.linkedin.com/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-icon linkedin"
  >
    <i className="fa-brands fa-linkedin"></i>
  </a>

  <a 
    href={resume} 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-icon resume"
  >
    <i className="fa-solid fa-file"></i>
  </a>

</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;