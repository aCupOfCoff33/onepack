// ViewCanvas.tsx
import { Canvas } from "@react-three/fiber";
import React from "react";

type ViewCanvasProps = {
  children?: React.ReactNode;
};

const ViewCanvas: React.FC<ViewCanvasProps> = ({ children }) => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      gl={{
        antialias: true,
        alpha: true,
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
      {/* Render the scene passed in as children */}
      {children}

      {/* If you really want the <View> API from @react-three/drei, set it up properly: */}
      {/* <View track={...}>
        <Scene />
      </View> */}
    </Canvas>
  );
};

export default ViewCanvas;