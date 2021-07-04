import React, { useEffect, useRef } from 'react'
import { useFrame } from "@react-three/fiber"
import { Circle } from "./Circle"
import { MeshProps } from "@react-three/fiber"
import { Vector3, Mesh } from "three"
import { ZERO3 } from "../constants"

type CircleRef = React.MutableRefObject<Mesh|null>

const MAX_SPEED = 1

const useInit = (circle: CircleRef) => {
  useEffect(() => {
    const c = circle.current
    if (c) {
      c.userData.speed = ZERO3
      c.userData.acceleration = ZERO3
    }
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
