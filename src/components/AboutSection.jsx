import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  useEffect(() => {
    // About Section Animations using GSAP ScrollTrigger
    gsap.fromTo(
      ".about-title",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".about-text",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="bg-secondary text-white py-16 flex flex-col items-center"
    >
      <h2 className="about-title text-4xl font-bold mb-6">About Me</h2>
      <p className="about-text text-center w-3/4 md:w-1/2 text-lg">
        I'm a passionate MERN stack developer with expertise in creating sleek,
        minimalist, and high-performance web applications. I love exploring new
        technologies and applying them to solve real-world problems.
      </p>
    </section>
  );
};

export default AboutSection;
