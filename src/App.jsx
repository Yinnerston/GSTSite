import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const Scene = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.y += 0.02;
  });

  return (
    <>
      <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
        <meshNormalMaterial />
      </Box>
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
  <div className="App">
  <div className="appHeaderPadding"></div>
  <AppHeader />
  <main className="appBody">
    <section className="homepageMain">
      <Canvas className="homepageMainCanvas" camera={{ fov: 70, position: [0, 0, 3] }}>
        <OrbitControls />
        <Scene />
      </Canvas>
      <div className="homepageHeadingText">
        <h1>Heading here</h1>
      </div>
    </section>
    <article className="homepageMissionStatement">
      <section className="homepageMissionStatementHeadings">
        <h3>Our People</h3>
        <h3>Our Events</h3>
        <h3>Out Stuff</h3>
      </section>
      <section className="homepageMissionStatementBodies">
        <p>Test 1</p>
        <p>Test 1</p>
        <p>Test 1</p>
      </section>
    </article>
  </main>
    <AppFooter />
</div>

);
};

export default App;
