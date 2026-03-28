import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// ✅ Import all images
import vedic from "../assets/vedic.jpg";
import shivam from "../assets/shivam.jpg";
import blyp from "../assets/blyp.jpg";
import chaitanya from "../assets/chaitanya.jpg";
import kyron from "../assets/kyron.jpg";
import maison from "../assets/maison.jpg";
import vaighai from "../assets/vaighai.jpg";
import evos from "../assets/evos.jpg";
import harvestlink from "../assets/harvestlink.jpg";
import solana from "../assets/solana.jpg";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useEffect(() => {
    // 🔥 Title scale animation
    gsap.to(".works-title", {
      scale: 0.45,
      scrollTrigger: {
        trigger: ".works-showcase",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // 🔥 Parallax effect
    document.querySelectorAll(".work-item").forEach((item) => {
      const img = item.querySelector(".parallax");

      gsap.to(img, {
        y: 80,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  // ✅ Works data (IMPORTANT)
  const works = [
    { img: vedic, link: "https://www.live-vedic.com/" },
    { img: shivam, link: "https://in.sj.world/" },
    { img: blyp, link: "https://blyp.in/" },
    { img: chaitanya, link: "https://chaitanyafoundations.com/" },
    { img: kyron, link: "https://kyronenergy.com/" },
    { img: maison, link: "http://maisonattireclub.com/" },
    { img: vaighai, link: "https://www.vaighai.com/" },
    { img: evos, link: "#" },
    { img: harvestlink, link: "https://harvestlinkexports.com/" },
    { img: solana, link: "https://franckmullerencrypto.com/" },
  ];

  return (
    <section className="works-showcase">
      <div className="works-title-wrap">
        <h2 className="works-title">My Top Works</h2>
      </div>

      <div className="works-gallery">
        {works.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
          >
            <div className={`work-item img${i + 1}`}>
              <div className="parallax">
                <img src={item.img} alt={`work-${i}`} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;