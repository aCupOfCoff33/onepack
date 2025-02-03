"use client";
import React, { useRef, useEffect } from "react";
import FloatingPacket from "./FloatingPacket";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  // Keep all existing refs exactly as they were
  const packet1Ref = useRef<Group>(null);
  const packet2Ref = useRef<Group>(null);
  const packet3Ref = useRef<Group>(null);
  const packet1GroupRef = useRef<Group>(null);
  const packet2GroupRef = useRef<Group>(null);
  const rotatingGroupRef = useRef<Group>(null);
  const sceneGroupRef = useRef<Group>(null);

  useEffect(() => {
    // Existing safety check remains unchanged
    if (
      !packet1Ref.current ||
      !packet2Ref.current ||
      !packet3Ref.current ||
      !packet1GroupRef.current ||
      !packet2GroupRef.current ||
      !rotatingGroupRef.current ||
      !sceneGroupRef.current
    ) {
      return;
    }

    // 1) INITIAL POSITIONS - Keep packets 1/2 exactly as they were
    // Packet 1/2 setup remains untouched
    gsap.set(packet1Ref.current.position, { x: -2.1, y: 0, z: 0 });
    gsap.set(packet2Ref.current.position, { x: 1.96, y: 1.25, z: 0 });
    gsap.set(packet3Ref.current.position, { x: 10, y: 0, z: 5 });

    const SIZE_OF_PACKET = 0.6;
    [packet1Ref, packet2Ref, packet3Ref].forEach((packet) => {
      gsap.set(packet.current?.scale ?? {}, {
        x: SIZE_OF_PACKET,
        y: SIZE_OF_PACKET,
        z: SIZE_OF_PACKET,
      });
    });

    // Original rotations preserved for packets 1/2
    gsap.set(packet1Ref.current.rotation, {
      x: Math.PI / 2,
      y: 0,
      z: Math.PI / 2 + Math.PI,
    });
    gsap.set(packet2Ref.current.rotation, {
      x: Math.PI / 2,
      y: 0,
      z: -Math.PI / 2 - Math.PI,
    });
    // Only modify packet3's initial rotation
    gsap.set(packet3Ref.current.rotation, {
      x: -Math.PI,
      y: 0,
      z: Math.PI / 2,
    });

    // 2) INTRO - Keep original packet1/2 animations, only modify packet3
    const introT1 = gsap.timeline({
      defaults: { duration: 1.5, ease: "power2.out" },
    });

    // Preserve original packet1/2 animations
    introT1.from(packet1GroupRef.current.position, { x: -15 }, 0);
    introT1.from(packet1GroupRef.current.rotation, { y: -0.5 }, 0);
    introT1.from(packet1GroupRef.current.scale, { x: 0.5, y: 0.5, z: 0.5 }, 0);

    introT1.from(packet2GroupRef.current.position, { x: 15 }, 0.5);
    introT1.from(packet2GroupRef.current.rotation, { y: 0.5 }, 0.5);
    introT1.from(
      packet2GroupRef.current.scale,
      { x: 0.5, y: 0.5, z: 0.5 },
      0.5
    );

    // Modified ONLY packet3 intro animation
    introT1.from(
      packet3Ref.current.position,
      {
        x: 30, // Start further out to prevent overlap
        z: -20,
        duration: 1.5,
        ease: "power.out",
      },
      0.75
    );
    introT1.from(
      packet3Ref.current.rotation,
      {
        y: Math.PI, // Full spin during entry
        z: Math.PI,
        x: Math.PI,
        duration: 1.8,
      },
      0.75
    );

    introT1.from(packet3Ref.current.scale, { x: 0.6, y: 0.6, z: 0.6 }, 0.5);

    // 3) SCROLL ANIMATION - Keep original packet1/2 animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-hero",
        start: "top top",
        end: "bottom-=200 center",
        endTrigger: ".second-hero",
        scrub: 2,
        markers: false,
      },
    });
    // Preserve original rotating group animation
    timeline.to(rotatingGroupRef.current.rotation, { y: Math.PI });

    /*
    //Actual Animations
    timeline.to(packet2Ref.current.position, { x: -1, y: -0.7, z: -2 }, 0);
    timeline.to(packet2Ref.current.rotation, { x: 0, y: 3, z: -0.3 }, 0);

    timeline.to(packet2Ref.current.position, { x: -1, y: -0.7, z: -2 }, 0);
    timeline.to(packet2Ref.current.rotation, { x: 0, y: 3, z: -0.3 }, 0);

    timeline.to(packet1Ref.current.position, { x: -4.5, y: -0.7, z: -2 }, 0);
    timeline.to(packet1Ref.current.rotation, { x: 0, y: 3, z: -0.3 }, 0);

    // Modified ONLY packet3 scroll animation
    timeline.to(packet3Ref.current.position, { x: 2.75, y: -0.7, z: 2 }, 0);
    timeline.to(packet3Ref.current.rotation, { x: 0, y: 0, z: -0.3 }, 0);
    */
    
    //Fake Ones
    timeline.to(packet2Ref.current.position, { x: -1, y: -0.7, z: -2 }, 0);
    timeline.to(packet2Ref.current.rotation, { x: 0, y: 3, z: 0 }, 0);

    timeline.to(packet2Ref.current.position, { x: -1, y: -0.7, z: -2 }, 0);
    timeline.to(packet2Ref.current.rotation, { x: 0, y: 3, z: 0 }, 0);

    timeline.to(packet1Ref.current.position, { x: -4.5, y: -0.7, z: -2 }, 0);
    timeline.to(packet1Ref.current.rotation, { x: 0, y: 3, z: 0 }, 0);

    // Modified ONLY packet3 scroll animation
    timeline.to(packet3Ref.current.position, { x: 2.75, y: -0.7, z: 2 }, 0);
    timeline.to(packet3Ref.current.rotation, { x: 0, y: 0, z: 0 }, 0);

    gsap.to(sceneGroupRef.current.position, {
      y: 15,
      ease: "power2.in",
      scrollTrigger: {
        trigger: ".second-hero",
        start: "bottom+= 3000 top",
        end: "bottom+=900 top",
        scrub: 1.5,
        markers: false,
      },
    });
  }, []);

  return (
    <group ref={sceneGroupRef}>
      <group ref={rotatingGroupRef}>
        {/* Preserve original group structure */}
        <group ref={packet1GroupRef}>
          <FloatingPacket ref={packet1Ref} packet="base" floatSpeed={1.5} />
        </group>
        <group ref={packet2GroupRef}>
          <FloatingPacket ref={packet2Ref} packet="base2" floatSpeed={1.5} />
        </group>
      </group>
      {/* Keep packet3's group structure */}
      <group>
        <FloatingPacket ref={packet3Ref} packet="base3" floatSpeed={1.5} />
      </group>
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
