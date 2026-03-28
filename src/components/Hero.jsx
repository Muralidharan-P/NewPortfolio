import React, { useEffect } from "react";
import "@lottiefiles/lottie-player";
import banner from "../assets/final-creative-banner.json"; // ✅ no space

const Hero = () => {

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero-lottie");
      if (!hero) return;

      hero.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-banner">
      <div className="hero-lottie">
        <lottie-player
          src={banner}
          background="transparent"
          speed="1"
          autoplay
        ></lottie-player>
      </div>
    </section>
  );
};

export default Hero;