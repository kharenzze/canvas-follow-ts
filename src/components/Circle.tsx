import React from 'react'
import { MeshProps } from "@react-three/fiber";
import { Mesh } from "three"

const Circle_: React.ForwardRefRenderFunction<Mesh, MeshProps> = (props, ref) => {
    return (
        <mesh {...props} ref={ref}>
            <circleGeometry args={[1, 40]}/>
            <meshStandardMaterial color={'orange'} />
        </mesh>
    )
}

export const Circle = React.forwardRef(Circle_)
