import React from 'react';
import { education } from '../constants';
import { i } from 'motion/react-client';

const Education = () => {
    return (
        <section className="relative c-space section-spacing" id="education">
            <h2 className="text-heading">Education</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
            <div>
                {education.map((item, index) => (
                    <React.Fragment key={index}>
                        <div
                            className="grid grid-cols-4 items-center gap-4 py-10 relative overflow-hidden h-50 hover:-translate-y-1 duration-200"
                            style={{
                                background: `linear-gradient(to right, transparent, ${item.color}, transparent)`
                            }}
                        >
                            <div
                                className="relative flex flex-col items-center justify-center h-full col-span-1"
                                style={{ zIndex: 2 }}
                            >
                                <h3
                                    className="text-2xl text-center z-10 relative w-full"
                                    style={{ color: item.color }}
                                >
                                    {item.school}
                                </h3>
                                <img
                                    src={`${import.meta.env.BASE_URL}${item.image}`}
                                    alt=""
                                    style={{ height: '100px', width: 'auto' }}
                                    className="mx-auto mt-2"
                                />
                            </div>
                            {/* Degree info */}
                            <div
                                className="col-span-2 pl-4"
                                style={{ zIndex: 2 }}
                            >
                                <ul
                                    className="list-disc pl-5 text-center sm:text-left"
                                    style={{ color: 'white' }}
                                >
                                    {item.earned.map((degree, i) => (
                                        <li key={i}>{degree}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Date */}
                            <p
                                className="text-center sm:text-right col-span-1"
                                style={{ zIndex: 2 }}
                            >
                                {item.date}
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Education;
