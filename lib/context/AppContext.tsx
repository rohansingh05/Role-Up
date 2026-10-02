'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProfile,
  CareerRole,
  SkillDetail,
  ProjectDetail,
  ResumeData,
  InternshipListing,
  CommunityPost,
  InterviewExperience,
  NotificationItem,
  JobReadinessBreakdown
} from '../types';
import { CAREER_ROLES } from '../data/rolesData';
import { SKILLS_DATABASE } from '../data/skillsData';
import { PROJECTS_DATABASE } from '../data/projectsData';
import { INTERNSHIPS_DATABASE } from '../data/internshipsData';
import { INITIAL_COMMUNITY_POSTS } from '../data/communityData';
import { INTERVIEW_EXPERIENCES } from '../data/interviewExperiencesData';

interface AppContextType {
  // User Profile & Onboarding
  user: UserProfile;
  updateUser: (updates: Partial<UserProfile>) => void;
  targetRoleDetail: CareerRole;
  setTargetRoleId: (roleId: string) => void;
  
  // Roles & Skills
  roles: CareerRole[];
  skills: SkillDetail[];
  skillsProgress: Record<string, 'not-started' | 'in-progress' | 'completed'>;
  updateSkillStatus: (skillId: string, status: 'not-started' | 'in-progress' | 'completed') => void;
  
  // Projects
  projects: ProjectDetail[];
  projectsProgress: Record<string, { status: 'not-started' | 'in-progress' | 'completed'; githubUrl?: string; liveUrl?: string; inPortfolio: boolean }>;
  updateProjectProgress: (projectId: string, updates: Partial<{ status: 'not-started' | 'in-progress' | 'completed'; githubUrl: string; liveUrl: string; inPortfolio: boolean }>) => void;
  
  // Resume Builder
  resume: ResumeData;
  updateResume: (newResume: Partial<ResumeData>) => void;
  resumeCompletion: number;
  
  // Checklists
  internshipChecklist: Record<string, boolean>;
  toggleInternshipChecklist: (key: string) => void;
  networkingChecklist: Record<string, boolean>;
  toggleNetworkingChecklist: (key: string) => void;
  
  // Dynamic Job Readiness
  jobReadiness: JobReadinessBreakdown;
  
  // Internships
  internships: InternshipListing[];
  addInternship: (internship: InternshipListing) => void;
  
  // Community
  posts: CommunityPost[];
  toggleLikePost: (postId: string) => void;
  toggleBookmarkPost: (postId: string) => void;
  addComment: (postId: string, content: string) => void;
  addPost: (post: Omit<CommunityPost, 'id' | 'createdAt' | 'likesCount' | 'comments' | 'isLikedByUser' | 'isBookmarkedByUser'>) => void;
  
  // Interview Experiences
  interviewExperiences: InterviewExperience[];
  upvoteInterviewExperience: (id: string) => void;
  addInterviewExperience: (exp: Omit<InterviewExperience, 'id' | 'upvotes'>) => void;
  
  // Notifications
  notifications: NotificationItem[];
  markNotificationRead: (id: string) => void;
  clearNotifications: () => void;
  
  // Admin & Demo Mode
  isAdmin: boolean;
  toggleAdminMode: () => void;
  resetAllDemoData: () => void;
}

const DEFAULT_USER: UserProfile = {
  name: 'Aarav Sharma',
  email: 'aarav.sharma@college.edu',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80',
  college: 'Indian Institute of Technology, Delhi',
  degree: 'B.Tech in Computer Science & Engineering',
  graduationYear: '2026',
  currentLevel: 'Intermediate',
  targetRole: 'software-engineer',
  currentSkills: ['dsa', 'javascript', 'databases-sql'],
  lookingFor: 'Internship',
  learningStyle: 'Hands-on Projects',
  bio: 'Computer Science junior passionate about high-concurrency distributed systems, algorithmic problem solving, and modern cloud architecture.',
  githubUrl: 'https://github.com/aaravsharma-dev',
  linkedinUrl: 'https://linkedin.com/in/aaravsharma-dev',
  portfolioSlug: 'aarav-sharma',
  isPortfolioPublished: true,
  portfolioTheme: 'slate-dark',
  isOnboarded: true,
};

