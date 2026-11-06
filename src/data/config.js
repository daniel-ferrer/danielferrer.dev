/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  SITE CONFIGURATION — Daniel Ferrer                ║
 * ║  Edit this file to update any content on the site.      ║
 * ╚══════════════════════════════════════════════════════════╝
 */

export const config = {

  // ── Identity ──────────────────────────────────────────────
  name:      'Daniel Ferrer-Sosa',
  initials:  'DFS',
  title:     'Product Reliability Engineer · SRE Team Lead',
  location:  'San Antonio, TX',
  email:     'danielferrersosa@hotmail.com',
  openToWork: false,

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    headline: 'Ship fast.\nFail safe.',
    subHeadline: 'I lead a team of SREs embedding reliability, scalability, and operability into customer-facing SaaS — and build the AI-driven tooling that lets teams move fast without breaking things.',
    // Typewriter cycling phrases shown beneath the sub-headline; "Currently focusing on..."
    tags: [
      'SRE · Product Reliability',
      '.NET · C# · Python',
      'Azure · Terraform',
      'real-time observability solutions',
      'AI-driven operations tooling',
      'eliminating toil',
      'Otto',
      'HydroBot.NET',
      'Fimsy',
      'getting better at golf'
    ],
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    paragraphs: [
      "I'm an SRE team lead with 5 years building full-stack .NET products and embedding reliability into customer-facing SaaS at scale at Invoice Cloud. I work where product engineering meets operational excellence — system design, incident response, observability, and AI-driven operations tooling — while still shipping production code.",
      "My philosophy: reliability is not something you bolt on after shipping. I focus on translating reliability risk into business impact, and on building the tooling, processes, and culture that let teams move fast without breaking things.",
      "Outside of work, I'm building Fimsy, trying to teach my beagle Zoe to code (it's not going well), playing tons of golf, and perpetually tinkering with whatever side project has my attention this week.",
    ],
    metrics: [
      { value: '5',    unit: 'yrs',  label: 'Building .NET products & reliability' },
      { value: '8',    unit: 'SREs', label: 'Team led'                             },
      { value: '40%↓', unit: 'MTTR', label: 'Via alerting, automation & runbooks'  },
      { value: '80%',  unit: '↑',    label: 'Ticket deflection with AI triage'     },
    ],
  },

  // ── Experience ────────────────────────────────────────────
  experience: [
    {
      company: 'InvoiceCloud',
      url:     'https://www.invoicecloud.net',
      role:    'Product Reliability Engineer — SRE Team Lead',
      period:  'Dec 2021 — Present',
      type:    'Full-time · Remote',
      summary: 'Lead a team of 8 SREs embedding reliability, scalability, and operability into customer-facing SaaS products. I own high-severity incident response, observability, and AI-driven operations tooling — partnering closely with Product and Engineering to make reliability a first-class concern.',
      bullets: [
        'Own high-severity incident response for core product domains; improved MTTR by 40% through better alerting, automation, and standardized runbooks.',
        'Built and standardized observability across 50+ services using metrics, logging, and distributed tracing in New Relic, giving teams actionable insight into product health.',
        'Reduced alert fatigue by cutting non-actionable pages 50%+, aligning alerts to customer-impacting symptoms.',
        'Designed and deployed an ML-based solution that auto-triages incoming support tickets across 100+ tickets/month.',
        'Mentored SRE engineers on reliability best practices, setting technical direction, reviewing designs, and advocating for sustainable on-call culture across product engineering teams.',
      ],
      keyProjects: [
        {
          name: 'Watchtower — SRE Operations & Reliability Platform',
          role: 'Core Developer',
          bullets: [
            'Co-built and operate an SRE-owned internal platform that centralizes operational tooling, monitoring, and incident triage for 100+ users across Engineering and Customer Service organizations.',
            'Built an AI-assisted incident triage chat that increased ticket deflection by 80%, letting CS reps root-cause customer issues independently using an engineering knowledge base, governed data access, and an org-wide service dependency graph.',
            'Built proactive monitoring covering 200+ batch jobs and 10 servers/agents on the enterprise scheduler, auto-paging teams on failure and cutting time-to-detect by 50%+.',
            'Helped deliver a company-wide AI PR review layer that reviews every engineering pull request (500+/month) and learns from post-incident data to catch recurring failure patterns and security risks before production.',
            'Reduced operational toil by giving engineering teams a shared framework for building self-service internal tools instead of running manual ops work.',
          ],
        },
      ],
      stack: ['C#', '.NET Core', 'ASP.NET Core', 'EF Core', 'Azure AI Foundry', 'Hangfire', 'Python', 'SQL', 'Azure', 'Terraform', 'New Relic', 'Application Insights', 'Jira Service Management', 'AI / LLM Tooling'],
    },
    {
      company: 'University of Texas at San Antonio',
      url:     'https://www.utsa.edu',
      role:    'B.S. Computer Science, Software Engineering Concentration',
      period:  'Aug 2020 — Dec 2022',
      type:    'San Antonio, TX',
      summary: 'Bachelor of Science in Computer Science with a concentration in Software Engineering. Coursework covered algorithms, data structures, systems programming, software architecture, and database design — with practical projects in C, C#, Java, and Python.',
      bullets: [
        'Completed core curriculum in algorithms, data structures, operating systems, computer architecture, and database systems.',
        'Capstone and project work spanning C, Java, C#, and Python across systems and web application domains.',
        'Graduated while working full-time — began professional engineering role at InvoiceCloud during the final year of studies.',
      ],
      stack: ['C', 'Java', 'C#', 'Python', 'SQL', 'Data Structures', 'Algorithms'],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  //
  //  PUBLIC repos — link directly to GitHub
  //  PRIVATE/WIP repos — shown as teasers (no link, status: 'wip')
  //  To add a new project: copy a block below and fill in the fields.
  //
  projects: [
    {
      name:   'Otto',
      year:   '2026 — ongoing',
      desc:   "A self-hosted AI command center that runs my projects from a single conversation. A lightweight router hands each task to a fresh, scoped agent on pluggable model backends, then moves the change through gated pipelines — plan, implement, review, verify, deliver — to a pull request I can approve from my phone.",
      stack:  ['Private · In Development'],
      link:   null,           // ← add link once public
      status: 'wip',
    },
    {
      name:   'Fimsy',
      year:   '2025 — ongoing',
      desc:   "A financial management system passion project currently in active development. Details dropping soon — watch this space.",
      stack:  ['Private · In Development'],
      link:   null,           // ← add link once public
      status: 'wip',
    },
    {
      name:   'HydroBot.NET',
      year:   '2023 — ongoing',
      desc:   "A Discord bot built in .NET — currently in active development. A spiritual successor to earlier Python based HydroBot work, rebuilt from the ground up using .NET.",
      stack:  ['Private · In Development'],
      link:   null,           // ← add link once public
      status: 'wip',
    },
    {
      name:   'danielferrer.dev',
      year:   '2024',
      desc:   "My personal website and portfolio — the site you're currently looking at. Open source on GitHub.",
      stack:  ['React', 'Vite', 'CSS Modules'],
      link:   'https://github.com/daniel-ferrer/danielferrer.dev',
      status: 'active',
    },
    {
      name:   'UTSA CS Coursework',
      year:   '2020 — 2022',
      desc:   'A full archive of coursework from my Computer Science degree at UTSA — data structures, systems programming, algorithms, and everything in between.',
      stack:  ['C', 'Java', 'Python', 'C#'],
      link:   'https://github.com/daniel-ferrer/utsa-cs',
      status: 'archived',
    },
  ],

    // ── Skills ────────────────────────────────────────────────
  skills: [
    {
      category: 'Languages',
      items: ['C#', 'Python', 'JavaScript', 'Java', 'Visual Basic', 'C', 'SQL', 'Terraform', 'HTML / CSS'],
    },
    {
      category: 'Frameworks & Runtimes',
      items: ['ASP.NET Core MVC', 'ASP.NET Core Web API', 'Entity Framework', 'Hangfire', 'WPF', 'Node.js'],
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['Microsoft Azure', 'Terraform', 'Jenkins', 'Woodpecker', 'SonarQube', 'Azure DevOps', 'Git'],
    },
    {
      category: 'Observability & Incident Response',
      items: ['New Relic', 'Application Insights', 'Jira Service Management', 'SLI / SLO Design', 'Critical Customer Journey Coverage', 'Alert Tuning', 'Distributed Tracing', 'Runbook Design'],
    },
    {
      category: 'Developer Tools',
      items: ['Visual Studio', 'VS Code', 'JIRA', 'Confluence', 'Postman', 'SOAPUI'],
    },
    {
      category: 'Practices',
      items: ['Agile / Scrum', 'Sprint Management', 'Failure-Mode Analysis', 'Blameless Post-mortems', 'Code Review', 'Team Leadership', 'AI-Assisted Triage', 'Multi-Agent Orchestration'],
    },
  ],

  // ── Social Links ──────────────────────────────────────────
  socials: {
    github:   'https://github.com/daniel-ferrer',
    linkedin: 'https://linkedin.com/in/daniel-ferrer-sosa',
    twitter:  null,
    resume:   '/daniel-ferrer-resume.pdf',
  },

}
