import { useRef, useEffect } from 'react'
import Ball from './Ball'
import Ring2D from './Ring'

export default function ReactLogo({ rotation }) {
    const meshRef = useRef()
    useEffect(() => {
        let rotate

        if (rotation) {
            rotate = setInterval(() => {
                meshRef.current.rotation.z -= 0.005
            })
        }

        else {
            meshRef.current.rotation.z = 0
            clearInterval(rotate)
        }

        return () => {
            clearInterval(rotate)
        }
    }, [rotation])




    return (
        <mesh ref={meshRef} scale={1.8}>
            <Ring2D color='#000' rotateZ={0.5} />
            <Ring2D color='#000' rotateZ={-0.5} />
            <Ring2D color='#000' rotateZ={4.7} />
            <Ball color='#000' />
        </mesh>
    )
}