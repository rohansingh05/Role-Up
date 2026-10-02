'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  ShieldAlert,
  Users,
  Compass,
  Code2,
  FolderGit2,
  Briefcase,
  TrendingUp,
  Plus,
  Trash2,
  Edit,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  BarChart,
  Eye,
  ExternalLink
} from 'lucide-react';
import { InternshipListing } from '../../lib/types';

export default function AdminDashboardPage() {
  const {
    roles,
    skills,
    projects,
    internships,
    posts,
    interviewExperiences,
    addInternship,
    resetAllDemoData,
    isAdmin,
    toggleAdminMode
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'internships' | 'skills' | 'community'>('overview');

  // Form for adding new internship listing
  const [newCompany, setNewCompany] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newRoleCategory, setNewRoleCategory] = useState('software-engineer');
  const [newLocation, setNewLocation] = useState('Bengaluru, India / Remote');
  const [newStipend, setNewStipend] = useState('₹45,000 / month');
  const [newDeadline, setNewDeadline] = useState('2026-12-31');
  const [newSkills, setNewSkills] = useState('React, TypeScript, Node.js');
  const [newDesc, setNewDesc] = useState('');
  const [isAddingListing, setIsAddingListing] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleAddInternshipListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany.trim() || !newRole.trim()) return;

    const newIntern: InternshipListing = {
      id: `intern-${Date.now()}`,
      company: newCompany,
      role: newRole,
      roleCategory: newRoleCategory,
      type: 'Internship',
      location: newLocation,
      isRemote: true,
      stipend: newStipend,
      duration: '12 Weeks',
      deadline: newDeadline,
      postedDate: 'Just now',
      skillsRequired: newSkills.split(',').map(s => s.trim()),
      experienceLevel: 'Fresher / Student',
      description: newDesc || 'Exciting software engineering internship opportunity for CSE students.',
      responsibilities: ['Build features', 'Collaborate with engineering team'],
      benefits: ['Mentorship', 'Competitive stipend'],
      applyLink: 'https://careers.google.com'
    };

    addInternship(newIntern);
    setFeedbackMsg(`Successfully added listing for ${newCompany}!`);
    setTimeout(() => setFeedbackMsg(''), 4000);

    setNewCompany('');
    setNewRole('');
    setNewDesc('');
    setIsAddingListing(false);
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldAlert className="w-4 h-4" />
              <span>Platform Operations & Curriculum Control</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              Admin & Operations Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Monitor student engagement analytics, manage career role curriculum, add verified internship listings, and supervise student discussions.
            </p>
          </div>

          <div className="flex items-center space-x-3 self-start sm:self-auto">
            <button
              onClick={resetAllDemoData}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Reset all demo data and state to fresh defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Demo State</span>
            </button>
          </div>
        </div>

        {/* Analytics KPI Cards (Requirement #19) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Total Students</span>
              <Users className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">4,820</div>
            <p className="text-[11px] text-emerald-400 font-semibold">+18% this month</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Active Roadmaps</span>
              <Compass className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">6 Tracks</div>
            <p className="text-[11px] text-cyan-400 font-semibold">100% Calibrated</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Projects Shipped</span>
              <FolderGit2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">1,490</div>
            <p className="text-[11px] text-emerald-400 font-semibold">Verified on GitHub</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Internship Clicks</span>
              <Briefcase className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">9,830</div>
            <p className="text-[11px] text-amber-400 font-semibold">Direct portal applies</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-1 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs self-start">
          {[
            { id: 'overview', label: 'Curriculum & Tracks' },
            { id: 'internships', label: `Internships (${internships.length})` },
            { id: 'skills', label: `Skills (${skills.length})` },
            { id: 'community', label: `Community (${posts.length})` },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                activeTab === tab.id ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {feedbackMsg && (
          <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-700 text-emerald-400 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* TAB: OVERVIEW / ROLES */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-400" />
                <span>Primary Roles & Student Popularity</span>
              </h3>

              <div className="divide-y divide-slate-800 text-xs">
                {roles.map(r => (
                  <div key={r.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-white text-sm">{r.title}</span>
                      <p className="text-slate-400 text-[11px]">{r.averageSalary} • {r.roadmapSteps.length} Roadmap Phases</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-emerald-400 font-bold">{r.demandLevel} Demand</span>
                      <Link href={`/roles/${r.id}`} className="text-indigo-400 hover:underline">
                        Inspect Roadmap →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: INTERNSHIPS MANAGEMENT */}
        {activeTab === 'internships' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Active Internship Opportunities</h3>
              <button
                onClick={() => setIsAddingListing(!isAddingListing)}
                className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Opportunity Listing</span>
              </button>
            </div>

            {/* Add Internship Form Modal/Drawer */}
            {isAddingListing && (
              <form onSubmit={handleAddInternshipListing} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
                <h4 className="font-bold text-white text-sm">Post New Internship / Job Opening</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. OpenAI, Uber, Atlassian"
                      value={newCompany}
                      onChange={(e) => setNewCompany(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Role Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Software Engineer Intern"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Role Track</label>
                    <select
                      value={newRoleCategory}
                      onChange={(e) => setNewRoleCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    >
                      {roles.map(r => (
                        <option key={r.id} value={r.id}>{r.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Stipend / Salary</label>
                    <input
                      type="text"
                      value={newStipend}
                      onChange={(e) => setNewStipend(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Deadline</label>
                    <input
                      type="date"
                      value={newDeadline}
                      onChange={(e) => setNewDeadline(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Required Skills (Comma separated)</label>
                  <input
                    type="text"
                    value={newSkills}
                    onChange={(e) => setNewSkills(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingListing(false)}
                    className="px-3.5 py-1.5 rounded-lg text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold"
                  >
                    Save & Publish Listing
                  </button>
                </div>
              </form>
            )}

            {/* List */}
            <div className="space-y-3">
              {internships.map(i => (
                <div key={i.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white">{i.company}</span>
                      <span className="text-slate-400">• {i.role}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{i.location} • {i.stipend} • Deadline: {i.deadline}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 font-bold">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: SKILLS MANAGEMENT */}
        {activeTab === 'skills' && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white">Skills & Learning Resources</h3>
            <div className="divide-y divide-slate-800 text-xs">
              {skills.map(s => (
                <div key={s.id} className="py-3 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white">{s.name}</span>
                    <p className="text-[11px] text-slate-400">{s.category} • {s.estimatedHours} hrs • {s.resources.length} tutorials</p>
                  </div>
                  <Link href={`/skills/${s.id}`} className="text-indigo-400 hover:underline">
                    Manage →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: COMMUNITY SUPERVISION */}
        {activeTab === 'community' && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white">Community Posts Supervision</h3>
            <div className="divide-y divide-slate-800 text-xs">
              {posts.map(p => (
                <div key={p.id} className="py-3 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white line-clamp-1">{p.title}</span>
                    <p className="text-[11px] text-slate-400">By {p.author.name} • {p.category} • {p.likesCount} likes • {p.comments.length} comments</p>
                  </div>
                  <Link href="/community" className="text-cyan-400 hover:underline">
                    View Post →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
