'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  FolderGit2,
  CheckCircle2,
  Clock,
  Github,
  Globe,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  Wrench,
  CheckSquare
} from 'lucide-react';
import { ProjectDetail } from '../../lib/types';

export default function ProjectsPage() {
  const { projects, projectsProgress, updateProjectProgress, targetRoleDetail } = useApp();

  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('proj-personal-portfolio');
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  // Form input state for project links
  const [linkInputs, setLinkInputs] = useState<Record<string, { github: string; demo: string }>>({});

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredProjects = projects.filter(p => {
    if (selectedDifficulty === 'All') return true;
    return p.difficulty === selectedDifficulty;
  });

  const handleSaveLinks = (projectId: string) => {
    const input = linkInputs[projectId];
    if (input) {
      updateProjectProgress(projectId, {
        githubUrl: input.github,
        liveUrl: input.demo,
        status: input.github || input.demo ? 'completed' : 'in-progress',
        inPortfolio: true
      });
      setEditingProjectId(null);
    }
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <FolderGit2 className="w-4 h-4" />
              <span>Engineering Deliverables</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              Engineering Projects & Portfolio Proof
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Recruiters evaluate working code, not tutorial clones. Build deployable applications with architecture roadmaps, add your GitHub repos, and showcase live demos on your public portfolio.
            </p>
          </div>

          <Link
            href="/portfolio/aarav-sharma"
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto transition-colors shadow-md"
          >
            <Globe className="w-4 h-4" />
            <span>View Public Portfolio</span>
          </Link>
        </div>

        {/* Difficulty Filter Tabs */}
        <div className="flex items-center space-x-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start">
          {difficulties.map(diff => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedDifficulty === diff
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredProjects.map(project => {
            const progress = projectsProgress[project.id] || {
              status: 'not-started',
              githubUrl: '',
              liveUrl: '',
              inPortfolio: false
            };

            const isExpanded = expandedProjectId === project.id;
            const isEditing = editingProjectId === project.id;

            return (
              <div
                key={project.id}
                id={project.id}
                className={`rounded-2xl border transition-all ${
                  isExpanded
                    ? 'bg-slate-900 border-cyan-500/50 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Project Header Bar */}
                <div className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        project.difficulty === 'Beginner'
                          ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/60'
                          : project.difficulty === 'Intermediate'
                          ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/60'
                          : 'bg-purple-950/70 text-purple-300 border border-purple-800/60'
                      }`}>
                        {project.difficulty}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>~{project.estimatedHours} Hours</span>
                      </span>
                      {progress.inPortfolio && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-950/70 text-indigo-300 border border-indigo-800/60">
                          ★ Featured on Portfolio
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.skills.map(sk => (
                        <span
                          key={sk}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Status Controls */}
                  <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5 items-start sm:items-center lg:items-end">
                    
                    {/* Status Pill Toggle */}
                    <div className="flex items-center space-x-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                      {(['not-started', 'in-progress', 'completed'] as const).map(st => (
                        <button
                          key={st}
                          onClick={() => updateProjectProgress(project.id, { status: st, githubUrl: progress.githubUrl, liveUrl: progress.liveUrl, inPortfolio: progress.inPortfolio })}
                          className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all ${
                            progress.status === st
                              ? st === 'completed'
                                ? 'bg-emerald-600 text-white'
                                : st === 'in-progress'
                                ? 'bg-amber-600 text-white'
                                : 'bg-slate-700 text-white'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {st.replace('-', ' ')}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setEditingProjectId(isEditing ? null : project.id);
                          setLinkInputs(prev => ({
                            ...prev,
                            [project.id]: {
                              github: progress.githubUrl || '',
                              demo: progress.liveUrl || ''
                            }
                          }));
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                      >
                        {progress.githubUrl || progress.liveUrl ? 'Edit Links' : 'Add Repo / Demo'}
                      </button>

                      <button
                        onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                        title={isExpanded ? 'Collapse Roadmap' : 'Expand Roadmap'}
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>

                  </div>
                </div>

                {/* Edit Repo & Demo Links Form */}
                {isEditing && (
                  <div className="px-5 pb-5 pt-3 border-t border-slate-800 bg-slate-950/70 text-xs space-y-3">
                    <div className="font-bold text-slate-200">
                      Attach Your Verified Deliverables:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className=" text-slate-400 mb-1 flex items-center gap-1.5 font-semibold">
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub Repository URL</span>
                        </label>
                        <input
                          type="url"
                          placeholder="https://github.com/username/project"
                          value={linkInputs[project.id]?.github ?? (progress.githubUrl || '')}
                          onChange={(e) => setLinkInputs(prev => ({
                            ...prev,
                            [project.id]: {
                              github: e.target.value,
                              demo: linkInputs[project.id]?.demo ?? (progress.liveUrl || '')
                            }
                          }))}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                        />
                      </div>
                      <div>
                        <label className=" text-slate-400 mb-1 flex items-center gap-1.5 font-semibold">
                          <Globe className="w-3.5 h-3.5" />
                          <span>Live Deployment Demo URL</span>
                        </label>
                        <input
                          type="url"
                          placeholder="https://project.vercel.app"
                          value={linkInputs[project.id]?.demo ?? (progress.liveUrl || '')}
                          onChange={(e) => setLinkInputs(prev => ({
                            ...prev,
                            [project.id]: {
                              github: linkInputs[project.id]?.github ?? (progress.githubUrl || ''),
                              demo: e.target.value
                            }
                          }))}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center space-x-2 cursor-pointer text-slate-300">
                        <input
                          type="checkbox"
                          checked={progress.inPortfolio}
                          onChange={() => updateProjectProgress(project.id, {
                            githubUrl: progress.githubUrl,
                            liveUrl: progress.liveUrl,
                            inPortfolio: !progress.inPortfolio
                          })}
                          className="rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="font-semibold">Display this project on my Public Portfolio</span>
                      </label>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingProjectId(null)}
                          className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSaveLinks(project.id)}
                          className="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold shadow-md"
                        >
                          Save Deliverables
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expanded Roadmap & Requirements */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-950/40 space-y-6 text-xs">
                    
                    {/* Requirements Checklist */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-emerald-400" />
                        <span>Core Engineering Requirements</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                        {project.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                            <span className="text-emerald-400 font-bold shrink-0">✓</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step-by-Step Implementation Roadmap */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span>Step-by-Step Build Roadmap</span>
                      </h4>
                      <div className="space-y-2">
                        {project.stepByStepRoadmap.map(step => (
                          <div
                            key={step.step}
                            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start space-x-3"
                          >
                            <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                              {step.step}
                            </span>
                            <div>
                              <strong className="text-white block">{step.title}</strong>
                              <p className="text-slate-400 mt-0.5 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Portfolio Highlight & Tech Stack */}
                    <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-indigo-400 block mb-0.5">
                          How to explain this to recruiters:
                        </span>
                        <p className="text-indigo-200 italic">
                          "{project.portfolioHighlight}"
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center space-x-2">
                        {progress.githubUrl && (
                          <a
                            href={progress.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
                            title="Open GitHub Repo"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {progress.liveUrl && (
                          <a
                            href={progress.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
                            title="Open Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
