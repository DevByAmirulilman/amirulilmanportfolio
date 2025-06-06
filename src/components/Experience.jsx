import React, { useEffect } from 'react';
import { Environment, OrbitControls, PresentationControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Experience() {
  const wolfModel = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-wolf/model.gltf');
  // Create an animation mixer
  const mixer = React.useMemo(() => new THREE.AnimationMixer(wolfModel.scene), [wolfModel.scene]);

  // Get the animation clip you want to play
  useEffect(() => {
    // Find the animation clip by name
    const animationClip = wolfModel.animations.find(clip => clip.name === 'course_cavalier'); // Change this to your desired animation name
    const animationClip2 = wolfModel.animations.find(clip=>clip.name === 'course_loup')
    if (animationClip && animationClip2) {
      // Play the specific animation clip
      mixer.clipAction(animationClip).play();
      mixer.clipAction(animationClip2).play()
    }
  }, [wolfModel.animations, mixer]);

  // Update the mixer on each frame
  useFrame((state, delta) => {
    mixer.update(delta);
    (wolfModel.scene.rotation.y += 0.02)
  });
  return (
    <>
      <Environment preset="forest" />
      <PresentationControls
                  makeDefault
                  polar={[-0.4,0.2]}  //limit rotation for vertical
                  azimuth={[-1,0.75]} //limit rotation for horizontol
                  config={{mass:2,tension:400}}
                  snap={{mass:4,tension:400}}
      >
      <primitive
        object={wolfModel.scene}
        position={[0, -0.99, 0]} // Apply the controlled position values
        //position={[-2.9,0.53,1.2]}
       scale={2.5}
      />
      </PresentationControls>

    </>
  );
}
