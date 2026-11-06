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
      // Detail lives on the resume; the site keeps a short summary plus the case study below.
      summary: 'I lead a team of 8 SREs at Invoice Cloud, a payments SaaS platform, owning incident response, observability, and reliability for customer-facing products. Along the way I cut MTTR by 40% and became one of three core developers of Watchtower, our internal SRE operations platform.',
      // Expanded case study opened from the tab ("See the Watchtower case study →").
      // Keep it to the name "Watchtower" — no other internal system, customer or host names.
      caseStudy: {
        id:    'watchtower',
        title: 'Watchtower — SRE Operations & Reliability Platform',
        meta:  'Invoice Cloud · 2026 — ongoing · Core Developer (1 of 3)',
        tags:  ['C#', '.NET Core', 'ASP.NET Core', 'EF Core', 'Azure AI Foundry', 'Hangfire', 'SQL', 'Azure'],
        sections: [
          {
            heading: 'The problem',
            body: "Customer service reps, support, integrations, and implementation teams kept escalating customer issues to engineering, because the answers lived in engineers' heads, production data, and a sprawling codebase. Batch job and server failures on the enterprise scheduler were often found late, by customers.",
          },
          {
            heading: 'My role',
            body: "I'm one of three core developers who designed, built, and operate Watchtower, an SRE-owned platform that's now the engineering hub for 100+ users across Engineering and Customer Service.",
          },
          {
            heading: 'How it works',
            items: [
              { title: 'AI incident triage chat', body: 'CS reps describe a payer, customer, or biller issue in plain language. The assistant runs on Azure AI Foundry models and grounds its answers in three sources: a curated engineering knowledge base of how systems work and connect, governed read access to production data, and an org-wide dependency graph of services and code. It walks reps through triage and root cause instead of sending them to an engineer.' },
              { title: 'AI PR review layer', body: 'Every engineering pull request at the company (500+ a month) is reviewed automatically. Findings from post-incident reviews feed back into it, so it learns to catch the patterns that caused past outages and security issues.' },
              { title: 'Proactive monitoring', body: 'Scheduled Hangfire jobs watch 200+ batch jobs and 10 servers/agents on the enterprise scheduler and page the owning team as soon as something fails.' },
              { title: 'Self-service tooling framework', body: 'Engineering teams build their own internal ops tools on the platform instead of doing manual ops work.' },
            ],
          },
          {
            heading: 'Architecture',
            diagram: {
              caption: 'Three flows. Triage: a CS rep asks the Watchtower chat, which uses an Azure AI Foundry model grounded in a knowledge base, governed read-only production data, and a dependency graph. PR review: engineering pull requests go through the PR review layer, which also learns from incident data. Monitoring: Hangfire monitors watch the enterprise scheduler’s batch jobs and servers/agents and page the owning team on failure.',
              flows: [
                {
                  label: 'Incident triage',
                  steps: [
                    'CS rep', '→',
                    { text: 'Watchtower chat', kind: 'accent' }, '→',
                    { text: 'AI model', note: 'Azure AI Foundry' }, '→',
                    ['Knowledge base', { text: 'Production data', note: 'governed, read-only' }, 'Dependency graph'],
                  ],
                },
                {
                  label: 'PR review',
                  steps: ['Engineering PRs', '→', { text: 'PR review layer', kind: 'accent' }, '←', 'Incident data'],
                },
                {
                  label: 'Proactive monitoring',
                  steps: [
                    { text: 'Hangfire monitors', kind: 'accent' }, '→',
                    { text: 'Enterprise scheduler', note: 'batch jobs, servers/agents' }, '→',
                    'Paging', '→', 'Owning team',
                  ],
                },
              ],
            },
          },
          {
            heading: 'Results',
            bullets: [
              '80% increase in ticket deflection, with far fewer issues escalated to engineering',
              '50%+ faster time-to-detect for scheduler and batch failures',
              '500+ PRs reviewed every month',
              '100+ users across Engineering and Customer Service',
            ],
          },
        ],
      },
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
