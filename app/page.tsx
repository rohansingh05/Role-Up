'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '../lib/context/AppContext';
import { Footer } from '../components/Footer';
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Code2,
  FolderGit2,
  FileText,
  Briefcase,
  Users2,
  ChevronRight,
  TrendingUp,
  Zap,
  Target,
  Award,
  Terminal,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  MessageSquareShare
} from 'lucide-react';

export default function LandingPage() {
  const { roles, jobReadiness, user } = useApp();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-900/40 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Computer Science Career Engine</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400">2026 Batch Ready</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Become Job Ready, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-brand-400 to-cyan-400">
              Not Just Degree Ready.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            RoleUp helps CSE students choose the right career path, learn the skills that companies need, build a strong portfolio, prepare for internships, and connect with a community of learners.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-bold text-base shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Get Job Ready</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/roles"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base transition-colors flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-indigo-400" />
              <span>Explore Career Paths</span>
            </Link>
          </div>

          {/* Interactive Visual Roadmap Indicator */}
          <div className="mt-16 pt-8 border-t border-slate-800/80 max-w-5xl mx-auto">
            <div className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-6">
              The Proven 7-Step RoleUp Student Journey
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-left">
              {[
                { step: '01', title: 'Choose Role', desc: 'Pick your career track' },
                { step: '02', title: 'Build Skills', desc: 'Master required tech' },
                { step: '03', title: 'Learn Deep', desc: 'Free & curated docs' },
                { step: '04', title: 'Ship Projects', desc: 'Non-trivial code' },
                { step: '05', title: 'Build Resume', desc: 'ATS metrics & PDF' },
                { step: '06', title: 'Interview Prep', desc: 'DSA & System Design' },
                { step: '07', title: 'Get Hired', desc: 'Internship & Jobs' },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-indigo-400">{item.step}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why RoleUp vs Generic LMS Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              The Reality of CSE Hiring
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Why Colleges Produce Degree Holders, Not Job-Ready Engineers
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Hiring managers don't ask what syllabus you memorized. They ask what systems you engineered, how you optimize queries, and how you solve algorithmic bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/60 text-red-400 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Curriculum Lag</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Most university syllabi are 10 years behind industry needs. RoleUp's tracks are calibrated against 2026 hiring demands: Next.js App Router, RAG, PyTorch, Docker, and distributed systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center mb-5">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tutorial Purgatory</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Copying YouTube todo apps won't get you hired. RoleUp guides you through building multi-tiered, deployable systems with CI/CD, live URLs, and test suites.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transparent Readiness</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No guessing if your resume will pass ATS. RoleUp calculates a real-time mathematical Job-Readiness Score across your skills, projects, resume, and interview prep.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* The 6 Primary Career Paths */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Specialized Engineering Roles
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Choose Your High-Demand Career Track
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Each path includes structured roadmaps, vetted learning resources, milestone projects, and interview questions.
              </p>
            </div>
            <Link
              href="/roles"
              className="mt-4 sm:mt-0 text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 group"
            >
              <span>View all roadmaps</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map(role => (
              <div
                key={role.id}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      Demand: <strong className="text-emerald-400">{role.demandLevel}</strong>
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {role.averageSalary}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {role.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {role.tagline}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Core Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {role.primarySkills.slice(0, 4).map(skill => (
                        <span
                          key={skill}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {role.roadmapSteps.length} Roadmap Phases
                  </span>
                  <Link
                    href={`/roles/${role.id}`}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group-hover:underline"
                  >
                    <span>Explore Track</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Resume & Portfolio Section Showcase */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>ATS Resume & Portfolio Engine</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Turn Your Skills into an Irresistible Resume & Public Portfolio
            </h2>

            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              Don't lose job opportunities to bad formatting. RoleUp automatically verifies your resume sections, calculates an ATS completeness score, and lets you publish a clean, professional web portfolio at <code className="text-indigo-400 bg-slate-900 px-1.5 py-0.5 rounded">/portfolio/[username]</code>.
            </p>

            <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pre-built quantified bullets highlighting performance metrics</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live PDF Export formatted for ATS screening algorithms</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>One-click publishable portfolio with project GitHub and live demo links</span>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/resume"
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors"
              >
                Open Resume Builder
              </Link>
              <Link
                href={`/portfolio/${user.portfolioSlug || 'aarav-sharma'}`}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-xs sm:text-sm transition-colors"
              >
                View Live Portfolio
              </Link>
            </div>
          </div>

          {/* Interactive Resume Card Preview */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div>
                <span className="text-xs font-bold text-white">ATS Resume Checklist</span>
                <p className="text-[11px] text-slate-400">Analyzed for tech screening criteria</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-400 text-xs font-bold">
                82% Score
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-800/50 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Personal Info & Contact Links</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">Passed</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/50 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Education & GPA (IIT Delhi CSE)</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">Passed</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/50 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>2 Non-Trivial Engineering Projects</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">Passed</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/50 flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Categorized Technical Skills (Languages, Tools, DBs)</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-bold">Passed</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/30 flex items-center justify-between border border-dashed border-slate-700">
                <span className="flex items-center gap-2 text-slate-400">
                  <span className="w-4 h-4 rounded-full border border-slate-500 inline-block" />
                  <span>Quantified metric in Internship experience</span>
                </span>
                <span className="text-[10px] text-amber-400 font-bold">Pending (+8%)</span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/60 text-[11px] text-indigo-300 flex items-center justify-between">
              <span>Next Best Action: Add metric to internship bullet</span>
              <Link href="/resume" className="font-bold underline text-white">
                Edit Resume →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Community & Interview Experiences Preview */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Peer Wisdom & Intel
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Real Interview Debriefs & Student Community
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Read verified debriefs from students who recently interviewed at Google, Microsoft, Amazon, and top startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/60">
                    Google • On-campus
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold">Offer Accepted</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  SDE I Candidate Experience by Akash Gupta (IIT Roorkee)
                </h4>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  "Google interviewers are looking for how you think, not just if you already memorized the solution. Clarify edge cases, dry-run on a small example, discuss time/space tradeoffs first..."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">4 Interview Rounds detailed</span>
                <Link href="/interviews" className="text-xs font-bold text-purple-400 hover:underline">
                  Read full debrief →
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/60">
                    Microsoft • Off-campus
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold">Offer Received</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  SDE Intern Candidate Experience by Rhea Sen (IIIT Bangalore)
                </h4>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  "Know every line of code on your resume inside out! My interviewer asked detailed questions on why I chose PostgreSQL over MongoDB in my college project..."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">LRU Cache + System Design questions</span>
                <Link href="/interviews" className="text-xs font-bold text-blue-400 hover:underline">
                  Read full debrief →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300"
            >
              <Users2 className="w-4 h-4" />
              <span>Join discussions with 2,400+ CSE students across 100+ colleges →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Clarifications & Guidance
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What makes RoleUp different from Udemy or Coursera?",
                a: "Generic LMS platforms sell endless video catalogs without context. RoleUp is an action-driven job readiness engine that tells you EXACTLY what role to target, what skills to prioritize first, provides free and paid curated resources, and directly guides you in building portfolio-grade projects, an ATS resume, and passing technical interviews."
              },
              {
                q: "Does RoleUp guarantee I will land a software job?",
                a: "No platform can honestly guarantee employment. What RoleUp does is compute a transparent Job-Readiness Score based on real deliverables: mastered skills, deployed projects, ATS resume completeness, and mock interview prep. Students with scores > 75% have the verified portfolio assets recruiters look for."
              },
              {
                q: "I'm a 1st or 2nd year student. Is RoleUp right for me?",
                a: "Yes! Starting early is the ultimate advantage. RoleUp's Beginner phases guide you from core programming syntax (C++, Java, or Python) into Data Structures, Git, and web fundamentals before campus internship seasons begin."
              },
              {
                q: "Are the learning resources completely free?",
                a: "RoleUp explicitly separates high-quality FREE resources (MIT OpenCourseWare, NeetCode, documentation, Harvard CS50) from premium options. You can become 100% job-ready using only our verified free curriculum."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-t from-slate-950 via-indigo-950/30 to-slate-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Stop Guessing. Start Becoming Job Ready.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Join thousands of CSE students navigating the exact roadmap to their dream tech roles, internships, and engineering careers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Get Job Ready Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-base transition-colors"
            >
              Open Student Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

    </div>
  );
}
