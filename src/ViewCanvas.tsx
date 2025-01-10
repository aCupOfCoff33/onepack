// ViewCanvas.tsx

import { Canvas } from "@react-three/fiber";
import React from "react";
import Packet from "./Packet";

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
      // Make sure alpha is true so the canvas background is transparent
      gl={{ antialias: true, alpha: false }} 
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
      <ambientLight intensity={1.5} />
      <spotLight position={[1, 5, 2]} intensity={2.5} />

      {/* 3D Model */}
      <Packet scale={0.3} position={[0, 0, 0]} />
    </Canvas>
  );
};

export default ViewCanvas;