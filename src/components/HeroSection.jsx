// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const HeroSection = () => {
//   useEffect(() => {
//     // Hero Section Animations using GSAP ScrollTrigger
//     gsap.fromTo(
//       ".hero-title",
//       {
//         opacity: 0,
//         y: 50,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: ".hero-title",
//           start: "top 80%",
//           end: "top 60%",
//           scrub: true,
//         },
//       }
//     );

//     gsap.fromTo(
//       ".cta-button",
//       {
//         opacity: 0,
//         y: 50,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: ".cta-button",
//           start: "top 80%",
//           end: "top 60%",
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   return (
//     <section className="hero-section bg-primary text-white h-screen flex flex-col justify-center items-center text-center">
//       <motion.h1
//         className="hero-title text-5xl font-bold"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to My Portfolio
//       </motion.h1>
//       <motion.a
//         href="#projects"
//         className="cta-button mt-8 px-6 py-3 bg-secondary text-primary rounded-lg text-lg font-semibold"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         View Projects
//       </motion.a>
//     </section>
//   );
// };

// export default HeroSection;


import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 text-white h-screen flex flex-col justify-center items-center text-center p-6">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="z-10">
        {/* Hero Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
          Welcome to My Portfolio
        </h1>
        
        {/* Hero Subheading */}
        <p className="text-lg sm:text-xl mb-6">
          I'm a passionate Developer focused on building intuitive and innovative digital solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Contact Me Button */}
          <a
            href="#contact"
            className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out hover:bg-blue-700"
          >
            Contact Me
          </a>
          
          {/* Download CV Button */}
          <a
            href="../assets/Patadia_Rushabh_Resume.pdf"
            download
            className="bg-green-600 text-white py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out hover:bg-green-700"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

