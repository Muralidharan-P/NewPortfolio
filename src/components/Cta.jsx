import { useEffect, useRef } from "react";

const CTA = () => {
  const btnRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const text = textRef.current;

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      text.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const reset = () => {
      text.style.transform = `translate(0,0)`;
    };

    btn.addEventListener("mousemove", handleMove);
    btn.addEventListener("mouseleave", reset);

    return () => {
      btn.removeEventListener("mousemove", handleMove);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section className="cta-section">

      <h2 className="cta-title">Lets work together</h2>

      <p className="cta-text">
        I build fast, modern, and high-impact websites that help businesses grow. 
        Let’s create something powerful together.
      </p>

      <div ref={btnRef} className="cta-button">
        <span ref={textRef}>Get in touch •</span>
      </div>

    </section>
  );
};

export default CTA;