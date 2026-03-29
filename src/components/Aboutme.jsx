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
    <section ref={sectionRef} className="about-section" id="aboutme">

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
    Hi, I’m Murali — a creative frontend developer from Tirupattur who turns ideas into modern, interactive web experiences.    With a background in Computer Science and a passion for cricket 🏏, I bring the same focus, precision, and creativity into every project — especially in animations and user experience.

  </p>
</div>

{/* <div className="about-line">
  <p className="about-text">
    With a background in Computer Science and a passion for cricket 🏏, I bring the same focus, precision, and creativity into every project — especially in animations and user experience.
    
  </p>
</div> */}

<div className="about-line">
  <p className="about-text">
    I specialize in building fast, visually engaging websites with smooth interactions that not only look great but also perform well.    I don’t just build websites — I craft digital experiences that connect, engage, and leave a lasting impression.

  </p>
</div>



    </section>
  );
};

export default About;