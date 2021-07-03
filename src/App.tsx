import React from 'react';
import { Canvas } from "react-three-fiber";
import { Circle } from "./components/Circle";
import { Background } from "./components/Background";
import { ZERO3 } from "./constants";
import './App.css';

function App() {
  return (
    <div className="App">
        <Canvas>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            <Background/>
            <Circle position={ZERO3}
                    scale={0.2}
            />
        </Canvas>
    </div>
  );
}

export default App;
