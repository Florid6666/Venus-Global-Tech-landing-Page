import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveEarthGlobe() {
  const globeRef = useRef();
  const pinsRef = useRef();

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Outer Wireframe Tech Globe */}
      <mesh ref={globeRef} scale={2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#1E293B"
          wireframe
          transparent
          opacity={0.3}
          roughness={0.5}
        />
      </mesh>

      {/* Inner Glowing Core Sphere */}
      <mesh scale={1.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#5B5BF6" transparent opacity={0.12} />
      </mesh>

      {/* Pin 1: Toronto, Canada (approx 43° N, 79° W) */}
      <mesh position={[-0.8, 1.1, 1.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#FF6B4A" />
      </mesh>

      {/* Pin 2: Michigan, USA (approx 42° N, 83° W) */}
      <mesh position={[-1.0, 1.0, 1.1]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color="#8B5CF6" />
      </mesh>

      {/* Pin 3: India Hub (approx 19° N, 72° E) */}
      <mesh position={[1.4, 0.5, -0.8]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#2EE6A6" />
      </mesh>

      {/* Orbit Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]} scale={2.6}>
        <torusGeometry args={[1, 0.005, 16, 100]} />
        <meshBasicMaterial color="#7C5CFF" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function Globe3DScene() {
  return (
    <div className="w-full h-[380px] md:h-[480px] relative">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#5B5BF6" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#FF6B4A" />
        
        <InteractiveEarthGlobe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
