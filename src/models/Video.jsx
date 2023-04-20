import { VideoTexture } from 'three';

export default function Video(props) {
    const video = document.createElement('video');
    video.src = '/static/2023-04-14 18-04-41.mkv';
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
                <planeGeometry args={[16, 8]} />
                <meshBasicMaterial map={videoTexture} />
            </mesh>
        </group>
    );
}
