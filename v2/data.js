const brand = {
  name: "Aurelian",
  suffix: "Digital",
  tagline: "Better ways to work.",
  email: "hello@aurelian.digital",
};

const hero = {
  eyebrow: "Digital transformation for growing businesses",
  title: "Your business has evolved. Your systems should too.",
  subtitle: "We simplify the way your team works and build software that fits — from the first idea to everyday support.",
  primaryCta: { label: "Tell us what's not working", href: "#contact" },
  secondaryCta: { label: "See what we solve", href: "#solutions" },
  stats: [
    { value: "One team", label: "From strategy to launch" },
    { value: "Built for you", label: "Not forced from a template" },
    { value: "Here after", label: "Support that continues" },
  ],
};

const thesis = {
  title: "Technology should feel like progress, not another project.",
  lead: "We make complex change feel manageable.",
  body: [
    "You know where the friction is: approvals that take days, information scattered across chats, reports built by hand and tools your team works around instead of with.",
    "We start there. Together, we simplify the process and build the right solution around your people. Then we stay to support it, improve it and keep it useful as your business grows.",
  ],
  pillars: [
    { icon: "compass", title: "Business first", text: "We solve the operational problem before choosing the technology." },
    { icon: "wrench", title: "Made to fit", text: "Your workflows shape the software, not the other way around." },
    { icon: "shield", title: "One accountable partner", text: "No handoffs between advisers, developers and support teams." },
    { icon: "box", title: "Built to evolve", text: "Maintenance, upgrades and new features keep the solution moving." },
  ],
};

const services = [
  { tag: "Documents", title: "Find anything. Approve faster.", text: "Bring files, contracts and approvals into one secure place your team can actually navigate.", bullets: ["Digital records", "Smart search", "Approvals and signatures"] },
  { tag: "Operations", title: "Replace workarounds with workflows.", text: "Turn repetitive tasks, follow-ups and manual handoffs into a clear flow that keeps work moving.", bullets: ["Process automation", "Requests and tasks", "Live visibility"] },
  { tag: "Customers", title: "Never lose the next step.", text: "Give sales and service teams one reliable view of every customer, conversation and opportunity.", bullets: ["Tailored CRM", "Follow-up automation", "Client portals"] },
  { tag: "Decisions", title: "See what the business is telling you.", text: "Connect scattered data and turn it into timely dashboards, alerts and practical AI assistance.", bullets: ["Management dashboards", "Forecasts and alerts", "Secure AI assistants"] },
];

const approach = [
  { step: "01", title: "Show us the friction", text: "We listen, observe the work and agree on the outcome worth pursuing." },
  { step: "02", title: "See it before we build it", text: "We map the simpler process and prototype the experience with your team." },
  { step: "03", title: "Launch with confidence", text: "We build in clear stages, connect your systems and prepare people for day one." },
  { step: "04", title: "Keep getting better", text: "We support the software and add improvements as your needs change." },
];

const openQuestions = {
  title: "Straight answers before we start.",
  lead: "A good partnership begins with clarity.",
  items: [
    { q: "Do we need to replace everything we already use?", note: "Usually not. We keep what works, connect what should work together and replace only what is holding the business back." },
    { q: "Is the software custom-built?", note: "It is personalized around your workflows using proven foundations. That gives you a tailored fit without paying to reinvent every technical component." },
    { q: "What happens after launch?", note: "We remain your technology partner through a software license and care plan covering support, maintenance, security updates and agreed improvements." },
    { q: "Will our team need technical skills?", note: "No. We design for the people who will use the system, provide training and handle the technical operation behind it." },
    { q: "Can we start small?", note: "Yes. We prefer a focused first process with a clear result, then expand once the value is proven." },
  ],
};

const nav = [
  { label: "Why us", href: "#why" },
  { label: "Solutions", href: "#solutions" },
  { label: "How it works", href: "#approach" },
  { label: "FAQ", href: "#questions" },
];

window.SITE = { brand, hero, thesis, services, approach, openQuestions, nav };
