'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  Code2,
  Search,
  CheckCircle2,
  Clock,
  BookOpen,
  Filter,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

export default function SkillsPage() {
  const { skills, skillsProgress, updateSkillStatus, targetRoleDetail } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Core CS', 'Frontend', 'Backend', 'AI & Data', 'Cloud & DevOps', 'Security'];

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (skill.description || skill.whyItMatters || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Code2 className="w-4 h-4" />
              <span>Competency Engine</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              Skills System & Learning Roadmaps
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Master the core technologies demanded by engineering employers. Each skill includes curated free tutorials, practice problems, and real interview questions.
            </p>
          </div>

          <Link
            href="/resources"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 self-start sm:self-auto transition-colors"
          >
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Curated Resources Library</span>
          </Link>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800">
          
          {/* Categories */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative shrink-0 sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search skills or concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map(skill => {
            const status = skillsProgress[skill.id] || 'not-started';
            const isTargetSkill = targetRoleDetail.requiredSkills.includes(skill.id);

            return (
              <div
                key={skill.id}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {skill.category}
                    </span>

                    {/* Interactive Status Pill */}
                    <button
                      onClick={() => {
                        const next = status === 'completed' ? 'not-started' : status === 'in-progress' ? 'completed' : 'in-progress';
                        updateSkillStatus(skill.id, next);
                      }}
                      className={`text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-md border transition-all ${
                        status === 'completed'
                          ? 'bg-emerald-950/70 border-emerald-500/70 text-emerald-300'
                          : status === 'in-progress'
                          ? 'bg-amber-950/70 border-amber-500/70 text-amber-300'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                      title="Click to toggle status"
                    >
                      {status.replace('-', ' ')}
                    </button>
                  </div>

                  <div className="flex items-baseline space-x-2">
                    <Link
                      href={`/skills/${skill.id}`}
                      className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors"
                    >
                      {skill.name}
                    </Link>
                    {isTargetSkill && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-800/60">
                        Target Role
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{skill.estimatedHours} Hours</span>
                    </span>
                    <span>Level: <strong className="text-slate-200">{skill.difficulty}</strong></span>
                    <span className="text-emerald-400 font-semibold">{skill.resources.length} tutorials</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    {skill.interviewQuestions.length} Interview Qs
                  </span>
                  <Link
                    href={`/skills/${skill.id}`}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group-hover:underline"
                  >
                    <span>Start Learning</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
