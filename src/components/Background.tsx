import { FC } from 'react'
import { MeshProps } from "react-three-fiber";

export const Background: FC<MeshProps> = (props) => {
    return (
        <mesh {...props}>
            <planeGeometry args={[100, 100]}/>
            <meshStandardMaterial color="black" />
        </mesh>
    )
}
