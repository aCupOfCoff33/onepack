"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FirstHero() {
  const heroRef = useRef(null);
  const scrollTriggerRef = useRef(null); // To store the ScrollTrigger instance

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const element = heroRef.current;

    // Set initial state before animation
    gsap.set(element, { x: -100, opacity: 0 });

    // Create the animation and store the ScrollTrigger instance
    const animation = gsap.to(element, {
      x: 3,
      opacity: 1,
      duration: 1,
      ease: "back.out(3)",
      scrollTrigger: {
        trigger: element,
        start: "top 60%", // When the top of the element hits 80% of the viewport height
        toggleActions: "play none none none",
      },
    });

    // Store the ScrollTrigger instance for cleanup
    scrollTriggerRef.current = animation.scrollTrigger;

    // Cleanup function to kill the animation and ScrollTrigger instance
    return () => {
      // Kill the specific animation
      gsap.killTweensOf(element);

      // Kill the specific ScrollTrigger instance if it exists
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="second-hero w-full my-16 px-8">
      {/* Heading */}
      <h1 className="pl-10px text-3xl md:text-4xl font-bold text-black underline font-walbaum mb-6 text-left max-w-lg">
        Energize By Day. <br />
        Rejuvenate By Night.
      </h1>

      {/* Description */}
      <p className="pl-30px text-lg md:text-xl font-normal text-black leading-relaxed font-walbaum text-left max-w-lg ">
        We make it easy to fuel your lifestyle—on-the-go wellness with perfectly
        portioned, naturally flavored vitamin and energy boosts. Designed for
        busy mornings, restful nights, and everything in between, our
        sustainably packaged products are tailored to your daily needs.
      </p>
    </div>
  );
}
