import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full fixed top-0 bg-[#F7F7F7] py-4 z-10">
      <div className="flex items-center justify-between px-8">
        {/* Left Links */}
        <div className="flex space-x-8 text-black text-lg font-normal font-walbaum">
          <a href="#shop" className="hover:underline">
            Shop
          </a>
          <a href="#our-story" className="hover:underline">
            Our Story
          </a>
          <a href="#benefits" className="hover:underline">
            Benefits
          </a>
          <a href="#contact-us" className="hover:underline">
            Contact Us
          </a>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-black text-2xl font-bold font-walbaum">
          One Pack
        </div>
      </div>
    </nav>
  );
};

export default NavBar;