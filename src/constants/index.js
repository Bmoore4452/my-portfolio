import { color } from 'motion';
import { image, s } from 'motion/react-client';

export const myProjects = [
    {
        id: 1,
        title: 'All In Fitness Group',
        description:
            'Empowers users to track their fitness journey through structured weekly logs, including meals, workouts, hydration, measurements, and reflections—all within a supportive online group setting.',
        subDescription: [
            'Developed a full-stack web application using Django (backend) and React with Bootstrap (frontend) for seamless data tracking and visualization.',
            'Integrated PostgreSQL on AWS RDS for reliable and scalable data storage, enabling personalized fitness log management.',
            'Deployed backend with AWS Elastic Beanstalk and frontend via AWS Amplify for secure, cloud-based performance.',
            'Enabled user authentication and profile creation, allowing participants to upload progress photos, record journal entries, and monitor weekly changes.',
            'Supported a subscription-based online fitness community with real-time accountability and progress tracking tools.'
        ],
        href: 'https://www.allinfitnessgroup.com/',
        logo: '',
        image: '/assets/projects/allinfitnessgroup.png',
        tags: [
            {
                id: 1,
                name: 'Django',
                path: '/assets/logos/django.svg'
            },
            {
                id: 2,
                name: 'React',
                path: '/assets/logos/react.svg'
            },
            {
                id: 3,
                name: 'PostgreSQL',
                path: '/assets/logos/postgresql.svg'
            },
            {
                id: 4,
                name: 'Bootstrap',
                path: '/assets/logos/bootstrap.svg'
            }
        ]
    },
    {
        id: 2,
        title: 'Pokédex Battle Planner',
        description:
            'An interactive web application for Pokémon enthusiasts that allows users to search, filter, and build custom battle teams using real-time data from PokéAPI.',
        subDescription: [
            'Built with HTML, CSS, and JavaScript, leveraging Node.js and client-side APIs to fetch live Pokémon stats and types.',
            'Used Day.js for time-based interactions and implemented local storage to persist custom battle teams across sessions.',
            'Designed a responsive UI with a modern CSS framework (not Bootstrap), supporting mobile and desktop users.',
            'Integrated two external APIs to power Pokémon data queries and enable dynamic dropdown filters by type.',
            'Deployed to GitHub Pages, featuring modals for user interaction and a polished user experience without using native alerts or prompts.'
        ],
        href: 'https://stamperm.github.io/velocirapt-vars--pokedex/',
        logo: '',
        image: '/assets/projects/battleplanner.png',
        tags: [
            {
                id: 1,
                name: 'JavaScript',
                path: '/assets/logos/javascript.svg'
            },
            {
                id: 2,
                name: 'Bootstrap',
                path: '/assets/logos/bootstrap.svg'
            },
            {
                id: 3,
                name: 'Day.js',
                path: '/assets/logos/day.png'
            },
            {
                id: 4,
                name: 'PokéAPI',
                path: '/assets/logos/pokeapi-api.png'
            }
        ]
    },
    {
        id: 3, // Increment as needed
        title: 'CryptoPlay - Financial Literacy Education Platform',
        description:
            'A production-ready educational platform that teaches children ages 8-17 financial literacy through safe cryptocurrency education, virtual trading simulations, and gamified learning experiences within a secure, COPPA-compliant environment.',
        subDescription: [
            'Built a full-stack web application using React with TypeScript (frontend) and Supabase (backend) with real-time data synchronization and authentication.',
            'Integrated Stripe payment processing for subscription-based revenue model ($5/month) with secure billing portal and 7-day free trial functionality.',
            'Developed comprehensive parent-child account management system with multi-child family accounts, parental controls, and real-time monitoring dashboards.',
            'Implemented gamification system with 11-level progression, achievement badges, daily streaks, and XP rewards to drive engagement and learning retention.',
            'Created virtual trading environment with real market data integration, allowing children to practice cryptocurrency trading in a risk-free simulated environment.',
            'Designed age-appropriate interfaces optimized for two demographics (8-12 and 13-17) with 50+ interactive lessons and educational content modules.',
            'Ensured COPPA compliance with comprehensive privacy policy, terms of service, and child protection safeguards as highest priority.'
        ],
        href: 'https://cryptoplayadventures.com/', // Update with your actual deployed URL
        logo: '/assets/logos/cryptoplay-logo.png', // Add your logo
        image: '/assets/projects/cryptoplay_screenshot.png', // Add your screenshot
        tags: [
            {
                id: 1,
                name: 'React',
                path: '/assets/logos/react.svg'
            },
            {
                id: 2,
                name: 'TypeScript',
                path: '/assets/logos/ts-logo-512.svg'
            },
            {
                id: 3,
                name: 'Supabase',
                path: '/assets/logos/supabase-logo-icon.svg'
            },
            {
                id: 4,
                name: 'Tailwind CSS',
                path: '/assets/logos/tailwindcss.svg'
            },
            {
                id: 5,
                name: 'Stripe',
                path: '/assets/logos/stripe.svg'
            }
        ]
    },
    {
        id: 4,
        title: 'All In Fitness Group Mobile',
        description:
            'Cross-platform mobile application enabling fitness enthusiasts to log meals, track workouts, schedule coaching meetings, and receive push notifications—all from their iOS or Android device.',
        subDescription: [
            'Built a production-ready React Native mobile app with TypeScript for iOS and Android platforms, achieving feature parity across both operating systems.',
            'Integrated Firebase Cloud Messaging for real-time push notifications, enhancing user engagement and workout reminders.',
            'Implemented Microsoft Teams meeting integration, allowing users to schedule and join live coaching sessions directly from the app.',
            'Designed custom UI components including profile pickers, bottom navigation, and image upload functionality with optimized mobile UX.',
            'Published to Apple App Store with complete submission process including privacy policies, test credentials, and asset generation.',
            'Prepared for Google Play Store deployment with signed release builds, data safety declarations, and account deletion compliance.'
        ],
        href: 'https://apps.apple.com/us/app/all-in-fitness-group/id6754206603',
        logo: '',
        image: '/assets/projects/allinmobile.png',
        tags: [
            {
                id: 1,
                name: 'React Native',
                path: '/assets/logos/react.svg'
            },
            {
                id: 2,
                name: 'TypeScript',
                path: '/assets/logos/ts-logo-512.svg'
            },
            {
                id: 3,
                name: 'Firebase',
                path: '/assets/logos/Primary_Vertical_Lockup_Full_Color_Inverted.svg'
            },
            {
                id: 4,
                name: 'iOS',
                path: '/assets/logos/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
            },
            {
                id: 5,
                name: 'Android',
                path: '/assets/logos/Android-Logo--Streamline-Logos.svg'
            }
        ]
    },
];

