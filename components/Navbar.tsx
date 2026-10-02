'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '../lib/context/AppContext';
import {
  Compass,
  Briefcase,
  Layers,
  Code2,
  FileText,
  Globe,
  Users,
  Search,
  Menu,
  X,
  Bell,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const pathname = usePathname();
  const { user, jobReadiness, notifications, markNotificationRead, isAdmin, toggleAdminMode } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const isPublicPage = pathname === '/' || pathname === '/login' || pathname === '/signup' || pathname.startsWith('/portfolio/');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <Link href={user.isOnboarded ? "/dashboard" : "/"} className="flex items-center space-x-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                Role<span className="text-brand-400">Up</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                  CSE
                </span>
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium text-slate-300">
          <Link
            href="/dashboard"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname === '/dashboard' ? 'bg-slate-800 text-white font-semibold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/roles"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname.startsWith('/roles') ? 'bg-slate-800 text-white font-semibold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            Career Paths
          </Link>
          <Link
            href="/skills"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname.startsWith('/skills') ? 'bg-slate-800 text-white font-semibold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname.startsWith('/projects') ? 'bg-slate-800 text-white font-semibold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname === '/resume' ? 'bg-slate-800 text-white font-semibold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            Resume
          </Link>
          <Link
            href="/internships"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname === '/internships' ? 'bg-slate-800 text-white font-semibold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            Internships
          </Link>
          <Link
            href="/community"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname === '/community' ? 'bg-slate-800 text-white font-semibold' : 'hover:text-white hover:bg-slate-900'
            }`}
          >
            Community
          </Link>
        </nav>

        {/* Right Action Icons & Badges */}
        <div className="flex items-center space-x-2.5">
          {/* Global Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-2 px-3 py-1.5 text-xs text-slate-400 bg-slate-900/90 border border-slate-800 rounded-lg hover:border-slate-700 hover:text-slate-200 transition-colors"
            title="Search anything (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-slate-700">
              ⌘K
            </kbd>
          </button>

          {/* Job Readiness Pill */}
          <Link
            href="/dashboard#readiness"
            className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-xs font-semibold text-emerald-400 hover:bg-emerald-900/40 transition-colors"
            title="Your current RoleUp Job-Readiness Score"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Job Ready:</span>
            <span className="font-extrabold text-emerald-300">{jobReadiness.overallScore}%</span>
          </Link>

          {/* Notifications Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900 rounded-lg relative transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden">
                <div className="p-3.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bell className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-semibold text-white">Notifications</span>
                  </div>
                  <span className="text-xs text-slate-400">{unreadCount} unread</span>
                </div>
                <div className="max-h-80 overflow-y-auto divide-y divide-slate-800/60">
                  {notifications.map(n => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationRead(n.id)}
                      className={`p-3 text-xs cursor-pointer transition-colors ${
                        n.read ? 'bg-slate-900/60 text-slate-400' : 'bg-slate-800/40 text-slate-200'
                      } hover:bg-slate-800/80`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-semibold text-white">{n.title}</span>
                        <span className="text-[10px] text-slate-500">{n.timestamp}</span>
                      </div>
                      <p className="mt-1 text-slate-300 leading-relaxed">{n.message}</p>
                      {n.linkUrl && (
                        <Link href={n.linkUrl} className="mt-1.5 inline-block text-[11px] text-indigo-400 hover:underline">
                          View details →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Admin Mode Toggle */}
          <button
            onClick={toggleAdminMode}
            className={`px-2.5 py-1 text-[11px] font-medium rounded-md border transition-colors ${
              isAdmin
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                : 'text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
            title="Toggle Admin Platform View"
          >
            {isAdmin ? 'Admin: ON' : 'Admin'}
          </button>

          {/* User Profile Avatar Link */}
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 pl-2 border-l border-slate-800"
          >
            <img
              src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80'}
              alt={user.name}
              className="w-8 h-8 rounded-full border border-indigo-500/50 object-cover"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 py-3 space-y-2">
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Dashboard
          </Link>
          <Link
            href="/roles"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Career Paths
          </Link>
          <Link
            href="/skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Skills & Learning
          </Link>
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Resume Builder
          </Link>
          <Link
            href={`/portfolio/${user.portfolioSlug || 'aarav-sharma'}`}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Public Portfolio
          </Link>
          <Link
            href="/internships"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Internship Opportunities
          </Link>
          <Link
            href="/community"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Student Community
          </Link>
          <Link
            href="/interviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Interview Experiences
          </Link>
          <Link
            href="/networking"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Networking & LinkedIn
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-amber-300 hover:bg-slate-900"
          >
            Admin Dashboard
          </Link>
        </div>
      )}
    </header>
  );
};
