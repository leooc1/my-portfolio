import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Ring3D({color, rotateX, rotateY}){
    const ringRef = useRef()

    useFrame(()=>{
        ringRef.current.rotation.x = rotateX
        ringRef.current.rotation.y = rotateY
    })

    return(
        <mesh ref={ringRef} >
            <torusGeometry args={[1.5,0.1,64,64]}/>
            {/* <meshStandardMaterial color={color} metalness={3} roughness={0.8}/> */}
            <meshStandardMaterial color={color} metalness={7} roughness={0.4}/>
        </mesh>
    )
}