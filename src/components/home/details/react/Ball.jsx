export default function Ball({color}){
    return(
        <mesh >
            <sphereGeometry args={[0.33]}/>
            {/* <meshStandardMaterial color={color} metalness={3} roughness={0.8}/> */}
            <meshStandardMaterial color={color} metalness={7} roughness={0.6}/>
        </mesh>
    )
}