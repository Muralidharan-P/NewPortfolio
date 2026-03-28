import { useEffect } from "react";
import gsap from "gsap";

// ✅ import images properly
import trail1 from "../assets/trail1.png";
import trail2 from "../assets/trail2.png";
import trail3 from "../assets/trail3.png";
import trail4 from "../assets/trail4.png";
import trail5 from "../assets/trail5.png";

const About = () => {

  useEffect(() => {
    const section = document.querySelector(".about-intro");
    const container = document.querySelector(".about-floating-images");

    // ✅ SAFETY CHECK (IMPORTANT)
    if (!section || !container) return;

    const images = [trail1, trail2, trail3, trail4, trail5];

    let lastX = 0;
    let lastY = 0;

    const move = (e) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      if (Math.sqrt(dx * dx + dy * dy) < 70) return;

      lastX = e.clientX;
      lastY = e.clientY;

      const img = document.createElement("img");
      img.src = images[Math.floor(Math.random() * images.length)];
      img.className = "floating-img";

      img.style.left = e.clientX + "px";
      img.style.top = e.clientY + "px";

      container.appendChild(img);

      gsap.fromTo(img,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6 }
      );

      gsap.to(img, {
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        onComplete: () => img.remove()
      });
    };

    section.addEventListener("mousemove", move);

    return () => section.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
  const section = document.querySelector(".about-intro");

  if (!section) return;

  const handleScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section className="about-intro">
      <div className="about-floating-images"></div>

      <div className="about-wrapper">
        <h2 className="about-heading">
          <div className="about-line"><span>I BUILD MODERN</span></div>
          <div className="about-line"><span>WEB EXPERIENCES</span></div>
          <div className="about-line"><span>THAT STAND OUT</span></div>
        </h2>

        <p className="about-subtext">
          I create fast, modern, and visually engaging websites...
        </p>
      </div>
    </section>
  );
};

export default About;