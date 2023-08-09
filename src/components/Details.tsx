import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import ReactLogo from './react/ReactLogo'
import { useState } from 'react'

export default function Details() {
    const [dimension, setDimension] = useState(true)
    return (
        <>
            <div>
                <Canvas className='hidden sm:flex' style={{ width: '100%', height: '300px', cursor: 'pointer' }}
                    onClick={() => setDimension(!dimension)}>
                    <ambientLight color={'#fff'} intensity={100}/>
                    <mesh>
                        <ReactLogo type={dimension} />  
                    </mesh>
                </Canvas>
            </div>
        </>
    )
}
