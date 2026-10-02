import { CommunityPost } from '../types';

export const INITIAL_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    author: {
      name: 'Aditya Sharma',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
      college: 'IIT Delhi',
      role: 'Incoming SDE Intern @ Amazon'
    },
    title: 'How I went from 0 to 250+ LeetCode problems and cracked an SDE Summer Internship',
    content: 'When I started in my 2nd year, I could barely solve Easy array problems without peeking at discussions. Here is the exact strategy that changed my trajectory:\n\n1. Stop solving random problems. Stick to patterns (Sliding Window, Two Pointers, Fast & Slow Pointers, Monotonic Stack).\n2. Spend at least 25 minutes actively thinking before checking hints.\n3. Always write down the time and space complexity in your code comments.\n4. Revisit questions you struggled with 7 days later (Spaced Repetition).\n\nIf anyone is struggling with dynamic programming or graph traversals, feel free to ask below—happy to break down any pattern!',
    category: 'DSA',
    createdAt: '2 hours ago',
    likesCount: 84,
    isLikedByUser: false,
    isBookmarkedByUser: false,
    tags: ['LeetCode', 'SDE Intern', 'DSA Roadmap', 'Interview Prep'],
    comments: [
      {
        id: 'comm-1',
        author: {
          name: 'Priya Patel',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
          college: 'BITS Pilani'
        },
        content: 'Incredible breakdown Aditya! How many hours per day did you dedicate while balancing college exams?',
        createdAt: '1 hour ago'
      },
      {
        id: 'comm-2',
        author: {
          name: 'Rohan Verma',
          avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&h=120&q=80',
          college: 'NIT Trichy'
        },
        content: 'The 7-day spaced repetition rule is gold. That single habit doubled my pattern retention.',
        createdAt: '30 mins ago'
      }
    ]
  },
  {
    id: 'post-2',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
      college: 'UC Berkeley',
      role: 'Full Stack Fellow @ Vercel'
    },
    title: 'The #1 mistake CSE students make with their resume projects (and how to fix it)',
    content: 'Reviewing student resumes at hackathons, 90% of applicants list the exact same projects: "To-Do List", "Weather App using Fetch", or "Basic Movie Database".\n\nRecruiters glance at resumes for 6 seconds. To stand out as a fresher:\n\n1. Solve a real inconvenience: Even a niche tool for your college club with 50 active users beats a generic tutorial clone.\n2. Quantify results: "Engineered automated PDF generator reducing manual student club verification by 4 hours weekly."\n3. Add tests and CI/CD: Having GitHub Actions and 80%+ test coverage proves you are already accustomed to professional engineering standards.\n\nWhat projects are you all working on this semester?',
    category: 'Resume',
    createdAt: '5 hours ago',
    likesCount: 112,
    isLikedByUser: true,
    isBookmarkedByUser: true,
    tags: ['Resume Review', 'Portfolio Projects', 'Full Stack', 'Hiring Tips'],
    comments: [
      {
        id: 'comm-3',
        author: {
          name: 'Marcus Bell',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
          college: 'Georgia Tech'
        },
        content: 'Quantifying bullet points made the biggest difference in my callback rate. Great reminder!',
        createdAt: '3 hours ago'
      }
    ]
  },
  {
    id: 'post-3',
    author: {
      name: 'Tanmay Kulkarni',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
      college: 'IIIT Hyderabad',
      role: 'AI Researcher'
    },
    title: 'RAG vs Fine-tuning: When should freshers use which for their portfolio projects?',
    content: 'Many students ask me if they need expensive GPU clusters to build impressive GenAI projects. The short answer is: NO!\n\nFor 85% of real-world enterprise applications, RAG (Retrieval-Augmented Generation) combined with a solid vector database like Qdrant or Pinecone delivers far better, hallucination-resistant, and cost-efficient results than fine-tuning a base model.\n\nOnly fine-tune when you need to teach a model a completely new tone, style, or specific syntax (like SQL or medical terminology). For domain knowledge, always start with RAG!',
    category: 'AI/ML',
    createdAt: '1 day ago',
    likesCount: 96,
    isLikedByUser: false,
    isBookmarkedByUser: false,
    tags: ['Generative AI', 'RAG', 'Vector DB', 'PyTorch', 'LLMs'],
    comments: [
      {
        id: 'comm-4',
        author: {
          name: 'Ananya Roy',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
          college: 'DTU Delhi'
        },
        content: 'What chunking strategy do you recommend for complex academic research papers with tables?',
        createdAt: '18 hours ago'
      }
    ]
  },
  {
    id: 'post-4',
    author: {
      name: 'David Miller',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
      college: 'University of Washington',
      role: 'DevOps / Cloud Specialist'
    },
    title: 'My top 5 tips for setting up a free-tier Kubernetes lab on AWS / GCP',
    content: 'You do not need to spend hundreds of dollars on cloud bills to learn Kubernetes and Terraform.\n\n1. Use K3s or Minikube locally first before touching cloud clusters.\n2. Set up AWS Free Tier with strict CloudWatch billing alarms at $5.\n3. Spin up single-node EKS / GKE clusters only during active study hours and automate teardown with `terraform destroy`.\n4. Store state files remotely in S3 with state locking in DynamoDB.',
    category: 'DevOps',
    createdAt: '2 days ago',
    likesCount: 68,
    isLikedByUser: false,
    isBookmarkedByUser: false,
    tags: ['Kubernetes', 'Cloud', 'DevOps', 'Terraform', 'AWS'],
    comments: []
  }
];
