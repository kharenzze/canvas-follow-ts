import React from 'react'
import { MeshProps } from "react-three-fiber";

const Circle_: React.ForwardRefRenderFunction<MeshProps, MeshProps> = (props, ref) => {
    return (
        <mesh {...props} ref={ref}>
            <circleGeometry args={[1, 40]}/>
            <meshStandardMaterial color={'orange'} />
        </mesh>
    )
}

export const Circle = React.forwardRef(Circle_)
