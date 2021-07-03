import React from 'react';
import { Canvas } from "react-three-fiber";
import './App.css';

function App() {
  return (
    <div className="App">
        <Canvas>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
        </Canvas>
    </div>
  );
}

export default App;
