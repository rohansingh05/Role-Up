# RoleUp — The Job Ready Platform for Computer Science / CSE Students

> **"From Student to Job Ready."**

RoleUp is a production-grade career readiness web platform built for Computer Science & Engineering (CSE) students, freshers, and college graduates. Unlike generic LMS platforms that trap students in endless video tutorials, RoleUp is an action-driven career engine that guides a student from day one of college until they land a competitive software engineering job or internship.

---

## 🌟 Core Features & Modules

### 1. 🎯 Dynamic Career Paths & Sequential Roadmaps
- **6 Calibrated Career Tracks**:
  1. **Software Developer / Software Engineer** (DSA, Core CS, Systems, Low-Level Design)
  2. **Full Stack Developer** (Modern JS/TS, React/Next.js, Node/Express, PostgreSQL, Cloud)
  3. **Data Scientist** (Applied Statistics, Advanced SQL, Scikit-Learn, A/B Testing)
  4. **AI / ML Engineer** (PyTorch, Transformers, LLMs, RAG, Vector DBs, MLOps)
  5. **Cybersecurity Analyst** (Networking, Linux, Wireshark, OWASP Top 10, SIEM, SOC Operations)
  6. **DevOps / Cloud Engineer** (Docker, Kubernetes, Terraform, CI/CD, Prometheus)
- Interactive roadmap phases with clear deliverables and milestones.
- Live progress state per skill: `Not Started` | `In Progress` | `Completed`.

### 2. ⚡ Transparent Job Readiness Score
- **Calculated Metric (0–100%)**:
  - Technical Skills (25%)
  - Engineering Projects (20%)
  - ATS Resume Completeness (20%)
  - Public Portfolio (10%)
  - Technical & HR Interview Preparation (15%)
  - Internship Preparation Checklist (10%)
- Includes transparent breakdown and actionable explanations without claiming guarantees.

### 3. 📚 Curated Learning Directory (Free vs. Paid)
- Explicit separation between high-grade **Free Resources** (MIT OpenCourseWare, NeetCode, official documentation, freeCodeCamp) and **Paid Certifications**.
- Cards display provider, format (Video, Docs, Interactive), rating, duration, and direct links.

### 4. 🛠️ Engineering Deliverables & Projects Hub
- Projects categorized into **Beginner**, **Intermediate**, and **Advanced**.
- Step-by-step implementation roadmaps and architecture requirements.
- Students can attach live GitHub repositories and deployed demo URLs.
- "Feature on Portfolio" toggle to promote projects to their public URL.

### 5. 📄 ATS Resume Studio & PDF Export
- Structured single-column format optimized for ATS parsing.
- Real-time completion checklist (Personal Info, Education, Experience, Projects, Skills, Achievements).
- Multiple professional templates: **Modern**, **Minimal**, and **Executive**.
- One-click print-ready **Export as PDF** using CSS print media stylesheets.

### 6. 🌐 Public Portfolio Engine
- Live public URL at `/portfolio/[username]`.
- Customizable bio, theme selector (**Developer Dark**, **Indigo Modern**, **Minimal Slate**), and verified GitHub/demo links.
- Recruiter contact form.

### 7. 💼 Internship Opportunities Board & Preparation Playbook
- Searchable board with filters by Role, Location, Remote, Experience level, and Company.
- **Preparation Playbook**:
  - 7-point internship checklist.
  - Copyable, customizable **Cold Email Templates** for engineering hiring managers and university alumni.
  - Application timing guide and STAR behavioral interview frameworks.

### 8. 💬 Student Community & Peer Network
- Categorized discussions: `DSA`, `Web Development`, `AI/ML`, `Data Science`, `Cybersecurity`, `DevOps`, `Internships`, `Resume`, `Interviews`, `Career Advice`.
- Interactive post creation, live likes, saved bookmarks, and threaded comments.

### 9. 🎙️ Verified Interview Debriefs
- Round-by-round candidate reports from Google, Microsoft, Amazon, Razorpay, and startups.
- Details OA challenges, technical questions, system design prompts, and candidate advice.
- Upvoting and "Share Your Experience" contribution modal.

### 10. 🤝 Networking & LinkedIn Optimization
- Checklist for personal brand and profile completeness.
- Educational anti-spam networking strategy.

### 11. 🛡️ Operations & Admin Dashboard
- Live student enrollment KPI analytics.
- Ability to publish new internship listings, add learning resources, and monitor discussions.
- "Reset Demo State" button for instant testing.

---

## 💻 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom brand design system, dark-mode first)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Polish**: Canvas Confetti, custom scrollbars, print stylesheets
- **State Management**: React Context with LocalStorage sync and reactive score calculations

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
├── app/
│   ├── layout.tsx             # Root layout with metadata and Viewport
│   ├── providers.tsx          # AppProvider, Navbar, and GlobalSearchModal
│   ├── globals.css            # Tailwind directives, print media styles for Resume PDF
│   ├── page.tsx               # High-converting Landing Page
│   ├── onboarding/            # 5-step interactive onboarding wizard
│   ├── dashboard/             # Student Career Command Center & Next Best Action
│   ├── roles/                 # Career paths overview
│   │   └── [roleId]/          # Role detail with multi-phase roadmap
│   ├── skills/                # Skills system
│   │   └── [skillId]/         # Skill detail with tutorials & interview Qs
│   ├── resources/             # Learning resources directory (Free vs. Paid)
│   ├── projects/              # Projects hub with repo and demo URL inputs
│   ├── resume/                # ATS Resume Builder with live paper preview & PDF export
│   ├── portfolio/             # Portfolio settings and theme builder
│   │   └── [username]/        # Public portfolio URL (/portfolio/aarav-sharma)
│   ├── internships/           # Opportunities board & Preparation playbook
│   ├── community/             # Student discussion feed, comments, likes, & bookmarks
│   ├── interviews/            # Candidate interview debriefs and sharing modal
│   ├── networking/            # LinkedIn checklist & outreach guidance
│   ├── admin/                 # Admin operations and internship listing manager
│   ├── login/                 # Authentication with 1-click student demo login
│   └── signup/                # Student registration
├── components/
│   ├── Navbar.tsx             # Global navigation bar with score pill and notification bell
│   ├── Sidebar.tsx            # Authenticated student dashboard sidebar
│   ├── Footer.tsx             # Platform footer with ethics and educational disclaimer
│   └── GlobalSearchModal.tsx  # Ctrl+K search across roles, skills, projects, jobs, & posts
├── lib/
│   ├── types.ts               # Core TypeScript definitions
│   ├── context/
│   │   └── AppContext.tsx     # Global reactive state, scoring formula, and persistence
│   └── data/
│       ├── rolesData.ts       # 6 Primary Career tracks with roadmaps
│       ├── skillsData.ts      # Comprehensive skills with tutorials & interview questions
│       ├── projectsData.ts    # Beginner, Intermediate, & Advanced projects
│       ├── internshipsData.ts # Verified internship & fresher job listings
│       ├── communityData.ts   # Student community discussions and comments
│       └── interviewExperiencesData.ts # Real candidate interview debriefs
└── package.json
```

---

## 🔒 Educational Ethics & Transparency Notice
RoleUp is built as a transparent student preparation platform. The **Job Readiness Score** measures tangible milestone progress along industry-verified curriculum (skills mastered, verified code repositories, ATS resume completeness, and interview preparation). It serves as an objective self-audit tool and does not constitute a commercial guarantee of employment.
