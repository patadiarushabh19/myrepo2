import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-primary text-white py-4 px-8 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <nav className="flex gap-6">
        <Link
          to="hero"
          smooth
          className="cursor-pointer hover:text-highlight"
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth
          className="cursor-pointer hover:text-highlight"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth
          className="cursor-pointer hover:text-highlight"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
