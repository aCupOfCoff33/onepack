"use client";
import React, { useRef, useEffect } from "react";
import FloatingPacket from "./FloatingPacket";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const packet1Ref = useRef<Group>(null);
  const packet2Ref = useRef<Group>(null);
  const packet3Ref = useRef<Group>(null);

  const packet1GroupRef = useRef<Group>(null);
  const packet2GroupRef = useRef<Group>(null);

  const rotatingGroupRef = useRef<Group>(null);
  const sceneGroupRef = useRef<Group>(null);

  useEffect(() => {
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

    // 1) INITIAL POSITIONS
    gsap.set(packet1Ref.current.position, { x: -2.1, y: 0, z: 0 });
    gsap.set(packet2Ref.current.position, { x: 1.96, y: 1.25, z: 0 });
    gsap.set(packet3Ref.current.position, { x: -50, y: 0, z: 0 });

    const SIZE_OF_PACKET = 0.6;
    [packet1Ref, packet2Ref, packet3Ref].forEach((packet) => {
      gsap.set(packet.current?.scale ?? {}, {
        x: SIZE_OF_PACKET,
        y: SIZE_OF_PACKET,
        z: SIZE_OF_PACKET,
      });
    });

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
    gsap.set(packet3Ref.current.rotation, {
      x: 0,
      y: Math.PI / 2,
      z: 0,
    });

    // 2) INTRO (slide packets 1 and 2 in)
    const introT1 = gsap.timeline({
      defaults: { duration: 1.5, ease: "power2.out" },
    });

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

    // 3) SCROLL ANIMATION: rotate only rotatingGroupRef
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-hero",
        start: "center+=150 top",
        endTrigger: ".second-hero",
        end: "top+=120 center",
        scrub: 1.5,
        markers: true,
      },
    });

    timeline
      .to(rotatingGroupRef.current.rotation, {
        y: Math.PI,
      })

      // Packet 1 Animation (stay on the left)
      .to(packet1Ref.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      .to(packet1Ref.current.rotation, { x: 0, y: 3, z: -0.3 }, 0)

      // Packet 2 Animation (move further to the right after rotation)
      .to(packet2Ref.current.position, { x: -3, y: -0.7, z: -2 }, 1) // Moves further right (x: 3)
      .to(packet2Ref.current.rotation, { x: 0, y: 3, z: -0.3 }, 0.5);

    // Add independent animations if needed
  }, []);

  return (
    <group ref={sceneGroupRef}>
      <group ref={rotatingGroupRef}>
        <group ref={packet1GroupRef}>
          <FloatingPacket ref={packet1Ref} packet="base" floatSpeed={1.5} />
        </group>
        <group ref={packet2GroupRef}>
          <FloatingPacket ref={packet2Ref} packet="base2" floatSpeed={1.5} />
        </group>
      </group>

      <FloatingPacket ref={packet3Ref} packet="base3" floatSpeed={1.5} />

      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
