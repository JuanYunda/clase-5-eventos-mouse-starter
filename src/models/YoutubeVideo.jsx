import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import YouTube from 'react-youtube';

export default function YoutubeVideo(props) {
  const meshRef = useRef();
  const videoId = 'FXlE4EHm1lw';

  useFrame(() => {
    meshRef.current.material.map.needsUpdate = true;
  });

  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef}>
        <planeBufferGeometry args={[16, 9]} />
        <meshBasicMaterial map={new THREE.Texture()} />
        <Html style={{ width: '100%', height: '100%' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <YouTube videoId={videoId} />
          </div>
        </Html>
      </mesh>
    </group>
  );
}
