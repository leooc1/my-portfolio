export default function Ball({color}){
    return(
        <mesh >
            <sphereGeometry args={[0.33]}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}