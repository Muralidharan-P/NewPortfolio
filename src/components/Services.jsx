import { useEffect, useState } from "react";

// ✅ import images
import website from "../assets/website.jpg";
import ecommerce from "../assets/Ecommerce.jpg";
import landing from "../assets/landing.jpg";
import uiux from "../assets/webdesign.jpg";
import webapp from "../assets/webapp.jpg";

const Services = () => {
  const [index, setIndex] = useState(0);

  const slides = [
  {
    title: "Custom Website Development",
    desc: "I build fast, modern, and fully responsive websites that represent your brand and drive real business results.",
    img: website,
  },
  {
    title: "E-Commerce Solutions",
    desc: "Launch powerful online stores with seamless user experience, secure payments, and high conversion rates.",
    img: ecommerce,
  },
  {
    title: "High-Converting Landing Pages",
    desc: "Strategically designed landing pages that turn visitors into leads and maximize your marketing ROI.",
    img: landing,
  },
  {
    title: "Web Application Development",
    desc: "Scalable and performance-driven web applications tailored to your business workflows and goals.",
    img: webapp,
  },
  {
    title: "UI/UX Design & Frontend",
    desc: "Clean, intuitive, and visually engaging interfaces that enhance user experience and increase engagement.",
    img: uiux,
  },
];

  // ✅ auto slide (8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-section">
      <h2 className="services-title">My Services</h2>

      <div className="slides">
        {slides.map((slide, i) => (
          <div key={i} className={`slide ${i === index ? "active" : ""}`}>
            
            {/* IMAGE */}
            <img src={slide.img} alt={slide.title} />

            {/* TITLE - TOP LEFT */}
            <h3 className="service-title">{slide.title}</h3>

            {/* DESC - BOTTOM RIGHT */}
            <p className="service-desc">{slide.desc}</p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;