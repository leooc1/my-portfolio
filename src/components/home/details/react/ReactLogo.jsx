import { useRef, useEffect } from 'react'
import Ring3D from './Ring3D'
import Ball from './Ball'
import Ring2D from './Ring2D'

export default function ReactLogo({type}) {
    const meshRef = useRef()
    useEffect(() => {
        const rotate = setInterval(() => {
            meshRef.current.rotation.x += 0.05
            meshRef.current.rotation.y += 0.05
        })
        setTimeout(() => {
            meshRef.current.rotation.x = 0
            meshRef.current.rotation.y = 0
            clearInterval(rotate)
        }
        , 400)
    }, [type])
    
    

    return (
        <mesh ref={meshRef} scale={1.8}>
            {type?
                <>
                    <Ring2D color='#fff' rotateZ={0.5} />
                    <Ring2D color='#fff' rotateZ={-0.5} />
                    <Ring2D color='#fff' rotateZ={4.7} />
                </> :
                <>
                    <Ring3D color='#fff' rotateX={4.3} rotateY={0.8} />
                    <Ring3D color='#fff' rotateX={-2.0} rotateY={2.3} />
                    <Ring3D color='#fff' rotateX={1.9} rotateY={0} />
                </>
            }
            < Ball color='#fff' />
        </mesh>
    )
}