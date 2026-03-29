import { useEffect, useRef, useState } from "react";
import ContactModal from "./ContactModal";

const CTA = () => {
  const btnRef = useRef(null);
  const textRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const [open, setOpen] = useState(false);

  // 🔥 cursor follow effect
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
    <section className="cta-section" id="contact">

      <h2 className="cta-title">Let’s Work Together</h2>

      <p className="cta-text">
        I build modern, fast, and engaging websites that help your business grow.
      </p>

      {/* 🔥 YOUR BUTTON */}
      <div
        ref={btnRef}
        className="cta-button"
        onClick={() => setOpen(true)}
      >
        <span ref={textRef}>Get in touch •</span>
      </div>
      {success && (
  <p className="success-msg">
    ✅ Message sent successfully! I’ll contact you soon.
  </p>
)}

      {/* 🔥 POPUP */}
      {open && (
  <ContactModal
    close={() => setOpen(false)}
    onSuccess={() => setSuccess(true)}
  />
)}

    </section>
  );
};

export default CTA;