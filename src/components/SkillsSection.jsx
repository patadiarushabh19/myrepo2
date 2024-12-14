// // // // import React, { useEffect } from "react";
// // // // import { gsap } from "gsap";
// // // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // // const skills = [
// // // //   { name: "React", level: "Advanced" },
// // // //   { name: "Node.js", level: "Intermediate" },
// // // //   { name: "MongoDB", level: "Intermediate" },
// // // //   { name: "Express", level: "Intermediate" },
// // // // ];

// // // // const SkillsSection = () => {
// // // //   useEffect(() => {
// // // //     // Skills Section Animations using GSAP ScrollTrigger
// // // //     gsap.utils.toArray(".skill-card").forEach((card, index) => {
// // // //       gsap.fromTo(
// // // //         card,
// // // //         {
// // // //           opacity: 0,
// // // //           scale: 0.8,
// // // //         },
// // // //         {
// // // //           opacity: 1,
// // // //           scale: 1,
// // // //           scrollTrigger: {
// // // //             trigger: card,
// // // //             start: "top 80%",
// // // //             end: "top 60%",
// // // //             scrub: true,
// // // //           },
// // // //         }
// // // //       );
// // // //     });
// // // //   }, []);

// // // //   return (
// // // //     <section
// // // //       id="skills"
// // // //       className="bg-primary text-white py-16 flex flex-col items-center"
// // // //     >
// // // //       <h2 className="text-4xl font-bold mb-6">My Skills</h2>
// // // //       <div className="flex flex-wrap justify-center gap-10">
// // // //         {skills.map((skill, index) => (
// // // //           <div
// // // //             key={index}
// // // //             className="skill-card bg-secondary text-primary px-6 py-4 rounded-lg shadow-lg"
// // // //           >
// // // //             <h3 className="text-xl font-bold">{skill.name}</h3>
// // // //             <p className="text-sm">{skill.level}</p>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default SkillsSection;




// // // import React from "react";
// // // import { useSpring, animated } from "react-spring";
// // // import { ReactTooltip } from "react-tooltip";


// // // // Skill Data
// // // const skills = [
// // //   { name: "HTML", level: 90, icon: "🔴", description: "Markup language for structuring web pages" },
// // //   { name: "CSS", level: 85, icon: "🔵", description: "Style sheet language for designing web pages" },
// // //   { name: "JavaScript", level: 95, icon: "🟡", description: "Programming language for dynamic web content" },
// // //   { name: "React", level: 90, icon: "🟢", description: "JavaScript library for building user interfaces" },
// // //   { name: "Node.js", level: 80, icon: "🟣", description: "JavaScript runtime for server-side programming" },
// // //   { name: "MongoDB", level: 75, icon: "🟠", description: "NoSQL database for handling large amounts of data" }
// // // ];

// // // const SkillsSection = () => {
// // //   return (
// // //     <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 text-white">
// // //       <div className="container mx-auto text-center">
// // //         <h2 className="text-4xl font-bold mb-8">My Skills</h2>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
// // //           {skills.map((skill, index) => (
// // //             <div
// // //               key={index}
// // //               className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
// // //             >
// // //               <div className="flex items-center justify-center mb-4">
// // //                 <span className="text-4xl">{skill.icon}</span>
// // //                 <h3 className="ml-4 text-2xl font-semibold">{skill.name}</h3>
// // //               </div>

// // //               {/* React Spring for Progress Animation */}
// // //               <SkillProgressBar level={skill.level} />

// // //               {/* Tooltip on Hover */}
// // //               <div data-tip={skill.description} className="text-sm mt-2 cursor-pointer">
// // //                 Hover for details
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Tooltip Component */}
// // //         <ReactTooltip place="top" type="dark" effect="solid" />
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // Animated Skill Progress Bar using React Spring
// // // const SkillProgressBar = ({ level }) => {
// // //   const props = useSpring({ width: `${level}%`, from: { width: 0 }, config: { tension: 250, friction: 30 } });

// // //   return (
// // //     <div className="relative pt-1">
// // //       <div className="flex mb-2 items-center justify-between">
// // //         <span className="text-sm font-medium">{level}%</span>
// // //       </div>
// // //       <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
// // //         <animated.div
// // //           className="bg-blue-600 h-2.5 rounded-full"
// // //           style={props}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SkillsSection;



// // import React from 'react';
// // import { useSpring, animated } from '@react-spring/web';

