'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  BookOpen,
  Search,
  ExternalLink,
  Star,
  Award,
  Video,
  FileText,
  Filter,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { LearningResource } from '../../lib/types';

export default function ResourcesPage() {
  const { skills } = useApp();

  const [typeFilter, setTypeFilter] = useState<'All' | 'Free' | 'Paid'>('All');
  const [formatFilter, setFormatFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Collect all resources across all skills
  const allResources: (LearningResource & { skillName: string })[] = [];
  skills.forEach(s => {
    s.resources.forEach(r => {
      allResources.push({ ...r, skillName: s.name });
    });
  });

  const filtered = allResources.filter(res => {
    const matchesType = typeFilter === 'All' || res.type === typeFilter;
    const matchesFormat = formatFilter === 'All' || res.format === formatFilter;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.skillName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesFormat && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header */}
        <div>
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Curated Learning Directory</span>
          </div>
          <h1 className="text-3xl font-black text-white">
            Where to Learn CSE Skills
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            RoleUp separates high-grade free open-courseware from paid industry certifications. You can complete your entire technical preparation using free verified tutorials.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Free vs Paid Tabs */}
            <div className="flex items-center space-x-1 p-1 bg-slate-950 rounded-xl border border-slate-800 self-start sm:self-auto">
              {(['All', 'Free', 'Paid'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setTypeFilter(tab)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    typeFilter === tab
                      ? tab === 'Free'
                        ? 'bg-emerald-600 text-white'
                        : tab === 'Paid'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'Free' ? 'Free Resources (100% Free)' : tab === 'Paid' ? 'Paid / Certifications' : 'All Resources'}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative sm:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search courses, providers, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

          </div>

          {/* Formats: Video, Documentation, Course, Interactive */}
          <div className="flex items-center space-x-2 pt-2 border-t border-slate-800/80 text-xs">
            <span className="text-slate-500 font-semibold text-[11px]">Format:</span>
            {['All', 'Video', 'Documentation', 'Course', 'Interactive'].map(fmt => (
              <button
                key={fmt}
                onClick={() => setFormatFilter(fmt)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  formatFilter === fmt
                    ? 'bg-slate-800 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(res => (
            <div
              key={res.id}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    res.type === 'Free'
                      ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/60'
                      : 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/60'
                  }`}>
                    {res.type}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{res.rating}</span>
                  </span>
                </div>

                <div className="text-[10px] uppercase font-bold text-indigo-400 mb-1">
                  {res.skillName}
                </div>

                <h3 className="text-base font-bold text-white line-clamp-2">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  Provider: <strong className="text-slate-300">{res.provider}</strong>
                </p>

                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {res.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>⏱ {res.duration}</span>
                  <span>{res.format}</span>
                  <span>{res.difficulty}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-500">
                  {res.certificateAvailable ? '✓ Certificate Available' : 'No Paywall'}
                </span>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>Open Resource</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
