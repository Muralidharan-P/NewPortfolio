import { useEffect } from "react";
import Matter from "matter-js";

const Skills = () => {
  useEffect(() => {
    const section = document.querySelector(".skills-section");
    if (!section) return;

    let started = false;

    const startPhysics = () => {
      if (started) return; // ✅ run only once
      started = true;

      const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint } =
        Matter;

      const engine = Engine.create();
      const world = engine.world;

      const width = section.offsetWidth;
      const height = section.offsetHeight;

      const pills = document.querySelectorAll(".skill-pill");
      const bodies = [];

      // 🔥 create bodies
      pills.forEach((pill) => {
        const rect = pill.getBoundingClientRect();

        const body = Bodies.rectangle(
          Math.random() * width,
          -100,
          rect.width,
          rect.height,
          {
            restitution: 0.6,
            friction: 0.2,
          },
        );

        bodies.push({ body, pill });
        Composite.add(world, body);
      });

      // boundaries
      const floor = Bodies.rectangle(width / 2, height + 40, width, 80, {
        isStatic: true,
      });
      const leftWall = Bodies.rectangle(-40, height / 2, 80, height, {
        isStatic: true,
      });
      const rightWall = Bodies.rectangle(width + 40, height / 2, 80, height, {
        isStatic: true,
      });

      Composite.add(world, [floor, leftWall, rightWall]);

      // run engine
      Runner.run(Runner.create(), engine);

      // update DOM
      const update = () => {
        bodies.forEach(({ body, pill }) => {
          pill.style.left = body.position.x - pill.offsetWidth / 2 + "px";
          pill.style.top = body.position.y - pill.offsetHeight / 2 + "px";
          pill.style.transform = `rotate(${body.angle}rad)`;
        });

        requestAnimationFrame(update);
      };

      update();


      section.addEventListener("touchstart", () => {
  pressTimer = setTimeout(() => {
    canDrag = true; // enable drag after hold
  }, 200);
});

section.addEventListener("touchend", () => {
  clearTimeout(pressTimer);
  canDrag = false; // disable drag
});

 // drag
const mouse = Mouse.create(section);

const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: { visible: false },
  },
});

Composite.add(world, mouseConstraint);

    };

    // 🔥 INTERSECTION OBSERVER
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("active"); // text animation
            startPhysics(); // 🔥 start falling
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="about-heading">
        <div className="about-line">
          <span>My Techstack</span>
        </div>
      </h2>

      <div className="skills-world">
        {/* 🔥 SKILL PILLS */}
        {[
          "Web Design",
          "WordPress",
          "Webflow",
          "UI/UX",
          "GSAP",
          "JavaScript",
          "React",
          "Animation",
          "SEO",
          "E-commerce",
          "Shopify",
          "HTML",
          "CSS",
          "Bootstrap",
          "Node.js",
          "Git",
          "GitHub",
          "Perfomance",
          "CMS",
          "No Code",
          "CRM",
          "Frontend",
        ].map((skill, i) => (
          <div key={"skill-" + i} className="skill-pill">
            {skill}
          </div>
        ))}

        {/* 🔥 EMOJI PILLS */}
        {[
          "🔥",
          "🚀",
          "🎯",
          "👻",
          "💻",
          "⚡",
          "🎨",
          "🛒",
          "✨",
          "🧩",
          "🌐",
          "🎬",
        ].map((emoji, i) => (
          <div key={"emoji-" + i} className="skill-pill emoji-pill">
            {emoji}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
