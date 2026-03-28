import { useEffect } from "react";
import resume from "../assets/Resume.pdf"; // ✅ no space

const SocialBar = () => {
  useEffect(() => {
    const bar = document.getElementById("socialSticky");
    const skills = document.querySelector(".skills-section");

    const handleScroll = () => {
      if (window.scrollY >= 200) {
        bar.classList.add("show");
      } else {
        bar.classList.remove("show");
      }

      if (skills) {
        const rect = skills.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          bar.classList.add("hide");
        } else {
          bar.classList.remove("hide");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="social-sticky" id="socialSticky">
      
      <a href="https://wa.me/917695973188" target="_blank" className="social-icon whatsapp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <a href="tel:+917695973188" className="social-icon call">
        <i className="fa-solid fa-phone"></i>
      </a>

      <a href="https://www.linkedin.com/" target="_blank" className="social-icon linkedin">
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a href={resume} target="_blank" className="social-icon resume">
        <i className="fa-solid fa-file"></i>
      </a>

    </div>
  );
};

export default SocialBar;
