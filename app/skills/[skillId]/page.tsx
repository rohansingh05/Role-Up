'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useApp } from '../../../lib/context/AppContext';
import { Sidebar } from '../../../components/Sidebar';
import {
  Code2,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle,
  FileCode2,
  Layers,
  Award,
  Star
} from 'lucide-react';

export default function SkillDetailPage() {
  const params = useParams();
  const skillId = params?.skillId as string;

  const { skills, skillsProgress, updateSkillStatus, roles, projects } = useApp();

  const skill = skills.find(s => s.id === skillId) || skills[0];
  const status = skillsProgress[skill.id] || 'not-started';

  const [resourceFilter, setResourceFilter] = useState<'All' | 'Free' | 'Paid'>('All');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const filteredResources = skill.resources.filter(res => {
    if (resourceFilter === 'All') return true;
    return res.type === resourceFilter;
  });

  const matchingProjects = projects.filter(p => p.skills.some(sk => sk.toLowerCase().includes(skill.name.toLowerCase()) || skill.name.toLowerCase().includes(sk.toLowerCase())));

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Top Skill Overview Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Code2 className="w-4 h-4" />
                <span>{skill.category} Module</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{skill.difficulty} Level</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                {skill.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {skill.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs mt-4 text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Estimated: <strong>{skill.estimatedHours} Hours</strong></span>
                </span>
                <span>•</span>
                <span>Prerequisites: <strong className="text-slate-200">{skill.prerequisites.join(', ')}</strong></span>
              </div>
            </div>

            {/* Status & Action */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-4">
                <div className="text-xs">
                  <span className="text-slate-500 text-[10px] uppercase font-bold block">Status:</span>
                  <span className="font-bold text-white capitalize">{status.replace('-', ' ')}</span>
                </div>

                <div className="flex items-center space-x-1">
                  {(['not-started', 'in-progress', 'completed'] as const).map(st => (
                    <button
                      key={st}
                      onClick={() => updateSkillStatus(skill.id, st)}
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all ${
                        status === st
                          ? st === 'completed'
                            ? 'bg-emerald-600 text-white'
                            : st === 'in-progress'
                            ? 'bg-amber-600 text-white'
                            : 'bg-slate-700 text-white'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {st.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                href="/skills"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold text-center transition-colors"
              >
                Back to All Skills
              </Link>
            </div>
          </div>
        </div>

        {/* Why it Matters & What You Will Learn */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Why this skill matters */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Why This Skill Matters in CSE Hiring</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {skill.whyItMatters}
            </p>
          </div>

          {/* What you will learn */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>What You Will Master</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {skill.whatYouLearn.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Learning Roadmap */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Recommended Learning Sequence</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {skill.learningRoadmap.map((week, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                <span className="text-[10px] font-bold text-cyan-400 block mb-1">
                  Phase {idx + 1}
                </span>
                <p className="text-slate-200 font-medium leading-relaxed">{week}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Resources (Free vs Paid per requirement #9) */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Verified Learning Resources</span>
              </h3>
              <p className="text-xs text-slate-400">
                Curated documentation, video courses, and interactive sandboxes
              </p>
            </div>

            {/* Free vs Paid Filter */}
            <div className="flex items-center space-x-1 p-1 bg-slate-950 rounded-xl border border-slate-800 self-start sm:self-auto">
              {(['All', 'Free', 'Paid'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setResourceFilter(tab)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                    resourceFilter === tab
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'Free' ? 'Free (Open Source)' : tab === 'Paid' ? 'Paid (Certificates)' : 'All Resources'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResources.map(res => (
              <div
                key={res.id}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      res.type === 'Free'
                        ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/60'
                        : 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/60'
                    }`}>
                      {res.type} Resource
                    </span>

                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{res.rating}</span>
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white line-clamp-2">{res.title}</h4>
                  <p className="text-[11px] font-medium text-slate-400 mt-1">Provider: {res.provider}</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {res.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>⏱ {res.duration}</span>
                    <span>Format: {res.format}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">
                    {res.certificateAvailable ? '✓ Certificate Available' : 'Open Curriculum'}
                  </span>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    <span>Open Resource</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Problems & Interview Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Practice Problems */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-cyan-400" />
              <span>Practice Problems & Platforms</span>
            </h3>

            <div className="space-y-2.5">
              {skill.practiceProblems.map((prob, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div>
                    <p className="font-semibold text-white">{prob.title}</p>
                    <p className="text-[11px] text-slate-400">{prob.platform} • {prob.topic}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    prob.difficulty === 'Easy'
                      ? 'bg-emerald-950/60 text-emerald-400'
                      : prob.difficulty === 'Medium'
                      ? 'bg-amber-950/60 text-amber-400'
                      : 'bg-red-950/60 text-red-400'
                  }`}>
                    {prob.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Real Interview Questions */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span>Real Interview Questions & Model Answers</span>
            </h3>

            <div className="space-y-3">
              {skill.interviewQuestions.map((q, idx) => {
                const isOpen = openQuestionIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-950/60 border border-slate-800 overflow-hidden text-xs"
                  >
                    <div
                      onClick={() => setOpenQuestionIndex(isOpen ? null : idx)}
                      className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-900 transition-colors"
                    >
                      <span className="font-semibold text-white pr-2">
                        {q.question}
                      </span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </div>

                    {isOpen && (
                      <div className="p-3.5 bg-slate-900/60 border-t border-slate-800 text-slate-300 leading-relaxed text-[11px]">
                        <strong className="text-indigo-400 block mb-1">Model Answer:</strong>
                        {q.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
