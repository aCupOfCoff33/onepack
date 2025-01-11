// HomePage.jsx

import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import OnePack from "./OnePack";
import ViewCanvas from "./ViewCanvas";
import FirstHero from "./FirstHero";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F7F7F7] relative min-h-screen w-full">
      <NavBar />

      {/*
        Lower z-index so the 3D model can appear in front.
        If you want the text behind the 3D model, pick something
        like z-10 or z-20 for "OnePack"
      */}
      <OnePack scrollPosition={scrollPosition} />

      {/*
        Also give this text a LOWER z-index (like z-10 or z-20) if
        you need the 3D model in front. 
      */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 text-black text-4xl font-normal font-walbaum z-20"
        style={{ top: "60vh" }}
      >
        Balance Your Day, Elevate Your Night
      </div>

      {/* Extra space for scrolling to ensure the trigger can fire */}
      <div className="h-[100vh]" />

      {/* IMPORTANT: Wrap FirstHero with .first-hero-trigger */}
      <div className="first-hero-trigger">
        <FirstHero />
      </div>

      {/* Finally, the 3D model on top (zIndex=50 in the style) */}
      <ViewCanvas />
    </div>
  );
};

export default HomePage;