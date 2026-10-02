'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Github, Linkedin, Twitter, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Brand column */}
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-white">
              Role<span className="text-brand-400">Up</span>
            </span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed">
            The Job Ready Platform for Computer Science & CSE students. From choosing a career track to shipping projects, building an ATS resume, and landing internships.
          </p>
          <p className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            "From Student to Job Ready."
          </p>
        </div>

        {/* Career Paths */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
            Primary Career Tracks
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/roles/software-engineer" className="hover:text-indigo-400 transition-colors">
                Software Engineer
              </Link>
            </li>
            <li>
              <Link href="/roles/full-stack-developer" className="hover:text-indigo-400 transition-colors">
                Full Stack Developer
              </Link>
            </li>
            <li>
              <Link href="/roles/data-scientist" className="hover:text-indigo-400 transition-colors">
                Data Scientist
              </Link>
            </li>
            <li>
              <Link href="/roles/ai-ml-engineer" className="hover:text-indigo-400 transition-colors">
                AI / ML Engineer
              </Link>
            </li>
            <li>
              <Link href="/roles/cybersecurity-analyst" className="hover:text-indigo-400 transition-colors">
                Cybersecurity Analyst
              </Link>
            </li>
            <li>
              <Link href="/roles/devops-engineer" className="hover:text-indigo-400 transition-colors">
                DevOps / Cloud Engineer
              </Link>
            </li>
          </ul>
        </div>

        {/* Platform Tools */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
            Student Tools
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/dashboard" className="hover:text-indigo-400 transition-colors">
                Personalized Dashboard
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-indigo-400 transition-colors">
                Skill Roadmaps & Tutorials
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-indigo-400 transition-colors">
                Engineering Projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-indigo-400 transition-colors">
                Interactive Resume Builder
              </Link>
            </li>
            <li>
              <Link href="/portfolio/aarav-sharma" className="hover:text-indigo-400 transition-colors">
                Public Portfolio Showcase
              </Link>
            </li>
            <li>
              <Link href="/internships" className="hover:text-indigo-400 transition-colors">
                Internship Opportunities
              </Link>
            </li>
            <li>
              <Link href="/interviews" className="hover:text-indigo-400 transition-colors">
                Interview Experiences
              </Link>
            </li>
          </ul>
        </div>

        {/* Community & Transparency */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
            Community & Ethics
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            RoleUp is built by and for CSE students. We believe in transparent progress tracking, verified resources, and real peer support without paywalled hype.
          </p>
          <div className="flex items-center space-x-3 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Legal & Educational Disclaimer Notice */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
        <p>
          © {new Date().getFullYear()} RoleUp Platform. All rights reserved.
        </p>
        <p className="text-center sm:text-right max-w-xl text-slate-500 leading-normal">
          <strong className="text-slate-400">Educational Transparency:</strong> The RoleUp Job Readiness Score measures student progress along verified CSE roadmaps. It is an internal benchmark tool and does not guarantee job placement or hiring outcomes.
        </p>
      </div>
    </footer>
  );
};
