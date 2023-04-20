import { useState } from 'react';
import { TextureLoader } from 'three';

export default function Imagenes(props) {
  const [texture, setTexture] = useState(
    new TextureLoader().load('/static/image1.jpg')
  );

  const onHandleImageClick = () => {
    const newTexture = new TextureLoader().load('/static/image2.jpg');
    // carga la imagen 2
    setTexture(newTexture);
  };

  return (
    <group {...props}>
      <mesh>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        onPointerUp={onHandleImageClick}
        // ajusta la posición de la imagen para que esté en el centro del plano
        position={[0, 0, 0.01]}
      >
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial transparent opacity={0} color="white" />
      </mesh>
    </group>
  );
}