const DEFAULT_RESUME: ResumeData = {
  personalInfo: {
    fullName: 'Aarav Sharma',
    email: 'aarav.sharma@college.edu',
    phone: '+91 98765 43210',
    location: 'New Delhi, India',
    portfolioUrl: 'https://roleup.dev/portfolio/aarav-sharma',
    linkedinUrl: 'https://linkedin.com/in/aaravsharma-dev',
    githubUrl: 'https://github.com/aaravsharma-dev',
    summary: 'Aspiring Software Engineer with deep foundations in Data Structures, Algorithms, and Distributed Systems. Built production microservices with Redis and PostgreSQL handling concurrent workloads. Seeking 2026 Summer SDE Internship.'
  },
  education: [
    {
      id: 'edu-1',
      institution: 'Indian Institute of Technology, Delhi',
      degree: 'Bachelor of Technology',
      fieldOfStudy: 'Computer Science & Engineering',
      startDate: '2022',
      endDate: '2026',
      gpaOrGrade: '8.8 / 10.0'
    }
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Backend Engineering Intern',
      company: 'TechFlow Cloud Solutions',
      location: 'Bengaluru, India (Remote)',
      startDate: 'May 2025',
      endDate: 'July 2025',
      current: false,
      bullets: [
        'Architected asynchronous task processing queue using Redis and Node.js, slashing email dispatch latency by 60%.',
        'Implemented PostgreSQL database indexing strategies and connection pooling, reducing 95th percentile query latency from 240ms to 45ms.',
        'Wrote 85+ comprehensive unit and integration tests using Jest and Supertest, ensuring 92% code coverage.'
      ]
    }
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'High-Throughput Distributed Task Queue',
      techStack: 'Node.js, Redis, Docker, PostgreSQL, Prometheus',
      githubUrl: 'https://github.com/aaravsharma-dev/distributed-task-queue',
      liveUrl: 'https://task-queue-demo.roleup.dev',
      bullets: [
        'Engineered a distributed priority worker system handling 10,000+ simulated jobs/minute with atomic Redis commands.',
        'Implemented exponential backoff retry logic, dead-letter queues (DLQ), and automated worker crash isolation.',
        'Constructed real-time telemetry dashboard visualizing job throughput, error frequency, and memory metrics.'
      ]
    },
    {
      id: 'proj-2',
      name: 'Interactive Sorting & Graph Algorithm Visualizer',
      techStack: 'React, TypeScript, HTML5 Canvas, Tailwind CSS',
      githubUrl: 'https://github.com/aaravsharma-dev/algo-visualizer',
      liveUrl: 'https://algo-visualizer.roleup.dev',
      bullets: [
        'Built interactive step-by-step visualizer for 7 sorting algorithms and pathfinding algorithms (Dijkstra, A* Search).',
        'Implemented custom async generator engine enabling pause, play, step-by-step execution, and variable animation speeds.',
        'Attracted 1,200+ monthly active student users across university coding clubs.'
      ]
    }
  ],
  skills: {
    languages: 'C++, Java, JavaScript (ES6+), TypeScript, Python, SQL',
    frameworks: 'Node.js, Express, React, Next.js, FastAPI',
    tools: 'Git, Docker, Linux/Bash, Postman, Redis, Prometheus, Grafana',
    databases: 'PostgreSQL, MySQL, Redis, MongoDB',
    coursework: 'Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Design'
  },
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      issueDate: 'March 2025',
      credentialUrl: 'https://aws.amazon.com/verification'
    }
  ],
  achievements: [
    'Solved 350+ algorithmic problems across LeetCode and Codeforces (Knight / 1850 rating).',
    'Secured 2nd Runner Up out of 180 teams in Smart India Hackathon 2024.',
    'Head of Technical Events, ACM Student Chapter IIT Delhi (2024-2025).'
  ],
  template: 'modern'
};

const DEFAULT_SKILLS_PROGRESS: Record<string, 'not-started' | 'in-progress' | 'completed'> = {
  'dsa': 'in-progress',
  'oop-concepts': 'completed',
  'databases-sql': 'completed',
  'git-github': 'completed',
  'system-design-basics': 'in-progress',
  'operating-systems': 'completed',
  'computer-networks': 'in-progress',
  'javascript': 'completed',
  'react-nextjs': 'in-progress',
  'docker-containers': 'in-progress',
};

