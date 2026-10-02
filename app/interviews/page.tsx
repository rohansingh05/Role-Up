'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  MessageSquareShare,
  Search,
  Plus,
  ThumbsUp,
  AlertTriangle,
  Building,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Filter,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { InterviewExperience } from '../../lib/types';

export default function InterviewExperiencesPage() {
  const { interviewExperiences, upvoteInterviewExperience, addInterviewExperience, user } = useApp();

  const [companySearch, setCompanySearch] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>('exp-1');

  // Share Experience Modal State
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [formCompany, setFormCompany] = useState('');
  const [formRole, setFormRole] = useState('Software Engineer (Fresher)');
  const [formType, setFormType] = useState<'On-campus' | 'Off-campus' | 'Referral'>('On-campus');
  const [formLevel, setFormLevel] = useState<'Fresher' | 'Intern' | 'Pre-final Year'>('Fresher');
  const [formDifficulty, setFormDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [formResult, setFormResult] = useState<'Offer Received' | 'Offer Accepted' | 'Final Round' | 'Valuable Experience'>('Offer Received');
  const [formQuestions, setFormQuestions] = useState('');
  const [formResources, setFormResources] = useState('');
  const [formAdvice, setFormAdvice] = useState('');
  const [formRound1, setFormRound1] = useState({ roundName: 'Technical Round 1 (DSA)', duration: '60 Mins', focus: 'Data Structures & Trees', details: 'Solved LCA in Binary Tree and analyzed O(N) complexity.' });

  const filtered = interviewExperiences.filter(exp => {
    const matchesSearch = exp.company.toLowerCase().includes(companySearch.toLowerCase()) ||
                          exp.role.toLowerCase().includes(companySearch.toLowerCase());
    const matchesDiff = selectedDifficulty === 'All' || exp.difficulty === selectedDifficulty;
    const matchesType = selectedType === 'All' || exp.interviewType === selectedType;
    return matchesSearch && matchesDiff && matchesType;
  });

  const handleShareExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formCompany.trim()) return;

    addInterviewExperience({
      candidateName: user.name,
      college: user.college,
      company: formCompany,
      role: formRole,
      interviewType: formType,
      experienceLevel: formLevel,
      difficulty: formDifficulty,
      result: formResult,
      date: 'Recent',
      rounds: [formRound1],
      questionsAsked: formQuestions.split('\n').filter(Boolean),
      preparationResources: formResources.split('\n').filter(Boolean),
      adviceForCandidates: formAdvice
    });

    setIsShareModalOpen(false);
    setFormCompany('');
    setFormQuestions('');
    setFormAdvice('');
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
              <MessageSquareShare className="w-4 h-4" />
              <span>Real Candidate Archives</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              Student Interview Experiences
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Read transparent debriefs from campus and off-campus interviews at Google, Microsoft, Amazon, and fintech startups. Learn the exact questions asked and round-by-round dynamics.
            </p>
          </div>

          <button
            onClick={() => setIsShareModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 self-start sm:self-auto transition-all shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Share Your Experience</span>
          </button>
        </div>

        {/* Disclaimer Notice (Requirement #16) */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start space-x-3">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-300">Community Disclaimer:</strong> Interview debriefs are user-submitted by fellow university students and reflect individual experiences. Hiring rounds, format expectations, and technical problem choices vary by company, season, and team.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            
            {/* Search */}
            <div className="relative sm:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by company or role..."
                value={companySearch}
                onChange={(e) => setCompanySearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-slate-500 font-semibold text-[11px]">Difficulty:</span>
              {['All', 'Easy', 'Medium', 'Hard'].map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDifficulty(d)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                    selectedDifficulty === d
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-slate-500 font-semibold text-[11px]">Channel:</span>
              {['All', 'On-campus', 'Off-campus', 'Referral'].map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                    selectedType === t
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Experience Cards Feed */}
        <div className="space-y-6">
          {filtered.map(exp => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all shadow-lg space-y-4"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-white flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-purple-400" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {exp.interviewType}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        exp.result.includes('Accepted') || exp.result.includes('Offer')
                          ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/60'
                          : 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/60'
                      }`}>
                        {exp.result}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {exp.role} • Candidate: <strong>{exp.candidateName}</strong> ({exp.college})
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 text-xs self-start sm:self-auto">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${
                      exp.difficulty === 'Easy' ? 'bg-emerald-950/60 text-emerald-400' :
                      exp.difficulty === 'Medium' ? 'bg-amber-950/60 text-amber-400' :
                      'bg-red-950/60 text-red-400'
                    }`}>
                      {exp.difficulty} Difficulty
                    </span>
                    <button
                      onClick={() => upvoteInterviewExperience(exp.id)}
                      className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.upvotes}</span>
                    </button>
                  </div>
                </div>

                {/* Candidate Advice Teaser */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed italic">
                  "{exp.adviceForCandidates}"
                </div>

                {/* Questions Asked Pills */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Core Technical Questions Asked:
                  </span>
                  <div className="space-y-1 text-xs">
                    {exp.questionsAsked.map((q, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-300">
                        <span className="text-purple-400 font-bold shrink-0">•</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expand / Collapse Full Round Breakdown */}
                <div className="pt-2 flex justify-between items-center">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    <span>{isExpanded ? 'Hide Rounds Breakdown' : `View All ${exp.rounds.length} Interview Rounds`}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <span className="text-[11px] text-slate-500">Interviewed in {exp.date}</span>
                </div>

                {/* Detailed Rounds Modal / Collapse */}
                {isExpanded && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider text-purple-400">
                      Round-by-Round Breakdown:
                    </h4>
                    <div className="space-y-3">
                      {exp.rounds.map((round, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                          <div className="flex justify-between font-bold text-slate-200">
                            <span>{round.roundName}</span>
                            <span className="text-slate-500 font-normal">{round.duration}</span>
                          </div>
                          <p className="text-indigo-400 font-medium text-[11px]">Focus: {round.focus}</p>
                          <p className="text-slate-400 text-[11px] leading-relaxed">{round.details}</p>
                        </div>
                      ))}
                    </div>

                    {exp.preparationResources.length > 0 && (
                      <div className="pt-2 border-t border-slate-800">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                          Candidate's Preparation Resources:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.preparationResources.map((res, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                              {res}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Modal: Share Interview Experience */}
        {isShareModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <MessageSquareShare className="w-5 h-5 text-purple-400" />
                  <h3 className="text-base font-bold text-white">Share Your Interview Experience</h3>
                </div>
                <button onClick={() => setIsShareModalOpen(false)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleShareExperience} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Google, Amazon, Startup"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Role Applied For</label>
                    <input
                      type="text"
                      required
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Channel</label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="On-campus">On-campus</option>
                      <option value="Off-campus">Off-campus</option>
                      <option value="Referral">Referral</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Difficulty</label>
                    <select
                      value={formDifficulty}
                      onChange={(e) => setFormDifficulty(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Outcome</label>
                    <select
                      value={formResult}
                      onChange={(e) => setFormResult(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="Offer Accepted">Offer Accepted</option>
                      <option value="Offer Received">Offer Received</option>
                      <option value="Final Round">Final Round</option>
                      <option value="Valuable Experience">Valuable Experience</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Questions Asked (One per line)</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Lowest Common Ancestor in Binary Tree&#10;Explain ACID transactions in Postgres"
                    value={formQuestions}
                    onChange={(e) => setFormQuestions(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Advice for Future Candidates</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="What strategy worked best? What should students focus on?"
                    value={formAdvice}
                    onChange={(e) => setFormAdvice(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500 text-xs"
                  />
                </div>

                <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsShareModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-md transition-colors"
                  >
                    Submit Debrief
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
