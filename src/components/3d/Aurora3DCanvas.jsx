import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

function SwirlingAuroraOrb() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#7C5CFF"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.6}
          wireframe={false}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function Aurora3DCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50 overflow-hidden">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#FF6B4A" />
        <SwirlingAuroraOrb />
      </Canvas>
    </div>
  );
}
