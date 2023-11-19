import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/australia-map.glb");
    function rotateAboutPoint(obj, point, axis, theta, pointIsWorld){
      pointIsWorld = (pointIsWorld === undefined)? false : pointIsWorld;
  
      if(pointIsWorld){
          obj.parent.localToWorld(obj.position); // compensate for world coordinate
      }
  
      obj.position.sub(point); // remove the offset
      obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
      obj.position.add(point); // re-add the offset
  
      if(pointIsWorld){
          obj.parent.worldToLocal(obj.position); // undo world coordinates compensation
      }
  
      obj.rotateOnAxis(axis, theta); // rotate the OBJECT
    }
    rotateAboutPoint(gltf.scene.children[0], new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0), 3 * Math.PI / 2, true)

    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
};

const Scene = () => {
    const boxRef = useRef();
    useFrame((state, delta) => {
      boxRef.current.rotation.y += 0.02;
    });
  
    return (
      <>
        <Model />
        <Box ref={boxRef} args={[1, 1, 1]} position={[2.5,0,0]} rotation={[0.5, 0, 0]}>
          <meshNormalMaterial />
        </Box>
        <ambientLight />
      </>
    );
  };

  
export default function CanvasPage()    {
  return (
    <Canvas className="homepageMainCanvas" camera={{ fov: 70, position: [0, 0, 3] }}>
        <OrbitControls />
        <Scene />
    </Canvas>
);
};
