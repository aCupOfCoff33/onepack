import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import OnePack from "./OnePack";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F7F7F7] h-[200vh] flex flex-col">
      {/* Navbar */}
      <NavBar />

      {/* One Pack */}
      <OnePack scrollPosition={scrollPosition} />

      {/* Permanent Text Below "One Pack" */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 text-black text-4xl font-normal font-walbaum"
        style={{ top: "60vh" }} // Adjust this value for fine-tuning the position
      >
        Balance Your Day, Elevate Your Night
      </div>

      {/* Additional Spacing */}
      <div className="h-[150vh]"></div>
    </div>
  );
};

export default HomePage;