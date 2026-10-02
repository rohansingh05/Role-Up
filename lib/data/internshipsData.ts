import { InternshipListing } from '../types';

export const INTERNSHIPS_DATABASE: InternshipListing[] = [
  {
    id: 'intern-1',
    company: 'Stripe',
    role: 'Software Engineering Intern - Core Infrastructure',
    roleCategory: 'software-engineer',
    type: 'Internship',
    location: 'San Francisco, CA / Seattle, WA',
    isRemote: true,
    stipend: '$58 / hr + Housing Stipend',
    duration: '12 Weeks (Summer)',
    deadline: '2026-11-15',
    postedDate: '3 days ago',
    skillsRequired: ['Data Structures & Algorithms', 'Go / Java', 'Distributed Systems', 'Git'],
    experienceLevel: 'Fresher / Student',
    description: 'Join Stripe\'s infrastructure engineering team to design, build, and maintain the fault-tolerant distributed systems that power global financial commerce.',
    responsibilities: [
      'Write scalable, production-grade microservices handling millions of financial events per day',
      'Optimize database query performance and cache invalidation strategies',
      'Collaborate with staff engineers on distributed consensus protocols and reliability',
      'Write automated unit and integration tests with comprehensive test coverage'
    ],
    benefits: [
      'Dedicated 1-on-1 mentorship from senior staff engineers',
      'Generous relocation allowance and round-trip flights',
      'High return-offer rate for full-time new grad positions'
    ],
    applyLink: 'https://stripe.com/jobs'
  },
  {
    id: 'intern-2',
    company: 'Vercel',
    role: 'Full Stack Developer Intern - Next.js Core & DX',
    roleCategory: 'full-stack-developer',
    type: 'Internship',
    location: 'Remote (Global)',
    isRemote: true,
    stipend: '$50 / hr',
    duration: '12-16 Weeks',
    deadline: '2026-11-30',
    postedDate: '1 week ago',
    skillsRequired: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    experienceLevel: 'Any Year',
    description: 'Help build the future of the web. Work on open-source Next.js tooling, developer dashboards, and server-side rendering performance.',
    responsibilities: [
      'Contribute to Next.js open-source features, documentation, and starter templates',
      'Build performant frontend UI components using React Server Components',
      'Profile client bundle sizes and optimize hydration times across real-world web apps',
      'Participate in RFC discussions and community issue triage'
    ],
    benefits: [
      'Full home-office equipment budget ($1,500)',
      'Direct interaction with world-class open-source frontend architects',
      'Flexible working hours across all timezones'
    ],
    applyLink: 'https://vercel.com/careers'
  },
  {
    id: 'intern-3',
    company: 'Spotify',
    role: 'Data Science Intern - Discovery & Personalization',
    roleCategory: 'data-scientist',
    type: 'Internship',
    location: 'New York, NY / Boston, MA',
    isRemote: false,
    stipend: '$52 / hr + Subsidized Housing',
    duration: '10 Weeks (Summer)',
    deadline: '2026-11-20',
    postedDate: '5 days ago',
    skillsRequired: ['Python', 'SQL', 'A/B Testing', 'Statistics', 'Pandas'],
    experienceLevel: 'Fresher / Student',
    description: 'Analyze listener behavior and run statistical experiments to enhance Discover Weekly and personalized recommendation algorithms.',
    responsibilities: [
      'Formulate statistical hypotheses and design robust A/B tests with power analysis',
      'Extract insights from multi-terabyte BigQuery event tables using advanced SQL',
      'Build predictive retention and churn models using Scikit-Learn and XGBoost',
      'Present findings and actionable product recommendations to executive leadership'
    ],
    benefits: [
      'Free Spotify Premium for life',
      'Access to state-of-the-art internal machine learning platforms',
      'Housing in Manhattan or Brooklyn provided'
    ],
    applyLink: 'https://spotifyjobs.com'
  },
  {
    id: 'intern-4',
    company: 'Anthropic',
    role: 'AI / Research Engineering Intern - Systems & Scaling',
    roleCategory: 'ai-ml-engineer',
    type: 'Internship',
    location: 'San Francisco, CA',
    isRemote: false,
    stipend: '$65 / hr + Relocation',
    duration: '12-16 Weeks',
    deadline: '2026-12-01',
    postedDate: '2 days ago',
    skillsRequired: ['PyTorch', 'Transformers', 'CUDA', 'Python', 'Distributed Training'],
    experienceLevel: 'Final Year',
    description: 'Work at the frontier of AI research. Assist in training, evaluating, and aligning state-of-the-art Claude large language models.',
    responsibilities: [
      'Develop distributed PyTorch training routines across hundreds of GPUs',
      'Implement evaluation benchmarks measuring reasoning, code generation, and safety',
      'Optimize tensor parallelism and memory consumption during LLM inference',
      'Analyze attention head activations and interpretability representations'
    ],
    benefits: [
      'Direct co-authorship on top-tier machine learning research papers',
      'Generous computational budget and dedicated H100 GPU clusters',
      'Catered daily gourmet meals and commuter transit passes'
    ],
    applyLink: 'https://anthropic.com/careers'
  },
  {
    id: 'intern-5',
    company: 'CrowdStrike',
    role: 'Cybersecurity Threat Hunter & SOC Intern',
    roleCategory: 'cybersecurity-analyst',
    type: 'Internship',
    location: 'Austin, TX / Remote',
    isRemote: true,
    stipend: '$44 / hr',
    duration: '12 Weeks',
    deadline: '2026-11-25',
    postedDate: '4 days ago',
    skillsRequired: ['Network Protocols', 'Wireshark', 'Linux', 'SIEM / Splunk', 'Python'],
    experienceLevel: 'Fresher / Student',
    description: 'Defend Fortune 500 networks against nation-state threat actors, analyze novel malware samples, and engineer detection rules.',
    responsibilities: [
      'Triage real-time alerts generated across millions of Falcon endpoint sensors',
      'Perform root cause investigation on suspicious network beacons and lateral movements',
      'Write custom Sigma and YARA rules to detect emerging ransomware strains',
      'Collaborate with incident response leads on simulated red-team intrusions'
    ],
    benefits: [
      'Sponsored certification vouchers (CompTIA Security+ / CySA+)',
      'Exposure to real-world zero-day exploit analysis',
      'Weekly tech talks with world-renowned cybersecurity researchers'
    ],
    applyLink: 'https://crowdstrike.com/careers'
  },
  {
    id: 'intern-6',
    company: 'Datadog',
    role: 'Cloud Infrastructure & SRE Intern',
    roleCategory: 'devops-engineer',
    type: 'Internship',
    location: 'New York, NY / Remote',
    isRemote: true,
    stipend: '$48 / hr',
    duration: '12 Weeks',
    deadline: '2026-12-10',
    postedDate: '6 days ago',
    skillsRequired: ['Linux', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
    experienceLevel: 'Any Year',
    description: 'Build observability infrastructure operating at hyper-scale. Manage multi-cloud Kubernetes clusters processing trillions of daily telemetry points.',
    responsibilities: [
      'Provision resilient cloud networks and compute instances via modular Terraform',
      'Improve automated CI/CD pipeline speed and reliability using GitHub Actions',
      'Debug container networking bottlenecks and configure ingress controllers',
      'Create high-visibility Grafana monitoring dashboards for critical service SLOs'
    ],
    benefits: [
      'Comprehensive mentorship program with dedicated SRE pairing sessions',
      'Wellness stipend and tech gadget allowance',
      'Pre-placement full-time hiring fast-track'
    ],
    applyLink: 'https://datadoghq.com/careers'
  },
  {
    id: 'intern-7',
    company: 'Razorpay',
    role: 'Software Development Engineer - Backend (Fresher)',
    roleCategory: 'software-engineer',
    type: 'Full-Time',
    location: 'Bangalore, India / Hybrid',
    isRemote: false,
    stipend: '₹18,00,000 - ₹24,00,000 / annum',
    duration: 'Full-Time Permanent',
    deadline: '2026-11-28',
    postedDate: 'Just now',
    skillsRequired: ['DSA', 'Golang / Java', 'PostgreSQL', 'Redis', 'Kafka'],
    experienceLevel: 'Fresher / Student',
    description: 'Build mission-critical payment processing engines that process over 8 billion dollars in annualized payment volume across India.',
    responsibilities: [
      'Design idempotent payment APIs with 99.999% uptime guarantees',
      'Handle millions of concurrent webhook dispatches with Kafka queues',
      'Tune PostgreSQL database schemas and implement distributed Redis caching'
    ],
    benefits: [
      'Generous ESOP stock options for new college graduates',
      'Comprehensive medical insurance covering family members',
      'Annual learning and conference sponsorship'
    ],
    applyLink: 'https://razorpay.com/jobs'
  },
  {
    id: 'intern-8',
    company: 'Postman',
    role: 'Full Stack Engineer - Platform Team (Fresher)',
    roleCategory: 'full-stack-developer',
    type: 'Full-Time',
    location: 'Remote (India/US)',
    isRemote: true,
    stipend: '₹16,00,000 - ₹22,00,000 / annum',
    duration: 'Full-Time Permanent',
    deadline: '2026-12-15',
    postedDate: '1 day ago',
    skillsRequired: ['TypeScript', 'React', 'Node.js', 'REST APIs', 'WebSockets'],
    experienceLevel: 'Fresher / Student',
    description: 'Empower over 30 million software engineers worldwide. Build features for the premier API development and collaboration platform.',
    responsibilities: [
      'Ship polished, keyboard-accessible UI features in React and TypeScript',
      'Collaborate on high-throughput backend services and real-time collaboration engines',
      'Write end-to-end integration tests preventing customer regressions'
    ],
    benefits: [
      '100% remote-first work culture with home office stipend',
      'Unlimited paid time off and quarterly company recharge days',
      'Top-tier hardware (16-inch M3 MacBook Pro provided)'
    ],
    applyLink: 'https://postman.com/careers'
  }
];
