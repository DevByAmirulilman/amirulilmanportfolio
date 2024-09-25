import React, { useEffect, useMemo } from 'react';
import { Environment, OrbitControls, PresentationControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';
import { Suspense } from 'react';

export default function Experience() {
  // Load the wolf model using GLTFLoader
  const wolfModel = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-wolf/model.gltf');

  // Create an animation mixer for the model
  const mixer = useMemo(() => new THREE.AnimationMixer(wolfModel.scene), [wolfModel.scene]);

  useEffect(() => {
    // Load specific animations by name
    const animationClip1 = wolfModel.animations.find(clip => clip.name === 'course_cavalier');
    const animationClip2 = wolfModel.animations.find(clip => clip.name === 'course_loup');
    
    if (animationClip1 && animationClip2) {
      // Play the animations
      mixer.clipAction(animationClip1).play();
      mixer.clipAction(animationClip2).play();
    }

    return () => {
      // Clean up the mixer on unmount
      mixer.stopAllAction();
    };
  }, [wolfModel.animations, mixer]);

  // Update the animation frame
  useFrame((state, delta) => {
    mixer.update(delta);
    wolfModel.scene.rotation.y += 0.02; // Rotate the model on each frame
  });

  // Leva controls for interactive model position adjustment
  const { positionX, positionY, positionZ } = useControls({
    positionX: { value: 0, min: -10, max: 10, step: 0.1 },
    positionY: { value: 0, min: -10, max: 10, step: 0.01 },
    positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
  });

  return (
    <Suspense fallback={null}>
      {/* Environment preset for lighting and reflections */}
      <Environment preset="forest" />
      
      {/* PresentationControls for scene manipulation */}
      <PresentationControls
        makeDefault
        polar={[-0.4, 0.2]}  // Limit vertical rotation
        azimuth={[-1, 0.75]} // Limit horizontal rotation
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        {/* The animated model */}
        <primitive
          object={wolfModel.scene}
          position={[0, -0.99, 2.5]} // Apply controlled position
          scale={2.5}
        />
      </PresentationControls>
    </Suspense>
  );
}
