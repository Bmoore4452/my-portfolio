import React, { useRef } from 'react';
import Card from '../components/Card';
import { Frameworks } from '../components/Frameworks';

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space" id="about">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-auto-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Brian Moore</p>
                        <p className="subtext">
                            I'm a full-stack developer and data enthusiast with
                            a passion for building scalable web applications and
                            solving real-world problems through code. With a
                            strong foundation in Python, JavaScript, and cloud
                            technologies, I create solutions that are both
                            functional and user-focused.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-1">
                    <div
                        ref={grid2Container}
                        className="flex items-center justify-center w-full h-full"
                    >
                        <p className="flex items-end text-5xl text-gray-500">
                            My Skills
                        </p>
                        <Card
                            style={{ rotate: '75deg', top: '30%', left: '20%' }}
                            text="Python"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{
                                rotate: '-30deg',
                                top: '60%',
                                left: '45%'
                            }}
                            text="React"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{
                                rotate: '20deg',
                                bottom: '30%',
                                left: '70%'
                            }}
                            text="Web Scraping"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '-45deg', top: '55%', left: '0%' }}
                            text="Django"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{
                                rotate: '-65deg',
                                top: '15%',
                                left: '28%'
                            }}
                            text="JavaScript"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '30deg', top: '25%', left: '38%' }}
                            text="Jupyter Notebook"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '20deg', top: '10%', left: '38%' }}
                            text="Full Stack"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{
                                rotate: '30deg',
                                top: '70%',
                                left: '70%',
                                borderRadius: '50%'
                            }}
                            image="assets/logos/png-logo.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{
                                rotate: '-45deg',
                                top: '70%',
                                left: '25%',
                                borderRadius: '50%',
                                backgroundColor: 'white'
                            }}
                            image="assets/logos/aws-logo.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{
                                rotate: '-45deg',
                                top: '5%',
                                left: '10%',
                                borderRadius: '50%',
                                backgroundColor: 'white'
                            }}
                            image="assets/logos/jupyter-logo.png"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {}
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headText">Teck Stack</p>
                        <p className="subtext">
                            I specialize in a variety of languages, frameworks,
                            and tools that allow me to build robust and scalable
                            applications
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
