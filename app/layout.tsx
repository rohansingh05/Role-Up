import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'RoleUp — From Student to Job Ready | CSE Career Platform',
  description: 'RoleUp guides Computer Science students from choosing a career path, mastering skills with verified resources, building engineering projects, to crafting ATS resumes and landing top internships.',
  keywords: [
    'Computer Science',
    'CSE Career',
    'Software Engineer Roadmap',
    'Full Stack Developer',
    'Data Science',
    'AI ML Engineer',
    'DevOps',
    'Cybersecurity',
    'Internships',
    'Resume Builder',
    'Student Platform'
  ],
  authors: [{ name: 'RoleUp Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
