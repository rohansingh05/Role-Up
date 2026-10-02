'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../../lib/context/AppContext';
import { Sidebar } from '../../components/Sidebar';
import {
  FileText,
  Printer,
  Sparkles,
  CheckCircle2,
  Plus,
  Trash2,
  Download,
  Eye,
  Edit3,
  Layers,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
  Briefcase
} from 'lucide-react';
import { ResumeData } from '../../lib/types';

export default function ResumeBuilderPage() {
  const { resume, updateResume, resumeCompletion } = useApp();

  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [selectedTemplate, setSelectedTemplate] = useState<'modern' | 'minimal' | 'executive'>(resume.template || 'modern');

  // Handle PDF Export / Print
  const handlePrint = () => {
    window.print();
  };

  // Updaters
  const updatePersonalInfo = (field: string, value: string) => {
    updateResume({
      personalInfo: {
        ...resume.personalInfo,
        [field]: value
      }
    });
  };

  const updateSkillsField = (field: string, value: string) => {
    updateResume({
      skills: {
        ...resume.skills,
        [field]: value
      }
    });
  };

  const addExperienceItem = () => {
    const newItem = {
      id: `exp-${Date.now()}`,
      role: 'Software Engineering Intern',
      company: 'Tech Startup Inc.',
      location: 'Remote',
      startDate: 'Jan 2026',
      endDate: 'Present',
      current: true,
      bullets: [
        'Engineered high-throughput API endpoints reducing latency by 35%.',
        'Implemented automated unit testing suite with Jest.'
      ]
    };
    updateResume({ experience: [...resume.experience, newItem] });
  };

  const removeExperienceItem = (id: string) => {
    updateResume({ experience: resume.experience.filter(e => e.id !== id) });
  };

  const updateExperienceItem = (id: string, updates: Partial<typeof resume.experience[0]>) => {
    updateResume({
      experience: resume.experience.map(e => e.id === id ? { ...e, ...updates } : e)
    });
  };

  const addProjectItem = () => {
    const newItem = {
      id: `proj-${Date.now()}`,
      name: 'Distributed Cloud Microservice',
      techStack: 'TypeScript, Node.js, Docker, Redis',
      githubUrl: 'https://github.com/username/project',
      liveUrl: 'https://demo.app',
      bullets: [
        'Architected asynchronous message queue handling 5,000+ jobs/min.',
        'Deployed containerized services to cloud with automated CI/CD.'
      ]
    };
    updateResume({ projects: [...resume.projects, newItem] });
  };

  const removeProjectItem = (id: string) => {
    updateResume({ projects: resume.projects.filter(p => p.id !== id) });
  };

  const updateProjectItem = (id: string, updates: Partial<typeof resume.projects[0]>) => {
    updateResume({
      projects: resume.projects.map(p => p.id === id ? { ...p, ...updates } : p)
    });
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header & Controls (Hidden when printing PDF) */}
        <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              <span>ATS Resume Studio</span>
            </div>
            <h1 className="text-3xl font-black text-white">
              Professional CSE Resume Builder
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Designed specifically for software engineering campus and off-campus recruitment. ATS-compliant single-column formatting with live PDF export.
            </p>
          </div>

          <div className="flex items-center space-x-3 self-start sm:self-auto">
            {/* Template Selector */}
            <div className="flex items-center space-x-1 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
              {(['modern', 'minimal', 'executive'] as const).map(tmpl => (
                <button
                  key={tmpl}
                  onClick={() => {
                    setSelectedTemplate(tmpl);
                    updateResume({ template: tmpl });
                  }}
                  className={`px-3 py-1 rounded-lg capitalize font-bold transition-colors ${
                    selectedTemplate === tmpl ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tmpl}
                </button>
              ))}
            </div>

            {/* Print / Export Button */}
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Export as PDF</span>
            </button>
          </div>
        </div>

        {/* Completion Checklist Banner (no-print) */}
        <div className="no-print p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="text-center shrink-0">
              <div className="text-2xl font-black text-emerald-400">
                {resumeCompletion}%
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-500">
                ATS Score
              </div>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-xs space-y-1">
              <div className="text-white font-bold">Resume Verification Checklist</div>
              <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
                <span className={resume.personalInfo.fullName ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {resume.personalInfo.fullName ? '✓ Contact Info' : '○ Contact Info'}
                </span>
                <span className={resume.education.length > 0 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {resume.education.length > 0 ? '✓ Education' : '○ Education'}
                </span>
                <span className={resume.projects.length >= 2 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {resume.projects.length >= 2 ? '✓ 2+ Projects' : '○ 2+ Projects'}
                </span>
                <span className={resume.experience.length > 0 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {resume.experience.length > 0 ? '✓ Experience' : '○ Experience'}
                </span>
                <span className={resume.skills.languages ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {resume.skills.languages ? '✓ Technical Skills' : '○ Technical Skills'}
                </span>
              </div>
            </div>
          </div>

          {/* Tab Switcher on mobile/tablet */}
          <div className="flex items-center space-x-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('edit')}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors ${
                activeTab === 'edit' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors ${
                activeTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Paper</span>
            </button>
          </div>
        </div>

        {/* 2-Column Workspace (Side by side on Large Screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: EDIT FORMS (Col span 6 or shown when activeTab === 'edit') */}
          <div className={`no-print ${activeTab === 'edit' ? 'block' : 'hidden lg:block'} lg:col-span-6 space-y-6`}>
            
            {/* Personal Details */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Personal & Contact Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Full Name</label>
                  <input
                    type="text"
                    value={resume.personalInfo.fullName}
                    onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Email Address</label>
                  <input
                    type="email"
                    value={resume.personalInfo.email}
                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    value={resume.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Location / City</label>
                  <input
                    type="text"
                    value={resume.personalInfo.location}
                    onChange={(e) => updatePersonalInfo('location', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    value={resume.personalInfo.linkedinUrl}
                    onChange={(e) => updatePersonalInfo('linkedinUrl', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">GitHub Profile URL</label>
                  <input
                    type="url"
                    value={resume.personalInfo.githubUrl}
                    onChange={(e) => updatePersonalInfo('githubUrl', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 text-xs font-semibold">Professional Headline / Summary</label>
                <textarea
                  rows={2}
                  value={resume.personalInfo.summary}
                  onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 text-xs"
                />
              </div>
            </div>

            {/* Categorized Skills */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Technical Skills Section</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Programming Languages</label>
                  <input
                    type="text"
                    value={resume.skills.languages}
                    onChange={(e) => updateSkillsField('languages', e.target.value)}
                    placeholder="e.g. C++, Java, Python, JavaScript, TypeScript, SQL"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Frameworks & Libraries</label>
                  <input
                    type="text"
                    value={resume.skills.frameworks}
                    onChange={(e) => updateSkillsField('frameworks', e.target.value)}
                    placeholder="e.g. React, Next.js, Node.js, Express, Tailwind CSS, PyTorch"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Tools & Cloud</label>
                  <input
                    type="text"
                    value={resume.skills.tools}
                    onChange={(e) => updateSkillsField('tools', e.target.value)}
                    placeholder="e.g. Git, Docker, Linux, Postman, AWS, Prometheus"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Databases</label>
                  <input
                    type="text"
                    value={resume.skills.databases}
                    onChange={(e) => updateSkillsField('databases', e.target.value)}
                    placeholder="e.g. PostgreSQL, Redis, MongoDB, MySQL"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Items */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  <span>Work & Internship Experience</span>
                </h3>
                <button
                  onClick={addExperienceItem}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Role</span>
                </button>
              </div>

              {resume.experience.map(exp => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{exp.role} @ {exp.company}</span>
                    <button
                      onClick={() => removeExperienceItem(exp.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => updateExperienceItem(exp.id, { role: e.target.value })}
                      placeholder="Role title"
                      className="px-2 py-1.5 rounded bg-slate-900 border border-slate-800 text-white"
                    />
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => updateExperienceItem(exp.id, { company: e.target.value })}
                      placeholder="Company"
                      className="px-2 py-1.5 rounded bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>
                  <textarea
                    rows={2}
                    value={exp.bullets.join('\n')}
                    onChange={(e) => updateExperienceItem(exp.id, { bullets: e.target.value.split('\n') })}
                    placeholder="Action bullet points (one per line)"
                    className="w-full px-2 py-1.5 rounded bg-slate-900 border border-slate-800 text-white"
                  />
                </div>
              ))}
            </div>

            {/* Projects Items */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Featured Engineering Projects</span>
                </h3>
                <button
                  onClick={addProjectItem}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              {resume.projects.map(proj => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{proj.name}</span>
                    <button
                      onClick={() => removeProjectItem(proj.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={proj.name}
                      onChange={(e) => updateProjectItem(proj.id, { name: e.target.value })}
                      placeholder="Project Name"
                      className="px-2 py-1.5 rounded bg-slate-900 border border-slate-800 text-white"
                    />
                    <input
                      type="text"
                      value={proj.techStack}
                      onChange={(e) => updateProjectItem(proj.id, { techStack: e.target.value })}
                      placeholder="Tech Stack"
                      className="px-2 py-1.5 rounded bg-slate-900 border border-slate-800 text-white"
                    />
                  </div>
                  <textarea
                    rows={2}
                    value={proj.bullets.join('\n')}
                    onChange={(e) => updateProjectItem(proj.id, { bullets: e.target.value.split('\n') })}
                    placeholder="Impact bullet points (one per line)"
                    className="w-full px-2 py-1.5 rounded bg-slate-900 border border-slate-800 text-white"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: LIVE RESUME PAPER PREVIEW (Col span 6 or shown when activeTab === 'preview') */}
          <div className={`${activeTab === 'preview' ? 'block' : 'hidden lg:block'} lg:col-span-6`}>
            
            <div className="sticky top-20 bg-white text-slate-900 p-8 rounded-xl shadow-2xl border border-slate-200 resume-paper min-h-[900px] text-xs font-sans leading-relaxed">
              
              {/* Header */}
              <div className="text-center border-b border-slate-300 pb-4 mb-4">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
                  {resume.personalInfo.fullName || 'Student Name'}
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-600 mt-1.5 font-medium">
                  {resume.personalInfo.phone && <span>{resume.personalInfo.phone}</span>}
                  {resume.personalInfo.email && <span>• {resume.personalInfo.email}</span>}
                  {resume.personalInfo.location && <span>• {resume.personalInfo.location}</span>}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-indigo-700 mt-1 font-semibold">
                  {resume.personalInfo.githubUrl && (
                    <a href={resume.personalInfo.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      GitHub
                    </a>
                  )}
                  {resume.personalInfo.linkedinUrl && (
                    <a href={resume.personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      • LinkedIn
                    </a>
                  )}
                  {resume.personalInfo.portfolioUrl && (
                    <a href={resume.personalInfo.portfolioUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      • Portfolio
                    </a>
                  )}
                </div>
              </div>

              {/* Education */}
              {resume.education.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
                    Education
                  </h3>
                  {resume.education.map(edu => (
                    <div key={edu.id} className="mb-2">
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>{edu.institution}</span>
                        <span className="text-[11px] font-normal text-slate-600">{edu.startDate} – {edu.endDate}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-slate-700 text-[11px]">
                        <span>{edu.degree} in {edu.fieldOfStudy}</span>
                        <span className="font-semibold text-slate-800">GPA: {edu.gpaOrGrade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Technical Skills */}
              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
                  Technical Skills
                </h3>
                <div className="space-y-1 text-[11px] text-slate-800">
                  {resume.skills.languages && (
                    <div><strong className="text-slate-950 font-bold">Languages:</strong> {resume.skills.languages}</div>
                  )}
                  {resume.skills.frameworks && (
                    <div><strong className="text-slate-950 font-bold">Frameworks & Libraries:</strong> {resume.skills.frameworks}</div>
                  )}
                  {resume.skills.tools && (
                    <div><strong className="text-slate-950 font-bold">Tools & Cloud:</strong> {resume.skills.tools}</div>
                  )}
                  {resume.skills.databases && (
                    <div><strong className="text-slate-950 font-bold">Databases:</strong> {resume.skills.databases}</div>
                  )}
                  {resume.skills.coursework && (
                    <div><strong className="text-slate-950 font-bold">Relevant Coursework:</strong> {resume.skills.coursework}</div>
                  )}
                </div>
              </div>

              {/* Experience */}
              {resume.experience.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
                    Experience
                  </h3>
                  {resume.experience.map(exp => (
                    <div key={exp.id} className="mb-3">
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>{exp.role} <span className="font-normal text-slate-600">| {exp.company}</span></span>
                        <span className="text-[11px] font-normal text-slate-600">{exp.startDate} – {exp.endDate}</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-[11px] text-slate-800">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Projects */}
              {resume.projects.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
                    Projects
                  </h3>
                  {resume.projects.map(proj => (
                    <div key={proj.id} className="mb-3">
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>
                          {proj.name} <span className="font-normal text-slate-600 text-[11px]">| {proj.techStack}</span>
                        </span>
                        <span className="text-[10px] text-indigo-700 font-semibold">
                          [GitHub / Demo]
                        </span>
                      </div>
                      <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-[11px] text-slate-800">
                        {proj.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Achievements & Certifications */}
              {(resume.achievements.length > 0 || resume.certifications.length > 0) && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
                    Achievements & Honors
                  </h3>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] text-slate-800">
                    {resume.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                    {resume.certifications.map(cert => (
                      <li key={cert.id}>{cert.name} ({cert.issuer})</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
