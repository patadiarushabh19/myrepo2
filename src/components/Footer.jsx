import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm mb-2">© 2024 Patadia Rushabh. All Rights Reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/yourprofile" className="hover:text-secondary transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/yourprofile" className="hover:text-secondary transition-colors duration-300">
            GitHub
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-secondary transition-colors duration-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
