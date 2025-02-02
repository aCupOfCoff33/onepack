"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Information() {
  const containerRef = useRef(null);
  const textRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (containerRef.current && textRefs.every((ref) => ref.current)) {
      // Set the first paragraph's opacity to 1, and do not animate it
      gsap.set(textRefs[0].current, { opacity: 1 });
      gsap.set(
        textRefs.slice(1).map((ref) => ref.current),
        { opacity: 0 }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=400%",
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      textRefs.forEach((ref, index) => {
        if (index > 0) {
          // First move the container
          tl.to(containerRef.current, {
            x: index % 2 === 0 ? "5%" : "70%",
            duration: 1,
            ease: "power1.inOut",
          });

          // Then fade in the new text
          tl.to(textRefs[index - 1].current, { opacity: 0, duration: 1 });
          tl.to(textRefs[index].current, { opacity: 1, duration: 1 }, "-=0.5");
        }
      });

      // Reset x position after animation ends
      tl.to(containerRef.current, {
        x: 0, // reset to original position
        duration: 1,
        ease: "power1.inOut",
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((instance) => instance.kill());
      };
    }
  }, []);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        {" "}
        {/* Center vertically and horizontally */}
        <div ref={containerRef} className="p-10 flex" style={{ width: "100%" }}>
          <div className="w-[300vw]">
            {" "}
            {/* Large width for horizontal scroll */}
            <h1 className="text-black text-7xl font-normal font-walbaum leading-tight">
              The
              <br />
              OnePack
            </h1>
            <div className="relative mt-5 w-96 h-96">
              <p
                ref={textRefs[0]}
                className="absolute inset-0 text-2xl leading-relaxed text-justify"
              >
                We believe your wellness routine should energize your mornings,
                sustain you throughout the day, and restore your nights.
              </p>
              <p
                ref={textRefs[1]}
                className="absolute inset-0 text-2xl leading-relaxed text-justify packets-1"
              >
                We believe your wellness routine should energize your mornings,
                sustain you throughout the day, and restore your nights.
                <br />
                <br />
                Our AM formula is crafted to kickstart your day with essential
                vitamins and a natural energy boost.
              </p>
              <p
                ref={textRefs[2]}
                className="absolute inset-0 text-2xl leading-relaxed text-justify packets-2"
              >
                We believe your wellness routine should energize your mornings,
                sustain you throughout the day, and restore your nights.
                <br />
                <br />
                Our Midday Replenish formula helps refuel and recharge you,
                keeping you balanced and focused when you need it most.
              </p>
              <p
                ref={textRefs[3]}
                className="absolute inset-0 text-2xl leading-relaxed text-justify packets-3"
              >
                We believe your wellness routine should energize your mornings,
                sustain you throughout the day, and restore your nights.
                <br />
                <br />
                When it’s time to unwind, our PM formula promotes restful sleep
                and nighttime recovery, ensuring you wake up refreshed and ready
                to take on the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-[400vh]"></div>
    </> 
  );
}
