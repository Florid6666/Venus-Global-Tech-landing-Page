import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Central Quantum AI Core with Glowing Layers
function QuantumCore() {
  const outerCoreRef = useRef();
  const innerOrbRef = useRef();
  const wireframeCageRef = useRef();

  useFrame((_, delta) => {
    if (outerCoreRef.current) {
      outerCoreRef.current.rotation.x += delta * 0.15;
      outerCoreRef.current.rotation.y += delta * 0.25;
    }
    if (innerOrbRef.current) {
      innerOrbRef.current.rotation.y -= delta * 0.3;
    }
    if (wireframeCageRef.current) {
      wireframeCageRef.current.rotation.x -= delta * 0.1;
      wireframeCageRef.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group>
      {/* Outer Polyhedral Glass Shell */}
      <mesh ref={outerCoreRef} scale={1.25}>
        <icosahedronGeometry args={[1, 2]} />
        <meshPhysicalMaterial
          color="#6366F1"
          emissive="#3730A3"
          emissiveIntensity={0.2}
          roughness={0.15}
          metalness={0.85}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.4}
          thickness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Inner Radiant Energy Orb */}
      <mesh ref={innerOrbRef} scale={0.78}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#5B5BF6"
          emissive="#8B5CF6"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>

      {/* Floating Geodesic Wireframe Lattice */}
      <mesh ref={wireframeCageRef} scale={1.60}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#7C5CFF"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>
    </group>
  );
}

// Concentric Holographic Orbital Rings (Scaled to fit frustum without clipping)
function HolographicOrbitalRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((_, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.2;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.25;
    if (ring3Ref.current) ring3Ref.current.rotation.y -= delta * 0.18;
  });

  return (
    <group>
      {/* Ring 1: Primary Cyan AI Loop */}
      <group ref={ring1Ref} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <mesh scale={1.9}>
          <torusGeometry args={[1, 0.009, 16, 100]} />
          <meshStandardMaterial
            color="#2EE6A6"
            emissive="#2EE6A6"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Orbital Node 1 */}
        <mesh position={[1.9, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#2EE6A6" emissive="#2EE6A6" emissiveIntensity={1.5} />
        </mesh>
      </group>

      {/* Ring 2: Secondary Indigo Compliance Loop */}
      <group ref={ring2Ref} rotation={[-Math.PI / 3, 0, Math.PI / 6]}>
        <mesh scale={2.4}>
          <torusGeometry args={[1, 0.007, 16, 100]} />
          <meshStandardMaterial
            color="#5B5BF6"
            emissive="#5B5BF6"
            emissiveIntensity={0.9}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
        {/* Orbital Node 2 */}
        <mesh position={[0, 2.4, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={1.5} />
        </mesh>
      </group>

      {/* Ring 3: Coral Enterprise Scaling Loop */}
      <group ref={ring3Ref} rotation={[Math.PI / 4, -Math.PI / 3, Math.PI / 3]}>
        <mesh scale={2.85}>
          <torusGeometry args={[1, 0.006, 16, 100]} />
          <meshStandardMaterial
            color="#FF6B4A"
            emissive="#FF6B4A"
            emissiveIntensity={0.75}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
        {/* Orbital Node 3 */}
        <mesh position={[0, 0, 2.85]}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshStandardMaterial color="#FF6B4A" emissive="#FF6B4A" emissiveIntensity={1.5} />
        </mesh>
      </group>
    </group>
  );
}

// Ambient Starfield & Floating Data Swarm (Bounded radius)
function DataSwarmParticles({ count = 120 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#5B5BF6'),
      new THREE.Color('#8B5CF6'),
      new THREE.Color('#2EE6A6'),
      new THREE.Color('#FF6B4A'),
      new THREE.Color('#A5B4FC'),
    ];

    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 1.4; // Kept within 3.8 max boundary
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  );
}

// Parallax Container reacting smoothly to cursor movement
function InteractiveParallaxScene() {
  const sceneGroupRef = useRef();

  useFrame((state) => {
    if (sceneGroupRef.current) {
      const targetRotationY = state.pointer.x * 0.25;
      const targetRotationX = -state.pointer.y * 0.25;

      sceneGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        sceneGroupRef.current.rotation.y,
        targetRotationY,
        0.05
      );
      sceneGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        sceneGroupRef.current.rotation.x,
        targetRotationX,
        0.05
      );
    }
  });

  return (
    <group ref={sceneGroupRef}>
      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
        <QuantumCore />
        <HolographicOrbitalRings />
      </Float>
      <DataSwarmParticles count={130} />
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-[480px] md:h-[580px] relative overflow-visible">
      {/* Background Soft Glow Aura */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-60 flex items-center justify-center">
        <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-r from-[#5B5BF6]/30 via-[#8B5CF6]/20 to-[#2EE6A6]/20 blur-[75px]"></div>
      </div>

      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 9.2]} fov={45} />
        
        {/* Dynamic Studio Lighting */}
        <ambientLight intensity={0.75} />
        <directionalLight position={[10, 12, 10]} intensity={1.8} color="#A5B4FC" />
        <pointLight position={[-10, -8, -5]} intensity={2.2} color="#2EE6A6" />
        <pointLight position={[8, -10, 5]} intensity={1.8} color="#FF6B4A" />
        <pointLight position={[0, 8, -4]} intensity={2.0} color="#8B5CF6" />

        <InteractiveParallaxScene />
      </Canvas>
    </div>
  );
}