// // // Array of skills with their respective levels
// // const skills = [
// //   { name: 'HTML', level: 90, icon: '🔴' },
// //   { name: 'CSS', level: 85, icon: '🔵' },
// //   { name: 'JavaScript', level: 95, icon: '🟡' },
// //   { name: 'React', level: 90, icon: '🟢' },
// //   { name: 'Node.js', level: 80, icon: '🟣' },
// //   { name: 'MongoDB', level: 75, icon: '🟠' },
// // ];

// // const SkillsSection = () => {
// //   return (
// //     <section className="py-16 bg-gradient-to-r from-[#9E9FF5] via-[#AEAFF7] to-[#6D6FF1] text-white">

// //       <div className="container mx-auto text-center">
// //         <h2 className="text-4xl font-bold mb-8">My Skills</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
// //           {skills.map((skill, index) => (
// //             <SkillCard key={index} skill={skill} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const SkillCard = ({ skill }) => {
// //   // React Spring animation for progress bar
// //   const progressBar = useSpring({
// //     to: { width: `${skill.level}%` },
// //     from: { width: '0%' },
// //     config: { duration: 1000 },
// //   });

// //   return (
// //     <div
// //       className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
// //     >
// //       <div className="flex items-center justify-center mb-4">
// //         <span className="text-4xl">{skill.icon}</span>
// //         <h3 className="ml-4 text-2xl font-semibold">{skill.name}</h3>
// //       </div>
// //       <div className="relative pt-1">
// //         <div className="flex mb-2 items-center justify-between">
// //           <span className="text-sm font-medium">{skill.level}%</span>
// //         </div>
// //         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
// //           <animated.div
// //             className="bg-blue-600 h-2.5 rounded-full"
// //             style={progressBar} // Applying animation to the progress bar
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SkillsSection;


// import React from 'react';
// import { useSpring, animated } from '@react-spring/web';

// // Array of skills with their respective levels
// const skills = [
//   { name: 'HTML', level: 90, icon: '🔴' },
//   { name: 'CSS', level: 85, icon: '🔵' },
//   { name: 'JavaScript', level: 95, icon: '🟡' },
//   { name: 'React', level: 90, icon: '🟢' },
//   { name: 'Node.js', level: 80, icon: '🟣' },
//   { name: 'MongoDB', level: 75, icon: '🟠' },
// ];

// const SkillsSection = () => {
//   return (
//     <section className="py-16 bg-gradient-to-r from-[#9E9FF5] via-[#AEAFF7] to-[#6D6FF1] text-white">
//       <div className="container mx-auto text-center px-4">
//         <h2 className="text-4xl font-bold mb-8">My Skills</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <SkillCard key={index} skill={skill} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const SkillCard = ({ skill }) => {
//   // React Spring animation for progress bar
//   const progressBar = useSpring({
//     to: { width: `${skill.level}%` },
//     from: { width: '0%' },
//     config: { duration: 1000 },
//   });

//   return (
//     <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 space-y-4">
//       <div className="flex items-center justify-center mb-4 space-x-4">
//         <span className="text-4xl">{skill.icon}</span>
//         <h3 className="text-2xl font-semibold">{skill.name}</h3>
//       </div>
//       <div className="relative pt-1">
//         <div className="flex mb-2 items-center justify-between">
//           <span className="text-sm font-medium">{skill.level}%</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//           <animated.div
//             className="bg-blue-600 h-2.5 rounded-full"
//             style={progressBar} // Applying animation to the progress bar
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;


import React from 'react';
import { useSpring, animated } from '@react-spring/web';

// Array of skills with their respective levels
const skills = [
  { name: 'HTML', level: 90, icon: '🔴' },
  { name: 'CSS', level: 85, icon: '🔵' },
  { name: 'JavaScript', level: 95, icon: '🟡' },
  { name: 'React', level: 90, icon: '🟢' },
  { name: 'Node.js', level: 80, icon: '🟣' },
  { name: 'MongoDB', level: 75, icon: '🟠' },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-r from-[#9E9FF5] via-[#AEAFF7] to-[#6D6FF1] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => {
  // React Spring animation for progress bar
  const progressBar = useSpring({
    to: { width: `${skill.level}%` },
    from: { width: '0%' },
    config: { duration: 1000 },
  });

  return (
    <div
      className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 space-y-4"
    >
      <div className="flex items-center justify-center mb-4">
        <span className="text-4xl">{skill.icon}</span>
        <h3 className="ml-4 text-2xl font-semibold">{skill.name}</h3>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <span className="text-sm font-medium">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <animated.div
            className="bg-blue-600 h-2.5 rounded-full"
            style={progressBar} // Applying animation to the progress bar
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

