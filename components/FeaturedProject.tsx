import { ExternalLink } from "lucide-react";

type FeaturedProjectProps = {
  project: {
    eyebrow: string;
    title: string;
    headline: string;
    context: string;
    summary: string;
    problem: string;
    architecture: string[];
    controls: string[];
    repo?: {
      label: string;
      href: string;
    };
  };
  variant: "concept" | "production";
};

const visualSteps = {
  concept: [
    "Objective",
    "Digital workers",
    "Evidence registry",
    "Senior review",
    "Release gate",
  ],
  production: [
    "Live signal",
    "Detection agent",
    "Tool-calling",
    "Guidance / triage",
    "Evaluation loop",
  ],
};

function ArchitectureVisual({ variant }: { variant: "concept" | "production" }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="grid gap-2">
        {visualSteps[variant].map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-white text-sm font-semibold text-blue-700 shadow-sm">
              {index + 1}
            </span>
            <span className="min-w-0 flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800">
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-800">
        {variant === "concept"
          ? "The loop is review-bound: correction happens before controlled release."
          : "The loop is production-bound: model accuracy is separated from application-layer signal persistence."}
      </div>
    </div>
  );
}

export function FeaturedProject({ project, variant }: FeaturedProjectProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-700">
            {project.eyebrow} | {project.context}
          </p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
            {project.headline}
          </h3>
          <p className="mt-4 text-lg font-semibold text-slate-800">
            {project.title}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {project.summary}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-slate-950">Problem</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">Architecture</p>
              <ul className="mt-3 space-y-2">
                {project.architecture.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-blue-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">Controls</p>
              <ul className="mt-3 space-y-2">
                {project.controls.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-blue-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.repo ? (
            <a
              href={project.repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              {project.repo.label}
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <ArchitectureVisual variant={variant} />
      </div>
    </article>
  );
}
