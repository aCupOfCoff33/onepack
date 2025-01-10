// PlasticWrapper.tsx

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/scene.gltf");

const wrapperTextures = {
  base: "/textures/base.png",
};

const plasticMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.4, // Smooth plastic appearance
  metalness: 0.05, // Slight metallic shine
  transparent: false, // Fully opaque
  opacity: 1, // Fully opaque
  color: "#ffffff",
});

export type PlasticWrapperProps = {
  texture?: keyof typeof wrapperTextures; // Dynamic wrapper textures
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

export function PlasticWrapper({
  texture = "base",
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  ...props
}: PlasticWrapperProps) {
  const { nodes } = useGLTF("/scene.gltf");

  const textures = useTexture(wrapperTextures);

  // Fix flipped textures for proper orientation
  Object.values(textures).forEach((tex) => {
    tex.flipY = false;
  });

  const wrapperTexture = textures[texture];

  return (
    <group {...props} dispose={null} position={position} scale={scale} rotation={rotation}>
      {/* Base Plastic Mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.pCube1_lambert2_0 as THREE.Mesh).geometry}
        material={plasticMaterial}
      />
      {/* Texture Layer with Polygon Offset */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.pCube1_lambert2_0 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial
          map={wrapperTexture}
          roughness={0.3}
          transparent={false} // Ensure the texture is opaque
          polygonOffset={true} // Enable polygon offset to prevent z-fighting
          polygonOffsetFactor={-1} // Negative value to move towards camera
          polygonOffsetUnits={-1}  // Negative value to move towards camera
        />
      </mesh>
    </group>
  );
}

export default PlasticWrapper;