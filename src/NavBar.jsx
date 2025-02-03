import React, { useState } from "react";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-[#f7f7f7] py-4 z-10">
      <div className="flex items-center justify-between px-8 relative">
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-8 h-8 cursor-pointer text-black" />
        </div>

        {/* Center Logo */}
        <div className="bg-[#F7F7F7] absolute left-1/2 transform -translate-x-1/2 text-black text-2xl font-bold font-walbaum">
          One Pack
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute lg:static top-16 left-0 w-full bg-[#f7f7f7] lg:bg-transparent lg:flex space-y-4 lg:space-y-0 lg:space-x-8 text-black text-lg font-normal font-walbaum transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"}`}
        >
          <a href="#shop" className="block lg:inline hover:underline px-8 lg:px-0 py-2 lg:py-0">
            Shop
          </a>
          <a href="#our-story" className="block lg:inline hover:underline px-8 lg:px-0 py-2 lg:py-0">
            Our Story
          </a>
          <a href="#benefits" className="block lg:inline hover:underline px-8 lg:px-0 py-2 lg:py-0">
            Benefits
          </a>
          <a href="#contact-us" className="block lg:inline hover:underline px-8 lg:px-0 py-2 lg:py-0">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
