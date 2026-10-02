'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  Globe,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Palette,
  Eye,
  Github,
  Linkedin,
  FolderGit2,
  User,
  ShieldCheck
} from 'lucide-react';

export default function PortfolioBuilderPage() {
  const { user, updateUser, projects, projectsProgress, updateProjectProgress } = useApp();

  const [copied, setCopied] = useState(false);
  const [slugInput, setSlugInput] = useState(user.portfolioSlug || 'aarav-sharma');
  const [bioInput, setBioInput] = useState(user.bio || '');

  const portfolioUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/portfolio/${user.portfolioSlug || 'aarav-sharma'}`
    : `/portfolio/${user.portfolioSlug || 'aarav-sharma'}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(portfolioUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveSettings = () => {
    updateUser({
      portfolioSlug: slugInput.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      bio: bioInput
    });
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Globe className="w-4 h-4" />
              <span>Public Developer Presence</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              Portfolio Builder & Public URL
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Launch a fast, accessible public portfolio at <code className="text-indigo-400 bg-slate-900 px-1 py-0.5 rounded">/portfolio/[username]</code>. Showcase your code repositories, live deployed projects, and technical skills to hiring managers.
            </p>
          </div>

          <div className="flex items-center space-x-3 self-start sm:self-auto">
            <Link
              href={`/portfolio/${user.portfolioSlug || 'aarav-sharma'}`}
              target="_blank"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
            >
              <Eye className="w-4 h-4" />
              <span>View Live Portfolio</span>
            </Link>
          </div>
        </div>

        {/* Live URL & Publish Toggle Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className={`w-2.5 h-2.5 rounded-full ${user.isPortfolioPublished ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'}`} />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {user.isPortfolioPublished ? 'Portfolio is Live & Public' : 'Portfolio is in Draft Mode'}
              </span>
            </div>
            <div className="flex items-center space-x-2 pt-1">
              <span className="text-xs text-slate-400 font-mono select-all bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                /portfolio/{user.portfolioSlug || 'aarav-sharma'}
              </span>
              <button
                onClick={handleCopyLink}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1"
                title="Copy public link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => updateUser({ isPortfolioPublished: !user.isPortfolioPublished })}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md ${
                user.isPortfolioPublished
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              {user.isPortfolioPublished ? 'Published (Click to Unpublish)' : 'Publish Portfolio'}
            </button>
          </div>
        </div>

        {/* Portfolio Settings & Theme Customizer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left: Configuration & Bio */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-400" />
              <span>Profile Configuration</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Custom Portfolio Username / URL Slug</label>
                <div className="flex items-center">
                  <span className="px-3 py-2 bg-slate-950 border border-r-0 border-slate-800 text-slate-500 rounded-l-lg">
                    roleup.dev/portfolio/
                  </span>
                  <input
                    type="text"
                    value={slugInput}
                    onChange={(e) => setSlugInput(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-r-lg text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">About You / Engineering Bio</label>
                <textarea
                  rows={4}
                  value={bioInput}
                  onChange={(e) => setBioInput(e.target.value)}
                  placeholder="Share your technical interests, favorite tech stack, and what type of internship/job you are looking for..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 text-xs"
                />
              </div>

              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                Save Profile Settings
              </button>
            </div>
          </div>

          {/* Right: Theme Selector */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Palette className="w-4 h-4 text-purple-400" />
              <span>Theme Selection</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'slate-dark', name: 'Developer Dark', desc: 'Midnight slate with emerald & indigo highlights' },
                { id: 'indigo-modern', name: 'Indigo Modern', desc: 'Deep navy background with vibrant violet gradients' },
                { id: 'minimal-light', name: 'Minimal Slate', desc: 'Clean, high-contrast monochrome design' }
              ].map(theme => (
                <div
                  key={theme.id}
                  onClick={() => updateUser({ portfolioTheme: theme.id as any })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                    user.portfolioTheme === theme.id
                      ? 'bg-indigo-950/60 border-indigo-500 ring-1 ring-indigo-500'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold text-white">{theme.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{theme.desc}</p>
                  </div>
                  {user.portfolioTheme === theme.id && (
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-3 self-end" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Featured Projects Selection */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                <span>Featured Projects on Portfolio</span>
              </h3>
              <p className="text-xs text-slate-400">
                Check projects you want visible on your public portfolio page.
              </p>
            </div>
            <Link href="/projects" className="text-xs font-semibold text-cyan-400 hover:underline">
              Add more projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(proj => {
              const progress = projectsProgress[proj.id] || { status: 'not-started', inPortfolio: false };
              const isIncluded = progress.inPortfolio;

              return (
                <div
                  key={proj.id}
                  onClick={() => updateProjectProgress(proj.id, {
                    githubUrl: progress.githubUrl,
                    liveUrl: progress.liveUrl,
                    inPortfolio: !isIncluded
                  })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isIncluded
                      ? 'bg-slate-950 border-cyan-500/60 shadow-md'
                      : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 opacity-70'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {proj.difficulty}
                      </span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isIncluded ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700 bg-slate-800'
                      }`}>
                        {isIncluded && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    <h4 className="text-xs font-bold text-white">{proj.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{proj.summary}</p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Status: {progress.status}</span>
                    <span className="text-cyan-400 font-semibold">{isIncluded ? 'Visible' : 'Hidden'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
