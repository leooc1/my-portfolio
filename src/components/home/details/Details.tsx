import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ReactLogo from './react/ReactLogo'
import { useState } from 'react'

export default function Details() {
    const [dimension, setDimension] = useState(true)
    return (
        <>
            <div>
                <Image className='hidden sm:flex md:hidden w-full' src='/leo.png' width={300} height={300} alt='avatar' />
                {/*  */}
                <Canvas className='hidden md:flex' title='Experimente um clique duplo.' style={{ width: '100%', height: '300px', cursor: 'pointer' }}
                    onDoubleClick={() => setDimension(!dimension)}>
                    <OrbitControls />
                    <ambientLight color={'#fff'} />
                    <pointLight position={[3, 3, 8]} intensity={200} color={'#00f'} />
                    <pointLight position={[-3, -3, -8]} intensity={200} color={'#00f'} />
                    <mesh>
                        <ReactLogo type={dimension} />
                    </mesh>
                </Canvas>
                {/*  */}
            </div>
        </>
    )
}
