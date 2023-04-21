import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Banana from './models/Banana'
import Lemon from './models/Lemon'
import Hamburguer from './models/Hamburguer'
import Video from './models/Video'
import Imagenes from './models/Imagenes'
import YoutubeVideo from './models/YoutubeVideo'

export default function Experience() {

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow shadow-normalBias={ 0.04 } position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Sky />
        {/*<Banana position-x = {-1} scale={0.1}/>
        <Lemon position-x = {1} scale={0.1}/>
        <Hamburguer scale={0.08}/>*/}
        <Video position-z = {-10}/>
        <Imagenes rotation={[0,Math.PI/2,0]} position-x = {-6.4} position-z={-6.4}/>
        <YoutubeVideo/>
    </>
}