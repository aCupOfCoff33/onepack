import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const PacketShape = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const packetMaterial = new THREE.MeshPhongMaterial({
      color: 0x1e90ff,
      shininess: 50,
    });

    // Main body of the packet (rectangular prism with rounded edges)
    const bodyGeometry = new THREE.BoxGeometry(0.1, 0.3, 0.02);
    const bodyMesh = new THREE.Mesh(bodyGeometry, packetMaterial);
    scene.add(bodyMesh);

    // Tapered top (flattened sphere for soft top edge)
    const topGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    topGeometry.scale(1, 0.5, 1);
    topGeometry.translate(0, 0.17, 0);
    const topMesh = new THREE.Mesh(topGeometry, packetMaterial);
    scene.add(topMesh);

    // Gusseted bottom (subtle curvature at bottom)
    const bottomGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    bottomGeometry.scale(1, 0.5, 1);
    bottomGeometry.translate(0, -0.17, 0);
    const bottomMesh = new THREE.Mesh(bottomGeometry, packetMaterial);
    scene.add(bottomMesh);

    camera.position.z = 1;

    const animate = () => {
      requestAnimationFrame(animate);
      bodyMesh.rotation.y += 0.01;
      topMesh.rotation.y += 0.01;
      bottomMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default PacketShape;
