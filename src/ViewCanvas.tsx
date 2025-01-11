// ViewCanvas.tsx

import { Canvas } from "@react-three/fiber";
import React from "react";
import Packet from "./Packet";
import { Environment, Float } from "@react-three/drei";

type Props = {};

const ViewCanvas: React.FC<Props> = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30, // Below text (z-50)
      }}
      gl={{
        antialias: true,
        alpha: true, // Enable transparency for the canvas
      }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 1000,
        position: [0, 0, 10],
      }}
      shadows
      dpr={[1, 1.5]}
    >
      {/* Lighting */}
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />

      <Float 
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={1}
      floatingRange={[-0.1,0.1]}
      >
        {/* 3D Model */}
        <Packet scale={0.3} position={[0, 0, 0]} />
      </Float>
    </Canvas>
  );
};

export default ViewCanvas;
