"use client";

import { MeshDistortMaterial, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function useSceneOffset() {
  const { viewport } = useThree();
  return viewport.width < 6 ? 0 : 2.5;
}

function AccretionDisk() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.9;
  });

  const rings: {
    radius: number;
    tube: number;
    color: string;
    intensity: number;
  }[] = [
    { radius: 1.05, tube: 0.055, color: "#e0f2fe", intensity: 2.2 },
    { radius: 1.28, tube: 0.042, color: "#06b6d4", intensity: 1.9 },
    { radius: 1.55, tube: 0.03, color: "#818cf8", intensity: 1.3 },
    { radius: 1.9, tube: 0.02, color: "#6366f1", intensity: 0.9 },
    { radius: 2.3, tube: 0.011, color: "#6366f1", intensity: 0.4 },
  ];

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[ring.radius, ring.tube, 8, 256]} />
          <meshStandardMaterial
            color={ring.color}
            emissive={ring.color}
            emissiveIntensity={ring.intensity}
          />
        </mesh>
      ))}
    </group>
  );
}

function BlackHole() {
  const offsetX = useSceneOffset();
  const blackHoleRef = useRef<THREE.Group>(null);
  const baseTilt = 0.28;

  useFrame((state, delta) => {
    if (!blackHoleRef.current) return;
    const t = state.clock.elapsedTime;
    blackHoleRef.current.rotation.x = baseTilt + Math.sin(t * 0.25) * 0.03;
    blackHoleRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={blackHoleRef} position={[offsetX, 0, 0]} rotation={[baseTilt, 0, 0]}>
      {/* Gravitational lensing atmosphere */}
      <mesh>
        <sphereGeometry args={[1.18, 64, 64]} />
        <MeshDistortMaterial
          color="#000510"
          distort={0.1}
          speed={1.5}
          transparent
          opacity={0.65}
          roughness={0}
          metalness={0}
        />
      </mesh>
      {/* Event horizon */}
      <mesh>
        <sphereGeometry args={[0.88, 64, 64]} />
        <meshStandardMaterial color="#000000" roughness={1} />
      </mesh>
      {/* Photon ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.93, 0.016, 8, 256]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={4}
        />
      </mesh>
      <AccretionDisk />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 70 }}>
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.05} />
      <pointLight position={[-4, 4, 4]} intensity={80} color="#6366f1" />
      <pointLight position={[4, -4, -4]} intensity={40} color="#06b6d4" />
      <pointLight position={[0, 6, 2]} intensity={25} color="#818cf8" />
      <Stars
        radius={120}
        depth={60}
        count={5000}
        factor={3}
        saturation={0}
        fade
        speed={0.12}
      />
      <BlackHole />
    </Canvas>
  );
}
