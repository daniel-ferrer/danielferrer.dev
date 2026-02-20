/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  SITE CONFIGURATION — Daniel Ferrer                ║
 * ║  Edit this file to update any content on the site.      ║
 * ╚══════════════════════════════════════════════════════════╝
 */

export const config = {

  // ── Identity ──────────────────────────────────────────────
  name:      'Daniel Ferrer',
  initials:  'DF',
  title:     'Software Engineer · SRE Product',
  location:  'San Antonio, TX',
  email:     'ferrdan2506@hotmail.com',
  openToWork: false,

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    headline: 'Ship fast.\nFail safe.',
    subHeadline: 'I lead reliability and resiliency for customer-facing SaaS products — embedding performance, scalability, and operability directly into the product lifecycle.',
    // Typewriter cycling phrases shown beneath the sub-headline; "Currently focusing on..."
    tags: [
      'SRE · Product Reliability',
      '.NET · C# · Python',
      'Azure · Terraform',
      'real-time observability solutions',
      'AI-driven alerting systems',
      'eliminating toil',
      'HydroBot.NET',
      'Fimsy',
      'getting better at golf'
    ],
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    paragraphs: [
      "I'm a Software Engineer with 4+ years in full-stack .NET development and 3+ years leading product-focused SRE efforts at Invoice Cloud. I operate at the intersection of software engineering, reliability, and product delivery — from assisting system design to triaging incident root causes to developer enablement via internal tooling.",
      "My philosophy: reliability is not something you bolt on after shipping. I partner with product engineering teams, influencing architecture with failure-mode analysis, graceful degradation patterns, and SLO-driven prioritization that keeps customer impact front and center.",
      "Outside of work, I'm building Fimsy, trying to teach my beagle Zoe to code (it's not going well), playing tons of golf, and perpetually tinkering with whatever side project has my attention this week.",
    ],
    metrics: [
      { value: '4+',  unit: 'yrs',  label: 'Software Engineering experience'    },
      { value: '40%+', unit: '$',     label: 'Observability platform cost reduction' },
      { value: '3+',  unit: 'yrs',  label: 'Product Reliability focus'             },
      { value: '30%↓',   unit: 'MTTR', label: 'Improved via automation'   },
    ],
  },

  // ── Experience ────────────────────────────────────────────
  experience: [
    {
      company: 'InvoiceCloud',
      url:     'https://www.invoicecloud.net',
      role:    'Software Engineer (SRE – Product)',
      period:  'Dec 2021 — Present',
      type:    'Full-time · Remote',
      summary: 'Led a product-focused SRE team responsible for embedding reliability, scalability, and operability directly into customer-facing SaaS products. I own system design, incident response, observability architecture, and developer enablement — partnering closely with Product and Engineering to make reliability a first-class concern.',
      bullets: [
        'Influenced feature design with reliability-first architecture and failure-mode analysis, ensuring patterns like graceful degradation and fault isolation were built into services from day one.',
        'Led high-severity incident root cause analysis for core product domains, improving MTTR through automation, runbook standardization, and symptom-based alerting aligned to real customer impact.',
        'Resolved observability gaps across legacy projects during codebase modernization — building standardized metrics, logging, and distributed tracing practices across the product suite.',
        'Designed and deployed a machine learning solution to auto-triage incoming support tickets, reducing manual routing overhead and improving response time at scale.',
        'Reduced alert fatigue by improving signal quality and aligning alert policies to customer-impacting symptoms rather than system noise.',
        'Mentored SRE engineers on reliability best practices, setting technical direction, reviewing designs, and advocating for sustainable on-call culture across product engineering teams.',
        'Communicated reliability risks and engineering investments in business terms to leadership, customer teams, and stakeholders.',
      ],
      stack: ['C#', 'ASP.NET Core', 'Python', 'Terraform', 'Azure', 'New Relic', 'SQL', 'Azure DevOps'],
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
      items: ['ASP.NET Core MVC', 'ASP.NET Core Web API', 'Entity Framework', 'WPF', 'Node.js'],
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['Microsoft Azure', 'Azure DevOps', 'Terraform', 'Git'],
    },
    {
      category: 'Observability & Reliability',
      items: ['New Relic', 'SLI / SLO Design', 'Critical Customer Journey Coverage', 'Alert Tuning', 'Distributed Tracing', 'Runbook Design'],
    },
    {
      category: 'Developer Tools',
      items: ['Visual Studio', 'VS Code', 'JIRA', 'Confluence', 'Postman', 'SOAPUI'],
    },
    {
      category: 'Practices',
      items: ['Agile / Scrum', 'Sprint Management', 'Failure-Mode Analysis', 'Blameless Post-mortems', 'Code Review', 'Team Leadership'],
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
