import { useState, useEffect } from "react";
import resume from "../assets/Resume.pdf";
import ContactModal from "./ContactModal";
import logo from "../assets/transparent-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
      <header className="main-head">
        <a className="logo" href="/">
          <img src={logo} alt="Logo" />
        </a>
        {/* HAMBURGER */}
        <div className="menu-hamber">
          {/* 🔥 HIRE ME BUTTON */}
          <div className="hire-btn" onClick={() => setModalOpen(true)}>
            <span className="hire-text">Hire Me</span>
            <span className="hire-circle">
              <span className="arrow">↗</span>
            </span>
          </div>
          <div
            className={`hamburger ${menuOpen ? "hide" : ""}`}
            onClick={() => setMenuOpen(true)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* MENU */}
      <div className={`menu-overlay ${menuOpen ? "show" : ""}`}>
        {/* CLOSE */}
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </div>

        <div className="menu-content">
          
          <a
            href="#aboutme"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </a>


          <a
            href="#works"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            WORK
          </a>
          <a
            href="#skills"
            className="menu-item "
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
                    <a
            href="#experience"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Experiences
          </a>
          <a
            href="#services"
            className="menu-item "
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>

          

          <a
            href="#contact"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </a>

          <div className="menu-socials">
            <a
              href="https://wa.me/917695973188"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a href="mailto:muralidesigns7@gmail.com" className="social-icon">
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-solid fa-file"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 🔥 MODAL (OUTSIDE MENU) */}
      {modalOpen && (
        <ContactModal
          close={() => setModalOpen(false)}
          onSuccess={() => console.log("success")}
        />
      )}
    </>
  );
};

export default Navbar;
