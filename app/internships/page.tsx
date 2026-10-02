'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  Briefcase,
  Search,
  ExternalLink,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2,
  Copy,
  Check,
  Mail,
  Send,
  Sparkles,
  Bookmark,
  Filter,
  CheckSquare
} from 'lucide-react';

export default function InternshipsPage() {
  const { internships, targetRoleDetail, internshipChecklist, toggleInternshipChecklist, user } = useApp();

  const [activeTab, setActiveTab] = useState<'opportunities' | 'preparation'>('opportunities');

  // Filters for opportunities
  const [roleFilter, setRoleFilter] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [remoteOnly, setRemoteOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cold email copy states
  const [copiedEmail1, setCopiedEmail1] = useState(false);
  const [copiedEmail2, setCopiedEmail2] = useState(false);

  const filteredInternships = internships.filter(item => {
    const matchesRole = roleFilter === 'All' || item.roleCategory === roleFilter;
    const matchesType = typeFilter === 'All' || item.type === typeFilter;
    const matchesRemote = !remoteOnly || item.isRemote;
    const matchesSearch = item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.skillsRequired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRole && matchesType && matchesRemote && matchesSearch;
  });

  const coldEmailTemplate1 = `Subject: Quick Inquiry: SDE Intern / Engineering Inquiries — ${user.name} (${user.college})

Hi [Hiring Manager / Engineer Name],

I hope you're having a productive week!

I follow [Company Name]'s recent work in [mention specific feature or engineering blog post], and I was thoroughly impressed by how you tackled [specific problem, e.g. latency scaling / data pipeline].

I am a Computer Science junior at ${user.college} targeting ${targetRoleDetail.title} roles. Recently, I built and deployed an open-source project called [Project Name] ([Live Link / GitHub]) which [quantified achievement, e.g. handled 10,000 requests with Redis queues].

I saw your open [Internship / SDE Intern] position and would be thrilled to contribute to your engineering team. My ATS-ready resume and project links are attached: ${user.githubUrl || 'github.com/my-profile'}.

Would you have 10 minutes for a brief chat, or could you point me to the right recruiter on your team?

Best regards,
${user.name}
${user.college} | Class of ${user.graduationYear}
${user.linkedinUrl || 'LinkedIn Profile'}`;

  const coldEmailTemplate2 = `Subject: Fellow ${user.college ? user.college.split(',')[0] : 'University'} Alumni: Advice on Engineering at [Company Name]

Hi [Alumni Name],

Hope you are doing well!

I noticed on LinkedIn that you graduated from ${user.college} and are now working as a [Their Role] at [Company Name]. As a fellow CSE student graduating in ${user.graduationYear}, your career journey is truly inspiring.

I am actively preparing for summer ${targetRoleDetail.title} roles and have focused my coursework and side projects on [Key Tech, e.g. Next.js, PostgreSQL, and Distributed Systems].

I would love to ask 2-3 brief questions about your transition from campus to [Company Name] and what technical qualities stand out most during interview rounds.

Thank you so much for your time and guidance!

Warm regards,
${user.name}`;

  const handleCopy = (text: string, type: 1 | 2) => {
    navigator.clipboard.writeText(text);
    if (type === 1) {
      setCopiedEmail1(true);
      setTimeout(() => setCopiedEmail1(false), 2000);
    } else {
      setCopiedEmail2(true);
      setTimeout(() => setCopiedEmail2(false), 2000);
    }
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Briefcase className="w-4 h-4" />
              <span>Career Opportunities & Playbook</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              Internship Opportunities & Preparation
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Explore verified summer analyst and SDE internship openings, and leverage proven cold-email templates, LinkedIn scripts, and hiring checklists.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center space-x-1 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                activeTab === 'opportunities'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Opportunities Board
            </button>
            <button
              onClick={() => setActiveTab('preparation')}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                activeTab === 'preparation'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Preparation Playbook
            </button>
          </div>
        </div>

        {/* TAB 1: OPPORTUNITIES BOARD */}
        {activeTab === 'opportunities' && (
          <div className="space-y-6">
            
            {/* Filter Bar */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                
                {/* Search */}
                <div className="relative sm:w-72">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search company, role, skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Role Filter */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-500 font-semibold text-[11px]">Role:</span>
                  {[
                    { id: 'All', label: 'All Roles' },
                    { id: 'software-engineer', label: 'SDE' },
                    { id: 'full-stack-developer', label: 'Full Stack' },
                    { id: 'data-scientist', label: 'Data Science' },
                    { id: 'ai-ml-engineer', label: 'AI/ML' },
                    { id: 'cybersecurity-analyst', label: 'Security' },
                    { id: 'devops-engineer', label: 'DevOps' }
                  ].map(r => (
                    <button
                      key={r.id}
                      onClick={() => setRoleFilter(r.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                        roleFilter === r.id
                          ? 'bg-amber-600/30 border border-amber-500/60 text-amber-300'
                          : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>

                {/* Remote Toggle */}
                <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer self-start sm:self-auto">
                  <input
                    type="checkbox"
                    checked={remoteOnly}
                    onChange={(e) => setRemoteOnly(e.target.checked)}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span>Remote Only</span>
                </label>

              </div>
            </div>

            {/* Opportunities List */}
            <div className="space-y-4">
              {filteredInternships.map(intern => (
                <div
                  key={intern.id}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-white px-2.5 py-0.5 rounded-md bg-slate-800">
                        {intern.company}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-800/60">
                        {intern.type}
                      </span>
                      {intern.isRemote && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-950/70 text-indigo-300 border border-indigo-800/60">
                          Remote
                        </span>
                      )}
                      <span className="text-[11px] text-slate-400">
                        Posted {intern.postedDate}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {intern.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{intern.location}</span>
                      </span>
                      <span>•</span>
                      <span className="font-semibold text-emerald-400">{intern.stipend}</span>
                      <span>•</span>
                      <span>Duration: {intern.duration}</span>
                      <span>•</span>
                      <span className="text-rose-400">Deadline: {intern.deadline}</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed max-w-3xl pt-1">
                      {intern.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {intern.skillsRequired.map(sk => (
                        <span
                          key={sk}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Action */}
                  <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
                    <a
                      href={intern.applyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                    >
                      <span>Apply on Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[10px] text-slate-500">
                      For {intern.experienceLevel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: INTERNSHIP PREPARATION PLAYBOOK */}
        {activeTab === 'preparation' && (
          <div className="space-y-8">
            
            {/* Checklist */}
            <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-emerald-400" />
                    <span>7-Step Internship Readiness Checklist</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Clear each requirement before applying to maximize response callbacks.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { key: 'resume-ready', title: 'ATS Resume Ready', desc: '1-page single-column PDF with quantified bullets and action verbs.' },
                  { key: 'portfolio-ready', title: 'Public Portfolio Published', desc: 'Live URL with working GitHub links and live demos.' },
                  { key: 'github-ready', title: 'GitHub Profile Hardened', desc: 'Pinned repositories with clean READMEs, test badges, and screenshots.' },
                  { key: 'linkedin-ready', title: 'LinkedIn Profile Optimized', desc: 'Punchy headline, detailed about section, and featured project links.' },
                  { key: 'dsa-prep', title: 'DSA Patterns Solidified', desc: '100+ LeetCode problems covering Sliding Window, Trees, and DP.' },
                  { key: 'technical-prep', title: 'System Architecture Ready', desc: 'Understand APIs, database indexes, and concurrency.' },
                  { key: 'hr-interview-prep', title: 'Behavioral STAR Stories', desc: 'Prepared stories for leadership, failure, and conflict resolution.' },
                ].map(item => {
                  const isChecked = internshipChecklist[item.key] || false;
                  return (
                    <div
                      key={item.key}
                      onClick={() => toggleInternshipChecklist(item.key)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                        isChecked
                          ? 'bg-emerald-950/40 border-emerald-700/60'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-800'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Cold Email Templates (Copyable!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Template 1: Direct Hiring Manager / Lead */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-indigo-400 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Template 1: Engineering Hiring Manager</span>
                    </span>
                    <button
                      onClick={() => handleCopy(coldEmailTemplate1, 1)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      {copiedEmail1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail1 ? 'Copied!' : 'Copy Template'}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-mono whitespace-pre-wrap leading-relaxed select-all">
                    {coldEmailTemplate1}
                  </pre>
                </div>
                <p className="text-[11px] text-slate-500 mt-3">
                  Tip: Always personalize the 2nd paragraph with a real technical feature built by the company.
                </p>
              </div>

              {/* Template 2: University Alumni Referral Outreach */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Template 2: University Alumni Referral</span>
                    </span>
                    <button
                      onClick={() => handleCopy(coldEmailTemplate2, 2)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      {copiedEmail2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail2 ? 'Copied!' : 'Copy Template'}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-mono whitespace-pre-wrap leading-relaxed select-all">
                    {coldEmailTemplate2}
                  </pre>
                </div>
                <p className="text-[11px] text-slate-500 mt-3">
                  Tip: Alumni are 4x more likely to refer you if you ask for career guidance first rather than immediately begging for a job referral.
                </p>
              </div>

            </div>

            {/* Strategic Advice: Where to Apply & Networking */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">Where to Apply</h4>
                <p className="text-slate-400 leading-relaxed">
                  Avoid easy-apply spams on LinkedIn. Instead, apply directly on company career portals (Workday, Greenhouse, Lever) or ask for verified employee referrals.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">Application Timing</h4>
                <p className="text-slate-400 leading-relaxed">
                  Top tech companies (Google, Microsoft, Amazon) open Summer Internship applications in July/August of the previous year. Fast startups hire between January and March.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">HR & Behavioral Strategy</h4>
                <p className="text-slate-400 leading-relaxed">
                  Use the STAR framework (Situation, Task, Action, Result) for every scenario question. Always quantify the Result (e.g. "which reduced latency by 30%").
                </p>
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}
