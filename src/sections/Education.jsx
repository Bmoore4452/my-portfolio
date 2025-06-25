import React from 'react';
import { education } from '../constants';

const Education = () => {
    return (
        <section className="relative c-space section-spacing" id="education">
            <h2 className="text-heading">Education</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
            <div>
                {education.map((item, index) => (
                    <React.Fragment key={index}>
                        <div
                            className="grid grid-cols-1 md:grid-cols-4 items-center gap-2 md:gap-4 py-4 md:py-10 relative overflow-hidden hover:-translate-y-1 duration-200"
                            style={{
                                background: `linear-gradient(to right, transparent, ${item.color}, transparent)`
                            }}
                        >
                            {/* School name and logo */}
                            <div
                                className="relative flex flex-col items-center justify-center h-full col-span-1 mb-4 md:mb-0"
                                style={{ zIndex: 2 }}
                            >
                                <h3
                                    className="text-lg md:text-2xl text-center z-10 relative w-full mb-2"
                                    style={{
                                        color: item.color,
                                        borderBottom: `2px solid ${item.color}`,
                                        WebkitTextStroke: '.5px white',
                                        textStroke: '1px black'
                                    }}
                                >
                                    {item.school}
                                </h3>
                                <img
                                    src={`${import.meta.env.BASE_URL}${item.image}`}
                                    alt={item.school}
                                    className="mx-auto h-16 md:h-24 w-auto"
                                    style={{
                                        WebkitFilter: 'drop-shadow(0 0 2px black)',
                                        filter: 'drop-shadow(0 0 2px black)'
                                    }}
                                />
                            </div>

                            {/* Degree info */}
                            <div
                                className="col-span-1 md:col-span-2 px-4 mb-4 md:mb-0 text-center"
                                style={{ zIndex: 2 }}
                            >
                                <ul
                                    className="list-disc pl-5 text-sm md:text-base  md:text-center"
                                    style={{ color: 'white', listStyle: 'none' }}
                                >
                                    {item.earned.map((degree, i) => (
                                        <li key={i} className="mb-1">
                                            {degree}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Date */}
                            <p
                                className="text-sm md:text-base text-center md:text-center col-span-1"
                                style={{ zIndex: 2 }}
                            >
                                {item.date}
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 md:mt-12 h-[1px] w-full" />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Education;
