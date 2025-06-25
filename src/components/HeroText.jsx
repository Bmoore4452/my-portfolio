import { FlipWords } from './FlipWords';
import { motion } from 'framer-motion';

const HeroText = () => {
    const words = [
        'Secure',
        'Modern',
        'Scalable',
        'Innovative',
        'Data Driven',
        'Efficient',
        'Robust',
        'Intuitive'
    ];
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };
    return (
        <div className="flex items-center z-10 m-auto text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1
                    className="text-4xl font-medium text-center"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi, I'm Brian
                </motion.h1>
                <div className="flex flex-col items-center">
                    <motion.p
                        className="text-5xl font-medium text-neutral-300 text-center"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        A Developer <br /> Dedicated to Building
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords
                            words={words}
                            className="text-center font-black text-white text-8xl"
                        />
                    </motion.div>
                    <motion.p
                        className="text-4xl font-medium text-center text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Web Solutions
                    </motion.p>
                    <motion.img
                        src="./assets/brian.JPG"
                        alt=""
                        className="w-60 h-60 object-cover rounded-full mt-4"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    />
                </div>
            </div>
            {/* Mobile View */}
            <div className="flex items-center flex-col space-y-6 md:hidden">
                <motion.p
                    className="text-2xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi, I'm Brian
                </motion.p>
                <div>
                    <motion.p
                        className="text-3xl font-black text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        A Developer <br /> Dedicated to Building
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-bold text-white text-4xl text-center"
                        />
                    </motion.div>
                    <motion.p
                        className="text-center text-2xl font-black text-neutral300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Web Solutions
                    </motion.p>
                    <motion.img
                        src="./assets/brian.JPG"
                        alt=""
                        className="w-30 h-30 object-cover rounded-full m-auto mt-4"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroText;
