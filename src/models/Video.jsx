import { VideoTexture } from 'three';

export default function Video(props) {
    const video = document.createElement('video');
    video.src = '/static/Kimetsu no Yaiba Opening 3.mkv';
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.pause();

    const videoTexture = new VideoTexture(video);

    const onHandleVid = (event) => {
        video.play(); // reproduce la reproducción del video
    };

    return (
        <group {...props} dispose={null} onPointerUp={onHandleVid}>
            <mesh>
                <planeGeometry args={[12.80, 7.20]} />  
                <meshBasicMaterial map={videoTexture} opacity={0}/>
            </mesh>
        </group>
    );
}
