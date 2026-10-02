'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  Share2,
  CheckCircle2,
  Linkedin,
  Github,
  Mail,
  Users2,
  AlertTriangle,
  Sparkles,
  ExternalLink,
  CheckSquare
} from 'lucide-react';

export default function NetworkingPage() {
  const { networkingChecklist, toggleNetworkingChecklist, user, targetRoleDetail } = useApp();

  const checklistItems = [
    { key: 'linkedin-complete', title: 'LinkedIn Profile Completed', desc: 'Current college, graduation year, degree, and verified contact info.' },
    { key: 'headline-optimized', title: 'Professional Engineering Headline', desc: `e.g. "Computer Science @ ${user.college ? user.college.split(',')[0] : 'University'} | Aspiring ${targetRoleDetail.title} | Building scalable systems"` },
    { key: 'about-section', title: 'Action-Driven About Section', desc: 'Summary of technical interests, core languages, hackathon highlights, and what you want to build.' },
    { key: 'skills-endorsed', title: 'Top 5 Skills Added & Pinned', desc: 'Highlight primary skills like DSA, React, PostgreSQL, Docker, or PyTorch.' },
    { key: 'projects-attached', title: 'Featured Projects Attached to Profile', desc: 'Pin your top 2 GitHub repos and live web demo links directly in the Featured carousel.' },
    { key: 'github-linked', title: 'GitHub Profile Linked in Intro', desc: 'Include clean markdown README on your personal GitHub profile repo.' },
    { key: 'alumni-outreach', title: 'Identify 10 University Alumni at Target Companies', desc: 'Search LinkedIn for engineering alumni at Google, Amazon, Stripe, and startups.' },
    { key: 'weekly-outreach-target', title: 'Engage in 2 Meaningful Technical Chats Weekly', desc: 'Comment on technical engineering blogs or ask alumni for 10-minute guidance calls.' },
  ];

  const completedCount = checklistItems.filter(i => networkingChecklist[i.key]).length;

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header */}
        <div>
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Share2 className="w-4 h-4" />
            <span>High-Value Professional Connections</span>
          </div>
          <h1 className="text-3xl font-black text-white">
            Networking & LinkedIn Optimization
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Over 65% of tech internship and fresher offers come through referrals and proactive outreach. Build a reputation without spamming automated messages.
          </p>
        </div>

        {/* Anti-Spam Ethics Banner (Requirement #17) */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start space-x-3">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">RoleUp Networking Ethics:</strong> Never copy-paste automated bots or spam mass connection requests to recruiters. High-value engineering networking is grounded in authentic curiosity, well-researched project questions, and mutual respect for engineers' time.
          </p>
        </div>

        {/* Checklist */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-indigo-400" />
                <span>LinkedIn & Personal Brand Checklist</span>
              </h2>
              <p className="text-xs text-slate-400">
                Audit your public presence before messaging recruiters or alumni.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-400">
              {completedCount} of {checklistItems.length} Checked
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {checklistItems.map(item => {
              const isChecked = networkingChecklist[item.key] || false;
              return (
                <div
                  key={item.key}
                  onClick={() => toggleNetworkingChecklist(item.key)}
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
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3 Pillars of Student Tech Networking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 text-indigo-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-sm font-bold text-white">Alumni Guidance First</h3>
            <p className="text-slate-400 leading-relaxed">
              When reaching out to college alumni at Google or Microsoft, do not open by demanding a referral. Ask thoughtful questions about their team's technical challenges. If the chat goes well, they will gladly offer to submit your resume.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-sm font-bold text-white">Public Proof of Work</h3>
            <p className="text-slate-400 leading-relaxed">
              Share 1-minute video demos or architectural write-ups of your projects on LinkedIn and Twitter. Engineers love seeing builders who explain what went wrong and how they fixed it.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-sm font-bold text-white">Open Source Engagement</h3>
            <p className="text-slate-400 leading-relaxed">
              Find small bugs or documentation gaps in open-source libraries (e.g. Next.js, Prisma, Tailwind). Making 2 verified pull requests builds organic relationships with senior staff engineers.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}
