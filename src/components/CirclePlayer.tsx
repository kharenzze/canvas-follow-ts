import React, { useEffect, useRef } from 'react'
import { useFrame } from "@react-three/fiber"
import { Circle } from "./Circle"
import { MeshProps } from "@react-three/fiber"
import { Vector3, Mesh } from "three"
import { ZERO3 } from "../constants"

type CircleRef = React.MutableRefObject<Mesh|null>

const useInit = (circle: CircleRef) => {
  useEffect(() => {
    console.log(circle.current)
    /*
    circle.current.speed = ZERO3
    circle.current.acceleration = ZERO3
     */
  }, [circle])
}

interface ICirclePlayerProps extends MeshProps {
  target: Vector3
}

export const CirclePlayer: React.FC<ICirclePlayerProps> = ({target, ...props}) => {
  const circle: CircleRef = useRef(null)
  useFrame((rootState) => {
    const c = circle.current
    c?.position.lerp(target, 0.05)
  })
  useInit(circle)
  return (
    <Circle {...props}
            ref={circle}
    />
  )
}
