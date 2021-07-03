import React, { useCallback, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { Circle } from "./components/Circle"
import { Background } from "./components/Background"
import { ZERO3 } from "./constants"
import './App.css'

function App() {
  const [target, setTarget] = useState(() => ZERO3)
  const onClick = useCallback(evt => {
    setTarget(evt.point)
  }, [])
  return (
    <div className="App">
      <Canvas>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        <Background onClick={onClick}/>
        <Circle position={ZERO3}
                scale={0.2}
        />
      </Canvas>
    </div>
  )
}

export default App
