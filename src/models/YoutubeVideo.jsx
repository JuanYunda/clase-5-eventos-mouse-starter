import { Html } from "@react-three/drei";
import { useRef } from "react";
import { useVideo } from "react-use";

export default function YoutubeVideo(props) {
  const planeRef = useRef();
  const videoUrl = "https://www.youtube.com/embed/uNvaiooJDRA";
  const [video] = useVideo(videoUrl);

  return (
    <group {...props} dispose={null}>
      <mesh ref={planeRef}>
        <planeBufferGeometry args={[16, 9]} />
        <meshBasicMaterial>
          <Html>
            {video && (
              <video
                ref={video.ref}
                autoPlay={true}
                loop
                muted
                crossOrigin="anonymous"
                style={{ width: "100%", height: "100%" }}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            )}
          </Html>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}
