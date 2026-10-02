import { ProjectDetail } from '../types';

export const PROJECTS_DATABASE: ProjectDetail[] = [
  // Beginner Projects
  {
    id: 'proj-personal-portfolio',
    title: 'Developer Portfolio & Interactive Project Showcase',
    difficulty: 'Beginner',
    roleId: 'full-stack-developer',
    skills: ['HTML5 & CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    estimatedHours: 15,
    summary: 'A responsive developer portfolio highlighting personal projects, technical skills, interactive contact modal, and downloadable resume with fast Core Web Vitals.',
    requirements: [
      'Fully responsive across mobile, tablet, and widescreen displays',
      'Dark mode and light mode toggle with state persistence in LocalStorage',
      'Filterable project cards with category tags (Full Stack, Algorithms, AI)',
      'Accessible contact form with client-side regex email validation',
      '100/100 Lighthouse performance and accessibility score'
    ],
    stepByStepRoadmap: [
      { step: 1, title: 'Wireframing & Semantic Layout', description: 'Draft hero, about, projects grid, skill badges, and contact section in semantic HTML5 tags.' },
      { step: 2, title: 'Tailwind CSS Styling & Theme Setup', description: 'Configure custom color scheme, font tokens, and dark mode class triggers.' },
      { step: 3, title: 'Dynamic Project Rendering & Filters', description: 'Store project data in a JSON array and implement vanilla JS or React filter buttons.' },
      { step: 4, title: 'Interactive Features & Polish', description: 'Add smooth scroll, copy-to-clipboard buttons for email, and live modal previews.' },
      { step: 5, title: 'Deployment to Vercel / GitHub Pages', description: 'Set up custom domain, meta OpenGraph tags, and test mobile responsiveness.' }
    ],
    suggestedStack: ['Next.js', 'React', 'Tailwind CSS', 'Lucide Icons', 'Vercel'],
    portfolioHighlight: 'Demonstrates strong visual design sense, accessibility compliance, and pixel-perfect mobile-first execution.'
  },
  {
    id: 'proj-algo-visualizer',
    title: 'Interactive Algorithm & Sorting Visualizer',
    difficulty: 'Beginner',
    roleId: 'software-engineer',
    skills: ['Data Structures & Algorithms', 'JavaScript / TypeScript', 'Canvas / DOM Manipulation'],
    estimatedHours: 20,
    summary: 'A web-based visualizer for sorting algorithms (Bubble, Merge, Quick Sort) and pathfinding algorithms (Dijkstra, A* Search) with speed and array size controls.',
    requirements: [
      'Real-time animated array bars representing comparisons and swaps',
      'User controls: Play, Pause, Step-by-Step, Speed Slider, and Array Randomizer',
      'Metrics readout: Number of comparisons, swaps, and total execution time',
      'Grid-based pathfinding visualizer with obstacle drawing capability'
    ],
    stepByStepRoadmap: [
      { step: 1, title: 'State & Canvas Architecture', description: 'Design animation frame loop and async generator pattern for pausing execution.' },
      { step: 2, title: 'Sorting Algorithm Implementations', description: 'Write generator versions of Bubble, Insertion, Merge, and Quick Sort.' },
      { step: 3, title: 'Bar Rendering & Color Coded States', description: 'Highlight comparing bars in yellow, swapping in red, and sorted in green.' },
      { step: 4, title: 'Pathfinding Grid (BFS/Dijkstra)', description: 'Implement 2D coordinate grid with wall placement and frontier expansion animation.' }
    ],
    suggestedStack: ['TypeScript', 'HTML5 Canvas', 'CSS Modules / Tailwind'],
    portfolioHighlight: 'Proves a deep foundational understanding of algorithm mechanics, time complexity, and asynchronous JavaScript.'
  },
  {
    id: 'proj-weather-dashboard',
    title: 'Global Weather & Environmental Intelligence App',
    difficulty: 'Beginner',
    roleId: 'full-stack-developer',
    skills: ['REST APIs', 'Async JavaScript', 'Geolocation API', 'CSS Grid'],
    estimatedHours: 12,
    summary: 'A weather app consuming OpenWeather API with 7-day forecast charts, air quality index, hourly temperature breakdown, and location autocomplete.',
    requirements: [
      'Search city with debounced autocomplete suggestions',
      'Fetch current weather, humidity, UV index, and wind velocity',
      'Geolocation detection to load user\'s current local weather automatically',
      'Offline caching using LocalStorage for the last 5 searched cities'
    ],
    stepByStepRoadmap: [
      { step: 1, title: 'API Key & Service Architecture', description: 'Set up OpenWeather API requests and error handling for invalid cities.' },
      { step: 2, title: 'UI Layout & Weather Icons', description: 'Design weather cards with dynamic backgrounds reflecting weather condition (rain, sun, snow).' },
      { step: 3, title: 'Forecast Visuals & LocalStorage Cache', description: 'Render temperature line graphs and persist user favorite cities.' }
    ],
    suggestedStack: ['React', 'Tailwind CSS', 'Recharts / Chart.js', 'OpenWeatherMap API'],
    portfolioHighlight: 'Demonstrates robust error handling, third-party API integration, and asynchronous data management.'
  },

  // Intermediate Projects
  {
    id: 'proj-collaborative-kanban',
    title: 'Real-Time Collaborative Project Kanban Board',
    difficulty: 'Intermediate',
    roleId: 'full-stack-developer',
    skills: ['React / Next.js', 'Node.js', 'WebSockets / Supabase', 'PostgreSQL', 'Drag & Drop'],
    estimatedHours: 45,
    summary: 'A full-stack project management application with drag-and-drop task boards, multi-user real-time updates, activity audit logs, and role-based permissions.',
    requirements: [
      'Multi-column boards (Backlog, In Progress, Review, Done) with drag-and-drop',
      'Real-time synchronization across multiple active browser tabs using WebSockets',
      'User authentication with JWT / OAuth (Google, GitHub)',
      'Task details: Markdown descriptions, assignees, due dates, labels, and file attachments',
      'Activity timeline tracking who moved or edited each card'
    ],
    stepByStepRoadmap: [
      { step: 1, title: 'Relational Database Schema', description: 'Design tables for Workspaces, Boards, Columns, Tasks, and Comments in PostgreSQL.' },
      { step: 2, title: 'Backend REST & WebSocket Endpoints', description: 'Build API routes for board CRUD and set up socket event listeners.' },
      { step: 3, title: 'Frontend Drag-and-Drop Implementation', description: 'Integrate `@hello-pangea/dnd` or `@dnd-kit` with optimistic UI updates.' },
      { step: 4, title: 'Real-time Presence & Notifications', description: 'Show avatars of users currently viewing or editing the board.' }
    ],
    suggestedStack: ['Next.js App Router', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Socket.io / Supabase Realtime'],
    portfolioHighlight: 'Showcases end-to-end full-stack capabilities, optimistic UI state management, and real-time multiplayer architecture.'
  },
  {
    id: 'proj-distributed-task-queue',
    title: 'High-Throughput Distributed Task Queue & Worker System',
    difficulty: 'Intermediate',
    roleId: 'software-engineer',
    skills: ['Distributed Systems', 'Redis', 'Node.js / Go', 'Concurrency', 'Docker'],
    estimatedHours: 40,
    summary: 'A resilient job queue processing delayed, recurring, and priority background jobs with automatic retries, dead-letter queues, and an executive monitoring dashboard.',
    requirements: [
      'Producer-consumer pattern using Redis Streams or BullMQ',
      'Support priority jobs, delayed executions, and exponential backoff retry policies',
      'Dead-letter queue (DLQ) for failed tasks with manual retry triggers',
      'Worker pool that scales horizontally with concurrency limits',
      'Web-based admin metrics UI displaying job throughput and failure rates'
    ],
    stepByStepRoadmap: [
      { step: 1, title: 'Queue Architecture & Redis Client', description: 'Implement atomic enqueue and dequeue operations using Redis data structures.' },
      { step: 2, title: 'Worker Pool & Concurrency Manager', description: 'Build worker threads that process tasks with timeouts and crash isolation.' },
      { step: 3, title: 'Retry Engine & Dead Letter Queue', description: 'Implement exponential backoff with jitter and error logging.' },
      { step: 4, title: 'Metrics API & Dashboard', description: 'Expose Prometheus metrics or build an internal Next.js telemetry panel.' }
    ],
    suggestedStack: ['Go or Node.js', 'Redis', 'Docker Compose', 'Prometheus', 'Tailwind CSS'],
    portfolioHighlight: 'Demonstrates deep backend competence, concurrency management, and distributed systems fault-tolerance.'
  },
  {
    id: 'proj-customer-churn-ml',
    title: 'Enterprise Customer Churn Prediction & Analytics Pipeline',
    difficulty: 'Intermediate',
    roleId: 'data-scientist',
    skills: ['Python', 'Pandas', 'Scikit-Learn', 'XGBoost', 'SHAP Explainability', 'Streamlit'],
    estimatedHours: 35,
    summary: 'An end-to-end machine learning pipeline identifying customers likely to cancel subscription services, featuring SHAP feature importance and interactive what-if simulators.',
    requirements: [
      'Comprehensive EDA notebook with statistical correlation matrices and distributions',
      'Data preprocessing pipeline: imputation, encoding, and SMOTE class balancing',
      'Benchmark 5 models: Logistic Regression, Random Forest, LightGBM, and XGBoost',
      'Model interpretability using SHAP values explaining individual prediction factors',
      'Interactive Streamlit web dashboard for marketing teams to simulate retention strategies'
    ],
    stepByStepRoadmap: [
      { step: 1, title: 'Exploratory Data Analysis & Cleaning', description: 'Inspect distributions, handle missing values, and calculate baseline churn metrics.' },
      { step: 2, title: 'Feature Engineering & Cross-Validation', description: 'Create usage frequency ratios, tenure buckets, and stratified 5-fold splits.' },
      { step: 3, title: 'Model Training & Hyperparameter Tuning', description: 'Optimize ROC-AUC and PR-AUC scores using Optuna or GridSearchCV.' },
      { step: 4, title: 'SHAP Interpretability & Streamlit Deployment', description: 'Build UI showing customer risk score, key risk drivers, and recommendation cards.' }
    ],
    suggestedStack: ['Python', 'Pandas', 'Scikit-Learn', 'XGBoost', 'SHAP', 'Streamlit'],
    portfolioHighlight: 'Bridges raw machine learning accuracy with actionable business revenue impact and interpretable AI.'
  },

  // Advanced Projects
  {
    id: 'proj-rag-ai-copilot',
    title: 'Enterprise Knowledge Base RAG AI Copilot',
    difficulty: 'Advanced',
    roleId: 'ai-ml-engineer',
    skills: ['Large Language Models (LLMs)', 'PyTorch', 'Vector Databases', 'LangChain', 'FastAPI', 'Next.js'],
    estimatedHours: 65,
    summary: 'A production-grade Retrieval-Augmented Generation (RAG) system that indexes internal PDF documents, extracts code snippets, performs hybrid semantic search, and generates grounded citations.',
    requirements: [
      'Document processing pipeline: PDF parsing, chunking with sliding window and token overlap',
      'Embeddings generated with OpenAI or HuggingFace BGE models and stored in Qdrant/Pinecone',
      'Hybrid search combining Dense Vector similarity with BM25 Sparse Keyword scoring',
      'Reranking stage using Cross-Encoder models to maximize precision',
      'Streaming chat UI with clickable document citations and hallucination guardrails'
    ],
    stepByStepRoadmap: [
      { step: 1, title: 'Ingestion & Chunking Pipeline', description: 'Build recursive token-aware chunker with document metadata tags.' },
      { step: 2, title: 'Vector Store & Hybrid Indexing', description: 'Configure Qdrant/ChromaDB collection with payload indexes for filtering.' },
      { step: 3, title: 'Retrieval & Cross-Encoder Reranking', description: 'Implement reciprocal rank fusion (RRF) and FlashRank cross-encoder.' },
      { step: 4, title: 'FastAPI Streaming Service', description: 'Create SSE (Server-Sent Events) endpoint streaming token responses.' },
      { step: 5, title: 'Interactive Frontend with Citations', description: 'Build Next.js UI showing citation popovers highlighting source PDF pages.' }
    ],
    suggestedStack: ['FastAPI', 'PyTorch', 'Hugging Face', 'Qdrant / ChromaDB', 'Next.js', 'Tailwind CSS'],
    portfolioHighlight: 'Demonstrates cutting-edge GenAI engineering beyond trivial wrappers, including custom retrieval, reranking, and low-latency streaming.'
  },
  {
    id: 'proj-cloud-kubernetes-gitops',
    title: 'Multi-Environment Cloud Infrastructure with Terraform & GitOps',
    difficulty: 'Advanced',
    roleId: 'devops-engineer',
    skills: ['Terraform', 'Kubernetes', 'AWS / GCP', 'Helm', 'ArgoCD', 'Prometheus & Grafana'],
    estimatedHours: 60,
    summary: 'Fully automated Infrastructure-as-Code provisioning a production-grade Kubernetes cluster on AWS/GCP, with ArgoCD continuous delivery, automated TLS certs, and Prometheus alerting.',
    requirements: [
      'Modular Terraform configuration for VPC, subnets, NAT gateways, and Managed K8s (EKS/GKE)',
      'Automated secret management using HashiCorp Vault or AWS Secrets Store CSI driver',
      'GitOps workflow with ArgoCD automatically syncing manifests from a Git repository',
      'Cert-Manager integration for automated Let\'s Encrypt SSL/TLS certificates',
      'Full observability stack: Prometheus operator, Grafana dashboards, and Alertmanager'
    ],
    stepByStepRoadmap: [
      { step: 1, title: 'Terraform VPC & Cluster Modules', description: 'Write reusable Terraform code with remote S3 backend and DynamoDB state locking.' },
      { step: 2, title: 'Helm Charts & Ingress Controller', description: 'Package microservices with Helm values and deploy Traefik/Nginx Ingress.' },
      { step: 3, title: 'GitOps Pipeline with ArgoCD', description: 'Install ArgoCD and establish automated repo webhooks for zero-touch deploys.' },
      { step: 4, title: 'Monitoring & Alerting Setup', description: 'Deploy Prometheus, configure pod CPU/memory alerts, and visualize in Grafana.' }
    ],
    suggestedStack: ['Terraform', 'Kubernetes (K3s / EKS)', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana'],
    portfolioHighlight: 'Provides ironclad proof of enterprise-level cloud infrastructure, automated GitOps deployment, and production resilience.'
  },
  {
    id: 'proj-virtual-soc-siem',
    title: 'Enterprise Virtual SOC & Threat Hunting Lab',
    difficulty: 'Advanced',
    roleId: 'cybersecurity-analyst',
    skills: ['SIEM (Wazuh / Elastic)', 'Snort / Suricata', 'Network Forensics', 'Bash / Python', 'Threat Hunting'],
    estimatedHours: 50,
    summary: 'A virtualized Security Operations Center environment ingesting live telemetry from Windows and Linux endpoints, alerting on simulated MITRE ATT&CK techniques, and automating threat containment.',
    requirements: [
      'Deploy Wazuh SIEM server with connected agents on victim machines',
      'Implement custom Snort/Suricata IDS rules detecting port scans and shell injections',
      'Simulate MITRE ATT&CK techniques: Credential Dumping (Mimikatz), Persistence, and C2 beacons',
      'Automated incident response script triggered on high-severity alerts (IP blocking via iptables)',
      'Executive Incident Report detailing timeline, root cause, and remediation steps'
    ],
    stepByStepRoadmap: [
      { step: 1, title: 'Network Segmentation & Lab Setup', description: 'Create isolated virtual network with attacker, victim, and SOC monitoring nodes.' },
      { step: 2, title: 'SIEM Agent & Log Pipeline', description: 'Forward Windows Event Logs (Sysmon) and Linux auth logs into Wazuh.' },
      { step: 3, title: 'Adversary Emulation Attacks', description: 'Execute atomic red-team tests simulating credential theft and lateral movement.' },
      { step: 4, title: 'Custom Detection Rules & Playbooks', description: 'Write XML detection rules and verify alerts trigger in under 10 seconds.' }
    ],
    suggestedStack: ['Wazuh SIEM', 'Sysmon', 'Suricata', 'Ubuntu Linux', 'Python Scripting', 'VirtualBox / Proxmox'],
    portfolioHighlight: 'Demonstrates real-world defensive operations, threat detection rule engineering, and enterprise incident response capabilities.'
  }
];
