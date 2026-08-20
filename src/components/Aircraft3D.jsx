import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

function Aircraft3D() {
  return (
    <Canvas style={{ height: "500px" }}>

      <ambientLight />

      <Box />

      <OrbitControls />

    </Canvas>
  );
}

export default Aircraft3D;