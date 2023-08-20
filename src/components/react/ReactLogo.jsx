import { useRef, useEffect } from 'react'
import Ball from './Ball'
import Ring2D from './Ring'

export default function ReactLogo({ rotation, theme }) {
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
            <Ring2D color={theme==='dark'?'#002':'#5b5b5b'} rotateZ={0.5} />
            <Ring2D color={theme==='dark'?'#002':'#5b5b5b'} rotateZ={-0.5} />
            <Ring2D color={theme==='dark'?'#002':'#5b5b5b'} rotateZ={4.7} />
            <Ball color={theme==='dark'?'#002':'#5b5b5b'} />
        </mesh>
    )
}