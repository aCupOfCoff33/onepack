// HomePage.jsx

import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import OnePack from "./OnePack";
import ViewCanvas from "./ViewCanvas";
import FirstHero from "./FirstHero";
import Scene from "./Scene";
import Information from "./Information";
import Buying from "./Buying";
import NewsletterSignup from "./NewsletterSignup";
import Footer from "./Footer";

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-[#F7F7F7] relative min-h-screen w-full">
        {/* Navigation Bar */}
        <NavBar />

        <ViewCanvas className="pointer-events-none">
          <Scene />
        </ViewCanvas>

        {/* Main Content */}
        <OnePack />

        {/* Hero Section */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 text-black text-4xl font-normal font-walbaum z-10"
          style={{ top: "60vh" }}
        >
          Balance Your Day, Elevate Your Night
        </div>
        {/* Triggered Hero Section */}
        <div className="first-hero-trigger">
          <FirstHero />
        </div>
        <div className="second-hero-trigger">
          <Information />
        </div>
        <div className="buying-trigger">
          <Buying />
        </div>

        <NewsletterSignup />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
