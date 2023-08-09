import { Canvas } from '@react-three/fiber'
import ReactLogo from './react/ReactLogo'
import { useState } from 'react'

export default function Details({ theme }: { theme: string }) {
    const [rotation, setRotation] = useState(false)
    return (
        <>
            <div>
                <Canvas className='hidden sm:flex' style={{ width: '100%', height: '300px', cursor: 'pointer' }}
                    onClick={() => setRotation(!rotation)}>
                    <ambientLight color={'#fff'} intensity={10} />
                    {theme === 'dark' ?
                        <pointLight position={[2, 2, 2]} color={'#fff'} intensity={90} /> :
                        <pointLight position={[2, 2, 2]} color={'#00f'} intensity={120} />
                    }

                    <mesh>
                        <ReactLogo rotation={rotation} />
                    </mesh>
                </Canvas>
            </div>
        </>
    )
}
