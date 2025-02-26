"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Information() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null); // We'll use this as the scroll trigger and for background changes.
  const textRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (
      sectionRef.current &&
      containerRef.current &&
      textRefs.every((ref) => ref.current)
    ) {
      // Initially, show only the first paragraph.
      gsap.set(textRefs[0].current, { opacity: 1 });
      gsap.set(
        textRefs.slice(1).map((ref) => ref.current),
        { opacity: 0 }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center+=50 center",
          end: "+=1000%", // Increased scroll distance to slow down the animation
          scrub: 5, // 2-second delay for a smoother (and slower) progression
          pin: true,
          markers: false,
        },
      });

      textRefs.forEach((ref, index) => {
        if (index > 0) {
          // Animate the container's horizontal position.
          tl.to(containerRef.current, {
            x: index % 2 === 0 ? "5%" : "70%",
            duration: 1,
            ease: "power1.inOut",
          });

          // Fade out the previous text and fade in the new text.
          tl.to(textRefs[index - 1].current, { opacity: 0, duration: 1 });
          tl.to(textRefs[index].current, { opacity: 1, duration: 1 }, "-=0.5");

          // Background transitions based on which text is active.
          if (index === 1) {
            // AM Pack: Fade in the AM gradient and then hold for 2 seconds.
            tl.to(
              sectionRef.current,
              {
                background:
                  "conic-gradient(at right, #374151, #f43f5e, #fb923c)",
                color: "white",
                duration: 1,
                ease: "power1.inOut",
              },
              "-=0.5"
            );
            tl.to(sectionRef.current, {
              // Hold the AM background.
              background: "conic-gradient(at right, #374151, #f43f5e, #fb923c)",
              duration: 2,
              ease: "none",
            });
          } else if (index === 2) {
            // Replenish Pack: Fade in the Replenish gradient and hold for 2 seconds.
            tl.to(
              sectionRef.current,
              {
                background:
                  "conic-gradient(at top right, #86efac, #fcd34d, #f9a8d4)",
                color: "black",
                duration: 1,
                ease: "power1.inOut",
              },
              "-=0.5"
            );
            tl.to(sectionRef.current, {
              background:
                "conic-gradient(at top right, #86efac, #fcd34d, #f9a8d4)",
              duration: 2,
              ease: "none",
            });
          } else if (index === 3) {
            // PM Pack: Transition from the Replenish state to PM.
            // First, quickly fade into a neutral solid color as a bridge.
            tl.to(
              sectionRef.current,
              {
                background: "#0f172a",
                duration: 0.5,
                ease: "power1.inOut",
              },
              "-=0.5"
            );
            // Then fade into the PM gradient.
            tl.to(
              sectionRef.current,
              {
                background:
                  "conic-gradient(at bottom left, #0f172a, #1e1a78, #0f172a)",
                color: "white",
                duration: 1,
                ease: "power1.inOut",
              },
              "-=0.3"
            );
            // Hold the PM background for 2 seconds.
            tl.to(sectionRef.current, {
              background:
                "conic-gradient(at bottom left, #0f172a, #1e1a78, #0f172a)",
              duration: 2,
              ease: "none",
            });
          }
        }
      });

      // Reset the container's x-position.
      tl.to(containerRef.current, {
        x: 0,
        duration: 1,
        ease: "power1.inOut",
      });

      // Final transition: smoothly change the background to "#f7f7f7".
      tl.to(
        sectionRef.current,
        {
          background: "#f7f7f7",
          color: "black",
          duration: 2,
          ease: "power1.inOut",
        },
        "-=0.5"
      );

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((instance) => instance.kill());
      };
    }
  }, []);

  return (
    <>
      <section
        ref={sectionRef} // The entire section is the scroll trigger.
        className="second-hero-information min-h-screen flex items-center justify-center text-bold"
      >
        <div ref={containerRef} className="p-10 flex" style={{ width: "100%" }}>
          <div className="w-[300vw]">
            {/* Large width for horizontal scroll */}
            <h1 className="text-black text-7xl font-normal font-walbaum leading-tight font-bold">
              The
              <br />
              OnePack
            </h1>
            <div className="relative mt-5 w-96 h-96">
              <p
                ref={textRefs[0]}
                className="absolute inset-0 text-2xl leading-relaxed text-justify text-bold"
              >
                We believe your wellness routine should energize your mornings,
                sustain you throughout the day, and restore your nights.
              </p>
              <p
                ref={textRefs[1]}
                className="absolute inset-0 text-2xl leading-relaxed text-justify packets-1 text-bold"
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
                className="absolute inset-0 text-2xl leading-relaxed text-justify packets-2 text-bold"
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
                className="absolute inset-0 text-2xl leading-relaxed text-justify packets-3 text-bold"
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
    </>
  );
}
