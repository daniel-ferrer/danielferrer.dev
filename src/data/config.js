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
  title:     'Product Reliability Engineer',
  location:  'San Antonio, TX',
  email:     'danielferrersosa@hotmail.com',
  openToWork: false,

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    headline: 'Ship fast.\nFail safe.',
    subHeadline: 'I build reliability into customer-facing SaaS — and lead Watchtower, the AI-driven operations platform that helps teams move fast without breaking things.',
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
      "I'm a Product Reliability Engineer with 5 years building full-stack .NET products and embedding reliability into customer-facing SaaS at Invoice Cloud. I lead Watchtower, our SRE operations platform, and work where product engineering meets operational excellence — system design, incident response, observability, and AI-driven operations tooling — while still shipping production code.",
      "My philosophy: reliability is not something you bolt on after shipping. I focus on translating reliability risk into business impact, and on building the tooling, processes, and culture that let teams move fast without breaking things.",
      "Outside of work, I'm building Fimsy, trying to teach my beagle Zoe to code (it's not going well), playing tons of golf, and perpetually tinkering with whatever side project has my attention this week.",
    ],
    metrics: [
      { value: '5',    unit: 'yrs',  label: 'Building .NET products & reliability' },
      { value: '100+', unit: 'users', label: 'On Watchtower, across Eng & CS'       },
      { value: '40%↓', unit: 'MTTR', label: 'Via alerting, automation & runbooks'  },
      { value: '80%↓', unit: '',     label: 'Manual ticket research via AI triage' },
    ],
  },

  // ── Experience ────────────────────────────────────────────
  experience: [
    {
      company: 'InvoiceCloud',
      url:     'https://www.invoicecloud.net',
      role:    'Product Reliability Engineer',
      period:  'Dec 2021 — Present',
      type:    'Full-time · Remote',
      // Detail lives on the resume; the site keeps a short summary plus the case study below.
      summary: 'I own incident response, observability, and reliability for customer-facing products at Invoice Cloud, a payments SaaS platform, and have cut MTTR by 40%. I lead most of our SRE project work, including Watchtower, our internal SRE operations platform: I\'m one of its three core developers, and it has cut manual ticket research by 80%. I also mentor and coach the SRE team on best practices and a reliability-first approach to tackling and resolving problems.',
      // Expanded case study opened from the tab ("See the Watchtower case study →").
      // Keep it to the name "Watchtower" — no other internal system, customer or host names.
      caseStudy: {
        id:    'watchtower',
        title: 'Watchtower — SRE Operations & Reliability Platform',
        meta:  'Invoice Cloud · 2026 — ongoing · Project Lead · Core Developer (1 of 3)',
        tags:  ['C#', '.NET Core', 'ASP.NET Core', 'EF Core', 'Azure AI Foundry', 'Hangfire', 'SQL', 'Azure'],
        sections: [
          {
            heading: 'The problem',
            body: "Customer service reps, support, integrations, and implementation teams kept escalating customer issues to engineering, because the answers lived in engineers' heads, production data, and a sprawling codebase. Batch job and server failures on the enterprise scheduler were often found late, by customers.",
          },
          {
            heading: 'Two layers of triage',
            body: "Every ticket now passes through two AI layers before an engineer sees it. First, Watchtower's support chat answers questions at the point of entry, deflecting 20%+ of tickets before they are ever filed. Tickets that do come through go to SRE-AI, a marketplace of agentic resources the SRE team built and maintains. It fans agents out across codebases, documentation, stored procedures, and data for as long as the investigation needs, and keeps an audit trail of every step. When it can't find the root cause, a human takes over, which happens for fewer than 30% of tickets. Each investigation also opens pull requests into the shared knowledge base, so the next one starts smarter.",
          },
          {
            heading: 'My role',
            body: "I'm the project lead and one of three core developers who designed, built, and operate Watchtower, an SRE-owned platform that's now the engineering hub for 100+ users across Engineering and Customer Service.",
          },
          {
            heading: 'How it works',
            items: [
              { title: 'AI support chat', body: 'CS reps describe a payer, customer, or biller issue in plain language. The assistant runs on Azure AI Foundry models and grounds its answers in three sources: a curated engineering knowledge base of how systems work and connect, governed read access to production data, and an org-wide dependency graph of services and code. It walks reps through triage and root cause instead of sending them to an engineer.' },
              { title: 'Knowledge as a service', body: 'An MCP server exposes the engineering knowledge base and resources to other services and agents, so they can pull in how systems work and connect to assist their own processes instead of rebuilding that context themselves.' },
              { title: 'AI PR review layer', body: 'Every engineering pull request at the company (500+ a month) is reviewed automatically. Findings from post-incident reviews feed back into it, so it learns to catch the patterns that caused past outages and security issues.' },
              { title: 'Proactive monitoring', body: 'Scheduled Hangfire jobs watch 200+ batch jobs and 10 servers/agents on the enterprise scheduler. When something fails, an LLM reads the logs and assesses severity, customer impact, and whether the job will recover on its own or is a recurring problem that needs attention now. That analysis goes into the page, so the on-call engineer gets a warm handoff instead of a bare alert, and issues that customers used to report repeatedly are now caught first.' },
              { title: 'Auto-remediation', body: 'Newly rolled out: workflows decide whether a detected failure is caused by a code bug and, when an agent can fix it, open the pull request with the fix themselves. Detect, diagnose, and fix, with no human needed.' },
              { title: 'Self-service tooling framework', body: 'Engineering teams build their own internal ops tools on the platform instead of doing manual ops work.' },
            ],
          },
          {
            heading: 'Architecture',
            diagram: {
              caption: 'Six flows. Ticket path: a customer issue reaches the support chat, which answers 20%+ before a ticket is filed; the rest go to SRE-AI, which investigates with an audit trail, and fewer than 30% need a human before resolution. Support chat: the Watchtower chat uses an Azure AI Foundry model grounded in a knowledge base, governed read-only production data, and a dependency graph. Knowledge as a service: other services and agents query the knowledge base through an MCP server. PR review: engineering pull requests go through the PR review layer, which also learns from incident data. Monitoring: Hangfire monitors watch the enterprise scheduler’s batch jobs and servers/agents; an LLM analyzes the logs, and the analysis goes into the page to the owning team. Auto-remediation: when a detected failure is an agent-fixable code bug, an agent writes the fix and opens a pull request.',
              flows: [
                {
                  label: 'Ticket path',
                  steps: [
                    'Customer issue', '→',
                    { text: 'Support chat', note: '20%+ answered here', kind: 'accent' }, '→',
                    'Ticket', '→',
                    { text: 'SRE-AI investigation', note: 'agent fan-out, audit trail', kind: 'accent' }, '→',
                    { text: 'Human in the loop', note: 'under 30% of tickets', kind: 'gate' }, '→',
                    'Resolved',
                  ],
                },
                {
                  label: 'Support chat grounding',
                  steps: [
                    'CS rep', '→',
                    { text: 'Watchtower chat', kind: 'accent' }, '→',
                    { text: 'AI model', note: 'Azure AI Foundry' }, '→',
                    ['Knowledge base', { text: 'Production data', note: 'governed, read-only' }, 'Dependency graph'],
                  ],
                },
                {
                  label: 'Knowledge as a service',
                  steps: ['Other services & agents', '→', { text: 'MCP server', kind: 'accent' }, '→', 'Knowledge base'],
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
                    { text: 'LLM log analysis', note: 'severity, impact, recurring?' }, '→',
                    { text: 'Page with analysis', note: 'warm handoff' }, '→', 'Owning team',
                  ],
                },
                {
                  label: 'Auto-remediation',
                  steps: [
                    'Detected failure', '→',
                    { text: 'Code bug?', note: 'agent-fixable', kind: 'gate' }, '→',
                    { text: 'Agent fix', kind: 'accent' }, '→',
                    'Pull request',
                  ],
                },
              ],
            },
          },
          {
            heading: 'Results',
            bullets: [
              '80% less manual research per ticket',
              '20%+ of tickets deflected before they are filed',
              'Fewer than 30% of engineering tickets need a human',
              '50%+ faster resolution for tickets SRE-AI resolves on its own; most tickets close in 1–2 days regardless of priority, some within an hour',
              '50%+ faster time-to-detect for scheduler and batch failures, with fewer repeat incidents',
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
      desc:   "A self-hosted AI command center. I describe the work in one conversation; scoped agents carry it through gated pipelines to a pull request I approve from my phone.",
      stack:  ['Private · In Development'],
      link:   null,           // ← add link once public
      status: 'wip',
      // Expanded write-up shown beneath the workshop grid.
      // Keep model backends generic — don't name specific providers or models.
      details: {
        id:      'otto',
        eyebrow: 'Write-up',
        title:   'Otto — self-hosted AI command center',
        meta:    '2026 — ongoing · Private · In Development',
        tags:    ['TypeScript', 'Node.js', 'Hono', 'SQLite', 'React', 'Vite', 'MCP'],
        sections: [
          {
            heading: 'Overview',
            body: 'Otto runs my side projects from a single conversation. A lightweight router takes each request and hands it to a fresh agent scoped to that one task, running on a pluggable model backend. Each change then moves through gated stages — plan, implement, review, verify, deliver — and ends as a pull request I can approve from my phone.',
          },
          {
            heading: 'Why I built it',
            body: "I was running AI coding sessions across several projects at once and kept losing track of which ones were blocked, which were editing the same files, and which had actually merged. I wanted one place to talk to that sends work to isolated agents and only calls something done once it has landed as a checked pull request.",
          },
          {
            heading: 'Pipeline',
            diagram: {
              caption: 'A request goes to the router, which hands it to a scoped agent. The change then moves through plan, implement and review (agent stages), verify (real checks, no model), and an approval gate at deliver, ending as a pull request.',
              flows: [
                {
                  steps: [
                    'Request', '→',
                    { text: 'Router', note: 'no code access', kind: 'accent' }, '→',
                    { text: 'Scoped agent', note: 'own git worktree' }, '→',
                    'Plan', '→', 'Implement', '→', 'Review', '→',
                    { text: 'Verify', note: 'real checks' }, '→',
                    { text: 'Deliver', note: 'approval gate', kind: 'gate' }, '→',
                    { text: 'Pull request', kind: 'accent' },
                  ],
                },
              ],
            },
          },
          {
            heading: 'Interesting engineering decisions',
            items: [
              { title: 'A router, not a monolith', body: "The router I talk to can't read code: its filesystem tools are denied in code, and it only sees a token-capped index of my workspaces. Deterministic code, not the model, decides what a message is allowed to start, and real work goes to fresh agents scoped to one workspace, each in its own git worktree." },
              { title: 'Mechanical stages stay mechanical', body: 'Plan, implement and review are agent stages; verify, deliver and land run real commands with no model in the loop. Verify records the exact tree it checked, and landing re-checks it against the current base before merging. Workflows are versioned data, so editing one never changes a run already in flight.' },
              { title: 'Pluggable model backends', body: "Each stage runs on whichever backend its model id names, and every backend's output is normalized into the same transcript, cost and resume contract — so adding a provider doesn't touch the pipeline, and a stage can fall back to another provider when one hits its usage limit." },
            ],
          },
          {
            heading: 'Stack',
            body: 'TypeScript on Node.js, with a Hono API (HTTP + server-sent events), SQLite as a derived cache over JSON manifests on disk, a React + Vite UI, and an MCP server that gives the router bounded, read-only views of each workspace. Self-hosted as a service on a Linux home server.',
          },
        ],
      },
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
      items: ['Agile / Scrum', 'Sprint Management', 'Failure-Mode Analysis', 'Blameless Post-mortems', 'Code Review', 'Technical Leadership', 'Mentoring & Coaching', 'AI-Assisted Triage', 'Multi-Agent Orchestration'],
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
