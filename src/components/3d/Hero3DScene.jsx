import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveCoreMesh({ pointer }) {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
      // Cursor parallax tilt
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.pointer.y * 0.5, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.pointer.x * 0.5, 0.05);
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group>
      {/* Outer Distorted Glass Mesh */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#5B5BF6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>

        {/* Inner Wireframe Cyber Core */}
        <mesh ref={wireframeRef} scale={2.4}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial color="#FF6B4A" wireframe opacity={0.25} transparent />
        </mesh>
      </Float>

      {/* Floating Ambient Particles */}
      <points>
        <sphereGeometry args={[4, 32, 32]} />
        <pointsMaterial size={0.03} color="#7C5CFF" opacity={0.6} transparent />
      </points>
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-[450px] md:h-[550px] relative">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={50} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#8B5CF6" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#FF6B4A" />
        
        <InteractiveCoreMesh />
      </Canvas>
    </div>
  );
}
