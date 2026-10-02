'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '../lib/context/AppContext';
import {
  LayoutDashboard,
  Compass,
  Code2,
  FolderGit2,
  FileText,
  Globe2,
  Briefcase,
  Users2,
  MessageSquareShare,
  Share2,
  ShieldAlert,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { user, targetRoleDetail, jobReadiness, isAdmin } = useApp();

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Career Paths', href: '/roles', icon: Compass },
    { label: 'Skill Roadmaps', href: '/skills', icon: Code2 },
    { label: 'Learning Resources', href: '/resources', icon: BookOpen },
    { label: 'Projects', href: '/projects', icon: FolderGit2 },
    { label: 'Resume Builder', href: '/resume', icon: FileText },
    { label: 'Portfolio Builder', href: '/portfolio', icon: Globe2 },
    { label: 'Internships', href: '/internships', icon: Briefcase },
    { label: 'Student Community', href: '/community', icon: Users2 },
    { label: 'Interview Experiences', href: '/interviews', icon: MessageSquareShare },
    { label: 'Networking & LinkedIn', href: '/networking', icon: Share2 },
  ];

  if (isAdmin) {
    navItems.push({ label: 'Admin Dashboard', href: '/admin', icon: ShieldAlert });
  }

  return (
    <aside className="w-64 shrink-0 hidden md:flex flex-col border-r border-slate-800/80 bg-slate-950/70 backdrop-blur-md min-h-[calc(100vh-4rem)] p-4 justify-between">
      <div>
        {/* Target Role Card */}
        <div className="p-3.5 mb-4 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950/50 border border-indigo-900/40">
          <div className="flex items-center justify-between text-xs text-indigo-400 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Target Career</span>
            <span className="flex items-center gap-1 font-bold text-emerald-400">
              <Sparkles className="w-3 h-3" />
              {jobReadiness.overallScore}% Ready
            </span>
          </div>
          <div className="text-sm font-bold text-white truncate">
            {targetRoleDetail.title}
          </div>
          <div className="mt-2 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${jobReadiness.overallScore}%` }}
            />
          </div>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Student Profile Card Footer */}
      <div className="pt-4 border-t border-slate-800/80">
        <Link
          href="/dashboard#profile"
          className="flex items-center space-x-3 p-2 rounded-xl hover:bg-slate-900/80 transition-colors group"
        >
          <img
            src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80'}
            alt={user.name}
            className="w-9 h-9 rounded-full border border-indigo-500/40 object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate group-hover:text-indigo-300">
              {user.name}
            </p>
            <p className="text-[11px] text-slate-400 truncate">
              {user.college ? user.college.split(',')[0] : 'CSE Student'}
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
};
