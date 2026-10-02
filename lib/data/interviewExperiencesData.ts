import { InterviewExperience } from '../types';

export const INTERVIEW_EXPERIENCES: InterviewExperience[] = [
  {
    id: 'exp-1',
    candidateName: 'Akash Gupta',
    college: 'IIT Roorkee',
    company: 'Google',
    role: 'Software Engineer (SDE I - Campus)',
    interviewType: 'On-campus',
    experienceLevel: 'Fresher',
    difficulty: 'Hard',
    result: 'Offer Accepted',
    date: 'August 2026',
    rounds: [
      {
        roundName: 'Online Assessment (OA)',
        duration: '90 Minutes',
        focus: '2 Algorithmic Problems on HackerEarth/Google Platform',
        details: 'Q1 was a dynamic programming variation on grid paths with blocked cells and state transitions. Q2 was a hard graph problem involving finding minimum cut / flow decomposition.'
      },
      {
        roundName: 'Technical Round 1',
        duration: '45 Minutes',
        focus: 'Data Structures & Recursion',
        details: 'Interviewer asked to implement an iterator for a NestedInteger structure (similar to LeetCode 341). Discussed space optimization and handling infinite recursive structures.'
      },
      {
        roundName: 'Technical Round 2',
        duration: '45 Minutes',
        focus: 'Graph Theory & Topological Sorting',
        details: 'Asked to design a build dependency manager resolving circular dependencies. Implemented Kahn\'s algorithm and handled cycle detection gracefully.'
      },
      {
        roundName: 'Googliness & Leadership',
        duration: '45 Minutes',
        focus: 'Behavioral & Culture Fit',
        details: 'Deep scenario questions: Handling disagreement on technical design with a teammate, ethics in AI model deployment, and dealing with an unexpected production bug.'
      }
    ],
    questionsAsked: [
      'Flatten Nested List Iterator with lazy evaluation',
      'Course Schedule II with cycle path extraction',
      'How would you prioritize bug fixes during a high-stakes product launch?',
      'Explain how virtual memory and page tables work in Linux.'
    ],
    preparationResources: [
      'LeetCode Top 150 Interview Questions',
      'NeetCode 150 Algorithms Roadmap',
      'Designing Data-Intensive Applications by Martin Kleppmann'
    ],
    adviceForCandidates: 'Google interviewers are looking for how you think, not just if you already memorized the solution. Never jump into coding immediately: clarify edge cases, dry-run on a small example, discuss time and space tradeoffs first, and keep communicating continuously throughout.',
    upvotes: 142
  },
  {
    id: 'exp-2',
    candidateName: 'Rhea Sen',
    college: 'IIIT Bangalore',
    company: 'Microsoft',
    role: 'Software Engineer Intern',
    interviewType: 'Off-campus',
    experienceLevel: 'Intern',
    difficulty: 'Medium',
    result: 'Offer Received',
    date: 'July 2026',
    rounds: [
      {
        roundName: 'Codility OA',
        duration: '60 Minutes',
        focus: '3 Coding Challenges',
        details: 'Strings, Arrays, and binary search variation. All test cases passed within 40 minutes.'
      },
      {
        roundName: 'Technical Round 1',
        duration: '50 Minutes',
        focus: 'Trees & Hash Maps',
        details: 'Lowest Common Ancestor in a Binary Tree, followed by LRU Cache implementation from scratch using Doubly Linked List and Hash Map.'
      },
      {
        roundName: 'Technical + Managerial Round',
        duration: '60 Minutes',
        focus: 'System Design Basics & Resume Projects',
        details: 'Deep interrogation into my full-stack web project. Discussed database indexing, how I handled session auth, and design of a scalable URL shortener (TinyURL).'
      }
    ],
    questionsAsked: [
      'Implement LRU Cache with get and put in O(1)',
      'Design TinyURL (Hashing vs Counter, Collision resolution, Redis caching)',
      'Explain differences between Process and Thread, and race conditions'
    ],
    preparationResources: [
      'Striver SDE Sheet',
      'Grokking the System Design Interview',
      'TakeUforward YouTube Channel'
    ],
    adviceForCandidates: 'Know every line of code on your resume inside out! My interviewer asked detailed questions on why I chose PostgreSQL over MongoDB in my college project.',
    upvotes: 98
  },
  {
    id: 'exp-3',
    candidateName: 'Karthik Raja',
    college: 'Anna University',
    company: 'Razorpay',
    role: 'Full Stack Engineer (Fresher)',
    interviewType: 'Referral',
    experienceLevel: 'Fresher',
    difficulty: 'Medium',
    result: 'Offer Accepted',
    date: 'September 2026',
    rounds: [
      {
        roundName: 'Machine Coding Round',
        duration: '120 Minutes',
        focus: 'Live Hands-On Coding',
        details: 'Tasked with building a clean, extensible In-Memory Payment Gateway Simulator with support for multiple payment modes, idempotency keys, and simulated failure rates.'
      },
      {
        roundName: 'Tech Round 1: React & Frontend Architecture',
        duration: '60 Minutes',
        focus: 'Deep React Internals',
        details: 'Explain Virtual DOM diffing, build a custom debounce hook live on CodeSandbox, and explain web security (XSS, CSRF, and Content Security Policy).'
      },
      {
        roundName: 'Tech Round 2: Backend & Database Concurrency',
        duration: '60 Minutes',
        focus: 'Databases & Distributed Systems',
        details: 'Discussion on ACID transactions, optimistic vs pessimistic locking in high-volume payment processing, and Kafka message brokers.'
      }
    ],
    questionsAsked: [
      'Machine Coding: In-Memory Splitwise or Payment Switch',
      'How does React Fiber architecture work and what is reconciliation?',
      'How do you prevent double spending when multiple payment requests arrive simultaneously?'
    ],
    preparationResources: [
      'RoleUp Career Roadmap for Full Stack Developers',
      'Web Dev Simplified & Akshay Saini videos',
      'PostgreSQL official performance docs'
    ],
    adviceForCandidates: 'For fintech startups like Razorpay, clean modular object-oriented code in the machine coding round is the biggest decider. Follow SOLID principles and write clear unit tests.',
    upvotes: 89
  },
  {
    id: 'exp-4',
    candidateName: 'Meera Nambiar',
    college: 'NIT Surathkal',
    company: 'Amazon',
    role: 'SDE Intern',
    interviewType: 'On-campus',
    experienceLevel: 'Intern',
    difficulty: 'Medium',
    result: 'Offer Received',
    date: 'August 2026',
    rounds: [
      {
        roundName: 'Online Assessment (OA)',
        duration: '90 Minutes',
        focus: '2 Coding questions + Amazon Work Style Assessment',
        details: 'Q1 was Two Pointers array problem; Q2 was Priority Queue / Heap for scheduling. Work style assessment required answering behavioral scenarios matching Leadership Principles.'
      },
      {
        roundName: 'Virtual Interview Round 1',
        duration: '60 Minutes',
        focus: 'DSA + Leadership Principles (STAR)',
        details: 'Spent 20 minutes on behavioral questions (Customer Obsession & Bias for Action). Then solved a dynamic programming question on Word Break and analyzed time complexity.'
      },
      {
        roundName: 'Virtual Interview Round 2',
        duration: '60 Minutes',
        focus: 'Trees/Graphs + Dive Deep',
        details: 'Solves Rotten Oranges (Multi-source BFS). Interviewer probed edge cases: empty matrix, isolated cells, and memory footprint.'
      }
    ],
    questionsAsked: [
      'Word Break Problem (DP vs Trie)',
      'Rotting Oranges (Multi-source BFS)',
      'Tell me about a time you had to deliver a project under extreme deadline constraints.'
    ],
    preparationResources: [
      'LeetCode Amazon Tagged Questions',
      'Amazon 16 Leadership Principles breakdown',
      'RoleUp Mock Interview Prep Checklist'
    ],
    adviceForCandidates: 'Do not underestimate the Amazon Leadership Principles! Prepare 2 STAR-method stories for every single LP. It carries 50% of the weight.',
    upvotes: 120
  }
];
