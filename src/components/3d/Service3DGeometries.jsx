import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial } from '@react-three/drei';

function RotatingGeometry({ type }) {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.2}>
        {type === 'ai' && <icosahedronGeometry args={[1, 1]} />}
        {type === 'software' && <torusKnotGeometry args={[0.7, 0.25, 64, 16]} />}
        {type === 'cloud' && <dodecahedronGeometry args={[0.9]} />}
        {type === 'marketing' && <torusGeometry args={[0.8, 0.2, 16, 32]} />}
        {type === 'esg' && <sphereGeometry args={[0.9, 16, 16]} />}
        {type === 'compliance' && <octahedronGeometry args={[1]} />}

        <MeshWobbleMaterial
          color={
            type === 'ai' ? '#5B5BF6' :
            type === 'software' ? '#06B6D4' :
            type === 'cloud' ? '#8B5CF6' :
            type === 'marketing' ? '#FF6B4A' :
            type === 'esg' ? '#2EE6A6' : '#7C5CFF'
          }
          wireframe
          factor={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function Service3DGeometries({ type = 'ai' }) {
  return (
    <div className="w-16 h-16 relative">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <RotatingGeometry type={type} />
      </Canvas>
    </div>
  );
}
