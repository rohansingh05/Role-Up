'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../../lib/context/AppContext';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Terminal,
  Layout,
  BarChart3,
  Cpu,
  ShieldCheck,
  CloudCog,
  BookOpen,
  FolderGit2,
  Briefcase,
  Users2,
  GraduationCap,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OnboardingPage() {
  const router = useRouter();
  const { user, updateUser, roles, skills, setTargetRoleId } = useApp();

  const [step, setStep] = useState(1);

  // Local onboarding state initialized from context
  const [formData, setFormData] = useState({
    name: user.name || 'Aarav Sharma',
    college: user.college || 'Indian Institute of Technology, Delhi',
    degree: user.degree || 'B.Tech in Computer Science',
    graduationYear: user.graduationYear || '2026',
    targetRole: user.targetRole || 'software-engineer',
    currentLevel: user.currentLevel || 'Intermediate',
    currentSkills: user.currentSkills || ['dsa', 'javascript'],
    goal: 'Get internship',
    lookingFor: user.lookingFor || 'Internship',
    learningStyle: user.learningStyle || 'Hands-on Projects',
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const roleIcons: Record<string, any> = {
    'software-engineer': Terminal,
    'full-stack-developer': Layout,
    'data-scientist': BarChart3,
    'ai-ml-engineer': Cpu,
    'cybersecurity-analyst': ShieldCheck,
    'devops-engineer': CloudCog,
  };

  const handleRoleSelect = (roleId: string) => {
    setFormData(prev => ({ ...prev, targetRole: roleId }));
  };

  const toggleSkill = (skillId: string) => {
    setFormData(prev => {
      const exists = prev.currentSkills.includes(skillId);
      return {
        ...prev,
        currentSkills: exists
          ? prev.currentSkills.filter(s => s !== skillId)
          : [...prev.currentSkills, skillId]
      };
    });
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(prev => prev + 1);
    } else {
      finalizeOnboarding();
    }
  };

  const finalizeOnboarding = () => {
    setIsGenerating(true);
    // Update context
    updateUser({
      name: formData.name,
      college: formData.college,
      degree: formData.degree,
      graduationYear: formData.graduationYear,
      targetRole: formData.targetRole,
      currentLevel: formData.currentLevel as any,
      currentSkills: formData.currentSkills,
      lookingFor: formData.lookingFor as any,
      learningStyle: formData.learningStyle as any,
      isOnboarded: true
    });
    setTargetRoleId(formData.targetRole);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback if canvas not available
    }

    setTimeout(() => {
      setIsGenerating(false);
      router.push('/dashboard');
    }, 1500);
  };

  const currentRoleObj = roles.find(r => r.id === formData.targetRole) || roles[0];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Top Header & Progress */}
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-white text-lg">
              Role<span className="text-brand-400">Up</span>
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            Step {step} of 5
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-8">
          <div
            className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Form Content */}
      <div className="max-w-2xl mx-auto w-full flex-1">
        
        {/* STEP 1: What do you want to become? */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Step 1: Choose Career Goal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                What role do you want to prepare for?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select your primary technical career track. You can always change this later in your dashboard.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {roles.map(r => {
                const IconComponent = roleIcons[r.id] || Compass;
                const isSelected = formData.targetRole === r.id;
                return (
                  <div
                    key={r.id}
                    onClick={() => handleRoleSelect(r.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-indigo-950/60 border-indigo-500 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                      )}
                    </div>
                    <div className="mt-3">
                      <h4 className="text-sm font-bold text-white">{r.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{r.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Current Skill Level */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Step 2: Experience Assessment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                What is your current technical level?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                This calibrates where your learning roadmap begins and what pace we recommend.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  level: 'Beginner',
                  title: 'Beginner / First-Year Student',
                  desc: 'Learning syntax, basic coding logic, and foundational programming in C++, Java, or Python.'
                },
                {
                  level: 'Intermediate',
                  title: 'Intermediate / Sophomore or Junior',
                  desc: 'Familiar with core data structures, written some backend/frontend code, preparing for internships.'
                },
                {
                  level: 'Advanced',
                  title: 'Advanced / Pre-final or Final Year',
                  desc: 'Built production web apps, solved 100+ algorithmic questions, preparing for technical interviews.'
                }
              ].map(opt => {
                const isSelected = formData.currentLevel === opt.level;
                return (
                  <div
                    key={opt.level}
                    onClick={() => setFormData(prev => ({ ...prev, currentLevel: opt.level as any }))}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                      isSelected
                        ? 'bg-indigo-950/60 border-indigo-500 ring-1 ring-indigo-500'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="mt-0.5">
                      <input
                        type="radio"
                        checked={isSelected}
                        onChange={() => {}}
                        className="text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{opt.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{opt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Current Skills */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Step 3: Existing Competencies
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                What are you currently learning or know?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select all technologies you have touched. We will mark these in your roadmap progress.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {skills.map(s => {
                const isSelected = formData.currentSkills.includes(s.id);
                return (
                  <div
                    key={s.id}
                    onClick={() => toggleSkill(s.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs font-medium ${
                      isSelected
                        ? 'bg-indigo-600/30 border-indigo-500 text-white font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="truncate">{s.name}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 ml-1.5" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Goal & Timeline */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Step 4: Primary Objective
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                What is your #1 goal right now?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                RoleUp will optimize your daily "Next Best Action" towards this milestone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'Get internship', title: 'Land a Summer Internship', icon: Briefcase },
                { id: 'Get job', title: 'Land a Full-Time Job (Campus/Off-campus)', icon: Award },
                { id: 'Build projects', title: 'Build Engineering Portfolio Projects', icon: FolderGit2 },
                { id: 'Prepare for interviews', title: 'Master DSA & Mock Interviews', icon: Sparkles },
                { id: 'Learn skills', title: 'Learn Modern Tech & CS Fundamentals', icon: BookOpen },
              ].map(g => {
                const IconComponent = g.icon;
                const isSelected = formData.goal === g.id;
                return (
                  <div
                    key={g.id}
                    onClick={() => setFormData(prev => ({ ...prev, goal: g.id }))}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center space-x-3 ${
                      isSelected
                        ? 'bg-indigo-950/60 border-indigo-500 ring-1 ring-indigo-500'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-white">{g.title}</span>
                  </div>
                );
              })}
            </div>

            {/* Quick College & Grad Year info */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-400 font-semibold mb-1">Your Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-semibold mb-1">College / University</label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData(prev => ({ ...prev, college: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Roadmap Summary & Confirmation */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Roadmap Ready</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Your Job-Ready Roadmap is Configured!
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                We've customized your curriculum, milestone projects, and internship checklist for the <strong>{currentRoleObj.title}</strong> track.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-medium">Target Role:</span>
                <span className="text-xs font-bold text-indigo-400">{currentRoleObj.title}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-medium">Starting Level:</span>
                <span className="text-xs font-bold text-white">{formData.currentLevel}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 font-medium">Immediate Focus:</span>
                <span className="text-xs font-bold text-white">{formData.goal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Curriculum Duration:</span>
                <span className="text-xs font-bold text-emerald-400">
                  {currentRoleObj.roadmapSteps.reduce((acc, s) => acc + s.estimatedWeeks, 0)} Weeks Structured Path
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/50 text-xs text-indigo-300 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 shrink-0 text-indigo-400" />
              <span>
                "From Student to Job Ready." Your dashboard is ready to track progress, build your ATS resume, and launch your portfolio.
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Navigation Buttons */}
      <div className="max-w-2xl mx-auto w-full pt-8 border-t border-slate-800 flex items-center justify-between">
        {step > 1 ? (
          <button
            onClick={() => setStep(prev => prev - 1)}
            disabled={isGenerating}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={handleNext}
          disabled={isGenerating}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
        >
          {isGenerating ? (
            <span>Generating Roadmap...</span>
          ) : step === 5 ? (
            <>
              <span>Launch Dashboard</span>
              <Sparkles className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

    </div>
  );
}
