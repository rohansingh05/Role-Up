'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useApp } from '../../../lib/context/AppContext';
import { Sidebar } from '../../../components/Sidebar';
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Code2,
  FolderGit2,
  FileText,
  Briefcase,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Wrench,
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';

export default function RoleDetailPage() {
  const params = useParams();
  const roleId = params?.roleId as string;

  const { roles, skills, skillsProgress, updateSkillStatus, user, setTargetRoleId, projects } = useApp();

  const role = roles.find(r => r.id === roleId) || roles[0];
  const isTarget = user.targetRole === role.id;

  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  // Filter projects associated with this role
  const roleProjects = projects.filter(p => p.roleId === role.id || p.difficulty === 'Beginner');

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Role Header Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-900 border border-slate-800 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Career Track Roadmap</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                {role.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {role.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs mt-4">
                <span className="text-slate-400">Demand: <strong className="text-emerald-400">{role.demandLevel}</strong></span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">Salary: <strong className="text-white">{role.averageSalary}</strong></span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-2">
              {isTarget ? (
                <div className="px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-emerald-400 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Your Current Target Track</span>
                </div>
              ) : (
                <button
                  onClick={() => setTargetRoleId(role.id)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Set as My Target Role</span>
                </button>
              )}
              <Link
                href="/roles"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold text-center transition-colors"
              >
                Browse Other Roles
              </Link>
            </div>
          </div>
        </div>

        {/* Required Skills & Interactive Status Toggles */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span>Required Skills & Live Progress</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Mark your proficiency for each required competency. Real-time updates your Job-Readiness Score.
              </p>
            </div>
            <span className="text-xs text-slate-400 font-semibold">
              Tip: Click status pill to toggle
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {role.requiredSkills.map(skillId => {
              const skill = skills.find(s => s.id === skillId);
              const status = skillsProgress[skillId] || 'not-started';

              if (!skill) {
                return (
                  <div key={skillId} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                    <span className="font-semibold text-white">{skillId}</span>
                  </div>
                );
              }

              return (
                <div
                  key={skillId}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {skill.category}
                      </span>
                      <button
                        onClick={() => {
                          const next = status === 'completed' ? 'not-started' : status === 'in-progress' ? 'completed' : 'in-progress';
                          updateSkillStatus(skillId, next);
                        }}
                        className={`text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-md border transition-all ${
                          status === 'completed'
                            ? 'bg-emerald-950/70 border-emerald-500/70 text-emerald-300'
                            : status === 'in-progress'
                            ? 'bg-amber-950/70 border-amber-500/70 text-amber-300'
                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                      >
                        {status.replace('-', ' ')}
                      </button>
                    </div>

                    <Link href={`/skills/${skill.id}`} className="text-sm font-bold text-white hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </Link>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">{skill.estimatedHours} hrs</span>
                    <Link href={`/skills/${skill.id}`} className="text-indigo-400 font-bold hover:underline">
                      Tutorials & Qs →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Multi-Phase Learning Roadmap */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Interactive Sequential Curriculum
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              Step-by-Step {role.title} Roadmap
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Structured sequence from foundational theory to real-world deployment and interview readiness.
            </p>
          </div>

          <div className="space-y-4">
            {role.roadmapSteps.map((step) => {
              const isExpanded = expandedPhase === step.stepNumber;
              return (
                <div
                  key={step.stepNumber}
                  className={`rounded-2xl border transition-all ${
                    isExpanded
                      ? 'bg-slate-950/80 border-indigo-500/50 shadow-lg'
                      : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div
                    onClick={() => setExpandedPhase(isExpanded ? null : step.stepNumber)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="w-8 h-8 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/40 flex items-center justify-center font-bold text-xs">
                        {step.stepNumber}
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-indigo-400">
                          {step.phase} • ~{step.estimatedWeeks} Weeks
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-slate-400">
                      <span className="hidden sm:inline text-xs font-semibold text-emerald-400">
                        Milestone: {step.milestone}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 text-xs space-y-4">
                      <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                        {step.description}
                      </p>

                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Technologies & Concepts Covered:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.skills.map(sk => (
                            <span
                              key={sk}
                              className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium"
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/60 flex items-center justify-between">
                        <span className="text-indigo-300 font-semibold">
                          Target Deliverable: <strong>{step.milestone}</strong>
                        </span>
                        <Link
                          href="/projects"
                          className="text-xs font-bold text-white underline hover:text-indigo-300"
                        >
                          Find Matching Projects →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Tools, Interview Topics & Internship Guidance Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Production Tools */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>Production Tools</span>
            </h3>
            <p className="text-xs text-slate-400">
              Industry tools expected on your resume for {role.title} roles.
            </p>
            <div className="flex flex-wrap gap-2">
              {role.tools.map(tool => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Interview Topics */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span>Technical Interview Focus</span>
            </h3>
            <p className="text-xs text-slate-400">
              Frequent questions & whiteboard themes in tech screening rounds.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              {role.interviewTopics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold shrink-0">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Internship & Job Preparation */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Internship Strategy</span>
            </h3>
            <p className="text-xs text-slate-400">
              Strategic tactical advice for landing summer analyst & SDE internships.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              {role.internshipGuidance.map((guide, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">✓</span>
                  <span>{guide}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </main>
    </div>
  );
}
