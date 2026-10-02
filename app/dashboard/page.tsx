'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  Compass,
  Sparkles,
  CheckCircle2,
  Code2,
  FolderGit2,
  FileText,
  Briefcase,
  Users2,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  PlayCircle,
  CheckCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  MessageSquareShare,
  Share2
} from 'lucide-react';

export default function DashboardPage() {
  const {
    user,
    targetRoleDetail,
    roles,
    setTargetRoleId,
    jobReadiness,
    skills,
    skillsProgress,
    updateSkillStatus,
    projects,
    projectsProgress,
    resumeCompletion,
    internships,
    posts,
    interviewExperiences,
    internshipChecklist,
    toggleInternshipChecklist
  } = useApp();

  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  // Compute recommended next skill to learn
  const targetRequiredSkillIds = targetRoleDetail.requiredSkills;
  const inProgressSkillId = targetRequiredSkillIds.find(id => skillsProgress[id] === 'in-progress');
  const notStartedSkillId = targetRequiredSkillIds.find(id => !skillsProgress[id] || skillsProgress[id] === 'not-started');
  const nextSkillId = inProgressSkillId || notStartedSkillId || 'dsa';
  const nextSkill = skills.find(s => s.id === nextSkillId) || skills[0];

  // Recommended projects matching role
  const recommendedProjects = projects.filter(
    p => p.roleId === targetRoleDetail.id || p.difficulty === 'Beginner'
  ).slice(0, 3);

  // Recommended internships matching role
  const matchingInternships = internships.filter(
    i => i.roleCategory === targetRoleDetail.id
  ).slice(0, 3);

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Dashboard Workspace */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Top Welcome & Role Switcher Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800">
          <div>
            <div className="flex items-center space-x-2 text-indigo-400 text-xs font-semibold mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Student Career Command Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Hi, {user.name} 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {user.college} • Class of {user.graduationYear} • Goal: {user.lookingFor}
            </p>
          </div>

          {/* Target Role Switcher Dropdown */}
          <div className="relative">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
              Active Career Track:
            </span>
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white transition-colors"
            >
              <span>{targetRoleDetail.title}</span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${roleDropdownOpen ? 'rotate-90' : ''}`} />
            </button>

            {roleDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden py-1">
                {roles.map(r => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setTargetRoleId(r.id);
                      setRoleDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                      r.id === targetRoleDetail.id
                        ? 'bg-indigo-600/30 text-indigo-300 font-bold'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{r.title}</span>
                    {r.id === targetRoleDetail.id && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Overall Job Readiness Score Overview */}
        <section id="readiness" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  RoleUp Verified Metric
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 text-[10px] font-bold border border-emerald-800/60">
                  Active
                </span>
              </div>
              <h2 className="text-2xl font-black text-white mt-1">
                Overall Job Readiness: {jobReadiness.overallScore}%
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Your progress toward completing the RoleUp job-readiness roadmap. This internal benchmark evaluates verified skills, portfolio code, ATS resume completeness, and interview preparation.
              </p>
            </div>

            {/* Score Ring / Radial Display */}
            <div className="flex items-center space-x-4 shrink-0 bg-slate-950/60 px-5 py-3.5 rounded-xl border border-slate-800">
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-400">
                  {jobReadiness.overallScore}%
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Readiness Index
                </div>
              </div>
              <div className="h-10 w-px bg-slate-800" />
              <div className="text-xs space-y-0.5">
                <div className="text-slate-300 font-semibold">Track: {targetRoleDetail.title}</div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>On track for 2026 hiring cycle</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Category Progress Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Technical Skills */}
            <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Technical Skills</span>
                </span>
                <span className="font-bold text-indigo-400">{jobReadiness.technicalSkillsScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-2 rounded-full transition-all duration-500" style={{ width: `${jobReadiness.technicalSkillsScore}%` }} />
              </div>
              <p className="text-[10px] text-slate-500 mt-1.5 line-clamp-1">{jobReadiness.explanation.technicalSkillsText}</p>
            </div>

            {/* Engineering Projects */}
            <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Projects</span>
                </span>
                <span className="font-bold text-cyan-400">{jobReadiness.projectsScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-2 rounded-full transition-all duration-500" style={{ width: `${jobReadiness.projectsScore}%` }} />
              </div>
              <p className="text-[10px] text-slate-500 mt-1.5 line-clamp-1">{jobReadiness.explanation.projectsText}</p>
            </div>

            {/* Resume Completion */}
            <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ATS Resume</span>
                </span>
                <span className="font-bold text-emerald-400">{jobReadiness.resumeScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{ width: `${jobReadiness.resumeScore}%` }} />
              </div>
              <p className="text-[10px] text-slate-500 mt-1.5 line-clamp-1">{jobReadiness.explanation.resumeText}</p>
            </div>

            {/* Public Portfolio */}
            <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-purple-400" />
                  <span>Portfolio</span>
                </span>
                <span className="font-bold text-purple-400">{jobReadiness.portfolioScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: `${jobReadiness.portfolioScore}%` }} />
              </div>
              <p className="text-[10px] text-slate-500 mt-1.5 line-clamp-1">{jobReadiness.explanation.portfolioText}</p>
            </div>

            {/* Interview Preparation */}
            <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Interview Prep</span>
                </span>
                <span className="font-bold text-amber-400">{jobReadiness.interviewScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{ width: `${jobReadiness.interviewScore}%` }} />
              </div>
              <p className="text-[10px] text-slate-500 mt-1.5 line-clamp-1">{jobReadiness.explanation.interviewText}</p>
            </div>

            {/* Internship Preparation */}
            <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                  <span>Internship Checklist</span>
                </span>
                <span className="font-bold text-blue-400">{jobReadiness.internshipScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: `${jobReadiness.internshipScore}%` }} />
              </div>
              <p className="text-[10px] text-slate-500 mt-1.5 line-clamp-1">{jobReadiness.explanation.internshipText}</p>
            </div>

          </div>
        </section>

        {/* Next Best Action Card (Requirement #6) */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-indigo-950/50 border border-indigo-500/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              <span>Recommended Next Step</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Continue Learning: {nextSkill.name}
            </h3>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              {nextSkill.whyItMatters}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span>⏱ {nextSkill.estimatedHours} Hours</span>
              <span>•</span>
              <span>Level: {nextSkill.difficulty}</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">{nextSkill.resources.length} Verified Tutorials Available</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/skills/${nextSkill.id}`}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => updateSkillStatus(nextSkill.id, 'completed')}
              className="px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold transition-colors"
            >
              Mark Done
            </button>
          </div>
        </section>

        {/* Dashboard 2-Column Grid: Skills & Roadmaps vs Projects & Internships */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (2 spans): Target Role Skills & Recommended Projects */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Required Skills for Target Role */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-indigo-400" />
                    <span>Skills for {targetRoleDetail.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400">Core competencies requested in job descriptions</p>
                </div>
                <Link href="/skills" className="text-xs font-semibold text-indigo-400 hover:underline">
                  View all skills →
                </Link>
              </div>

              <div className="space-y-3">
                {targetRoleDetail.requiredSkills.map(skillId => {
                  const s = skills.find(sk => sk.id === skillId);
                  if (!s) return null;
                  const status = skillsProgress[skillId] || 'not-started';

                  return (
                    <div
                      key={skillId}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => {
                            const nextState = status === 'completed' ? 'not-started' : status === 'in-progress' ? 'completed' : 'in-progress';
                            updateSkillStatus(skillId, nextState);
                          }}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            status === 'completed'
                              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                              : status === 'in-progress'
                              ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                              : 'bg-slate-800 border-slate-700 text-slate-500'
                          }`}
                          title="Click to toggle status"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                        <div>
                          <Link href={`/skills/${skillId}`} className="text-xs font-bold text-white hover:text-indigo-400">
                            {s.name}
                          </Link>
                          <p className="text-[11px] text-slate-400">
                            {s.category} • {s.estimatedHours} hrs • {s.resources.length} resources
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                          status === 'completed'
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60'
                            : status === 'in-progress'
                            ? 'bg-amber-950/60 text-amber-400 border border-amber-800/60'
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {status.replace('-', ' ')}
                        </span>
                        <Link
                          href={`/skills/${skillId}`}
                          className="text-slate-400 hover:text-white p-1"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommended Engineering Projects */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-cyan-400" />
                    <span>Recommended Projects to Build</span>
                  </h3>
                  <p className="text-xs text-slate-400">Non-trivial applications to prove engineering ability</p>
                </div>
                <Link href="/projects" className="text-xs font-semibold text-cyan-400 hover:underline">
                  View all projects →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedProjects.map(proj => {
                  const progress = projectsProgress[proj.id] || { status: 'not-started', inPortfolio: false };
                  return (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            {proj.difficulty}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">
                            ~{proj.estimatedHours} hrs
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white line-clamp-1">{proj.title}</h4>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{proj.summary}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <span className={`text-[10px] font-bold ${
                          progress.status === 'completed'
                            ? 'text-emerald-400'
                            : progress.status === 'in-progress'
                            ? 'text-amber-400'
                            : 'text-slate-500'
                        }`}>
                          ● {progress.status.replace('-', ' ')}
                        </span>
                        <Link
                          href={`/projects#${proj.id}`}
                          className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          <span>Build Steps</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommended Internships Matching Role */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-amber-400" />
                    <span>Matching Internships & Jobs</span>
                  </h3>
                  <p className="text-xs text-slate-400">Openings aligned with {targetRoleDetail.title}</p>
                </div>
                <Link href="/internships" className="text-xs font-semibold text-amber-400 hover:underline">
                  Browse all openings →
                </Link>
              </div>

              <div className="space-y-3">
                {matchingInternships.map(intern => (
                  <div
                    key={intern.id}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-white">{intern.company}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {intern.type}
                        </span>
                        {intern.isRemote && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300">
                            Remote
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-semibold text-slate-200 mt-1">{intern.role}</h4>
                      <p className="text-[11px] text-slate-400">{intern.location} • {intern.stipend}</p>
                    </div>

                    <div className="shrink-0 flex items-center space-x-2">
                      <a
                        href={intern.applyLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-colors flex items-center gap-1.5"
                      >
                        <span>Apply</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (1 span): Checklist, Resume Completion, Community Pulse */}
          <div className="space-y-8">
            
            {/* Internship Preparation Checklist (Interactive) */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Internship Checklist</span>
                </h3>
                <span className="text-xs font-bold text-emerald-400">
                  {jobReadiness.internshipScore}% Ready
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { key: 'resume-ready', label: 'ATS Resume Ready & Tailored' },
                  { key: 'portfolio-ready', label: 'Public Portfolio Live with Links' },
                  { key: 'github-ready', label: 'GitHub Readmes & Pinned Repos' },
                  { key: 'linkedin-ready', label: 'LinkedIn Profile Optimized' },
                  { key: 'dsa-prep', label: '100+ LeetCode DSA Patterns Solved' },
                  { key: 'technical-prep', label: 'System Design & Web Architecture' },
                  { key: 'hr-interview-prep', label: 'Behavioral STAR Method Stories' }
                ].map(item => {
                  const isChecked = internshipChecklist[item.key] || false;
                  return (
                    <div
                      key={item.key}
                      onClick={() => toggleInternshipChecklist(item.key)}
                      className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-emerald-950/30 border-emerald-800/40 text-slate-200'
                          : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="text-[11px] font-medium">{item.label}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isChecked
                          ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                          : 'border-slate-700 bg-slate-800'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Resume Completion Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  ATS Resume Status
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  {resumeCompletion}% Complete
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${resumeCompletion}%` }} />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Your resume template is configured. Review your bullet points to ensure every project includes quantifiable metrics.
              </p>
              <Link
                href="/resume"
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Edit & Export PDF</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Recent Interview Experience Debrief */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <MessageSquareShare className="w-3.5 h-3.5" />
                  <span>Interview Debrief</span>
                </h3>
                <Link href="/interviews" className="text-[11px] text-purple-400 hover:underline">
                  More →
                </Link>
              </div>

              {interviewExperiences.slice(0, 1).map(exp => (
                <div key={exp.id} className="text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{exp.company}</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">{exp.result}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">By {exp.candidateName} • {exp.role}</p>
                  <p className="text-[11px] text-slate-300 italic line-clamp-3">
                    "{exp.adviceForCandidates}"
                  </p>
                  <Link href="/interviews" className="inline-block text-[11px] text-indigo-400 font-semibold hover:underline">
                    Read all {exp.rounds.length} rounds →
                  </Link>
                </div>
              ))}
            </div>

            {/* Student Community Pulse */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Users2 className="w-3.5 h-3.5" />
                  <span>Community Discussions</span>
                </h3>
                <Link href="/community" className="text-[11px] text-cyan-400 hover:underline">
                  Explore →
                </Link>
              </div>

              <div className="space-y-3">
                {posts.slice(0, 2).map(post => (
                  <div key={post.id} className="text-xs">
                    <Link href="/community" className="font-semibold text-slate-200 hover:text-cyan-300 line-clamp-1">
                      {post.title}
                    </Link>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {post.author.name} • {post.likesCount} likes • {post.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
