/**
 * Single source of truth for all site copy.
 * Edit this file to change the proposal - no HTML changes needed.
 */
const brand = {
  name: "Aurelian",
  suffix: "Digital",
  tagline: "Consulting today. Product tomorrow.",
  email: "hello@aurelian.digital",
  // Placeholder name. Candidates discussed with the team are in README.md.
};

const hero = {
  eyebrow: "Digital transformation · AI · Blockchain · Cloud",
  title: "We turn operational friction into software you own.",
  subtitle:
    "We start as your transformation partner - mapping processes, automating the painful parts, and deploying AI and cloud where it actually pays off. Then we productize what we learn into tools you can license, not rebuild.",
  primaryCta: { label: "See the proposal", href: "#thesis" },
  secondaryCta: { label: "Product roadmap", href: "#products" },
  stats: [
    { value: "2", label: "Revenue engines: services + SaaS" },
    { value: "4", label: "Core practice areas" },
    { value: "90d", label: "Target time to first product pilot" },
  ],
};

const thesis = {
  title: "The thesis",
  lead: "Consulting funds the company. Products scale it.",
  body: [
    "Pure consulting is linear: revenue only grows when headcount grows. Pure product is capital-intensive and blind to real customer workflows.",
    "Our model deliberately couples the two. Every engagement is a paid discovery process. When the same problem shows up across three or more clients, it graduates from a custom build into a productized module with its own roadmap, pricing, and support.",
    "This means our consulting backlog is also our product research pipeline - and our first customers are already paying us.",
  ],
  pillars: [
    {
      icon: "compass",
      title: "Advisory",
      text: "Transformation roadmaps, architecture reviews, AI readiness and build-vs-buy decisions.",
    },
    {
      icon: "wrench",
      title: "Delivery",
      text: "We implement what we recommend. Automations, integrations, cloud migrations, data platforms.",
    },
    {
      icon: "box",
      title: "Product",
      text: "Recurring-revenue software born from repeated delivery patterns. Document, people and money management.",
    },
    {
      icon: "shield",
      title: "Run",
      text: "Managed services, SLAs, governance and compliance for everything we put into production.",
    },
  ],
};

const services = [
  {
    tag: "Strategy",
    title: "Digital Transformation Advisory",
    text: "Current-state assessment, process mining, target operating model and a sequenced roadmap tied to measurable business outcomes.",
    bullets: [
      "Process discovery & value-stream mapping",
      "Technology due diligence and vendor selection",
      "Operating model & change management",
      "Business case and ROI modelling",
    ],
  },
  {
    tag: "AI",
    title: "Applied AI & Data",
    text: "Pragmatic AI: retrieval-augmented assistants over your own documents, forecasting, classification and agentic workflows - with the governance to pass an audit.",
    bullets: [
      "RAG assistants over internal knowledge bases",
      "Document intelligence (OCR, extraction, classification)",
      "Forecasting, scoring and anomaly detection",
      "AI governance, evaluation and guardrails",
    ],
  },
  {
    tag: "Automation",
    title: "Process Automation",
    text: "Removing manual handoffs between systems that were never designed to talk to each other. Workflow engines, RPA where it still makes sense, and API-first integration everywhere else.",
    bullets: [
      "Workflow orchestration & BPM",
      "Integration platforms and event-driven design",
      "Back-office automation (AP/AR, onboarding, compliance)",
      "Robotic process automation for legacy UIs",
    ],
  },
  {
    tag: "Cloud",
    title: "Cloud & Platform Engineering",
    text: "Landing zones, migrations and the platform discipline that keeps cloud bills and incidents under control after the migration party ends.",
    bullets: [
      "Cloud migration & modernization",
      "Infrastructure as code, CI/CD, observability",
      "FinOps and cost optimization",
      "Security baseline, IAM and zero-trust posture",
    ],
  },
  {
    tag: "Web3",
    title: "Blockchain & Tokenization",
    text: "Where a shared ledger genuinely beats a shared database: multi-party traceability, real-world asset tokenization and verifiable credentials.",
    bullets: [
      "Tokenization of real-world assets (RWA)",
      "Supply-chain traceability & provenance",
      "Smart contract design and audit coordination",
      "Digital identity and verifiable credentials",
    ],
  },
  {
    tag: "Data",
    title: "Data & Analytics Foundations",
    text: "Nothing above works on bad data. We build the warehouse, the contracts and the quality checks that make AI and automation trustworthy.",
    bullets: [
      "Modern data stack & warehouse design",
      "Data quality, lineage and cataloguing",
      "Self-service BI and decision dashboards",
      "Data privacy, residency and retention",
    ],
  },
];