const DEFAULT_PROJECTS_PROGRESS: Record<string, { status: 'not-started' | 'in-progress' | 'completed'; githubUrl?: string; liveUrl?: string; inPortfolio: boolean }> = {
  'proj-personal-portfolio': {
    status: 'completed',
    githubUrl: 'https://github.com/aaravsharma-dev/developer-portfolio',
    liveUrl: 'https://aarav-portfolio.roleup.dev',
    inPortfolio: true
  },
  'proj-algo-visualizer': {
    status: 'completed',
    githubUrl: 'https://github.com/aaravsharma-dev/algo-visualizer',
    liveUrl: 'https://algo-visualizer.roleup.dev',
    inPortfolio: true
  },
  'proj-distributed-task-queue': {
    status: 'in-progress',
    githubUrl: 'https://github.com/aaravsharma-dev/distributed-task-queue',
    liveUrl: '',
    inPortfolio: true
  },
  'proj-collaborative-kanban': {
    status: 'not-started',
    inPortfolio: false
  }
};

const DEFAULT_INTERNSHIP_CHECKLIST: Record<string, boolean> = {
  'resume-ready': true,
  'portfolio-ready': true,
  'github-ready': true,
  'linkedin-ready': true,
  'dsa-prep': true,
  'technical-prep': false,
  'hr-interview-prep': false
};

const DEFAULT_NETWORKING_CHECKLIST: Record<string, boolean> = {
  'linkedin-complete': true,
  'headline-optimized': true,
  'about-section': true,
  'skills-endorsed': true,
  'projects-attached': true,
  'github-linked': true,
  'alumni-outreach': false,
  'weekly-outreach-target': false
};

