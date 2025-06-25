import { OrbitingCircles } from './OrbitingCircles';

export function Frameworks() {
    const skills = [
        'aws',
        'css3',
        'git',
        'html5',
        'javascript',
        'microsoft',
        'react',
        'sqlite',
        'tailwindcss',
        'vitejs',
        'django',
        'python',
        'postgresql'
    ];
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center min-h-[200px]">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => (
                    <Icon
                        key={index}
                        src={`${
                            import.meta.env.BASE_URL
                        }assets/logos/${skill}.svg`}
                    />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {[...skills].reverse().map((skill, index) => (
                    <Icon
                        key={index}
                        src={`${
                            import.meta.env.BASE_URL
                        }assets/logos/${skill}.svg`}
                    />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img
        src={src}
        className="duration-200 rounded-sm hover:scale-110 w-6 h-6 sm:w-8 sm:h-8"
    />
);
