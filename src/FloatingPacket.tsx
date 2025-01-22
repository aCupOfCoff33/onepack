"use client";

import { Float } from "@react-three/drei";
import React, { forwardRef } from "react";
import Packet, { PlasticWrapperProps } from "./Packet";
import { Group } from "three";

type FloatingPacketProps = {
  packet?: PlasticWrapperProps["texture"]; // Packet texture
  floatSpeed?: number; // Speed of floating animation
  rotationIntensity?: number; // Intensity of rotation animation
  floatIntensity?: number; // Intensity of floating animation
  floatingRange?: [number, number]; // Range of floating movement
  children?: React.ReactNode; // Optional children to render inside Float
};

const FloatingPacket = forwardRef<Group, FloatingPacketProps>(
  (
    {
      packet = "base", // Default packet texture
      floatSpeed = 2, // Default float speed
      rotationIntensity = 0.1, // Default rotation intensity
      floatIntensity = 1, // Default float intensity
      floatingRange = [-0.1, 0.1], // Default floating range
      children,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          {/* 3D Model */}
          <Packet texture={packet} scale={0.3} position={[0, 0, 0]} />
        </Float>
      </group>
    );
  }
);

FloatingPacket.displayName = "FloatingPacket";

export default FloatingPacket;
