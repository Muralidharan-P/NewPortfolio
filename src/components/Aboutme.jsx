import { useEffect, useRef } from "react";
import hand from "../assets/hand.png"; // 🔥 replace with your image name

const About = () => {
  const sectionRef = useRef(null);
  const handRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handEl = handRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 🔥 activate text + title animation
            section.classList.add("active");

            // 🔥 restart hand animation every time
            handEl.classList.remove("animate");
            void handEl.offsetWidth;
            handEl.classList.add("animate");
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about-section">

      {/* 🔥 HAND IMAGE */}
      <img
        ref={handRef}
        src={hand}
        alt="pointer"
        className="about-hand"
      />

      {/* 🔥 TITLE */}
      <h2 className="about-title">ABOUT ME</h2>

      {/* 🔥 TEXT CONTENT */}
      <div className="about-line">
        <p className="about-text">
          Hi, I’m Murali — a creative Web developer from Tirupattur who loves turning ideas into interactive experiences.
        </p>
      </div>

      <div className="about-line">
        <p className="about-text">
          With a background in Computer Science and a passion for cricket 🏏, I bring the same focus, timing, and creativity into my work — especially when it comes to animations and user experience.
        </p>
      </div>

      <div className="about-line">
        <p className="about-text">
          I enjoy experimenting with motion, crafting smooth interactions, and building websites that feel modern, fast, and engaging.
        </p>
      </div>

      <div className="about-line">
        <p className="about-text">
          I don’t just build websites — I build experiences that feel alive.
        </p>
      </div>

    </section>
  );
};

export default About;