import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/scene.gltf");

const wrapperTextures = {
  base: "/textures/base.png",
  base2: "/textures/base2.png",
  base3: "/textures/base3.png",
};

const plasticMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.4, // Smooth plastic appearance
  metalness: 0.05, // Slight metallic shine
  transparent: false,
  opacity: 1,
  color: "#ffffff",
});

export type PlasticWrapperProps = {
  texture?: keyof typeof wrapperTextures; // "base" or other keys in wrapperTextures
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
  const { nodes } = useGLTF("/scene.gltf") as any;

  const textures = useTexture(wrapperTextures);

  // Fix flipped textures if needed
  Object.values(textures).forEach((tex: THREE.Texture) => {
    tex.flipY = false;
  });

  const wrapperTexture = textures[texture];

  // Fallback materials to avoid missing texture errors
  const fallbackMaterial = new THREE.MeshStandardMaterial({ color: "#aaaaaa" });

  return (
    <group
      {...props}
      dispose={null}
      position={position}
      scale={scale}
      rotation={rotation}
    >
      {/* Base Plastic Mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube1_lambert2_0.geometry}
        material={plasticMaterial}
      />
      {/* Texture Overlay */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube1_lambert2_0.geometry}
      >
        <meshStandardMaterial
          map={wrapperTexture || null} // Avoid null map errors
          roughness={0.3}
          polygonOffset
          polygonOffsetFactor={-1}
          polygonOffsetUnits={-1}
        />
      </mesh>
    </group>
  );
}

export default PlasticWrapper;