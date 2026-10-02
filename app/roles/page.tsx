'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Terminal,
  Layout,
  BarChart3,
  Cpu,
  ShieldCheck,
  CloudCog,
  DollarSign,
  Briefcase
} from 'lucide-react';

export default function CareerPathsPage() {
  const { roles, user, setTargetRoleId } = useApp();

  const roleIcons: Record<string, any> = {
    'software-engineer': Terminal,
    'full-stack-developer': Layout,
    'data-scientist': BarChart3,
    'ai-ml-engineer': Cpu,
    'cybersecurity-analyst': ShieldCheck,
    'devops-engineer': CloudCog,
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header */}
        <div>
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4" />
            <span>Specialized Engineering Tracks</span>
          </div>
          <h1 className="text-3xl font-black text-white">
            Career Paths for Computer Science Students
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Every technical role requires a tailored combination of programming languages, system architecture, database fundamentals, and production tools. Select any track to view its comprehensive step-by-step roadmap.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map(role => {
            const IconComponent = roleIcons[role.id] || Compass;
            const isTarget = user.targetRole === role.id;

            return (
              <div
                key={role.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  isTarget
                    ? 'bg-gradient-to-br from-slate-900 to-indigo-950/40 border-indigo-500/70 shadow-lg shadow-indigo-500/10'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-800 text-indigo-400 border border-slate-700/80">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {isTarget ? (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        Target Career
                      </span>
                    ) : (
                      <button
                        onClick={() => setTargetRoleId(role.id)}
                        className="text-[11px] font-semibold text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                      >
                        Set as Target
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{role.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{role.tagline}</p>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5 text-xs mb-4">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Demand:</span>
                      <span className="font-bold text-emerald-400">{role.demandLevel}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Salary Range:</span>
                      <span className="font-bold text-slate-200">{role.averageSalary}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Key Competencies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {role.primarySkills.map(skill => (
                        <span
                          key={skill}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {role.roadmapSteps.length} Learning Phases
                  </span>
                  <Link
                    href={`/roles/${role.id}`}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <span>View Roadmap</span>
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
