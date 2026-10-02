'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useApp } from '../lib/context/AppContext';
import {
  Search,
  X,
  Compass,
  Code2,
  FolderGit2,
  Briefcase,
  Users2,
  MessageSquareShare,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const { roles, skills, projects, internships, posts, interviewExperiences } = useApp();
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // toggle handled externally or through custom event
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filteredRoles = trimmed
    ? roles.filter(r => r.title.toLowerCase().includes(trimmed) || r.tagline.toLowerCase().includes(trimmed))
    : roles.slice(0, 3);

  const filteredSkills = trimmed
    ? skills.filter(s => s.name.toLowerCase().includes(trimmed) || s.category.toLowerCase().includes(trimmed))
    : skills.slice(0, 4);

  const filteredProjects = trimmed
    ? projects.filter(p => p.title.toLowerCase().includes(trimmed) || p.skills.some(sk => sk.toLowerCase().includes(trimmed)))
    : projects.slice(0, 3);

  const filteredInternships = trimmed
    ? internships.filter(i => i.company.toLowerCase().includes(trimmed) || i.role.toLowerCase().includes(trimmed))
    : internships.slice(0, 3);

  const filteredPosts = trimmed
    ? posts.filter(p => p.title.toLowerCase().includes(trimmed) || p.tags.some(t => t.toLowerCase().includes(trimmed)))
    : posts.slice(0, 2);

  const filteredExperiences = trimmed
    ? interviewExperiences.filter(e => e.company.toLowerCase().includes(trimmed) || e.role.toLowerCase().includes(trimmed))
    : interviewExperiences.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center space-x-3 bg-slate-900/90">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            placeholder="Search roles, skills, projects, internships, discussions, interviews..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-slate-400 hover:text-white bg-slate-800 rounded border border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-5 text-xs">
          
          {/* Roles */}
          {filteredRoles.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 text-indigo-400 font-bold uppercase tracking-wider mb-2 text-[10px]">
                <Compass className="w-3.5 h-3.5" />
                <span>Career Tracks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredRoles.map(role => (
                  <Link
                    key={role.id}
                    href={`/roles/${role.id}`}
                    onClick={onClose}
                    className="p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-semibold text-white group-hover:text-indigo-300">{role.title}</p>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{role.tagline}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {filteredSkills.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 text-emerald-400 font-bold uppercase tracking-wider mb-2 text-[10px]">
                <Code2 className="w-3.5 h-3.5" />
                <span>Skills & Roadmaps</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredSkills.map(skill => (
                  <Link
                    key={skill.id}
                    href={`/skills/${skill.id}`}
                    onClick={onClose}
                    className="p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-semibold text-white group-hover:text-emerald-300">{skill.name}</p>
                      <p className="text-[11px] text-slate-400">{skill.category} • {skill.difficulty}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 text-cyan-400 font-bold uppercase tracking-wider mb-2 text-[10px]">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Engineering Projects</span>
              </div>
              <div className="space-y-1.5">
                {filteredProjects.map(proj => (
                  <Link
                    key={proj.id}
                    href={`/projects#${proj.id}`}
                    onClick={onClose}
                    className="p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-semibold text-white group-hover:text-cyan-300">{proj.title}</p>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{proj.summary}</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 shrink-0 ml-2">
                      {proj.difficulty}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Internships */}
          {filteredInternships.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-wider mb-2 text-[10px]">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Internships & Jobs</span>
              </div>
              <div className="space-y-1.5">
                {filteredInternships.map(intern => (
                  <Link
                    key={intern.id}
                    href="/internships"
                    onClick={onClose}
                    className="p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-semibold text-white group-hover:text-amber-300">
                        {intern.company} — {intern.role}
                      </p>
                      <p className="text-[11px] text-slate-400">{intern.location} • {intern.stipend}</p>
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 shrink-0 ml-2">
                      Apply →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Interview Experiences */}
          {filteredExperiences.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 text-purple-400 font-bold uppercase tracking-wider mb-2 text-[10px]">
                <MessageSquareShare className="w-3.5 h-3.5" />
                <span>Interview Experiences</span>
              </div>
              <div className="space-y-1.5">
                {filteredExperiences.map(exp => (
                  <Link
                    key={exp.id}
                    href="/interviews"
                    onClick={onClose}
                    className="p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="font-semibold text-white group-hover:text-purple-300">
                        {exp.company} • {exp.role}
                      </p>
                      <p className="text-[11px] text-slate-400">By {exp.candidateName} ({exp.college}) • {exp.result}</p>
                    </div>
                    <span className="text-[10px] text-slate-500 shrink-0 ml-2">
                      {exp.difficulty}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-[11px] text-slate-500">
          <span>Search RoleUp platform curriculum & records</span>
          <span>Tip: Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
