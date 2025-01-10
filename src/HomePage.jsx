// HomePage.jsx

import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import OnePack from "./OnePack";
import ViewCanvas from "./ViewCanvas";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F7F7F7] relative h-[200vh] w-full">
      <NavBar />
      <OnePack scrollPosition={scrollPosition} />

      <div
        className="absolute left-1/2 transform -translate-x-1/2 text-black text-4xl font-normal font-walbaum z-40"
        style={{ top: "60vh" }}
      >
        Balance Your Day, Elevate Your Night
      </div>

      {/* Extra space for scrolling */}
      <div className="h-[150vh]" />

      {/* 3D Model Canvas */}
      <ViewCanvas />
    </div>
  );
};

export default HomePage;