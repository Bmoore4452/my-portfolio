import { Astronaut } from '../components/Astronaunt';
import HeroText from '../components/HeroText';
import ParalaxBackground from '../components/ParalaxBackground';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Suspense, useRef, useEffect } from 'react';

extend({ OrbitControls });

function Controls() {
    const { camera, gl } = useThree();
    const controlsRef = useRef();

    useFrame(() => controlsRef.current?.update());

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.5}
        />
    );
}

const Hero = () => {
    return (
        <section className="flex items-center justify-center md:justify-center min-h-screen overflow-hidden c-space"  id="home">
            <HeroText />
            <ParalaxBackground />
        
            <figure
                className="absolute inset-0"
                style={{ width: '100vw', height: '100vh' }}
            >

            </figure>
        </section>
    );
};

export default Hero;