const DEFAULT_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Milestone Completed! 🎯',
    message: 'You marked "Databases & Relational SQL" as Completed. Your Technical Readiness increased by +8%.',
    timestamp: '10 mins ago',
    read: false,
    type: 'milestone',
    linkUrl: '/skills'
  },
  {
    id: 'notif-2',
    title: 'New Internship Matching Your Target Role 💼',
    message: 'Stripe just opened applications for Software Engineering Intern (Core Infrastructure).',
    timestamp: '2 hours ago',
    read: false,
    type: 'internship',
    linkUrl: '/internships'
  },
  {
    id: 'notif-3',
    title: 'Resume 82% Ready! 📄',
    message: 'Your resume is in great shape. Add one more quantified project metric to reach 90%+ ATS readiness.',
    timestamp: '1 day ago',
    read: true,
    type: 'resume',
    linkUrl: '/resume'
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(DEFAULT_USER);
  const [skillsProgress, setSkillsProgress] = useState<Record<string, 'not-started' | 'in-progress' | 'completed'>>(DEFAULT_SKILLS_PROGRESS);
  const [projectsProgress, setProjectsProgress] = useState<Record<string, { status: 'not-started' | 'in-progress' | 'completed'; githubUrl?: string; liveUrl?: string; inPortfolio: boolean }>>(DEFAULT_PROJECTS_PROGRESS);
  const [resume, setResume] = useState<ResumeData>(DEFAULT_RESUME);
  const [internshipChecklist, setInternshipChecklist] = useState<Record<string, boolean>>(DEFAULT_INTERNSHIP_CHECKLIST);
  const [networkingChecklist, setNetworkingChecklist] = useState<Record<string, boolean>>(DEFAULT_NETWORKING_CHECKLIST);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedUser = localStorage.getItem('roleup_user');
      if (savedUser) setUser(JSON.parse(savedUser));

      const savedSkillsProgress = localStorage.getItem('roleup_skills_progress');
      if (savedSkillsProgress) setSkillsProgress(JSON.parse(savedSkillsProgress));

      const savedProjectsProgress = localStorage.getItem('roleup_projects_progress');
      if (savedProjectsProgress) setProjectsProgress(JSON.parse(savedProjectsProgress));

      const savedResume = localStorage.getItem('roleup_resume');
      if (savedResume) setResume(JSON.parse(savedResume));

      const savedInternshipChecklist = localStorage.getItem('roleup_internship_checklist');
      if (savedInternshipChecklist) setInternshipChecklist(JSON.parse(savedInternshipChecklist));

      const savedNetworkingChecklist = localStorage.getItem('roleup_networking_checklist');
      if (savedNetworkingChecklist) setNetworkingChecklist(JSON.parse(savedNetworkingChecklist));
    } catch {
      // Ignore malformed saved state and fall back to default values.
    }
  }, []);

  const [posts, setPosts] = useState<CommunityPost[]>(INITIAL_COMMUNITY_POSTS);
  const [interviewExperiences, setInterviewExperiences] = useState<InterviewExperience[]>(INTERVIEW_EXPERIENCES);
  const [internships, setInternships] = useState<InternshipListing[]>(INTERSHIPS_INITIAL_SAFE);
  const [notifications, setNotifications] = useState<NotificationItem[]>(DEFAULT_NOTIFICATIONS);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Sync to local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('roleup_user', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('roleup_skills_progress', JSON.stringify(skillsProgress));
    }
  }, [skillsProgress]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('roleup_projects_progress', JSON.stringify(projectsProgress));
    }
  }, [projectsProgress]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('roleup_resume', JSON.stringify(resume));
    }
  }, [resume]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('roleup_internship_checklist', JSON.stringify(internshipChecklist));
    }
  }, [internshipChecklist]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('roleup_networking_checklist', JSON.stringify(networkingChecklist));
    }
  }, [networkingChecklist]);

  const targetRoleDetail = CAREER_ROLES.find(r => r.id === user.targetRole) || CAREER_ROLES[0];

  const setTargetRoleId = (roleId: string) => {
    setUser(prev => ({ ...prev, targetRole: roleId }));
    // Add notification
    const newRole = CAREER_ROLES.find(r => r.id === roleId);
    if (newRole) {
      addNotification({
        title: `Target Role Updated: ${newRole.title}`,
        message: `Your roadmap and skill recommendations have been aligned with the ${newRole.title} track.`,
        type: 'system',
        linkUrl: `/roles/${roleId}`
      });
    }
  };

  const updateUser = (updates: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const updateSkillStatus = (skillId: string, status: 'not-started' | 'in-progress' | 'completed') => {
    setSkillsProgress(prev => ({ ...prev, [skillId]: status }));
    if (status === 'completed') {
      const skillName = SKILLS_DATABASE.find(s => s.id === skillId)?.name || 'Skill';
      addNotification({
        title: `Skill Completed: ${skillName} 🎉`,
        message: `Great work! Your job-readiness technical score has increased. Keep the momentum going!`,
        type: 'milestone',
        linkUrl: `/skills/${skillId}`
      });
    }
  };

  const updateProjectProgress = (projectId: string, updates: Partial<{ status: 'not-started' | 'in-progress' | 'completed'; githubUrl: string; liveUrl: string; inPortfolio: boolean }>) => {
    setProjectsProgress(prev => {
      const current = prev[projectId] || { status: 'not-started', inPortfolio: false };
      return {
        ...prev,
        [projectId]: { ...current, ...updates }
      };
    });
    if (updates.status === 'completed') {
      const proj = PROJECTS_DATABASE.find(p => p.id === projectId);
      addNotification({
        title: `Project Shipped! 🚀`,
        message: `Awesome! You marked "${proj?.title || 'Project'}" as completed. Add the live demo link to your resume and portfolio.`,
        type: 'milestone',
        linkUrl: '/projects'
      });
    }
  };

  const updateResume = (newResume: Partial<ResumeData>) => {
    setResume(prev => ({ ...prev, ...newResume }));
  };

  const toggleInternshipChecklist = (key: string) => {
    setInternshipChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleNetworkingChecklist = (key: string) => {
    setNetworkingChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Helper to add notification
  const addNotification = (notif: Omit<NotificationItem, 'id' | 'timestamp' | 'read'>) => {
    const newItem: NotificationItem = {
      ...notif,
      id: `notif-${Date.now()}`,
      timestamp: 'Just now',
      read: false
    };
    setNotifications(prev => [newItem, ...prev.slice(0, 15)]);
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const clearNotifications = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // Calculate Resume Completion %
  const calculateResumeScore = (): number => {
    let score = 0;
    const { personalInfo, education, experience, projects, skills, certifications, achievements } = resume;
    if (personalInfo.fullName && personalInfo.email && personalInfo.phone) score += 20;
    if (personalInfo.summary && personalInfo.summary.length > 30) score += 10;
    if (education.length > 0) score += 15;
    if (experience.length > 0) score += 15;
    if (projects.length >= 2) score += 20;
    else if (projects.length === 1) score += 10;
    if (skills.languages && skills.frameworks && skills.tools) score += 10;
    if (certifications.length > 0 || achievements.length > 0) score += 10;
    return Math.min(100, score);
  };

  const resumeCompletion = calculateResumeScore();

  // Dynamic Job Readiness Score Calculation
  const calculateJobReadiness = (): JobReadinessBreakdown => {
    // 1. Technical Skills (Weight: 25%)
    const requiredSkillIds = targetRoleDetail.requiredSkills;
    let completedSkillsCount = 0;
    let inProgressSkillsCount = 0;
    requiredSkillIds.forEach(id => {
      const status = skillsProgress[id];
      if (status === 'completed') completedSkillsCount++;
      else if (status === 'in-progress') inProgressSkillsCount++;
    });
    const technicalSkillsScore = Math.round(
      requiredSkillIds.length > 0
        ? Math.min(100, ((completedSkillsCount * 1.0 + inProgressSkillsCount * 0.4) / requiredSkillIds.length) * 100)
        : 70
    );

    // 2. Projects (Weight: 20%)
    const relevantProjects = PROJECTS_DATABASE.filter(p => p.roleId === targetRoleDetail.id || p.difficulty === 'Beginner');
    let completedProjects = 0;
    let inProgressProjects = 0;
    Object.values(projectsProgress).forEach(p => {
      if (p.status === 'completed') completedProjects++;
      else if (p.status === 'in-progress') inProgressProjects++;
    });
    // Target 3 completed projects for 100%
    const projectsScore = Math.round(
      Math.min(100, ((completedProjects * 1.0 + inProgressProjects * 0.4) / 3) * 100)
    );

    // 3. Resume Score (Weight: 20%)
    const resumeScore = resumeCompletion;

    // 4. Portfolio Score (Weight: 10%)
    let portfolioScore = 0;
    if (user.isPortfolioPublished) portfolioScore += 40;
    const portfolioProjects = Object.values(projectsProgress).filter(p => p.inPortfolio && p.status === 'completed');
    portfolioScore += Math.min(60, portfolioProjects.length * 30);

    // 5. Interview Prep Score (Weight: 15%)
    let interviewItems = 0;
    if (internshipChecklist['dsa-prep']) interviewItems += 40;
    if (internshipChecklist['technical-prep']) interviewItems += 35;
    if (internshipChecklist['hr-interview-prep']) interviewItems += 25;
    const interviewScore = interviewItems;

    // 6. Internship Checklist Score (Weight: 10%)
    const checklistKeys = Object.keys(internshipChecklist);
    const checkedCount = checklistKeys.filter(k => internshipChecklist[k]).length;
    const internshipScore = Math.round(
      checklistKeys.length > 0 ? (checkedCount / checklistKeys.length) * 100 : 50
    );

    // Weighted Overall Score (Formula: 0.25*Skills + 0.20*Projects + 0.20*Resume + 0.10*Portfolio + 0.15*Interview + 0.10*Internship)
    const overallScore = Math.round(
      technicalSkillsScore * 0.25 +
      projectsScore * 0.20 +
      resumeScore * 0.20 +
      portfolioScore * 0.10 +
      interviewScore * 0.15 +
      internshipScore * 0.10
    );

    return {
      overallScore,
      technicalSkillsScore,
      projectsScore,
      resumeScore,
      portfolioScore,
      interviewScore,
      internshipScore,
      explanation: {
        technicalSkillsText: `${completedSkillsCount} of ${requiredSkillIds.length} target role skills mastered (${inProgressSkillsCount} in progress).`,
        projectsText: `${completedProjects} verified engineering projects completed with code repositories.`,
        resumeText: `ATS-compatible resume completeness based on essential sections, metrics, and skills.`,
        portfolioText: user.isPortfolioPublished ? `Public developer portfolio published with verified project showcases.` : `Portfolio is currently in draft mode. Publish it to increase visibility.`,
        interviewText: `Readiness across DSA problem patterns, system architecture, and behavioral STAR stories.`,
        internshipText: `${checkedCount} of ${checklistKeys.length} crucial internship preparation checkpoints cleared.`
      }
    };
  };

  const jobReadiness = calculateJobReadiness();

  // Community methods
  const toggleLikePost = (postId: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const isLiked = !p.isLikedByUser;
        return {
          ...p,
          isLikedByUser: isLiked,
          likesCount: isLiked ? p.likesCount + 1 : p.likesCount - 1
        };
      }
      return p;
    }));
  };

  const toggleBookmarkPost = (postId: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          isBookmarkedByUser: !p.isBookmarkedByUser
        };
      }
      return p;
    }));
  };

  const addComment = (postId: string, content: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const newComm = {
          id: `comm-${Date.now()}`,
          author: {
            name: user.name,
            avatar: user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
            college: user.college
          },
          content,
          createdAt: 'Just now'
        };
        return {
          ...p,
          comments: [...p.comments, newComm]
        };
      }
      return p;
    }));
  };

  const addPost = (postData: Omit<CommunityPost, 'id' | 'createdAt' | 'likesCount' | 'comments' | 'isLikedByUser' | 'isBookmarkedByUser'>) => {
    const newPost: CommunityPost = {
      ...postData,
      id: `post-${Date.now()}`,
      createdAt: 'Just now',
      likesCount: 1,
      isLikedByUser: true,
      isBookmarkedByUser: false,
      comments: []
    };
    setPosts(prev => [newPost, ...prev]);
    addNotification({
      title: 'Community Discussion Started',
      message: `Your post "${newPost.title.slice(0, 40)}..." has been published to the student community.`,
      type: 'community',
      linkUrl: '/community'
    });
  };

  // Interview Experiences methods
  const upvoteInterviewExperience = (id: string) => {
    setInterviewExperiences(prev => prev.map(e => e.id === id ? { ...e, upvotes: e.upvotes + 1 } : e));
  };

  const addInterviewExperience = (expData: Omit<InterviewExperience, 'id' | 'upvotes'>) => {
    const newExp: InterviewExperience = {
      ...expData,
      id: `exp-${Date.now()}`,
      upvotes: 1
    };
    setInterviewExperiences(prev => [newExp, ...prev]);
    addNotification({
      title: 'Interview Experience Contributed',
      message: `Thank you for helping fellow students by sharing your interview debrief at ${newExp.company}.`,
      type: 'community',
      linkUrl: '/interviews'
    });
  };

  const addInternship = (internship: InternshipListing) => {
    setInternships(prev => [internship, ...prev]);
  };

  const toggleAdminMode = () => {
    setIsAdmin(prev => !prev);
  };

  const resetAllDemoData = () => {
    setUser(DEFAULT_USER);
    setSkillsProgress(DEFAULT_SKILLS_PROGRESS);
    setProjectsProgress(DEFAULT_PROJECTS_PROGRESS);
    setResume(DEFAULT_RESUME);
    setInternshipChecklist(DEFAULT_INTERNSHIP_CHECKLIST);
    setNetworkingChecklist(DEFAULT_NETWORKING_CHECKLIST);
    setPosts(INITIAL_COMMUNITY_POSTS);
    setInterviewExperiences(INTERVIEW_EXPERIENCES);
    setInternships(INTERSHIPS_INITIAL_SAFE);
    setNotifications(DEFAULT_NOTIFICATIONS);
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        updateUser,
        targetRoleDetail,
        setTargetRoleId,
        roles: CAREER_ROLES,
        skills: SKILLS_DATABASE,
        skillsProgress,
        updateSkillStatus,
        projects: PROJECTS_DATABASE,
        projectsProgress,
        updateProjectProgress,
        resume,
        updateResume,
        resumeCompletion,
        internshipChecklist,
        toggleInternshipChecklist,
        networkingChecklist,
        toggleNetworkingChecklist,
        jobReadiness,
        internships,
        addInternship,
        posts,
        toggleLikePost,
        toggleBookmarkPost,
        addComment,
        addPost,
        interviewExperiences,
        upvoteInterviewExperience,
        addInterviewExperience,
        notifications,
        markNotificationRead,
        clearNotifications,
        isAdmin,
        toggleAdminMode,
        resetAllDemoData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const INTERSHIPS_INITIAL_SAFE = INTERNSHIPS_DATABASE;

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
