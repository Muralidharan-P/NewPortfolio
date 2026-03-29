import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Startup",
    text: "Murali delivered an amazing website with smooth animations. Highly recommended!",
  },
  {
    name: "Sarah Smith",
    role: "Founder, Brand",
    text: "Super creative developer! The UI and interactions are next level.",
  },
  {
    name: "David Lee",
    role: "Product Manager",
    text: "Fast, clean, and visually stunning work. Great experience working together.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <section className="testimonial-section">

      <div className="testimonial-container">

        {/* LEFT ARROW */}
        <button className="testi-arrow left" onClick={prevSlide}>←</button>

        {/* CONTENT */}
        <div className="testimonial-content">
          <h3 className="testimonial-name">
            {testimonials[index].name}
          </h3>
          <p className="testimonial-role">
            {testimonials[index].role}
          </p>

          <p key={index} className="testimonial-text">
            “{testimonials[index].text}”
          </p>
        </div>

        {/* RIGHT ARROW */}
        <button className="testi-arrow right" onClick={nextSlide}>→</button>

      </div>

      {/* PAGINATION */}
      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

    </section>
  );
};

export default Testimonial;