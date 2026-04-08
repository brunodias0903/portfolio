'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function useSceneOffset() {
  const { viewport } = useThree()
  // Em mobile (viewport estreito) centraliza; em desktop desloca para a direita
  return viewport.width < 6 ? 0 : 2.5
}

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null)
  const offsetX = useSceneOffset()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.15
    meshRef.current.rotation.y += 0.004
  })

  return (
    <mesh ref={meshRef} position={[offsetX, 0, 0]}>
      <torusKnotGeometry args={[1, 0.32, 160, 20]} />
      <MeshDistortMaterial
        color="#6366f1"
        distort={0.25}
        speed={2}
        roughness={0.05}
        metalness={0.9}
      />
    </mesh>
  )
}

function RingOrbit() {
  const groupRef = useRef<THREE.Group>(null)
  const offsetX = useSceneOffset()

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.3
  })

  return (
    <group ref={groupRef} position={[offsetX, 0, 0]}>
      <mesh>
        <torusGeometry args={[2.2, 0.015, 8, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.01, 8, 100]} />
        <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={0.3} />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 70 }}>
      <color attach="background" args={['#0a0a0a']} />
      <ambientLight intensity={0.15} />
      <pointLight position={[-5, 5, 5]} intensity={60} color="#6366f1" />
      <pointLight position={[5, -5, -5]} intensity={30} color="#06b6d4" />
      <pointLight position={[0, 10, 0]} intensity={20} color="#ffffff" />
      <Stars
        radius={120}
        depth={60}
        count={4000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />
      <TorusKnot />
      <RingOrbit />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  )
}
