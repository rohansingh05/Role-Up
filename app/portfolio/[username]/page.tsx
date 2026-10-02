'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useApp } from '../../../lib/context/AppContext';
import {
  Compass,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  FolderGit2,
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
  Send,
  CheckCircle2
} from 'lucide-react';

export default function PublicPortfolioPage() {
  const params = useParams();
  const username = params?.username as string;

  const { user, resume, projects, projectsProgress, targetRoleDetail, skills } = useApp();

  const [messageSent, setMessageSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Collect portfolio visible projects
  const portfolioProjects = projects.filter(p => {
    const prog = projectsProgress[p.id];
    return prog && prog.inPortfolio;
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 4000);
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  const isMinimalTheme = user.portfolioTheme === 'minimal-light';
  const isIndigoTheme = user.portfolioTheme === 'indigo-modern';

  return (
    <div className={`min-h-screen ${
      isMinimalTheme
        ? 'bg-slate-900 text-slate-100'
        : isIndigoTheme
        ? 'bg-[#08071a] text-slate-100'
        : 'bg-slate-950 text-slate-100'
    } pb-20`}>
      
      {/* Top Banner Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Compass className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-sm text-white">
              Role<span className="text-indigo-400">Up</span>
            </span>
          </Link>

          <div className="flex items-center space-x-3 text-xs">
            <span className="text-slate-400 hidden sm:inline">RoleUp Verified Student Portfolio</span>
            <Link
              href="/dashboard"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
        
        {/* Profile Hero Section */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <img
            src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&h=300&q=80'}
            alt={user.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-indigo-500/50 object-cover shadow-xl shrink-0"
          />

          <div className="space-y-2 flex-1 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Open for {user.lookingFor || 'Internships'}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-indigo-300 text-xs font-bold">
                {targetRoleDetail.title}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {user.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300">
              {user.degree} • {user.college} (Graduating {user.graduationYear})
            </p>

            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              {user.bio || resume.personalInfo.summary || 'Aspiring software engineer passionate about distributed systems and modern web architecture.'}
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {user.githubUrl && (
                <a
                  href={user.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {user.linkedinUrl && (
                <a
                  href={user.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              )}
              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </section>

        {/* Technical Competencies */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <span>Technical Skills & Core Stack</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-slate-400 uppercase text-[10px] block mb-1">Languages:</span>
              <p className="text-white font-medium">{resume.skills.languages}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-slate-400 uppercase text-[10px] block mb-1">Frameworks:</span>
              <p className="text-white font-medium">{resume.skills.frameworks}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-slate-400 uppercase text-[10px] block mb-1">Tools & Cloud:</span>
              <p className="text-white font-medium">{resume.skills.tools}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-slate-400 uppercase text-[10px] block mb-1">Databases:</span>
              <p className="text-white font-medium">{resume.skills.databases}</p>
            </div>
          </div>
        </section>

        {/* Featured Projects Showcase */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-cyan-400" />
              <span>Verified Engineering Projects</span>
            </h2>
            <span className="text-xs text-slate-400">{portfolioProjects.length} Deployed Works</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolioProjects.map(proj => {
              const prog = projectsProgress[proj.id];
              return (
                <div
                  key={proj.id}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {proj.difficulty}
                      </span>
                      <span className="text-[11px] text-slate-500">~{proj.estimatedHours} hrs</span>
                    </div>

                    <h3 className="text-base font-bold text-white">{proj.title}</h3>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-3 leading-relaxed">
                      {proj.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {proj.skills.map(sk => (
                        <span
                          key={sk}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-semibold text-[11px]">
                      ● Verified Deliverable
                    </span>
                    <div className="flex items-center space-x-2">
                      {prog?.githubUrl && (
                        <a
                          href={prog.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {prog?.liveUrl && (
                        <a
                          href={prog.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-300 font-bold text-[11px] flex items-center gap-1 transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          
          {/* Experience */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Experience & Internships</span>
            </h3>

            {resume.experience.map(exp => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>{exp.role}</span>
                  <span className="text-slate-500 font-normal">{exp.startDate} – {exp.endDate}</span>
                </div>
                <p className="text-indigo-400 font-medium">{exp.company}</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-300 text-[11px] pt-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Honors */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>Education & Honors</span>
            </h3>

            {resume.education.map(edu => (
              <div key={edu.id} className="space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>{edu.institution}</span>
                  <span className="text-slate-500 font-normal">{edu.startDate} – {edu.endDate}</span>
                </div>
                <p className="text-purple-300 font-medium">{edu.degree} in {edu.fieldOfStudy}</p>
                <p className="text-slate-400 text-[11px]">GPA: <strong>{edu.gpaOrGrade}</strong></p>
              </div>
            ))}

            <div className="pt-2 border-t border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Achievements:</span>
              <ul className="list-disc list-outside ml-4 space-y-1 text-slate-300 text-[11px]">
                {resume.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Contact Form for Recruiters */}
        <section id="contact" className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-white">
              Connect with {user.name}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Interested in interviewing or discussing internship/fresher opportunities? Send a direct message.
            </p>
          </div>

          <form onSubmit={handleSendMessage} className="max-w-xl mx-auto space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Recruiter or Engineering Lead"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="recruiter@company.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Message</label>
              <textarea
                required
                rows={3}
                placeholder="We would love to interview you for our 2026 SDE Internship opening..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message to {user.name}</span>
            </button>

            {messageSent && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-center font-bold text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Message dispatched successfully!</span>
              </div>
            )}
          </form>
        </section>

      </main>

      {/* Portfolio Footer */}
      <footer className="text-center text-xs text-slate-500 pt-10 border-t border-slate-900">
        <p>Built with <Link href="/" className="text-indigo-400 hover:underline">RoleUp</Link> — The Job Ready Platform for CSE Students.</p>
      </footer>
    </div>
  );
}
