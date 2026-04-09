"use client";

import { MeshDistortMaterial, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function useSceneOffset() {
  const { viewport } = useThree();
  return viewport.width < 6 ? 0 : 2.5;
}

function AccretionDisk({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * (isMobile ? 0.6 : 0.9);
  });

  const rings: { radius: number; tube: number; color: string; intensity: number }[] = isMobile
    ? [
        { radius: 1.05, tube: 0.055, color: "#e0f2fe", intensity: 2.2 },
        { radius: 1.28, tube: 0.042, color: "#06b6d4", intensity: 1.9 },
        { radius: 1.55, tube: 0.03,  color: "#818cf8", intensity: 1.3 },
      ]
    : [
        { radius: 1.05, tube: 0.055, color: "#e0f2fe", intensity: 2.2 },
        { radius: 1.28, tube: 0.042, color: "#06b6d4", intensity: 1.9 },
        { radius: 1.55, tube: 0.03,  color: "#818cf8", intensity: 1.3 },
        { radius: 1.9,  tube: 0.02,  color: "#6366f1", intensity: 0.9 },
        { radius: 2.3,  tube: 0.011, color: "#6366f1", intensity: 0.4 },
      ];

  const torusSegments = isMobile ? 128 : 256;

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[ring.radius, ring.tube, 8, torusSegments]} />
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

function BlackHole({ isMobile }: { isMobile: boolean }) {
  const offsetX = useSceneOffset();
  const blackHoleRef = useRef<THREE.Group>(null);
  const baseTilt = 0.28;
  const elapsed = useRef(0);
  const sphereSegments = isMobile ? 32 : 64;
  useFrame((_, delta) => {
    if (!blackHoleRef.current) return;
    elapsed.current += delta;
    blackHoleRef.current.rotation.x = baseTilt + Math.sin(elapsed.current * 0.25) * 0.03;
    blackHoleRef.current.rotation.y += delta * 0.2;
    if (!isMobile) {
      const t = elapsed.current;
      blackHoleRef.current.position.x = offsetX + Math.sin(t * 0.17) * 1.1 + Math.sin(t * 0.07) * 0.5;
      blackHoleRef.current.position.y = Math.sin(t * 0.13) * 0.7 + Math.cos(t * 0.09) * 0.4;
    }
  });

  return (
    <group ref={blackHoleRef} position={[offsetX, 0, 0]} rotation={[baseTilt, 0, 0]}>
      {/* Gravitational lensing atmosphere */}
      <mesh>
        <sphereGeometry args={[1.18, sphereSegments, sphereSegments]} />
        {isMobile ? (
          <meshStandardMaterial
            color="#000510"
            transparent
            opacity={0.65}
            roughness={0}
            metalness={0}
          />
        ) : (
          <MeshDistortMaterial
            color="#000510"
            distort={0.1}
            speed={1.5}
            transparent
            opacity={0.65}
            roughness={0}
            metalness={0}
          />
        )}
      </mesh>
      {/* Event horizon */}
      <mesh>
        <sphereGeometry args={[0.88, sphereSegments, sphereSegments]} />
        <meshStandardMaterial color="#000000" roughness={1} />
      </mesh>
      {/* Photon ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.93, 0.016, 8, isMobile ? 128 : 256]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={4}
        />
      </mesh>
      <AccretionDisk isMobile={isMobile} />
    </group>
  );
}

export default function HeroScene({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 70 }}
      dpr={isMobile ? [1, 1] : [1, 2]}
      performance={{ min: 0.5 }}
    >
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.05} />
      <pointLight position={[-4, 4, 4]} intensity={isMobile ? 60 : 80} color="#6366f1" />
      {!isMobile && (
        <>
          <pointLight position={[4, -4, -4]} intensity={40} color="#06b6d4" />
          <pointLight position={[0, 6, 2]} intensity={25} color="#818cf8" />
        </>
      )}
      <Stars
        radius={isMobile ? 80 : 120}
        depth={isMobile ? 40 : 60}
        count={isMobile ? 1500 : 5000}
        factor={3}
        saturation={0}
        fade
        speed={0.12}
      />
      <BlackHole isMobile={isMobile} />
    </Canvas>
  );
}
