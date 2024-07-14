import { Icons } from '@/components/icons';
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react';

export const DATA = {
    name: 'Ve Sharma',
    initials: 'VS',
    url: 'https://vesharma.dev',
    location: 'Vancouver, BC',
    locationLink: 'https://www.google.com/maps/place/vancouver',
    description: 'Software Developer turned Entrepreneur. I am most active on LinkedIn and Instagram.',
    summary: `I am the co-founder & CTO of Adauris, a B2B SaaS platform that transforms text to audio for publications and content marketers. Adauris has delivered over millions of AI-generated audio listens globally, and empowers publications worldwide.\n\nI'm a full-stack engineering leader with a passion for building awesome SaaS products powered by applied AI. I've had the opportunity to lead talented teams and build systems that scaled to millions of end listeners - always with a focus on delivering amazing user experiences.\n\nI love empowering developers to build amazing things. That's why I'm passionate about developer-centric products, infrastructure, cost optimizationm and building thriving communities.\n\nI'm a big believer in clear communication and collaboration, and I've had some great experiences presenting at conferences like Collision, Google Developer Fest, Vancouver Startup Week, and an avid Google For Startups Voice.`,
    avatarUrl: '/me.jpeg',
    skills: ['React', 'Next.js', 'Typescript', 'Node.js', 'Python', 'Postgres', 'Docker', 'Kubernetes'],
    navbar: [
        { href: '/', icon: HomeIcon, label: 'Home' },
        { href: '/blog', icon: NotebookIcon, label: 'Blog' },
        { href: '#', icon: CodeIcon, label: 'Projects' },
        { href: '#', icon: PencilLine, label: 'Notes' }
    ],
    contact: {
        email: 'varun.sharma.exe@gmail.com',
        tel: '+4375807573',
        social: {
            GitHub: {
                name: 'GitHub',
                url: 'https://github.com/ve-varun-sharma',
                icon: Icons.github,
                navbar: true
            },
            LinkedIn: {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/varun-d-sharma/',
                icon: Icons.linkedin,
                navbar: true
            },
            instagram: {
                name: 'Instagram',
                url: 'https://www.instagram.com/ve_.exe/',
                icon: Icons.instagram,
                navbar: true
            },
            email: {
                name: 'Send Email',
                url: 'mailto:varun.sharma.exe@gmail.com',
                icon: Icons.email,
                navbar: false
            }
        }
    },

    experience: [
        {
            company: 'Adauris',
            href: 'https://adauris.ai',
            badges: [],
            location: 'Vancouver, BC',
            title: 'CTO & Co-founder',
            logoUrl: '/adauris_logo_black.jpeg',
            start: 'Oct 2020',
            end: 'Present',
            description: `Architected and developed a B2B SaaS platform utilizing Next.JS, Node.JS, and Applied A.I transforming written content into engaging audio experiences.

                        \n\n Productionized A.I models for audio narration generation and optimize user listening experience, resulting in a 30% increase in user engagement.
                        \n\n Led and mentored a team of 6 engineers through all stages of the product lifecycle, fostering a culture of collaboration, innovation, and continuous improvement.
                        \n\n Secured funding from top accelerators and venture capitalists, including Morgan Stanley, Antler US, Alliance of Angels, Founders Inc., Front Row Ventures, Google Cloud Accelerator.
                        \n\n Reduced GCP Cloud costs by $30K annually through strategic infrastructure optimization and resource management
                        \n\n Scaled infrastructure to handle 120,000,000 API requests per month, ensuring high availability and performance for a growing end-listener base.
                        \n\n Served up audio content to 10+ million end-listeners
                        \n\n Decreased initial downtime of 68% of V1 product, to 98%  by V3 of product
                        \n\n Raised a pre-seed round of $1.3M while responsible for technical due diligence
                        \n\n Successfully secured over half a million dollars in grant funding by leading the technical due diligence for the Scientific Research and Experimental Development Tax incentive.
                            `
        },
        {
            company: 'Freelance',
            badges: [],
            href: 'https://vesharma.dev',
            location: 'Remote',
            title: 'Full Stack Software Engineer',
            logoUrl: '/freelance.jpeg',
            start: 'March 2020',
            end: 'October 2020',
            description: `- Developed and deployed responsive web applications from conception to completion for diverse clients, utilizing React.JS, Node.JS, Django, and Python.\n\n - Designed and implemented complex backend architectures and database schemas, ensuring scalability and performance.\n\n - Collaborated closely with clients to understand their needs and translate them into effective technical solutions.`
        }
    ],
    education: [
        {
            school: 'The University of British Columbia ',
            href: 'https://www.ubc.ca/',
            degree: `Bachelor's degree in Political Science`,
            logoUrl: '/ubc-logo.png',
            start: '2019',
            end: '2021',
            description: `Activities and Societies: \n\n 
                        BizTech - Business & Technology\n\n  


                        BOLT - Data Science & Business Tech Bootcamps
                        UX Hub - User Experience and Design 
                        nwPlus - Club for aspiring programmers 
                        MUNSA - Model United Nation Students' Association
`
        }
    ],
    certifications: [
        {
            name: 'Innovation Governance Program - L1  - Council of Canadian Innovators',
            href: 'https://igp.canadianinnovators.org/',
            about: `Training for board membership for high-growth firms within Canada's rapidly expanding innovation economy.`,
            logoUrl: '/igp_logo.png',
            start: '2024',
            end: '2024'
        }
    ],
    projects: [
        {
            title: 'Adauris Dashboard Web App',
            href: 'https://aduris.ai',
            dates: 'Jan 2023 - Present',
            active: true,
            description: 'Turn written content into high quality audio experiences.',
            technologies: ['Next.js', 'ChalkraUI', 'Typescript', 'Firestore', 'Firebase', 'Stripe', 'GCP', 'AWS', 'HugginFace'],
            links: [
                {
                    type: 'Website',
                    href: 'https://adauris.ai',
                    icon: <Icons.globe className="size-3" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/Ad-Auris/',
                    icon: <Icons.github className="size-3" />
                }
            ],
            image: '',
            video: 'https://storage.googleapis.com/ve-portfolio-site/ve-portfolio-main-webapp/ScreenRecording2024-07-14at12.06.32AM-ezgif.com-video-to-mp4-converter.mp4'
        },
        {
            title: 'Cloud Cost Optimization',
            href: 'https://www.linkedin.com/feed/update/urn:li:activity:7201277013758758912/',
            dates: 'Feb 2024 - May 2024',
            active: true,
            description: `How we've trimmed our Cloud Costs by $30K+ 💰 at my startup, Adauris 💸🚀 As CTO of Adauris, I'm always looking for ways to optimize our cloud infrastructure and maximize our budget.`,
            technologies: ['GCP', 'AWS', 'MongoDB', 'Firebase', 'Cloud Run', 'Cloud Functions', 'EKS', 'Kubernetes'],
            links: [
                {
                    type: 'Website',
                    href: 'https://llm.report',
                    icon: <Icons.globe className="size-3" />
                },
                {
                    type: 'Source',
                    href: 'https://github.com/Ad-Auris/',
                    icon: <Icons.github className="size-3" />
                }
            ],
            image: '',
            video: 'https://cdn.llm.report/openai-demo.mp4'
        }
    ],
    activities: [
        {
            title: 'Pannelist for Google for Startups Accelerator: Canada Day 🍁',
            dates: 'June 27th, 2024',
            location: 'Toronto, Ontario',
            description:
                'Spoke at Google Canada HQ in Toronto about my experience in the Google For Startup Program. Joined by Ashley Francisco, Head of Accelerator & Startup Ecosystem, Americas.',
            image: '/gfs_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'Google For Startups Event Page',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://rsvp.withgoogle.com/events/gfsa-canada-day-in-the-office/sessions/google-for-startups-accelerator-canada-day'
                },
                {
                    title: 'YouTube Video',
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: 'https://youtu.be/8yzOpUHH78c?t=2557'
                }
            ]
        },
        {
            title: 'Men in Tech Panel - Vancouver Startup Week',
            dates: 'February 3rd - 4th, 2018',
            location: 'Vancouver, BC',
            description:
                'Represented Google For Startups with tryToast.ca to highlight issues in tech with gender discrepancies and help be an ally for women in tech.',
            image: '/gfs_logo.png',
            links: [
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/aprilhicke_men-in-tech-that-was-the-title-of-the-toast-activity-7204337122210717697-dgxw'
                }
            ]
        }
    ]
} as const;
