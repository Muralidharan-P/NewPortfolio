import { useEffect } from "react";
import rocket from "../assets/rocket.png";
import fire from "../assets/fire.gif";

const Experience = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.15}s`;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    /* 🚀 ROCKET SCROLL LOGIC */
    const path = document.getElementById("expPath");
    const rocket = document.getElementById("rocket");

    if (path && rocket) {
      const pathLength = path.getTotalLength();

      const handleScroll = () => {
        const section = document.querySelector("#experience");
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = Math.min(
          Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
          1
        );

        const point = path.getPointAtLength(progress * pathLength);

        rocket.style.left = point.x + "px";
        rocket.style.top = point.y + "px";
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        {/* 🔥 WRAPPER */}
        <div className="experience-wrapper">

          {/* LEFT SIDE (UNCHANGED) */}
          <div className="timeline">

            {/* ITEM 1 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">
                  July 2023 - October 2024
                </span>
                <h3>Junior WordPress Developer</h3>
                <h4>Wepapp Virtuous Studio</h4>
                <p>
                  Worked on US-based client projects, building and customizing 
                  WordPress websites, optimizing performance, and improving UI 
                  for better user experience.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">
                  October 2024 - August 2025
                </span>
                <h3>WordPress Developer</h3>
                <h4>Wings UI/UX Design Studio</h4>
                <p>
                  Developed responsive and visually engaging websites with strong 
                  UI/UX focus, working on interactive animation-based projects and 
                  collaborating closely with designers.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">
                  August 2025 - Present
                </span>
                <h3>Web Developer</h3>
                <h4>Spinta Digital</h4>
                <p>
                  Building interactive WordPress websites, managing servers and 
                  domains, and developing Shopify e-commerce solutions with focus 
                  on performance and scalability.
                </p>
              </div>
            </div>

          </div>

          

        </div>
      </div>
    </section>
  );
};

export default Experience;