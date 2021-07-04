import React, { useEffect, useRef } from 'react'
import minBy from 'lodash/minBy'
import { MeshProps, useFrame } from "@react-three/fiber"
import { Circle } from "./Circle"
import { Mesh, Vector3 } from "three"
import { ZERO3 } from "../constants"

type CircleRef = React.MutableRefObject<Mesh | null>

const MAX_SPEED = 0.1

const useInit = (circle: CircleRef) => {
  useEffect(() => {
    const c = circle.current
    if (c) {
      c.userData.speed = ZERO3
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
    if (c) {
      const lerpTargetPos = c.position.clone().lerp(target, 0.2)
      const targetSpeed = lerpTargetPos.sub(c.position)
      const dirToTarget = target.clone().sub(c.position).normalize()
      const impulse = dirToTarget.multiplyScalar(0.02)
      const speed = c.userData.speed as Vector3
      speed.add(impulse)
      const l = speed.length()
      if (l > MAX_SPEED) {
        speed.multiplyScalar(MAX_SPEED / l)
      }
      const min = minBy([speed, targetSpeed], s => s.lengthSq())
      c.userData.speed = min
      c.position.add(c.userData.speed)
    }
  })
  useInit(circle)
  return (
    <Circle {...props}
            ref={circle}
    />
  )
}
