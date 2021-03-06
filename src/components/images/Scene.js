/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: OomiShroomi (https://sketchfab.com/OomiShroomi)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/waddle-dee-melee-7d90866d337b42fab5659a13898c6755
title: Waddle Dee (Melee)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} />
        <mesh geometry={nodes.Object_3.geometry} material={nodes.Object_3.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