export const mySocials = [
    {
        name: 'GitHub',
        href: 'https://github.com/Bmoore4452',
        icon: '/assets/socials/github.svg'
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/brianmoore4452/',
        icon: '/assets/socials/linkedIn.svg'
    }
];

export const education = [
    {
        school: 'Harvard University',
        earned: ["CS50x: CS50's Introduction to Computer Science"],
        date: 'Completed January 2023',
        image: '/assets/education/harvard.png',
        color: '#A51C30'
    },
    {
        school: 'Georgia Institute of Technology',
        earned: ['Professional Certificate in Full Stack Web Development'],
        date: 'Completed March 2023',
        image: '/assets/education/georgia-tech.png',
        color: '#D4B553'
    },
    {
        school: 'Coursera',
        earned: [
            'Meta: Introduction to Back-End Development',
            'Meta: Programming in Python',
            'Meta: Version Control',
            'IBM: Python for Data Science, AI & Development',
            'IBM: What is Data Science?'
        ],
        date: 'Completed July 2023 - May 2024',
        image: '/assets/education/coursera.png',
        color: '#0056D2'
    },
    {
        school: 'Mercer University',
        earned: [
            'Bachelor of Science in Information Technology & Informatics',
            'Certificate in Database Design and Analytics',
            "President's List (Fall 2023, Spring 2024, Summer 2024, Fall 2024, Spring 2025)",
            'Member of Alpha Sigma Lambda Honor Society'
        ],
        date: 'Expected Graduation May 2026',
        image: '/assets/education/mercer.png',
        color: '#f76800'
    }
];

export const experiences = [
    {
        title: 'Full-Stack Developer',
        job: 'All In Fitness Group',
        date: 'Mar 2025 – May 2025',
        contents: [
            'Built a wellness tracking platform with Django backend and React frontend styled using Bootstrap.',
            'Deployed backend with AWS Elastic Beanstalk and frontend with AWS Amplify; used PostgreSQL (RDS) and S3 for storage.',
            'Developed features like custom client profiles, weekly progress logs, and status updates for an 8-week fitness program.',
            'Created a private community feed for user engagement and a staff dashboard to manage all client accounts.',
            'Actively used by a real fitness group, designed to scale and promote health accountability through thoughtful UX.'
        ]
    },
    {
        title: 'Front-End Developer',
        job: 'Pokédex Battle Planner',
        date: '2023',
        contents: [
            'Developed an interactive Pokémon battle planning app using JavaScript, Bootstrap, and Day.js.',
            'Integrated PokéAPI to retrieve real-time data and allow users to build and store a 6-member team.',
            'Implemented modal-based UI interactions and client-side localStorage for persistent session data.',
            'Delivered a fully responsive layout deployed to GitHub Pages with a polished user experience.',
            'Enabled real-time team-building tools and search/filter features without relying on alert/prompt dialogs.'
        ]
    },
    {
        title: 'Head Sound Engineer',
        job: 'FAIS-ONE Entertainment',
        date: 'Apr 2014 – Jun 2022',
        contents: [
            'Engineered over 10,000 hours of high-quality audio for music, podcasts, web series, and TV shows.',
            'Collaborated with artists, producers, and directors on 500+ projects to meet creative and technical goals.',
            'Performed advanced audio editing, mixing, and mastering to ensure broadcast-level sound.',
            'Handled administrative duties including client communication, scheduling, invoicing, and payments.',
            'Maintained a reputation for problem-solving, organization, and high client satisfaction.'
        ]
    }
];
