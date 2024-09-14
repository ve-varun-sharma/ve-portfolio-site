import { Icons } from '@/components/icons';
import { CodeIcon, HomeIcon, NotebookIcon, MailIcon } from 'lucide-react';

export const DATA = {
    name: 'Ve Sharma',
    initials: 'VS',
    url: 'https://vesharma.dev',
    location: 'Vancouver, BC',
    locationLink: 'https://www.google.com/maps/place/vancouver',
    description: 'Technical Leader. Full-stack & Applied A.I Developer. Speaker. Community Builder.',
    summary: `
    \n\nI am the co-founder of Adauris, a b2b A.I. SaaS company. Adauris is a narration tool for publishers & marketing teams, enabling written content to be instantly transformed into rich audio experiences. 

    \n\nAdauris is backed by some of the top accelerators across North America including the Next36, The League of Innovators, The XX by Wefunder based out of San Francisco, Bay Area, California, and Google For Startups (Cloud Cohort). 

    \n\nA few VCs & micro-funds Adauris is backed by include Alliance of Angels, First Row Partners, Antler US, Cross Cut Ventures, Founders. Inc. and Morgan Stanley.

    \n\nI was previously the CTO for 4 years at Adauris and had transitioned into a senior technical advisory role as of September 2024 to focus on new challenges while the company continues to grow.         
    
    \n\nI'm a technical leader with skills in full-stack engineering and applied A.I.\n\nAt my first startup, Adauris, here are some milestones I’ve been able to achieve:\n\n- I led and mentored a team of 6 engineers through all stages of the product lifecycle\n\n- Secured funding from top accelerators and venture capitalists, including Antler US, Alliance of Angels, Founders Inc., Front Row Ventures, and Morgan Stanley.\n\n- Reduced GCP Cloud costs by $30,000 annually through strategic infrastructure optimization and increasing efficient resource management.\n\n- Scaled infrastructure to handle 120,000,000 API requests per month, ensuring high availability and performance for a growing end-listener base.\n\n- Served up audio content to 10+ million end-listeners \n\n- Raised a pre-seed round of $1.3M while responsible for technical due diligence\n\n- Successfully secured over $500,000 in grant funding by leading the technical due diligence for the Scientific Research and Experimental Development Tax incentive. \n\n\n\nI'm passionate about A.I., cloud infrastructure, cloud optimization to lower costs, and defence tech which combines my background in computer & political science where I specialized in security studies.\n\n\n\nOutside of my main day to day work, I love engaging with the tech and founder community, and I've had some great experiences presenting at conferences like Collision, Vancouver Startup Week, Startupfest, Google Developer Fest, and an avid Google For Startups Voice.`,
    avatarUrl: '/me.jpeg',
    skills: [
        'System Architecture',
        'Organizational Culture',
        'Strategy',
        'Research and Development',
        'Product Development',
        'Cloud Technologies',
        'Agile Methodologies',
        'Technical Problem Solving',
        'Machine Learning',
        'Cloud Technologies',
        'DevOps',
        'FinOps',
        'React',
        'Next.js',
        'Typescript',
        'Node.js',
        'Python',
        'Postgres',
        'Docker',
        'Kubernetes',
        'Express',
        'Langchain',
        'Git',
        'Bash',
        'oh my zsh',
        'Bun.sh',
        'Terraform',
        'FinOps',
        'GCP',
        'Vertex AI',
        'Cloud Run',
        'Cloud Functions',
        'Cloud SQL',
        'Compute Engine',
        'Cloud Storage',
        'AWS',
        'Bedrock',
        'ECR',
        'ECS',
        'EC2',
        'RDS'
    ],
    navbar: [
        { href: '/', icon: HomeIcon, label: 'Home' },
        { href: 'https://medium.com/@vesharma.dev', icon: NotebookIcon, label: 'Blog' },
        { href: '#projects', icon: CodeIcon, label: 'Projects' },
        { href: 'mailto:ve@vesharma.dev', icon: MailIcon, label: 'Email' }
    ],
    contact: {
        email: 've@vesharma.dev',
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
                url: 'https://www.instagram.com/vesharma.dev/',
                icon: Icons.instagram,
                navbar: true
            },
            email: {
                name: 'Send Email',
                url: 'mailto:ve@vesharma.dev',
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
            title: 'Senior Technical Advisor & Co-Founder',
            logoUrl: '/logos/adauris_logo_black.jpeg',
            start: 'Sept 2020',
            end: 'Present',
            description: `
           Leveraging my deep understanding of the company's technology stack and strategic direction, I provide expert guidance on technical strategy, product development, and industry trends. My focus is on supporting the technical team, fostering innovation, and contributing to the company's long-term success.
                            `
        },
        {
            company: 'Adauris',
            href: 'https://adauris.ai',
            badges: [],
            location: 'Vancouver, BC',
            title: 'Chief Technology Officer & Co-Founder',
            logoUrl: '/logos/adauris_logo_black.jpeg',
            start: 'Oct 2020',
            end: 'Sept 2024',
            description: `Architected and developed a B2B SaaS platform utilizing Next.JS, Node.JS, and Applied A.I transforming written content into engaging audio experiences.

                        \n\n Productionized A.I models for audio narration generation and optimize user listening experience, resulting in a 30% increase in user engagement.
                        \n\n Led and mentored a team of 6 engineers through all stages of the product lifecycle, fostering a culture of collaboration, innovation, and continuous improvement.
                        \n\n Secured funding from top accelerators and venture capitalists, including Morgan Stanley, Antler US, Alliance of Angels, Founders Inc., Front Row Ventures, Google Cloud Accelerator.
                        \n\n Reduced GCP Cloud costs by $30,000 annually through strategic infrastructure optimization and resource management
                        \n\n Scaled infrastructure to handle 120,000,000 API requests per month, ensuring high availability and performance for a growing end-listener base.
                        \n\n Served up audio content to 10+ million end-listeners
                        \n\n Decreased initial downtime of 68% of V1 product, to 98%  by V3 of product
                        \n\n Raised a pre-seed round of $1.3M while responsible for technical due diligence
                        \n\n Successfully secured over half a million dollars in grant funding by leading the technical due diligence for the Scientific Research and Experimental Development Tax incentive.
                            `
        },
        {
            company: 'Morgan Stanley',
            badges: [],
            href: 'https://www.morganstanley.com/about-us/diversity/inclusive-ventures-lab',
            location: 'Toronto, Canada',
            title: 'Morgan Stanley Inclusive Venture lab',
            logoUrl: '/logos/morgan_stanley_logo.png',
            start: 'Sept 2023',
            end: 'March 2024',
            description: `Adauris was 1 of 23 companies selected from an applicant pool of 7,900 for Morgan Stanley's Inclusive Venture Lab. The program includes both venture investment and programming support. To date, 92 companies have been included in the company. $217M in additional funding to date that companies have received after participating in the Lab. $923M combined valuation to date of companies that have participated in the Lab.`
        },
        {
            company: 'Google',
            badges: [],
            href: 'https://startup.google.com/',
            location: 'Toronto, Canada',
            title: 'Google Cloud Accelerator',
            logoUrl: '/logos/google_logo.jpg',
            start: 'April 2022',
            end: 'June 2022',
            description: `The Google Cloud Accelerator Canada is a three-month accelerator program for cloud-native Canadian SaaS or ML/AI startups. The accelerator is designed to bring the best of Google's programs, products, people and technology to startups doing interesting work in the cloud. In addition to cloud mentorship and technical project support, the accelerator also includes deep dives and workshops focused on product design, customer acquisition and leadership development for startup founders and leaders.`
        },
        {
            company: 'League of Innovators',
            badges: [],
            href: 'https://www.theleagueofinnovators.org/',
            location: 'Toronto, Canada',
            title: 'Advisory Committee Member - Alumni Council',
            logoUrl: '/logos/loi_logo.jpg',
            start: 'April 2022',
            end: 'Aug 2023',
            description: `As an Advisory Committee member for the League of Innovators (LOI), we give tactical and strategic input to the LOI team and it's board of directors which includes Ryan Holmes - CEO Hootsuite, Manny Padda - Founder New Avenue Capital, Michele Romanow - Dragons' Den Investor & Co-founder Clearbanc. The advisory committee concerns itself with the core value proposition of League of Innovators for new founders and alumni alike.`
        },
        {
            company: 'XX by WeFunder',
            badges: [],
            href: 'https://markets.businessinsider.com/news/stocks/forget-silicon-valley-vcs-xx-accelerator-allows-anyone-to-invest-in-startups-fighting-coronavirus-1029438040',
            location: 'San Francisco, CA',
            title: 'The XX Accelerator',
            logoUrl: '/logos/xx_logo.jpg',
            start: 'Feb 2021',
            end: 'March 2021',
            description: `The XX is a pre-seed startup accelerator and is a collection of mentors and experts - often successful founders in their own right - who help startups. Our Lead Advisor was Daniel Ha - The Founder and CEO of Disqus.
            The XX Team is financially incentivized to help companies in the Wefunder portfolio succeed. The Lead Investor is hired by the XX team for a specific company. 
            The XX is a competitive accelerator with the last batch having a 1% acceptance rate.`
        },
        {
            company: 'Freelance',
            badges: [],
            href: 'https://vesharma.dev',
            location: 'Remote',
            title: 'Full Stack Software Developer',
            logoUrl: '/logos/freelance.jpeg',
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
            logoUrl: '/logos/ubc-logo.png',
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
            logoUrl: '/logos/igp_logo.png',
            start: '2024',
            end: '2024'
        }
    ],
    projects: [
        {
            title: 'Adauris Dashboard Web App',
            href: 'https://adauris.ai',
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
                    type: 'LinkedIn Post',
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7201277013758758912/',
                    icon: <Icons.linkedin className="size-3" />
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
            title: "ALL IN A.I. - Canada's Top 100 A.I. Startups - Delegate",
            dates: 'Sept 11th-12th, 2024',
            location: 'Montreal, Quebec 🇨🇦',
            description:
                "I represented Adauris as one of Canada's top 100 A.I. startups - I had the opportunity to connect with folks from a pool of 3,000 industry participants, including more than 600 members of international delegations from 40 different countries.",
            image: '/logos/all_in_canada_logo.jpeg',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'ALL IN A.I. Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://allinevent.ai/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7237554608967929856/'
                }
            ]
        },
        {
            title: 'Google for Startups - Alumni to Alumni: Cloud Cost Cutting Secrets from Ve (Varun) & Dmitriy - Speaker',
            dates: 'July 17th, 2024',
            location: 'Toronto, Ontario 🇨🇦',
            description:
                'I shared my expertise on slashing our cloud costs and shared optimization and scaling strategies for a room of 55 CTOs and CEOs.',
            image: '/logos/gfs_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'Google For Startups Event Page',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://rsvp.withgoogle.com/events/na-alumni-event-google-cloud-cost'
                },
                {
                    title: 'Recorded Video',
                    icon: <Icons.googleDrive className="h-4 w-4" />,
                    href: 'https://drive.google.com/file/d/1XM4t3dCLw2fkCan47qAtFH_6AmRybLMN/view'
                }
            ]
        },
        {
            title: 'Startupfest - Speaker',
            dates: 'July, 2024',
            location: 'Montreal, Quebec 🇨🇦',
            description: 'I pitched my startup, Adauris, at Startupfest Montreal on the main stage!',
            image: '/logos/startupfest_logo.png',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://www.startupfest.com/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_startups-startupfest-ctos-activity-7218621906097254402-Tc5E'
                },
                {
                    title: 'YouTube Video',
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: 'https://www.youtube.com/watch?v=mNe7ATi_HX4'
                }
            ]
        },
        ,
        {
            title: 'Google for Startups Accelerator: Canada Day 🍁 - Speaker',
            dates: 'June 27th, 2024',
            location: 'Toronto, Ontario 🇨🇦',
            description:
                'Spoke at Google Canada HQ in Toronto about my experience in the Google For Startup Program. Joined by Ashley Francisco, Head of Accelerator & Startup Ecosystem, Americas.',
            image: '/logos/gfs_logo.png',
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
            title: 'Men in Tech Panel - Vancouver Startup Week - Speaker',
            dates: 'May 2024',
            location: 'Vancouver, BC 🇨🇦',
            description:
                'Represented Google For Startups with tryToast.ca to highlight issues in tech with gender discrepancies and help be an ally for women in tech.',
            image: '/logos/gfs_logo.png',
            links: [
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/aprilhicke_men-in-tech-that-was-the-title-of-the-toast-activity-7204337122210717697-dgxw'
                }
            ]
        },
        {
            title: 'Google i/o Pitch at Google HQ - Speaker',
            dates: 'May 2024',
            location: 'Mountain View, CA 🇺🇸',
            description: `Pitched my startup, Adauris at Google HQ in Mountain View during Google I/O!
                            ⚡️ 60 seconds to make an impact, and what an audience – Google VPs, PMs, and fellow Google for Startups alumni. Truly an honor.`,
            image: '/logos/google_logo.jpg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://io.google/2024/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_googleio-ai-startups-activity-7199103314192420864-QaNP'
                }
            ]
        },
        {
            title: 'Google i/o - Attendee',
            dates: 'May 2024',
            location: 'Mountain View, CA 🇺🇸',
            description: `Google's annual developer conference. Learned from the top Google experts on how to use the new A.I models Gemini 1.5, Gemma 2, Firebase GenKit. Learned on how to best use new technologies from google ranging from A.I., Chrome, Browser, Firebase, and the Cloud. `,
            image: '/logos/google_io_logo_2024.jpg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://io.google/2024/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/ashley-francisco-51484847_googleio-community-accelerator-ugcPost-7196929271649476609-9voN'
                }
            ]
        },
        {
            title: 'Google Cloud Next - Attendee',
            dates: 'April 2024',
            location: 'Las Vegas, Nevada 🇺🇸',
            description: `Attended Google Cloud Next. I attended sessions and learned from Google's top experts on how to improve AI application architecture, develop and deploy them on Google Cloud Platform (GCP), and manage infrastructure for optimized workload management. Additionally, I gained insights into enterprise technology stack building.`,
            image: '/logos/google_cloud_logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://cloud.withgoogle.com/next/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_googlecloudnext-googlecloud-google-activity-7185622947385020416-_Kh_'
                }
            ]
        },
        {
            title: 'TKS Moonshots - Judge',
            dates: 'April 2024',
            location: 'Vancouver, BC 🇨🇦',
            description:
                'Judged a TKS demo day for their 2024 cohort. The world’s top global accelerator for teens. TKS is a 10-month global innovation program for ambitious high school students ages 13-17.',
            image: '/logos/tks_logo.jpg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://www.tks.world/'
                }
            ]
        },
        {
            title: 'Venture for Canada Panel - Speaker',
            dates: 'February 2024',
            location: 'Vancouver, BC 🇨🇦',
            description:
                'I spoke on a pannel about the founder experience, how to get started, and failures made along the way to a group of young ambitious students. Venture for Canada is a national charity that links interns and recent grads to paid opportunities at Canadian startups and small businesses.',
            image: '/logos/venture_for_canada_logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://ventureforcanada.ca/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7175604698563903488/'
                }
            ]
        },
        {
            title: 'UBC Imprint Conference - Speaker',
            dates: 'January 2024',
            location: 'Vancouver, BC 🇨🇦',
            description:
                "Shared the journey of entrepreneurship as a student starting my own company while at university myself to an audience of business & marketing students. UBC Imprint Conference is UBC Sauder Business School's marketing conference. ",
            image: '/logos/ubcimprint_logo.jpeg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://www.ubcimprint.com/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_entrepreneurship-startups-entrepreneurship-activity-7160325850276474881-NK1Q'
                }
            ]
        },
        {
            title: 'Google Developer Student Group - UBC - Speaker',
            dates: 'January 2024',
            location: 'Vancouver, BC 🇨🇦',
            description:
                '💭🔥 Fireside Chat Session. I talked about my journey as a founder and CTO, and ways to become an entrepreneur, even as a student. ',
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdsc.community.dev/the-university-of-british-columbia-vancouver-canada/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/briantkho_the-long-awaited-devfest-canada-2023-ubc-activity-7137276460444127232-oxFv'
                }
            ]
        },

        {
            title: 'Google Developer Fest - Burnaby - Speaker',
            dates: 'January 2024',
            location: 'Vancouver, BC 🇨🇦',
            description: `I was part of an awesome panel discussion on "Conscious Leadership: How Can We Support Gender Equality in Tech. I was on this panel with: 🌟Dean Guest - Principal Managing Partner @ Workday, 🌟 Edmund Lee - Senior Technology Manager @ lululemon, 🌟 Martin Wulff - Senior Manager II @ Electronic Arts (EA)`,
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdg.community.dev/gdg-burnaby/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/gdgburnaby_consciousleadership-genderequalityintech-activity-7131472572017246210-Qda1'
                }
            ]
        },
        {
            title: 'Google Developer Fest - Vancouver - Speaker',
            dates: 'Februrary 2024',
            location: 'Vancouver, BC 🇨🇦',
            description: `Topic: How to go from 0-100,000 end users per month. The art of moving fast and scaling well with GCP. I discussed strategies for startups to move fast and scale effectively on Google Cloud Platform (GCP).`,
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdg.community.dev/gdg-vancouver/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_gcp-startups-cloudscaling-activity-7132450700621479936-9nZE'
                }
            ]
        },
        {
            title: 'UBC The Art Entrepreneurship 2023 - Speaker',
            dates: 'November 2023',
            location: 'Vancouver, BC 🇨🇦',
            description: `I spoke to UBC students about how to get into entrepreneurship as an arts student, and how to break into tech as an arts student.`,
            image: '/logos/ubc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://www.ubc.ca/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_ubc-entrepreneurship-tech-activity-7125569639262150656-KAuW'
                }
            ]
        },
        {
            title: 'Google Cloud Next - Attendee',
            dates: 'August 2023',
            location: 'San Francisco, CA 🇺🇸',
            description: `Attended Google Cloud Next and learned about bleeding edge technology in the cloud & AI. This includes early access and workshops on Vertex AI, Model Garden, and a first peak at GCP TPUs.`,
            image: '/logos/google_cloud_logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://cloud.withgoogle.com/next/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_i-just-got-back-from-google-cloud-next-23-activity-7104888107606446080-REWr'
                }
            ]
        },
        {
            title: 'Google Developer Fest - Vancouver - Speaker',
            dates: 'October 2023',
            location: 'Vancouver, BC 🇨🇦',
            description: `I had the opportunity to speak at Google i/o Vancouver! 
                🔥 My topic: Cracking the Code: Selling Your AI Startup's MVP Without Writing a Line of Code. 
                During the event, I shared our journey of selling our very first A.I.-based SaaS product to the Central Bank of India - and the best part? We achieved this without writing a single line of code! 🚀 `,
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdg.community.dev/gdg-vancouver/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_googleiovancouver-audio-google-activity-7089268047030423552-77mW'
                }
            ]
        },
        {
            title: `Collision Conf - ”Is 'Founder' in Your Future? A Candid Conversation with Some of Canada's Leading Youth Entrepreneurs"`,
            dates: 'October 2023',
            location: 'Toronto, ON 🇨🇦',
            description: `I spoke to an audience of young ambitious individuals who wanted to learn more about how to get started as a founder, what the journey has looked like, and the pitfalls to look out for (and the exciting moments!).   `,
            image: '/logos/collision_logo.jpg',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://vancouver.websummit.com/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/maxwellnicholson_it-was-a-pleasure-speaking-at-collision-conf-activity-7081770174739087361-hmbx'
                }
            ]
        },
        {
            title: 'Google Developer Student Group - Delft Netherlands - Speaker',
            dates: 'January 2024',
            location: 'Delft, Netherlands 🇳🇱',
            description: 'Fireside 🔥 chat on going from campus to company! How to Launch your startup out of university.',
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://dscdelft.nl/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_google-developers-startups-activity-7056707018111209472-XQjR'
                }
            ]
        },
        {
            title: 'Google Developer Student Group - Delft Technical University - Speaker',
            dates: 'March 2023',
            location: 'Delft, Netherlands 🇳🇱',
            description: 'Fireside 🔥 chat on going from campus to company! How to Launch your startup out of university.',
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://dscdelft.nl/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_google-developers-startups-activity-7056707018111209472-XQjR'
                }
            ]
        },
        {
            title: 'Google Developer Fest - Vancouver - Speaker',
            dates: 'November 2022',
            location: 'Vancouver, BC 🇨🇦',
            description: `I had the opportunity being a speaker at @googledevs fest Vancouver!
                            My topic was How to raise your first million💰 as an early stage startup 🚀!`,
            image: '/logos/gdsc-logo.png',
            links: [
                {
                    title: 'Website',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdg.community.dev/gdg-vancouver/'
                },
                {
                    title: 'LinkedIn Post',
                    icon: <Icons.linkedin className="h-4 w-4" />,
                    href: 'https://www.linkedin.com/posts/varun-d-sharma_google-googledevelopers-googledevfest2022-activity-7000581341754912768-IpV9'
                }
            ]
        }
    ]
} as const;
