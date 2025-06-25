import React, { useRef } from 'react';
import Card from '../components/Card';
import { Frameworks } from '../components/Frameworks';

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space max-h-screen" id="about">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-auto-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1 col-span-1 md:col-span-3">
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
                <div className="grid-default-color grid-1 col-span-1 md:col-span-3">
                    <div
                        ref={grid2Container}
                        className="flex items-center justify-center w-full h-full scale-75"
                    >
                        <p className="flex items-end text-5xl text-gray-500">
                            My Skills
                        </p>
                        {[
                            { text: "Python", style: { rotate: '75deg' } },
                            { text: "React", style: { rotate: '-30deg' } },
                            { text: "Web Scraping", style: { rotate: '20deg' } },
                            { text: "Django", style: { rotate: '-45deg' } },
                            { text: "JavaScript", style: { rotate: '-65deg' } },
                            { text: "Jupyter Notebook", style: { rotate: '30deg' } },
                            { text: "Full Stack", style: { rotate: '20deg' } },
                            { image: "assets/logos/png-logo.png", style: { rotate: '30deg', borderRadius: '50%' } },
                            { image: "assets/logos/aws-logo.png", style: { rotate: '-45deg', borderRadius: '50%', backgroundColor: 'white' } },
                            { image: "assets/logos/jupyter-logo.png", style: { rotate: '-45deg', borderRadius: '50%', backgroundColor: 'white' } },
                        ].map((card, idx) => {
                            // Randomize top and left between 5% and 75%
                            const top = `${Math.floor(Math.random() * 70) + 5}%`;
                            const left = `${Math.floor(Math.random() * 70) + 5}%`;
                            return (
                                <Card
                                    key={idx}
                                    style={{
                                        ...card.style,
                                        top,
                                        left
                                    }}
                                    text={card.text}
                                    image={card.image}
                                    containerRef={grid2Container}
                                />
                            );
                        })}
                    </div>
                </div>
                {/* Grid 3 - Tech Stack */}
                <div className="grid-default-color col-span-1 md:col-span-6 relative overflow-hidden min-h-[15rem] md:h-[18rem]">
                    <div className="z-10 w-full md:w-[50%] p-4">
                        <p className="headText">Tech Stack</p>
                        <p className="subtext">
                            I specialize in a variety of languages, frameworks,
                            and tools that allow me to build robust and scalable
                            applications
                        </p>
                    </div>
                    {/* Mobile layout - centered at bottom */}
                    <div className="absolute left-0 right-0  h-32 flex items-center justify-center md:hidden overflow-hidden">
                        <div className="scale-75">
                            <Frameworks />
                        </div>
                    </div>

                    {/* Desktop layout - positioned on right side */}
                    <div className="absolute inset-y-9 left-[100%] scale-125 items-center justify-center hidden md:flex">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
