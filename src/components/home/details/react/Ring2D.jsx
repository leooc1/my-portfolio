import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Ring2D({color, rotateZ}){
    const ringRef = useRef()

    useFrame(()=>{
        ringRef.current.rotation.z = rotateZ
    })

    return(
        <mesh ref={ringRef} scale={[0.7,1.4,0.9]}>
            <torusGeometry args={[1,0.1,64,64]}/>
            {/* <meshStandardMaterial color={color} metalness={3} roughness={0.8}/> */}
            <meshStandardMaterial color={color} metalness={7} roughness={0.4}/>
        </mesh>
    )
}