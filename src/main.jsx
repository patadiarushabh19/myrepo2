// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // your styles
import App from './App.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Apply smooth scrolling
gsap.defaults({ ease: "power2.out", duration: 1 });

window.addEventListener('load', () => {
  // Enable smooth scrolling for the entire document
  gsap.to('html', {
    scrollBehavior: 'smooth',
  });

  // ScrollTrigger for advanced animations (optional)
  ScrollTrigger.create({
    trigger: "section", // Target each section for smooth scrolling effects
    start: "top top", 
    end: "bottom top",
    scrub: true, // Adds smooth scrub effect
  });
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
