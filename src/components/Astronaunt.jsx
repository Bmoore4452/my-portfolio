// Astronaut.jsx
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import { useSpring, useMotionValue } from 'motion/react';

export function Astronaut(props) {
    const group = useRef();
    const [mixer, setMixer] = useState(null);

    const gltf = useLoader(
        GLTFLoader,
        '/models/tenhun_falling_spaceman_fanart.glb'
    );

    // Setup animation
    useEffect(() => {
        if (gltf.animations && gltf.animations.length > 0) {
            const mixerInstance = new AnimationMixer(gltf.scene);
            mixerInstance.clipAction(gltf.animations[0], group.current).play();
            setMixer(mixerInstance);
        }
    }, [gltf]);

    // Animate position Y with spring
    const yMotion = useMotionValue(5);
    const ySpring = useSpring(yMotion, { damping: 30 });
    useEffect(() => {
        ySpring.set(-1);
    }, [ySpring]);

    useFrame(() => {
        if (group.current) {
            group.current.position.y = ySpring.get();
        }
        if (mixer) mixer.update(1 / 60); // update animation
    });

    return (
        <primitive
            ref={group}
            object={gltf.scene}
            scale={props.scale || 3}
            position={props.position || [1.3, -1, 0]}
            rotation={[-Math.PI / 2, -0.2, 2.2]}
            dispose={null}
        />
    );
}
