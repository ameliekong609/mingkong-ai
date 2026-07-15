import { ExternalLink } from "lucide-react";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Section } from "@/components/Section";
import {
  conceptFlagship,
  productionFlagship,
  supportingProjects,
} from "@/lib/content";

export function SelectedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Systems"
      title="Two flagships: one for the philosophy, one for production proof."
      intro="The work is organised around controlled digital workers: systems that investigate, use tools, preserve evidence, review and release through human-governed controls."
    >
      <div className="space-y-6">
        <FeaturedProject project={conceptFlagship} variant="concept" />
        <FeaturedProject project={productionFlagship} variant="production" />
      </div>

      <div className="mt-12">
        <p className="mb-5 text-sm font-semibold uppercase text-slate-500">
          Supporting case studies
        </p>
        <div className="grid gap-4 lg:grid-cols-3">
          {supportingProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60"
            >
              <p className="text-sm font-semibold text-blue-700">
                {project.context}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-tight text-slate-950">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {project.summary}
              </p>
              <div className="mt-5 border-t border-slate-200 pt-5">
                <p className="text-sm font-semibold text-slate-950">
                  Architecture
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {project.architecture}
                </p>
              </div>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-950">Control</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {project.control}
                </p>
              </div>
              {project.repo ? (
                <a
                  href={project.repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  {project.repo.label}
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
