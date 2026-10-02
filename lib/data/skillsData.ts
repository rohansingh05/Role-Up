import { SkillDetail } from '../types';

export const SKILLS_DATABASE: SkillDetail[] = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'Core CS',
    difficulty: 'Intermediate',
    estimatedHours: 120,
    prerequisites: ['One Programming Language (C++, Java, or Python)'],
    relatedRoles: ['software-engineer', 'full-stack-developer', 'data-scientist', 'ai-ml-engineer'],
    whyItMatters: 'Data Structures and Algorithms form the computational foundation of computer science. Top technology companies, hedge funds, and engineering teams rely on DSA to evaluate problem-solving ability, algorithmic thinking, and code optimization in technical interviews.',
    whatYouLearn: [
      'Big-O asymptotic time and space complexity analysis',
      'Linear data structures: Arrays, Linked Lists, Stacks, Queues',
      'Non-linear structures: Binary Trees, Heaps, Hash Tables, and Disjoint Sets',
      'Advanced Graph algorithms: BFS, DFS, Dijkstra, Bellman-Ford, Kruskal, Topological Sort',
      'Dynamic Programming: Memoization, Tabulation, 0/1 Knapsack, Longest Common Subsequence',
      'Backtracking and Divide-and-Conquer strategies'
    ],
    learningRoadmap: [
      'Week 1-2: Complexity analysis & Array manipulation patterns (Two-Pointers, Sliding Window)',
      'Week 3-4: Linked Lists, Stacks, Monotonic Queues, and Hash Maps',
      'Week 5-6: Binary Trees, BSTs, Traversals, and Binary Search variants',
      'Week 7-8: Heap / Priority Queue, Trie (Prefix Tree), and Greedy algorithms',
      'Week 9-10: Graph Theory (BFS/DFS, Topological Sort, Shortest Path)',
      'Week 11-12: Dynamic Programming patterns and Interview Simulation'
    ],
    practiceProblems: [
      { title: 'Two Sum & 3Sum', platform: 'LeetCode', difficulty: 'Easy', topic: 'Arrays & Two Pointers' },
      { title: 'Longest Substring Without Repeating Characters', platform: 'LeetCode', difficulty: 'Medium', topic: 'Sliding Window' },
      { title: 'Reverse Nodes in k-Group', platform: 'LeetCode', difficulty: 'Hard', topic: 'Linked List' },
      { title: 'Binary Tree Maximum Path Sum', platform: 'LeetCode', difficulty: 'Hard', topic: 'Trees & DFS' },
      { title: 'Course Schedule I & II', platform: 'LeetCode', difficulty: 'Medium', topic: 'Graphs & Topological Sort' },
      { title: 'Coin Change & Word Break', platform: 'LeetCode', difficulty: 'Medium', topic: 'Dynamic Programming' }
    ],
    interviewQuestions: [
      {
        question: 'What is the difference between Array and Linked List in terms of memory layout and cache locality?',
        answer: 'Arrays store elements in contiguous memory locations, offering O(1) random indexing and excellent spatial cache locality. Linked Lists store nodes scattered across heap memory with pointers, resulting in O(n) access and frequent CPU cache misses, but allowing O(1) insertions/deletions once a node pointer is held.',
        difficulty: 'Medium'
      },
      {
        question: 'Explain the working principle of a Hash Table and how hash collisions are resolved.',
        answer: 'A Hash Table maps keys to bucket indices using a hash function. Collisions occur when different keys hash to the same bucket. Two common resolution techniques are Separate Chaining (each bucket contains a linked list or red-black tree) and Open Addressing (Linear Probing, Quadratic Probing, or Double Hashing) to find the next available slot.',
        difficulty: 'Medium'
      },
      {
        question: 'How do you detect a cycle in a Directed Graph vs an Undirected Graph?',
        answer: 'In an undirected graph, a cycle exists if a DFS encounters an already visited neighbor that is not the direct parent node (or via Disjoint Set Union). In a directed graph, a cycle requires detecting a Back Edge in the current recursion stack (via 3-color DFS: White, Gray, Black) or checking if Kahn\'s Topological Sort processes fewer than V vertices.',
        difficulty: 'Hard'
      }
    ],
    resources: [
      {
        id: 'dsa-res-1',
        skillId: 'dsa',
        title: 'NeetCode Roadmap & Video Solutions',
        provider: 'NeetCode.io',
        type: 'Free',
        format: 'Video',
        difficulty: 'Beginner',
        duration: '60+ Hours',
        rating: 4.9,
        certificateAvailable: false,
        description: 'Structured pattern-based algorithm preparation covering the top 150 blind questions with clear visual animations.',
        url: 'https://neetcode.io'
      },
      {
        id: 'dsa-res-2',
        skillId: 'dsa',
        title: 'MIT 6.006: Introduction to Algorithms',
        provider: 'MIT OpenCourseWare',
        type: 'Free',
        format: 'Course',
        difficulty: 'Intermediate',
        duration: '40 Hours',
        rating: 4.8,
        certificateAvailable: false,
        description: 'Rigorous algorithmic theory taught by MIT faculty covering sorting, search trees, graphs, and dynamic programming.',
        url: 'https://ocw.mit.edu'
      },
      {
        id: 'dsa-res-3',
        skillId: 'dsa',
        title: 'Striver\'s A2Z DSA Course & Sheet',
        provider: 'takeUforward',
        type: 'Free',
        format: 'Interactive',
        difficulty: 'Intermediate',
        duration: '80 Hours',
        rating: 4.9,
        certificateAvailable: false,
        description: 'Comprehensive step-by-step roadmap from basics to advanced competitive programming with detailed editorial articles.',
        url: 'https://takeuforward.org'
      },
      {
        id: 'dsa-res-4',
        skillId: 'dsa',
        title: 'Grokking the Coding Interview: Patterns for Coding Questions',
        provider: 'DesignGurus.io',
        type: 'Paid',
        format: 'Course',
        difficulty: 'Intermediate',
        duration: '35 Hours',
        rating: 4.8,
        certificateAvailable: true,
        description: 'Categorizes over 200 interview problems into 16 core recurring patterns like Two Pointers, Fast & Slow Pointers, and Merge Intervals.',
        url: 'https://designgurus.org'
      },
      {
        id: 'dsa-res-5',
        skillId: 'dsa',
        title: 'Algorithms Specialization by Stanford University',
        provider: 'Coursera',
        type: 'Paid',
        format: 'Course',
        difficulty: 'Advanced',
        duration: '4 Months',
        rating: 4.8,
        certificateAvailable: true,
        description: 'In-depth academic specialization by Tim Roughgarden covering divide-and-conquer, greedy algorithms, shortest paths, and NP-completeness.',
        url: 'https://coursera.org'
      }
    ]
  },
  {
    id: 'javascript',
    name: 'Modern JavaScript (ES6+)',
    category: 'Frontend',
    difficulty: 'Beginner',
    estimatedHours: 50,
    prerequisites: ['Basic HTML & CSS'],
    relatedRoles: ['full-stack-developer', 'software-engineer'],
    whyItMatters: 'JavaScript powers 98% of all websites on the internet and runs the modern web ecosystem across browser client, Node.js server, and mobile apps.',
    whatYouLearn: [
      'Execution context, call stack, event loop, and microtask queue',
      'Closures, lexical scoping, and prototypal inheritance',
      'Asynchronous JS: Callbacks, Promises, async/await, and error handling',
      'Modern syntax: Destructuring, spread/rest, optional chaining, nullish coalescing',
      'DOM manipulation, event delegation, and performance optimization',
      'ES Modules (import/export) and modular code architecture'
    ],
    learningRoadmap: [
      'Week 1: Fundamentals, data types, scoping, closures, and higher-order functions',
      'Week 2: Objects, prototypes, classes, and this keyword binding',
      'Week 3: Event Loop, Microtasks, Promises, and Async/Await',
      'Week 4: DOM APIs, Fetch API, LocalStorage, and Modular Bundling'
    ],
    practiceProblems: [
      { title: 'Implement Array.prototype.map and filter from scratch', platform: 'GreatFrontEnd', difficulty: 'Easy', topic: 'Functional JS' },
      { title: 'Create a custom Promise.all and Promise.race', platform: 'LeetCode 30 Days of JS', difficulty: 'Medium', topic: 'Async JS' },
      { title: 'Implement Debounce & Throttle functions', platform: 'GreatFrontEnd', difficulty: 'Medium', topic: 'Closures & Timers' },
      { title: 'Deep Clone object with circular references', platform: 'GreatFrontEnd', difficulty: 'Hard', topic: 'Recursion & Objects' }
    ],
    interviewQuestions: [
      {
        question: 'Explain the difference between `==` and `===`, and what is type coercion?',
        answer: '`==` performs loose equality with implicit type conversion (coercion) before comparing values (e.g. `5 == "5"` is true). `===` performs strict equality checking both value and data type without coercion (e.g. `5 === "5"` is false). Strict equality is recommended to avoid subtle runtime bugs.',
        difficulty: 'Easy'
      },
      {
        question: 'What is a closure in JavaScript, and what are common real-world use cases?',
        answer: 'A closure is the combination of a function bundled together with references to its surrounding lexical environment. It allows an inner function to access variables from an outer enclosing scope even after the outer function has finished executing. Real-world uses include data privacy (private variables), function currying, and memoization.',
        difficulty: 'Medium'
      },
      {
        question: 'How does the JavaScript Event Loop coordinate execution between Call Stack, Task Queue, and Microtask Queue?',
        answer: 'Synchronous code runs on the Call Stack. When an async operation completes, its callback is placed in either the Microtask Queue (Promises, queueMicrotask, MutationObserver) or Task Queue (setTimeout, setInterval, I/O). When the Call Stack is empty, the Event Loop executes ALL microtasks until empty before picking the next task from the Task Queue.',
        difficulty: 'Hard'
      }
    ],
    resources: [
      {
        id: 'js-res-1',
        skillId: 'javascript',
        title: 'The Modern JavaScript Tutorial (javascript.info)',
        provider: 'javascript.info',
        type: 'Free',
        format: 'Documentation',
        difficulty: 'Beginner',
        duration: '45 Hours',
        rating: 4.9,
        certificateAvailable: false,
        description: 'The gold-standard comprehensive guide from fundamentals to advanced browser APIs with interactive sandboxes.',
        url: 'https://javascript.info'
      },
      {
        id: 'js-res-2',
        skillId: 'javascript',
        title: 'Namaste JavaScript Series by Akshay Saini',
        provider: 'YouTube',
        type: 'Free',
        format: 'Video',
        difficulty: 'Intermediate',
        duration: '18 Hours',
        rating: 5.0,
        certificateAvailable: false,
        description: 'Deep dive into execution context, call stack, closures, hoisting, and event loop under the hood.',
        url: 'https://youtube.com'
      },
      {
        id: 'js-res-3',
        skillId: 'javascript',
        title: 'JavaScript: The Hard Parts',
        provider: 'Frontend Masters',
        type: 'Paid',
        format: 'Course',
        difficulty: 'Intermediate',
        duration: '12 Hours',
        rating: 4.9,
        certificateAvailable: true,
        description: 'Will Sentance teaches mental models for async execution, closures, classes, and prototypes.',
        url: 'https://frontendmasters.com'
      }
    ]
  },
  {
    id: 'react-nextjs',
    name: 'React & Next.js Framework',
    category: 'Frontend',
    difficulty: 'Intermediate',
    estimatedHours: 80,
    prerequisites: ['Modern JavaScript', 'CSS Flexbox/Grid'],
    relatedRoles: ['full-stack-developer', 'software-engineer'],
    whyItMatters: 'React is the dominant UI library globally, and Next.js is the premier React production framework powering companies like Netflix, Notion, Twitch, and TikTok.',
    whatYouLearn: [
      'Component lifecycle, state management, and props drilling solutions',
      'React Hooks: useState, useEffect, useMemo, useCallback, useRef, and custom hooks',
      'Next.js 14+ App Router: Server Components (RSC) vs Client Components',
      'Data fetching, Server Actions, streaming with Suspense, and SEO metadata',
      'Route handlers, middleware, and dynamic URL routing',
      'Optimized image rendering, font loading, and layout shifts'
    ],
    learningRoadmap: [
      'Week 1: JSX, component decomposition, props, state, and event handling',
      'Week 2: Advanced hooks, custom hooks, and context API',
      'Week 3: Next.js App Router, Server Components vs Client Components, and file-based routing',
      'Week 4: Server Actions, dynamic routes, API routes, and Tailwind styling',
      'Week 5: Authentication, middleware, and full stack deployment to Vercel'
    ],
    practiceProblems: [
      { title: 'Build a custom useDebounce and useLocalStorage hook', platform: 'GreatFrontEnd', difficulty: 'Medium', topic: 'React Hooks' },
      { title: 'Interactive Kanban board with drag-and-drop state', platform: 'RoleUp Projects', difficulty: 'Medium', topic: 'Complex State' },
      { title: 'Streaming product catalog with Server Components and search params', platform: 'Next.js Official', difficulty: 'Hard', topic: 'Next.js App Router' }
    ],
    interviewQuestions: [
      {
        question: 'What is the difference between React Server Components (RSC) and Client Components in Next.js?',
        answer: 'React Server Components execute strictly on the server, generating lightweight HTML and JSON without including their JavaScript bundle in client download, reducing bundle sizes and allowing direct database access. Client Components (`use client`) are hydrated in the browser, enabling interactivity, state, event listeners, and browser APIs.',
        difficulty: 'Medium'
      },
      {
        question: 'When should you use `useCallback` and `useMemo`, and what are the overhead trade-offs?',
        answer: '`useMemo` caches the calculated result of an expensive calculation, while `useCallback` caches a function definition between renders to prevent unnecessary re-renders of memoized child components (`React.memo`). They should not be used everywhere because initializing dependencies arrays and closures introduces memory overhead.',
        difficulty: 'Medium'
      }
    ],
    resources: [
      {
        id: 'react-res-1',
        skillId: 'react-nextjs',
        title: 'React.dev Official Documentation & Interactive Tutorials',
        provider: 'Meta / React Team',
        type: 'Free',
        format: 'Documentation',
        difficulty: 'Beginner',
        duration: '25 Hours',
        rating: 4.9,
        certificateAvailable: false,
        description: 'Completely revamped docs with interactive challenges, thinking in React guide, and modern hook practices.',
        url: 'https://react.dev'
      },
      {
        id: 'react-res-2',
        skillId: 'react-nextjs',
        title: 'Next.js App Router Foundations & Learn Next',
        provider: 'Vercel',
        type: 'Free',
        format: 'Interactive',
        difficulty: 'Intermediate',
        duration: '16 Hours',
        rating: 4.9,
        certificateAvailable: true,
        description: 'Official interactive course building an enterprise financial dashboard with auth, database, and mutations.',
        url: 'https://nextjs.org/learn'
      },
      {
        id: 'react-res-3',
        skillId: 'react-nextjs',
        title: 'Epic React by Kent C. Dodds',
        provider: 'EpicReact.dev',
        type: 'Paid',
        format: 'Course',
        difficulty: 'Advanced',
        duration: '30 Hours',
        rating: 4.9,
        certificateAvailable: true,
        description: 'Deep architectural mastery covering advanced hooks, concurrent rendering, performance profiling, and test strategies.',
        url: 'https://epicreact.dev'
      }
    ]
  },
  {
    id: 'databases-sql',
    name: 'Databases & Relational SQL',
    category: 'Backend',
    difficulty: 'Intermediate',
    estimatedHours: 60,
    prerequisites: ['Basic Programming Logic'],
    relatedRoles: ['software-engineer', 'full-stack-developer', 'data-scientist', 'devops-engineer'],
    whyItMatters: 'Every modern enterprise application relies on data integrity, high-throughput queries, and ACID transactional guarantees.',
    whatYouLearn: [
      'Relational algebra, schema design, and 1NF to BCNF normalization',
      'PostgreSQL architecture, B-Tree and GIN indexes, and query execution plans (`EXPLAIN ANALYZE`)',
      'Complex SQL: Joins, Subqueries, CTEs (Common Table Expressions), and Window Functions',
      'ACID properties, isolation levels (Read Committed to Serializable), and concurrency control',
      'ORM vs Query Builders (Prisma, Drizzle) and avoiding N+1 query antipatterns'
    ],
    learningRoadmap: [
      'Week 1: Relational modeling, ER diagrams, foreign keys, and DDL/DML syntax',
      'Week 2: Advanced filtering, group by, multi-table joins, and aggregate functions',
      'Week 3: Window functions (RANK, DENSE_RANK, ROW_NUMBER, LAG/LEAD) and CTEs',
      'Week 4: Indexes (B-tree, Hash), query planning, transactions, and locks'
    ],
    practiceProblems: [
      { title: 'Department Highest Salary & Second Highest Salary', platform: 'LeetCode SQL 50', difficulty: 'Easy', topic: 'Subqueries & Aggregations' },
      { title: 'Consecutive Numbers & Tripps and Users', platform: 'LeetCode SQL 50', difficulty: 'Medium', topic: 'Joins & Window Functions' },
      { title: 'Human Traffic of Stadium', platform: 'LeetCode SQL 50', difficulty: 'Hard', topic: 'Advanced CTEs' }
    ],
    interviewQuestions: [
      {
        question: 'What are ACID properties in a database management system?',
        answer: 'Atomicity ensures all statements in a transaction complete or none do. Consistency ensures the database moves from one valid state to another satisfying all constraints. Isolation prevents concurrent transactions from interfering with each other. Durability guarantees that committed data survives power failures or system crashes.',
        difficulty: 'Medium'
      },
      {
        question: 'How does an index speed up queries, and what is the cost of having too many indexes?',
        answer: 'Indexes (typically balanced B-Trees) provide logarithmic O(log N) lookup instead of a full table scan O(N). However, every write operation (INSERT, UPDATE, DELETE) requires updating all associated indexes, increasing write latency and consuming extra disk storage and memory buffer cache.',
        difficulty: 'Medium'
      }
    ],
    resources: [
      {
        id: 'db-res-1',
        skillId: 'databases-sql',
        title: 'PostgreSQL Tutorial & Interactive Sandboxes',
        provider: 'PostgreSQL Tutorial',
        type: 'Free',
        format: 'Documentation',
        difficulty: 'Beginner',
        duration: '20 Hours',
        rating: 4.8,
        certificateAvailable: false,
        description: 'Clear, concise tutorials covering SQL basics, transactions, triggers, and full-text search.',
        url: 'https://postgresqltutorial.com'
      },
      {
        id: 'db-res-2',
        skillId: 'databases-sql',
        title: 'Use The Index, Luke! - Guide to Database Performance',
        provider: 'Markus Winand',
        type: 'Free',
        format: 'Book',
        difficulty: 'Intermediate',
        duration: '15 Hours',
        rating: 5.0,
        certificateAvailable: false,
        description: 'The definitive guide explaining how B-Tree indexes work under the hood and how to write efficient SQL.',
        url: 'https://use-the-index-luke.com'
      }
    ]
  },
  {
    id: 'deep-learning-pytorch',
    name: 'Deep Learning & PyTorch',
    category: 'AI & Data',
    difficulty: 'Advanced',
    estimatedHours: 90,
    prerequisites: ['Python Data Science', 'Linear Algebra & Calculus'],
    relatedRoles: ['ai-ml-engineer', 'data-scientist'],
    whyItMatters: 'Deep learning is the engine behind modern artificial intelligence: language models, vision systems, autonomous driving, and generative media.',
    whatYouLearn: [
      'Neural network fundamentals: Activations, loss functions, optimizers (Adam, SGD)',
      'PyTorch Tensors, Autograd, DataLoader, and custom Module architectures',
      'Convolutional Neural Networks (ResNet, EfficientNet) and Vision Transformers (ViT)',
      'Sequence models, RNNs, LSTMs, and Self-Attention mechanisms',
      'Model checkpoints, mixed-precision training (FP16), and CUDA acceleration'
    ],
    learningRoadmap: [
      'Week 1: PyTorch Tensors, Computational Graphs, and Automatic Differentiation',
      'Week 2: Custom PyTorch Models, Training Loops, and Hyperparameter Tuning',
      'Week 3: Computer Vision: CNN architectures, Data Augmentation, and Transfer Learning',
      'Week 4: Natural Language Processing: Embeddings, Positional Encodings, and Multi-head Attention',
      'Week 5: Distributed training and deploying models via TorchScript and ONNX'
    ],
    practiceProblems: [
      { title: 'Build a custom PyTorch autograd engine from scratch', platform: 'GitHub / Karpathy micrograd', difficulty: 'Medium', topic: 'Autograd' },
      { title: 'Fine-tune a ResNet-50 classifier on Stanford Dogs dataset', platform: 'Kaggle', difficulty: 'Medium', topic: 'Transfer Learning' },
      { title: 'Implement Multi-Head Attention layer in pure PyTorch', platform: 'RoleUp AI Lab', difficulty: 'Hard', topic: 'Transformers' }
    ],
    interviewQuestions: [
      {
        question: 'Why do we use non-linear activation functions (ReLU, GELU) instead of stacking linear layers?',
        answer: 'Any composition of linear functions is mathematically equivalent to a single linear function (W2 * (W1 * x) = W_combined * x). Non-linear activations allow deep neural networks to approximate arbitrary non-linear functions (Universal Approximation Theorem) and model complex data spaces.',
        difficulty: 'Easy'
      },
      {
        question: 'Explain the Vanishing and Exploding Gradient problem and techniques used to mitigate it.',
        answer: 'In deep networks, gradients computed via the chain rule can multiply many fractional or large numbers, exponentially decaying to zero (vanishing) or skyrocketing to infinity (exploding). Mitigations include modern activations (ReLU/GELU), Residual Connections (ResNet skip connections), Batch/Layer Normalization, Gradient Clipping, and proper weight initialization (He/Xavier).',
        difficulty: 'Hard'
      }
    ],
    resources: [
      {
        id: 'dl-res-1',
        skillId: 'deep-learning-pytorch',
        title: 'Deep Learning Specialization by Andrew Ng',
        provider: 'DeepLearning.AI / Coursera',
        type: 'Paid',
        format: 'Course',
        difficulty: 'Intermediate',
        duration: '3 Months',
        rating: 4.9,
        certificateAvailable: true,
        description: 'Foundational 5-course series covering neural networks, hyperparameter tuning, CNNs, and sequence models.',
        url: 'https://deeplearning.ai'
      },
      {
        id: 'dl-res-2',
        skillId: 'deep-learning-pytorch',
        title: 'Neural Networks: Zero to Hero by Andrej Karpathy',
        provider: 'YouTube',
        type: 'Free',
        format: 'Video',
        difficulty: 'Intermediate',
        duration: '22 Hours',
        rating: 5.0,
        certificateAvailable: false,
        description: 'World-renowned playlist coding micrograd, makemore, and GPT from scratch with deep intuition.',
        url: 'https://karpathy.ai'
      }
    ]
  },
  {
    id: 'docker-containers',
    name: 'Docker & Containerization',
    category: 'Cloud & DevOps',
    difficulty: 'Intermediate',
    estimatedHours: 40,
    prerequisites: ['Linux CLI Basics'],
    relatedRoles: ['devops-engineer', 'software-engineer', 'full-stack-developer'],
    whyItMatters: 'Docker eliminates the "it works on my machine" problem, standardizing development environments and enabling cloud microservice portability.',
    whatYouLearn: [
      'Linux namespaces, cgroups, and container isolation mechanics',
      'Writing secure, minimal multi-stage Dockerfiles',
      'Docker networking: bridge, host, overlay, and port forwarding',
      'Persistent storage: volumes, bind mounts, and tmpfs',
      'Multi-container composition with Docker Compose',
      'Vulnerability scanning with Docker Scout or Trivy'
    ],
    learningRoadmap: [
      'Week 1: Container concepts vs Virtual Machines, Docker CLI commands',
      'Week 2: Dockerfiles, layer caching, and multi-stage builds',
      'Week 3: Storage volumes, environment variables, and Docker Compose orchestration',
      'Week 4: Registry management (Docker Hub/GHCR), image security, and health checks'
    ],
    practiceProblems: [
      { title: 'Create a multi-stage Dockerfile for a Next.js app (< 120MB image)', platform: 'RoleUp DevOps Lab', difficulty: 'Medium', topic: 'Optimization' },
      { title: 'Set up a Docker Compose stack: React frontend, Node backend, Postgres DB, Redis cache', platform: 'GitHub', difficulty: 'Medium', topic: 'Compose' }
    ],
    interviewQuestions: [
      {
        question: 'What is the fundamental difference between a Docker container and a Virtual Machine?',
        answer: 'A Virtual Machine bundles a full guest operating system, virtual hardware drivers, and hypervisor layer (Type 1 or 2), consuming gigabytes of RAM and taking minutes to boot. A Docker container shares the host OS kernel and isolates processes using Linux namespaces (PID, NET, MNT) and cgroups (CPU, memory limits), making it lightweight and booting in milliseconds.',
        difficulty: 'Medium'
      }
    ],
    resources: [
      {
        id: 'docker-res-1',
        skillId: 'docker-containers',
        title: 'Docker for Beginners Tutorial',
        provider: 'freeCodeCamp',
        type: 'Free',
        format: 'Video',
        difficulty: 'Beginner',
        duration: '4 Hours',
        rating: 4.8,
        certificateAvailable: false,
        description: 'Hands-on introduction covering container basics, Dockerfiles, and compose configurations.',
        url: 'https://freecodecamp.org'
      },
      {
        id: 'docker-res-2',
        skillId: 'docker-containers',
        title: 'Docker Mastery: with Kubernetes + Swarm',
        provider: 'Udemy / Bret Fisher',
        type: 'Paid',
        format: 'Course',
        difficulty: 'Intermediate',
        duration: '21 Hours',
        rating: 4.8,
        certificateAvailable: true,
        description: 'Comprehensive production-oriented container training by Docker Captain Bret Fisher.',
        url: 'https://udemy.com'
      }
    ]
  },
  {
    id: 'networking-security',
    name: 'Network Security & Protocol Analysis',
    category: 'Security',
    difficulty: 'Intermediate',
    estimatedHours: 60,
    prerequisites: ['Computer Networks Basics'],
    relatedRoles: ['cybersecurity-analyst', 'devops-engineer'],
    whyItMatters: 'Every digital attack traverses network layers. Analyzing packets and understanding security protocols is essential to stopping intrusions.',
    whatYouLearn: [
      'TCP/IP 4-layer model and OSI 7-layer model protocol mechanics',
      'Wireshark packet capture, display filters, and stream reassembly',
      'Network recon with Nmap: SYN scans, version detection, NSE scripts',
      'Firewalls (iptables/nftables), IDS/IPS (Snort, Suricata), and VPNs',
      'Cryptographic protocols: TLS 1.3 handshake, SSH key exchange, DNSSEC'
    ],
    learningRoadmap: [
      'Week 1: TCP handshake, TCP teardown, flags, UDP, and ICMP analysis',
      'Week 2: DNS, HTTP/HTTPS, TLS handshake certificates, and SSL inspection',
      'Week 3: Port scanning, banner grabbing, and Nmap scripting engine (NSE)',
      'Week 4: Firewall rules, IDS packet signatures, and detecting ARP poisoning'
    ],
    practiceProblems: [
      { title: 'Wireshark 101: Analyze a captured malware beacon and extract C2 IP', platform: 'TryHackMe', difficulty: 'Medium', topic: 'Packet Analysis' },
      { title: 'Nmap Live Lab: Discover open services and vulnerable versions', platform: 'HackTheBox', difficulty: 'Easy', topic: 'Reconnaissance' }
    ],
    interviewQuestions: [
      {
        question: 'Explain the TLS 1.3 handshake and how it improves over TLS 1.2.',
        answer: 'TLS 1.3 completes the handshake in a single round-trip (1-RTT) compared to 2-RTT in TLS 1.2, or even 0-RTT with session resumption. It deprecates insecure cipher suites (RC4, 3DES, static RSA key exchange), enforces Ephemeral Diffie-Hellman for Perfect Forward Secrecy (PFS), and encrypts more handshake metadata.',
        difficulty: 'Hard'
      }
    ],
    resources: [
      {
        id: 'netsec-res-1',
        skillId: 'networking-security',
        title: 'Wireshark Official Documentation & Sample Captures',
        provider: 'Wireshark Foundation',
        type: 'Free',
        format: 'Documentation',
        difficulty: 'Beginner',
        duration: '15 Hours',
        rating: 4.8,
        certificateAvailable: false,
        description: 'Explore standard pcaps, display filters, and protocol decoders directly.',
        url: 'https://wireshark.org'
      },
      {
        id: 'netsec-res-2',
        skillId: 'networking-security',
        title: 'CompTIA Network+ & Security+ Combined Path',
        provider: 'Professor Messer',
        type: 'Free',
        format: 'Video',
        difficulty: 'Intermediate',
        duration: '30 Hours',
        rating: 4.9,
        certificateAvailable: false,
        description: 'Exhaustive video course covering all networking protocols, topologies, and security controls.',
        url: 'https://professormesser.com'
      }
    ]
  }
];