const products = [
  {
    code: "DOC",
    name: "DocVault",
    pitch: "Document management with an AI layer.",
    text: "Versioned document repository with OCR, automatic classification, retention policies, e-signature and a natural-language search that answers questions instead of returning a file list.",
    stage: "Phase 1 - MVP",
    features: [
      "Smart intake & auto-classification",
      "Approval workflows and audit trail",
      "Retention & compliance policies",
      "Ask-your-documents assistant",
    ],
  },
  {
    code: "PPL",
    name: "PeopleOps",
    pitch: "The people side of the back office.",
    text: "Employee lifecycle from onboarding to offboarding: records, contracts, time off, performance cycles and the access-provisioning checklist that IT always forgets.",
    stage: "Phase 2",
    features: [
      "Onboarding & offboarding workflows",
      "Digital employee file (links into DocVault)",
      "Time off, shifts and approvals",
      "Performance and objective tracking",
    ],
  },
  {
    code: "FIN",
    name: "FinFlow",
    pitch: "Money movement, visible and controlled.",
    text: "Spend requests, approvals, invoice capture, budget tracking and cash-flow forecasting. Built to sit next to the ERP, not to replace it.",
    stage: "Phase 2",
    features: [
      "Invoice capture & three-way match",
      "Budget and approval chains",
      "Cash-flow forecasting",
      "ERP and banking connectors",
    ],
  },
  {
    code: "CRM",
    name: "RelateCRM",
    pitch: "A CRM that knows the delivery side too.",
    text: "Pipeline, contacts and quotes - connected to projects, documents and invoicing so the handoff from sales to delivery stops being a spreadsheet.",
    stage: "Phase 3",
    features: [
      "Pipeline & activity management",
      "Quote-to-project conversion",
      "Client portal with shared documents",
      "Revenue and renewal forecasting",
    ],
  },
  {
    code: "FLW",
    name: "FlowStudio",
    pitch: "The automation layer underneath everything.",
    text: "Low-code workflow and integration builder used internally to deliver client automations - then sold as the extensibility layer for the whole product suite.",
    stage: "Phase 3 - Platform",
    features: [
      "Visual workflow designer",
      "Connector library & webhooks",
      "AI steps as first-class actions",
      "Execution logs and replay",
    ],
  },
  {
    code: "TKN",
    name: "TokenDesk",
    pitch: "Tokenization without the research project.",
    text: "Issue, manage and report on tokenized assets with KYC, cap-table and compliance reporting built in. The riskiest and highest-upside bet in the portfolio.",
    stage: "Exploratory",
    features: [
      "Asset issuance & lifecycle",
      "KYC/AML integration",
      "Investor portal & cap table",
      "On-chain / off-chain reconciliation",
    ],
  },
];

const industries = [
  { name: "Financial services", note: "Compliance-heavy automation, risk scoring, tokenization." },
  { name: "Logistics & supply chain", note: "Traceability, document flows, route and stock optimization." },
  { name: "Professional services", note: "CRM, project profitability, knowledge management." },
  { name: "Healthcare", note: "Records management, privacy, clinical document intelligence." },
  { name: "Public sector", note: "Digitalization of paper processes, transparency, identity." },
  { name: "Real estate", note: "Contract lifecycle, asset tokenization, tenant operations." },
];

const approach = [
  {
    step: "01",
    title: "Diagnose",
    text: "Two to four weeks. Interviews, process mining and a data audit. Deliverable: a prioritized friction map with effort/impact scoring.",
  },
  {
    step: "02",
    title: "Prove",
    text: "A narrow pilot against the highest-value friction point. Real users, real data, measurable before/after. Kill it fast if the numbers don't move.",
  },
  {
    step: "03",
    title: "Scale",
    text: "Industrialize the pilot: security, integrations, training and adoption. This is where most transformation programs quietly die - we treat it as the main event.",
  },
  {
    step: "04",
    title: "Productize",
    text: "Patterns seen across multiple clients become modules in the product suite. Clients get continuity; we get recurring revenue.",
  },
];

const engagement = [
  {
    name: "Sprint Assessment",
    price: "Fixed fee",
    text: "A time-boxed diagnostic that ends in a roadmap and a business case. Designed as the low-risk entry point.",
    items: ["2–4 weeks", "Friction map & ROI model", "Prioritized roadmap", "No long-term commitment"],
    featured: false,
  },
  {
    name: "Build Partnership",
    price: "Monthly retainer",
    text: "An embedded squad delivering automation, AI and cloud work against a shared backlog. The core of the services business.",
    items: ["Dedicated cross-functional squad", "Quarterly outcome reviews", "Early access to product modules", "Shared IP terms"],
    featured: true,
  },
  {
    name: "Product Subscription",
    price: "Per seat / per module",
    text: "Licensed access to the product suite with onboarding and support. The recurring-revenue destination.",
    items: ["Module-based pricing", "Managed hosting or self-host", "SLA-backed support", "Roadmap influence"],
    featured: false,
  },
];

const openQuestions = {
  title: "Open questions for the team",
  lead: "This page is a conversation starter, not a decision. Here is what we need to agree on before it becomes real.",
  items: [
    {
      q: "Which vertical do we attack first?",
      note: "Going horizontal is tempting and almost always fatal for a new firm. Picking one industry makes the first product sharper and the sales story credible.",
    },
    {
      q: "Which product do we build first - and which do we drop?",
      note: "Six products on a slide is a wish list. Realistically we can fund one MVP. DocVault is the proposed candidate because document pain is universal and it feeds the others.",
    },
    {
      q: "Is blockchain a practice or a bet?",
      note: "Tokenization has real upside but long sales cycles. Do we lead with it, keep it as a differentiator, or park it until services cash flow is stable?",
    },
    {
      q: "What is our build-vs-partner line?",
      note: "We can resell and implement existing platforms while our own product matures. Where does that stop being a bridge and start cannibalizing the product strategy?",
    },
    {
      q: "Services-to-product revenue split, year by year?",
      note: "Without a target ratio the consulting work will always crowd out product development. Suggested starting point: 90/10 in year one, 60/40 by year three.",
    },
    {
      q: "How do we handle IP ownership in client contracts?",
      note: "The productization model only works if our master agreements let us retain and reuse generalized components.",
    },
  ],
};

const nav = [
  { label: "Thesis", href: "#thesis" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Approach", href: "#approach" },
  { label: "Engagement", href: "#engagement" },
  { label: "Open questions", href: "#questions" },
];

window.SITE = {
  brand,
  hero,
  thesis,
  services,
  products,
  industries,
  approach,
  engagement,
  openQuestions,
  nav,
};
