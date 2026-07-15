export const profile = {
  name: "Dr Ming Kong",
  descriptor: "Enterprise Applied AI | Agentic Systems | Customer Adoption",
  positioning:
    "Enterprise AI shouldn't stop at workflows. It should deploy controlled digital workers.",
  summary:
    "I design and deploy enterprise AI systems that can investigate, reason, use tools, review and correct their work, while preserving evidence, human judgement and production controls.",
  credibility:
    "Production multi-agent systems, enterprise knowledge agents and controlled agentic architectures across Google Cloud, AWS and Azure.",
  belief:
    "I believe the next decade of enterprise AI will be defined not by larger models, but by better systems for controlled delegation.",
  currentRole: "Senior Manager, AI Analytics, PwC Australia",
  audience:
    "Built for technical leaders, applied AI teams and enterprise decision makers evaluating frontier AI systems in real operating environments.",
};

export const navItems = [
  { label: "Thesis", href: "#thesis" },
  { label: "Systems", href: "#projects" },
  { label: "Principles", href: "#principles" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

export const workflowComparison = {
  workflow: {
    title: "Workflow automation",
    description: "Best for known processes with predefined steps.",
    steps: ["Prompt", "Fixed sequence", "LLM call", "Output"],
  },
  worker: {
    title: "Controlled digital worker",
    description: "Useful when work requires investigation, evidence and review.",
    steps: [
      "Delegated objective",
      "Plan and investigate",
      "Use tools and evidence",
      "Review and correct",
      "Human approval",
      "Controlled release",
    ],
  },
};

export const strengths = [
  {
    title: "Enterprise deployment",
    body: "Moves AI from technical concept to production-ready customer adoption across complex enterprise environments.",
  },
  {
    title: "Agentic engineering",
    body: "Designs multi-agent systems, tool-calling, RAG, evaluation and controlled review patterns.",
  },
  {
    title: "Human-governed autonomy",
    body: "Builds evidence grounding, exception handling, approval gates and release controls into autonomous systems.",
  },
];

export const conceptFlagship = {
  eyebrow: "Concept flagship",
  title: "Controlled Agentic Accountant Copilot",
  headline: "From workflow automation to a controlled digital workforce.",
  context: "Public engineering prototype",
  summary:
    "A controlled agentic system for financial-statement preparation, designed around delegated work, investigation, tool use, review, correction and controlled release.",
  problem:
    "Financial-statement preparation is not simply a linear prompt chain. It requires source matching, judgement-sensitive review, evidence preservation, correction loops and final human accountability.",
  architecture: [
    "Persistent digital workers with Hermes-based runtime profiles and a Codex CLI execution worker.",
    "Specialist agents for delegated investigation, tool use and structured workbook generation.",
    "Evidence registry and source-of-truth separation so guidance can inform judgement without becoming client evidence.",
  ],
  controls: [
    "Bounded senior-review and correction loops.",
    "Deterministic controls, human approval and release gates.",
    "Structured workbooks, evidence-linked outputs and long-running task recovery.",
  ],
  repo: {
    label: "View GitHub",
    href: "https://github.com/ameliekong609/Agentic-accountant-copilot",
  },
};

export const productionFlagship = {
  eyebrow: "Production flagship",
  title: "Enterprise Contact Centre AI Transformation",
  headline: "Real-time agentic AI for live customer operations.",
  context: "Major Australian telecommunications provider",
  summary:
    "Led technical architecture and production deployment of a real-time agentic AI platform delivered across PwC, Google Cloud and the client.",
  problem:
    "Safety-critical customer operations required real-time vulnerability and emergency-signal detection, low-latency guidance, evaluation tooling and operational controls.",
  architecture: [
    "Detection, Guidance and Triage agent architecture using Gemini 2.5 Flash and Google Agent Development Kit.",
    "Real-time tool-calling integrated with Google Cloud Contact Center AI and Coach AI.",
    "Vertex AI Search, BigQuery, Firestore, Pub/Sub and Looker for grounding, state, eventing, analytics and monitoring.",
  ],
  controls: [
    "Synthetic conversation generation.",
    "Automated evaluation, replay and engineering diagnostics.",
    "Showcased at Google Summit Sydney 2026.",
  ],
};

export type SupportingProject = {
  title: string;
  context: string;
  summary: string;
  architecture: string;
  control: string;
  repo?: {
    label: string;
    href: string;
  };
};

export const supportingProjects: SupportingProject[] = [
  {
    title: "Enterprise Knowledge Agents",
    context: "Major Australian energy infrastructure provider",
    summary:
      "Led development of an enterprise HR knowledge assistant positioned as a reusable enterprise knowledge-agent pattern.",
    architecture:
      "Combined AWS Bedrock, Amazon Neptune, OpenSearch Serverless, RAG and Model Context Protocol with graph-based context, vector retrieval and LLM reasoning.",
    control:
      "Focused on grounding enterprise knowledge work in structured context rather than treating the assistant as a generic chatbot.",
  },
  {
    title: "Agentic ML Modernisation",
    context: "National Australian retailer",
    summary:
      "Designed an agentic ML modernisation framework for migrating fragmented legacy R and Python environments into production-grade MLOps.",
    architecture:
      "Used LangGraph, Azure ML and CI/CD across data transfer, environment standardisation, script refactoring and pipeline generation.",
    control:
      "Converted fragmented analytical assets into a repeatable modernisation framework with production-oriented delivery controls.",
  },
  {
    title: "Tax Ruling Analysis",
    context: "Public engineering prototype",
    summary:
      "Applies controlled agentic reasoning to tax-ruling research and professional judgement.",
    architecture:
      "Extends the controlled-agentic pattern into research workflows where evidence and review discipline matter.",
    control:
      "Keeps the system positioned as support for professional analysis, not a replacement for human judgement.",
    repo: {
      label: "View GitHub",
      href: "https://github.com/ameliekong609/tax-consult",
    },
  },
];

export const principles = [
  {
    title: "Delegate objectives, not fixed steps",
    body: "Controlled agents become useful when the system can decide what to investigate next within defined boundaries.",
  },
  {
    title: "Ground decisions in evidence",
    body: "Outputs should preserve the sources, artefacts and reasoning context needed for review.",
  },
  {
    title: "Separate guidance from source truth",
    body: "Skills and know-how can guide judgement, but client evidence must remain distinct.",
  },
  {
    title: "Review before release",
    body: "Autonomous work should pass through review, exception handling and approval gates before delivery.",
  },
  {
    title: "Correct within bounded loops",
    body: "Self-correction should be structured, observable and limited by explicit controls.",
  },
  {
    title: "Keep humans accountable for judgement",
    body: "Professional judgement, escalation and release decisions remain human-governed.",
  },
];

export const speakingItems = [
  {
    event: "Google Summit Sydney 2026",
    title: "Showcasing production agentic AI",
    detail:
      "The real-time contact centre agentic AI platform for a major Australian telecommunications provider was showcased at Google Summit Sydney 2026, with real-time detection, agent orchestration, tool-calling and production evaluation.",
  },
  {
    event: "AWS Summit Sydney 2026",
    title: "Contract intelligence platform",
    detail:
      "An AWS-powered contract intelligence platform for a major retail and hospitality group was showcased at AWS Summit Sydney 2026.",
  },
];

export const contacts = [
  {
    label: "GitHub",
    value: "ameliekong609",
    href: "https://github.com/ameliekong609",
  },
  {
    label: "LinkedIn",
    value: "dr-ming-kong",
    href: "https://www.linkedin.com/in/dr-ming-kong",
  },
  {
    label: "Email",
    value: "amelie.m.kong@gmail.com",
    href: "mailto:amelie.m.kong@gmail.com",
  },
];
