export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type CareerGoal = 'Learn skills' | 'Build projects' | 'Get internship' | 'Get job' | 'Prepare for interviews';

export type LearningStyle = 'Hands-on Projects' | 'Video Tutorials' | 'Official Documentation' | 'Structured Courses';

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  college: string;
  degree: string;
  graduationYear: string;
  currentLevel: SkillLevel;
  targetRole: string; // e.g. "software-engineer"
  currentSkills: string[];
  lookingFor: 'Internship' | 'Full-Time Job' | 'Both' | 'Just Learning';
  learningStyle: LearningStyle;
  bio?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioSlug?: string;
  isPortfolioPublished?: boolean;
  portfolioTheme?: 'slate-dark' | 'indigo-modern' | 'minimal-light';
  isOnboarded: boolean;
}

export interface CareerRole {
  id: string;
  title: string;
  tagline: string;
  description: string;
  averageSalary: string;
  demandLevel: 'High' | 'Very High' | 'Exceptional';
  badgeColor: string;
  iconName: string;
  primarySkills: string[];
  requiredSkills: string[]; // skill IDs
  tools: string[];
  interviewTopics: string[];
  roadmapSteps: {
    phase: string;
    stepNumber: number;
    title: string;
    description: string;
    skills: string[];
    estimatedWeeks: number;
    milestone: string;
  }[];
  internshipGuidance: string[];
  jobGuidance: string[];
}

export interface LearningResource {
  id: string;
  skillId: string;
  title: string;
  provider: string; // e.g. "freeCodeCamp", "Harvard CS50", "Frontend Masters", "Coursera"
  type: 'Free' | 'Paid';
  format: 'Video' | 'Documentation' | 'Course' | 'Interactive' | 'Book';
  difficulty: SkillLevel;
  duration: string;
  rating: number;
  certificateAvailable: boolean;
  description: string;
  url: string;
}

export interface SkillDetail {
  id: string;
  name: string;
  category: 'Core CS' | 'Frontend' | 'Backend' | 'AI & Data' | 'Cloud & DevOps' | 'Security';
  description?: string;
  difficulty: SkillLevel;
  estimatedHours: number;
  prerequisites: string[];
  relatedRoles: string[];
  whyItMatters: string;
  whatYouLearn: string[];
  learningRoadmap: string[];
  practiceProblems: {
    title: string;
    platform: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    topic: string;
  }[];
  interviewQuestions: {
    question: string;
    answer: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
  }[];
  resources: LearningResource[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  difficulty: SkillLevel;
  roleId: string;
  skills: string[];
  estimatedHours: number;
  summary: string;
  requirements: string[];
  stepByStepRoadmap: {
    step: number;
    title: string;
    description: string;
  }[];
  suggestedStack: string[];
  portfolioHighlight: string;
}

export interface UserProjectProgress {
  projectId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  githubRepoUrl?: string;
  liveDemoUrl?: string;
  includedInPortfolio: boolean;
  notes?: string;
  completedAt?: string;
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    portfolioUrl: string;
    linkedinUrl: string;
    githubUrl: string;
    summary: string;
  };
  education: {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    gpaOrGrade: string;
  }[];
  experience: {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    bullets: string[];
  }[];
  projects: {
    id: string;
    name: string;
    techStack: string;
    githubUrl: string;
    liveUrl: string;
    bullets: string[];
  }[];
  skills: {
    languages: string;
    frameworks: string;
    tools: string;
    databases: string;
    coursework: string;
  };
  certifications: {
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
    credentialUrl: string;
  }[];
  achievements: string[];
  template: 'modern' | 'minimal' | 'executive';
}

export interface InternshipListing {
  id: string;
  company: string;
  role: string;
  roleCategory: string; // role ID
  type: 'Internship' | 'Full-Time' | 'Co-op';
  location: string;
  isRemote: boolean;
  stipend: string;
  duration: string;
  deadline: string;
  postedDate: string;
  skillsRequired: string[];
  experienceLevel: 'Fresher / Student' | 'Final Year' | 'Any Year';
  description: string;
  responsibilities: string[];
  benefits: string[];
  applyLink: string;
}

export interface CommunityPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    college: string;
    role: string;
  };
  title: string;
  content: string;
  category: 'DSA' | 'Web Development' | 'AI/ML' | 'Data Science' | 'Cybersecurity' | 'DevOps' | 'Internships' | 'Resume' | 'Interviews' | 'Career Advice';
  createdAt: string;
  likesCount: number;
  isLikedByUser?: boolean;
  isBookmarkedByUser?: boolean;
  tags: string[];
  comments: {
    id: string;
    author: {
      name: string;
      avatar: string;
      college: string;
    };
    content: string;
    createdAt: string;
  }[];
}

export interface InterviewExperience {
  id: string;
  candidateName: string;
  college: string;
  company: string;
  role: string;
  interviewType: 'On-campus' | 'Off-campus' | 'Referral';
  experienceLevel: 'Fresher' | 'Intern' | 'Pre-final Year';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  result: 'Offer Received' | 'Offer Accepted' | 'Final Round' | 'Valuable Experience';
  date: string;
  rounds: {
    roundName: string;
    duration: string;
    focus: string;
    details: string;
  }[];
  questionsAsked: string[];
  preparationResources: string[];
  adviceForCandidates: string;
  upvotes: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'milestone' | 'internship' | 'resume' | 'community' | 'system';
  linkUrl?: string;
}

export interface JobReadinessBreakdown {
  overallScore: number;
  technicalSkillsScore: number;
  projectsScore: number;
  resumeScore: number;
  portfolioScore: number;
  interviewScore: number;
  internshipScore: number;
  explanation: {
    technicalSkillsText: string;
    projectsText: string;
    resumeText: string;
    portfolioText: string;
    interviewText: string;
    internshipText: string;
  };
}
