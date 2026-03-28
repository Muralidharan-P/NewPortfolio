import { useEffect } from "react";

const useScrollAnimation = (selector) => {
  useEffect(() => {
    const section = document.querySelector(selector);

    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.85;
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selector]);
};

export default useScrollAnimation;