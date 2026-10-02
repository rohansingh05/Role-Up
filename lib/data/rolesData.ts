import { CareerRole } from '../types';

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    tagline: 'Design, write, and optimize core software systems, robust algorithms, and scalable backends.',
    description: 'Software Engineers solve real-world computational problems through algorithms, systems engineering, clean object-oriented architecture, and performance engineering. This track prepares you for top product companies, high-frequency trading firms, and fast-growing tech startups.',
    averageSalary: '$110,000 - $155,000 / ₹12-28 LPA',
    demandLevel: 'Exceptional',
    badgeColor: 'from-blue-500 to-indigo-600',
    iconName: 'Terminal',
    primarySkills: [
      'Data Structures & Algorithms',
      'System Design Basics',
      'OOP & Clean Architecture',
      'Git & Version Control',
      'Databases & SQL',
      'Concurrency & Multithreading'
    ],
    requiredSkills: [
      'dsa',
      'oop-concepts',
      'databases-sql',
      'git-github',
      'system-design-basics',
      'operating-systems',
      'computer-networks'
    ],
    tools: ['Git', 'Docker', 'Linux CLI', 'Postman', 'VS Code', 'GDB/Debuggers', 'Jira'],
    interviewTopics: [
      'Binary Trees, Graphs & Dynamic Programming',
      'Time & Space Complexity analysis',
      'Low-Level Design (LLD) and Design Patterns',
      'DBMS indexing, transactions, and normalization',
      'OS memory management, deadlocks, and threads',
      'Behavioral STAR method questions'
    ],
    roadmapSteps: [
      {
        phase: 'Foundation',
        stepNumber: 1,
        title: 'Programming Language Mastery & Core CS',
        description: 'Master one core statically-typed language (C++, Java, or Go) along with memory model and OOP principles.',
        skills: ['C++ / Java / Python', 'OOP Principles', 'Memory Management'],
        estimatedWeeks: 4,
        milestone: 'Solve 50 fundamental coding challenges'
      },
      {
        phase: 'Core Algorithms',
        stepNumber: 2,
        title: 'Data Structures & Algorithmic Problem Solving',
        description: 'Deep dive into linear structures, trees, BSTs, graphs, dynamic programming, and greedy algorithms.',
        skills: ['DSA', 'Recursion & Backtracking', 'Graph Algorithms', 'DP'],
        estimatedWeeks: 8,
        milestone: 'Solve 150+ LeetCode medium/hard patterns'
      },
      {
        phase: 'Systems & Tooling',
        stepNumber: 3,
        title: 'Computer Systems, OS & Databases',
        description: 'Understand process scheduling, virtual memory, threads, socket programming, relational schema design, and SQL optimization.',
        skills: ['Operating Systems', 'Computer Networks', 'PostgreSQL / MySQL'],
        estimatedWeeks: 5,
        milestone: 'Build a multi-threaded web server or custom memory allocator'
      },
      {
        phase: 'Real-World Software',
        stepNumber: 4,
        title: 'Production Projects & High-Throughput APIs',
        description: 'Build backend microservices with proper caching (Redis), asynchronous queues, and automated unit test suites.',
        skills: ['RESTful APIs', 'Redis Caching', 'Unit & Integration Testing'],
        estimatedWeeks: 6,
        milestone: 'Deploy a high-concurrency API service with automated CI/CD'
      },
      {
        phase: 'Interview Acceleration',
        stepNumber: 5,
        title: 'System Design & Mock Coding Rounds',
        description: 'Practice high-pressure coding interviews, explain trade-offs clearly, and solve classic low-level design problems.',
        skills: ['System Design', 'Mock Interviews', 'Behavioral Preparation'],
        estimatedWeeks: 4,
        milestone: 'Pass 5 timed technical mock interviews'
      }
    ],
    internshipGuidance: [
      'Target Summer Analyst and SDE Intern openings 7-9 months before your graduation.',
      'Highlight 2 deep engineering projects with measurable performance metrics (e.g., "Reduced query latency by 45% using Redis").',
      'Ensure your GitHub profile showcases cleanly modularized code, unit tests, and comprehensive README documentation.'
    ],
    jobGuidance: [
      'Focus 60% of your prep time on Data Structures, 25% on Systems/Design, and 15% on Behavioral stories.',
      'Practice thinking out loud and asking clarifying questions before writing code in coding rounds.',
      'Network actively with university alumni who work at your target tech companies for referrals.'
    ]
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    tagline: 'Build end-to-end modern web applications from fluid interactive UIs to scalable cloud backends.',
    description: 'Full Stack Developers bridge user experience and backend cloud infrastructure. They build responsive frontends, design resilient REST and GraphQL APIs, manage database schemas, and deploy cloud-native applications with modern DevOps pipelines.',
    averageSalary: '$105,000 - $145,000 / ₹10-22 LPA',
    demandLevel: 'Very High',
    badgeColor: 'from-emerald-500 to-teal-600',
    iconName: 'Layout',
    primarySkills: [
      'Modern JavaScript & TypeScript',
      'React / Next.js',
      'Node.js & Express / NestJS',
      'PostgreSQL & Prisma ORM',
      'Tailwind CSS & Component Architecture',
      'Cloud Deployment & CI/CD'
    ],
    requiredSkills: [
      'javascript',
      'typescript',
      'react-nextjs',
      'node-express',
      'databases-sql',
      'git-github',
      'web-security'
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Postman', 'Vercel', 'Docker'],
    interviewTopics: [
      'DOM rendering, React Virtual DOM, and state management hooks',
      'REST API design conventions, status codes, and idempotency',
      'Authentication flows (JWT, Session cookies, OAuth2)',
      'Database indexing, N+1 query problems, and migrations',
      'Web security (CORS, CSRF, XSS prevention, SQL injection)',
      'Frontend performance optimization (LCP, bundle splitting, hydration)'
    ],
    roadmapSteps: [
      {
        phase: 'Frontend Foundations',
        stepNumber: 1,
        title: 'Modern Web Core & TypeScript',
        description: 'Master HTML5 semantics, CSS layouts (Flexbox/Grid), asynchronous JavaScript (Promises, async/await), and strict TypeScript typing.',
        skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'TypeScript Basics'],
        estimatedWeeks: 4,
        milestone: 'Build an interactive responsive dashboard with vanilla TS'
      },
      {
        phase: 'Component Architecture',
        stepNumber: 2,
        title: 'React Ecosystem & Next.js App Router',
        description: 'Learn component decomposition, state hooks, context, server-side rendering, streaming, and Tailwind CSS design systems.',
        skills: ['React Hooks', 'Next.js App Router', 'Tailwind CSS'],
        estimatedWeeks: 6,
        milestone: 'Ship a full client-side application with client-server data fetching'
      },
      {
        phase: 'Backend & Persistence',
        stepNumber: 3,
        title: 'Backend APIs, Authentication & Databases',
        description: 'Build secure REST APIs using Node.js/Express or Next.js route handlers, connect PostgreSQL with Prisma, and implement JWT/OAuth.',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Auth/JWT'],
        estimatedWeeks: 6,
        milestone: 'Create a multi-tenant SaaS API with role-based access control'
      },
      {
        phase: 'Production Engineering',
        stepNumber: 4,
        title: 'Full Stack Integration & Cloud Deployment',
        description: 'Integrate payments (Stripe), email notifications, caching with Redis, write automated tests (Playwright/Jest), and deploy to cloud.',
        skills: ['Testing', 'Redis Caching', 'Docker', 'Vercel / AWS'],
        estimatedWeeks: 5,
        milestone: 'Publish a production-ready SaaS with live users and database backups'
      },
      {
        phase: 'Portfolio & Job Launch',
        stepNumber: 5,
        title: 'Portfolio Showcase & Technical Round Prep',
        description: 'Assemble an interactive portfolio showcasing live projects, record 2-minute demo videos, and practice full stack coding challenges.',
        skills: ['Portfolio Building', 'Live Demo Hosting', 'Technical Interviews'],
        estimatedWeeks: 3,
        milestone: 'Publish public portfolio and apply to 20+ verified postings'
      }
    ],
    internshipGuidance: [
      'A live working link is worth 100 lines on a resume. Every project must be deployed with a live URL.',
      'Showcase clean UI design—recruiters often review your live web application on their phone or laptop.',
      'Contribute to popular open-source repositories to show you can collaborate in real codebases.'
    ],
    jobGuidance: [
      'Be prepared to write both a frontend component and a database schema during live coding pairs.',
      'Know the differences between Server-Side Rendering (SSR), Static Generation (SSG), and Client Rendering.',
      'Emphasize security and performance improvements in your interview discussions.'
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    tagline: 'Transform raw enterprise data into predictive models, business intelligence, and actionable insights.',
    description: 'Data Scientists apply advanced statistical modeling, exploratory data analysis, machine learning algorithms, and data visualization to uncover hidden patterns and drive data-driven decision making across tech, finance, healthcare, and e-commerce.',
    averageSalary: '$115,000 - $160,000 / ₹11-25 LPA',
    demandLevel: 'High',
    badgeColor: 'from-amber-500 to-orange-600',
    iconName: 'BarChart3',
    primarySkills: [
      'Python & Scientific Libraries (NumPy, Pandas)',
      'Advanced SQL & Data Warehousing',
      'Applied Probability & Statistics',
      'Supervised & Unsupervised Machine Learning',
      'Data Visualization (Matplotlib, Seaborn, Tableau)',
      'A/B Testing & Experimentation'
    ],
    requiredSkills: [
      'python-data-science',
      'sql-data-analytics',
      'statistics-probability',
      'machine-learning-foundations',
      'data-visualization',
      'git-github'
    ],
    tools: ['Jupyter', 'Pandas', 'NumPy', 'Scikit-Learn', 'SQL', 'Tableau', 'BigQuery', 'Git'],
    interviewTopics: [
      'Hypothesis testing, p-values, Central Limit Theorem, and confidence intervals',
      'Feature engineering, handling missing values, and outlier detection',
      'Model evaluation metrics (ROC-AUC, Precision-Recall, F1-score, RMSE)',
      'Bias-variance tradeoff, regularization (L1/L2), and cross-validation',
      'Complex SQL queries (Window functions, CTEs, self-joins, aggregations)',
      'Designing robust A/B tests with sample size calculation and power analysis'
    ],
    roadmapSteps: [
      {
        phase: 'Mathematical Foundations',
        stepNumber: 1,
        title: 'Linear Algebra, Calculus & Statistics',
        description: 'Understand distributions, Bayes theorem, hypothesis testing, matrix operations, and regression fundamentals.',
        skills: ['Probability', 'Inferential Statistics', 'Linear Algebra'],
        estimatedWeeks: 4,
        milestone: 'Perform rigorous statistical tests on empirical datasets'
      },
      {
        phase: 'Data Wrangling',
        stepNumber: 2,
        title: 'Python for Data Analysis & Advanced SQL',
        description: 'Master Pandas, NumPy, data cleaning, exploratory data analysis (EDA), and complex SQL window functions.',
        skills: ['Python', 'Pandas', 'NumPy', 'Advanced SQL'],
        estimatedWeeks: 5,
        milestone: 'Complete 3 end-to-end exploratory data analysis reports'
      },
      {
        phase: 'Machine Learning',
        stepNumber: 3,
        title: 'Applied Machine Learning & Scikit-Learn',
        description: 'Build predictive pipelines: Linear/Logistic regression, Decision Trees, Random Forests, XGBoost, and clustering.',
        skills: ['Scikit-Learn', 'Feature Engineering', 'Model Tuning'],
        estimatedWeeks: 6,
        milestone: 'Rank in top 20% on a competitive Kaggle dataset'
      },
      {
        phase: 'Business Impact',
        stepNumber: 4,
        title: 'A/B Testing, Experimentation & Dashboards',
        description: 'Learn product analytics metrics (retention, churn, LTV), construct executive dashboards, and design statistical experiments.',
        skills: ['A/B Testing', 'Tableau / Streamlit', 'Business Storytelling'],
        estimatedWeeks: 4,
        milestone: 'Ship an interactive Streamlit analytics dashboard with live ML predictions'
      },
      {
        phase: 'Career Readiness',
        stepNumber: 5,
        title: 'Data Science Case Studies & Technical Rounds',
        description: 'Practice product sense case questions, live SQL query writing, and ML architecture case interviews.',
        skills: ['SQL Live Coding', 'Product Analytics Cases', 'Resume Packaging'],
        estimatedWeeks: 4,
        milestone: 'Complete 10 mock data science interviews'
      }
    ],
    internshipGuidance: [
      'Publish your analyses as interactive notebooks or Streamlit web apps so recruiters can play with your insights.',
      'Showcase domain knowledge in a specific vertical (e.g., healthcare analytics, churn prediction, fraud detection).',
      'Emphasize how your model drives business value, not just high accuracy scores.'
    ],
    jobGuidance: [
      'Expect a live SQL screening round—practice window functions and aggregations daily.',
      'Always justify your metric choice (e.g., why choose Recall over Precision for cancer detection).',
      'Prepare a 5-minute concise presentation walk-through for your best machine learning project.'
    ]
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI / ML Engineer',
    tagline: 'Architect deep neural networks, Large Language Models (LLMs), and production AI pipelines.',
    description: 'AI and Machine Learning Engineers turn state-of-the-art research into production-grade systems. They build neural architectures with PyTorch, fine-tune open-source LLMs, implement Retrieval-Augmented Generation (RAG), and deploy low-latency inference pipelines.',
    averageSalary: '$125,000 - $175,000 / ₹14-35 LPA',
    demandLevel: 'Exceptional',
    badgeColor: 'from-purple-500 to-pink-600',
    iconName: 'Cpu',
    primarySkills: [
      'Deep Learning & PyTorch',
      'Natural Language Processing & Transformers',
      'LLM Fine-tuning & RAG Architectures',
      'Vector Databases & Semantic Search',
      'MLOps & Production Model Serving (FastAPI, ONNX)',
      'Computer Vision & Diffusion Models'
    ],
    requiredSkills: [
      'deep-learning-pytorch',
      'transformers-nlp',
      'rag-vector-db',
      'mlops-model-serving',
      'python-data-science',
      'math-for-ai'
    ],
    tools: ['PyTorch', 'Hugging Face', 'LangChain / LlamaIndex', 'Pinecone / Qdrant', 'FastAPI', 'Docker', 'Weights & Biases', 'CUDA'],
    interviewTopics: [
      'Attention mechanism, Transformer architecture, and self-attention math',
      'RAG pipeline components: chunking strategies, embeddings, reranking, and hallucination reduction',
      'Model optimization: quantization (LoRA, QLoRA, GGUF), pruning, and KV-cache',
      'Loss functions, backpropagation math, and optimization algorithms (Adam, AdamW)',
      'Scaling laws, distributed training (DDP, FSDP), and GPU memory management',
      'AI safety, guardrails, and latency optimization for real-time inference'
    ],
    roadmapSteps: [
      {
        phase: 'Mathematical Rigor',
        stepNumber: 1,
        title: 'Vector Math, Multivariate Calculus & Deep Learning Basics',
        description: 'Understand gradient descent, computational graphs, matrix derivatives, and feedforward neural network implementations from scratch.',
        skills: ['Linear Algebra', 'Multivariate Calculus', 'Neural Nets from Scratch'],
        estimatedWeeks: 4,
        milestone: 'Implement a multi-layer perceptron and backprop using pure NumPy'
      },
      {
        phase: 'Deep Learning Frameworks',
        stepNumber: 2,
        title: 'PyTorch Mastery, CNNs & Sequence Models',
        description: 'Train deep convolutional networks, transfer learning architectures, and recurrent models with PyTorch on GPUs.',
        skills: ['PyTorch', 'Computer Vision', 'CUDA Basics'],
        estimatedWeeks: 6,
        milestone: 'Train an image classification and segmentation model on custom datasets'
      },
      {
        phase: 'Modern NLP & Transformers',
        stepNumber: 3,
        title: 'Transformers, Attention & Hugging Face',
        description: 'Deconstruct BERT, GPT, multi-head attention, tokenization, positional encodings, and Hugging Face ecosystem.',
        skills: ['Transformers', 'Hugging Face Transformers', 'Tokenizers'],
        estimatedWeeks: 6,
        milestone: 'Fine-tune a language model for domain-specific text generation'
      },
      {
        phase: 'Generative AI & LLMs',
        stepNumber: 4,
        title: 'Production RAG, Vector Databases & Agents',
        description: 'Build robust Retrieval-Augmented Generation systems using Qdrant/Pinecone, LangChain, semantic rerankers, and autonomous agents.',
        skills: ['Vector DBs', 'RAG Architecture', 'Prompt Engineering', 'LangChain'],
        estimatedWeeks: 5,
        milestone: 'Deploy an enterprise RAG assistant with evaluation benchmarks'
      },
      {
        phase: 'MLOps & Deployment',
        stepNumber: 5,
        title: 'Model Serving, Quantization & Latency Profiling',
        description: 'Containerize models with Docker, serve with FastAPI / vLLM, quantize weights with 4-bit LoRA, and monitor latency in production.',
        skills: ['FastAPI', 'vLLM / ONNX', 'Docker', 'MLOps'],
        estimatedWeeks: 4,
        milestone: 'Deploy a sub-100ms streaming LLM API with telemetry'
      }
    ],
    internshipGuidance: [
      'Build non-trivial GenAI projects—avoid generic "wrapper" apps. Demonstrate custom retrieval chunking, hybrid search, or fine-tuning.',
      'Show that you understand GPU costs, token economics, and latency constraints.',
      'Document your model evaluation metrics clearly in your project GitHub repository.'
    ],
    jobGuidance: [
      'Be ready to derive backpropagation formulas or draw the Transformer encoder-decoder blocks on a whiteboard.',
      'Highlight real hands-on experience handling context windows, embeddings, and prompt caching.',
      'Prepare code samples demonstrating clean PyTorch dataset loaders and inference pipelines.'
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    tagline: 'Defend systems, analyze threat vectors, conduct penetration audits, and harden digital infrastructure.',
    description: 'Cybersecurity Analysts protect networks, cloud environments, and sensitive applications from cyber adversaries. They monitor security operations centers (SOC), analyze malware, conduct vulnerability assessments, perform digital forensics, and implement zero-trust frameworks.',
    averageSalary: '$98,000 - $140,000 / ₹9-20 LPA',
    demandLevel: 'High',
    badgeColor: 'from-rose-500 to-red-600',
    iconName: 'ShieldCheck',
    primarySkills: [
      'Network Security & Protocol Analysis (Wireshark)',
      'Linux Security & Bash Scripting',
      'SIEM Tools & Log Analysis (Splunk, Elastic)',
      'Ethical Hacking & Vulnerability Assessment',
      'Web Application Security (OWASP Top 10)',
      'Incident Response & Digital Forensics'
    ],
    requiredSkills: [
      'networking-security',
      'linux-fundamentals',
      'owasp-top-10',
      'siem-log-analysis',
      'incident-response',
      'cryptography-basics'
    ],
    tools: ['Wireshark', 'Nmap', 'Burp Suite', 'Splunk', 'Metasploit', 'Linux (Kali/Ubuntu)', 'Snort', 'Ghidra'],
    interviewTopics: [
      'OSI model breakdown, TCP 3-way handshake, DNS security, and SSL/TLS handshakes',
      'OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR, SSRF) and defensive remediations',
      'Public Key Infrastructure (PKI), symmetric vs asymmetric encryption, and digital signatures',
      'Incident response lifecycle (Preparation, Detection, Containment, Eradication, Recovery)',
      'Active Directory security, privilege escalation techniques, and Kerberos attacks',
      'SIEM query construction and identifying anomalies in firewall and auth logs'
    ],
    roadmapSteps: [
      {
        phase: 'Network & System Core',
        stepNumber: 1,
        title: 'Computer Networks, Protocols & Linux',
        description: 'Understand TCP/IP, subnetting, packet analysis with Wireshark, DNS, DHCP, and Linux administration.',
        skills: ['Networking Protocols', 'Wireshark', 'Linux Administration'],
        estimatedWeeks: 4,
        milestone: 'Capture and dissect 15 different protocol packet dumps'
      },
      {
        phase: 'Defensive Operations',
        stepNumber: 2,
        title: 'SOC Operations, SIEM & Threat Detection',
        description: 'Deploy open-source SIEM (Wazuh/Elastic), configure Snort IDS rules, and analyze enterprise authentication logs.',
        skills: ['SIEM Logging', 'IDS/IPS Rules', 'Threat Intelligence'],
        estimatedWeeks: 5,
        milestone: 'Configure a virtual SOC lab detecting simulated brute-force attacks'
      },
      {
        phase: 'Web & App Security',
        stepNumber: 3,
        title: 'OWASP Top 10 & Vulnerability Assessments',
        description: 'Audit web applications with Burp Suite, identify SQLi, XSS, broken access control, and practice on PortSwigger Web Security Academy.',
        skills: ['OWASP Top 10', 'Burp Suite', 'Vulnerability Scanning'],
        estimatedWeeks: 6,
        milestone: 'Complete PortSwigger Web Security Academy Practitioner labs'
      },
      {
        phase: 'Forensics & Hardening',
        stepNumber: 4,
        title: 'Digital Forensics & Cloud Security',
        description: 'Memory analysis with Volatility, disk forensics with Autopsy, AWS/Azure security posture management, and Zero Trust concepts.',
        skills: ['Digital Forensics', 'Memory Analysis', 'Cloud Security'],
        estimatedWeeks: 5,
        milestone: 'Analyze a compromised virtual machine and publish an incident report'
      },
      {
        phase: 'Certifications & Job Hunt',
        stepNumber: 5,
        title: 'Certification Prep (Security+, CEH) & Portfolio',
        description: 'Document home lab setups on GitHub, write technical writeups of CTF challenges, and prepare for SOC analyst interviews.',
        skills: ['CompTIA Security+ Prep', 'CTF Writeups', 'Mock Technical Scenarios'],
        estimatedWeeks: 4,
        milestone: 'Publish 5 high-quality walkthroughs of TryHackMe / HackTheBox machines'
      }
    ],
    internshipGuidance: [
      'Home labs matter immensely: document your virtual SOC lab setup with network diagrams and screenshots.',
      'Participate actively in CTFs (Capture The Flag) and link your TryHackMe or HackTheBox rank on your resume.',
      'Obtaining entry-level certifications like CompTIA Security+ or Google Cybersecurity Certificate helps clear initial HR screening.'
    ],
    jobGuidance: [
      'Be prepared to analyze a Wireshark pcap file or a firewall log snippet live during the interview.',
      'Clearly articulate the difference between threat hunting and reactive incident triage.',
      'Understand compliance standards relevant to target industries (SOC 2, ISO 27001, HIPAA).'
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps / Cloud Engineer',
    tagline: 'Automate deployments, orchestrate Kubernetes clusters, and architect resilient cloud systems.',
    description: 'DevOps Engineers bridge software development and operations. They construct high-speed CI/CD pipelines, manage infrastructure as code with Terraform, orchestrate microservices with Kubernetes, and maintain high availability with modern observability and telemetry.',
    averageSalary: '$115,000 - $160,000 / ₹11-26 LPA',
    demandLevel: 'Very High',
    badgeColor: 'from-cyan-500 to-blue-600',
    iconName: 'CloudCog',
    primarySkills: [
      'Linux Administration & Shell Scripting',
      'Docker Containerization & Best Practices',
      'Kubernetes Cluster Orchestration',
      'Infrastructure as Code (Terraform)',
      'CI/CD Pipelines (GitHub Actions, GitLab CI)',
      'Observability & Monitoring (Prometheus, Grafana)'
    ],
    requiredSkills: [
      'linux-fundamentals',
      'docker-containers',
      'kubernetes-orchestration',
      'terraform-iac',
      'cicd-github-actions',
      'monitoring-observability'
    ],
    tools: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS / GCP', 'Prometheus', 'Grafana', 'Helm', 'ArgoCD'],
    interviewTopics: [
      'Container internals: namespaces, cgroups, layered filesystem, and multi-stage builds',
      'Kubernetes primitives: Pods, Deployments, Services, Ingress, ConfigMaps, and StatefulSets',
      'Terraform state management, lock files, modules, and drift detection',
      'Designing zero-downtime deployment strategies (Blue-Green, Canary, Rolling updates)',
      'CI/CD best practices: automated artifact building, security scanning, and pipeline caching',
      'Incident management, SLOs/SLAs/SLIs, and root cause analysis of system outages'
    ],
    roadmapSteps: [
      {
        phase: 'Systems & Scripting',
        stepNumber: 1,
        title: 'Linux Systems & Automation with Bash/Python',
        description: 'Master systemd, process monitoring, networking utilities (curl, dig, netstat), SSH hardening, and automated shell scripts.',
        skills: ['Advanced Linux', 'Bash Scripting', 'Python Automation'],
        estimatedWeeks: 4,
        milestone: 'Automate system backups and health checks across remote virtual machines'
      },
      {
        phase: 'Containerization',
        stepNumber: 2,
        title: 'Docker & Microservices Architecture',
        description: 'Write optimized Dockerfiles, reduce image sizes using multi-stage builds, manage Docker Compose stacks, and container networking.',
        skills: ['Docker', 'Docker Compose', 'Container Security'],
        estimatedWeeks: 4,
        milestone: 'Containerize a 3-tier polyglot web application with persistent volumes'
      },
      {
        phase: 'Cloud & Infrastructure as Code',
        stepNumber: 3,
        title: 'Cloud Platforms (AWS/GCP) & Terraform',
        description: 'Provision VPCs, subnets, EC2 instances, S3 buckets, and RDS instances declaratively using Terraform state and modules.',
        skills: ['AWS / GCP Basics', 'Terraform', 'Cloud Architecture'],
        estimatedWeeks: 6,
        milestone: 'Deploy a fault-tolerant multi-AZ cloud architecture via 100% Terraform code'
      },
      {
        phase: 'Orchestration & CI/CD',
        stepNumber: 4,
        title: 'Kubernetes Orchestration & GitOps CI/CD',
        description: 'Deploy Kubernetes clusters, write Helm charts, configure ingress controllers, and set up automated deployments with GitHub Actions and ArgoCD.',
        skills: ['Kubernetes', 'Helm', 'GitHub Actions', 'ArgoCD'],
        estimatedWeeks: 6,
        milestone: 'Deploy an automated GitOps deployment pipeline to a live Kubernetes cluster'
      },
      {
        phase: 'Observability & SRE',
        stepNumber: 5,
        title: 'Prometheus, Grafana Telemetry & SRE Readiness',
        description: 'Instrument applications with metrics, configure Prometheus scraping, build Grafana dashboards, set up PagerDuty alerts, and practice SRE post-mortems.',
        skills: ['Prometheus', 'Grafana', 'Log Aggregation', 'SRE Principles'],
        estimatedWeeks: 4,
        milestone: 'Build a production monitoring suite with custom metric alert thresholds'
      }
    ],
    internshipGuidance: [
      'DevOps portfolios must feature public GitHub repositories containing clean Terraform configurations and GitHub Actions workflows.',
      'Showcase cost-awareness: demonstrate how you designed cloud architectures to stay within free-tier limits or minimize egress fees.',
      'Include architecture diagrams (Mermaid or Draw.io) in every infrastructure project repository.'
    ],
    jobGuidance: [
      'Be prepared to debug a broken Dockerfile or fix a failing Kubernetes pod status (CrashLoopBackOff) live.',
      'Explain how you ensure secret management (Vault, AWS Secrets Manager) without committing API keys.',
      'Emphasize high availability and disaster recovery strategies in scenario questions.'
    ]
  }
];
