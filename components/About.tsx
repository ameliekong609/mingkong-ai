import { profile, strengths } from "@/lib/content";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Point of view"
      title="Applied AI leadership built around one principle: autonomy must come with control."
      intro="Much of today's agentic AI is still a predefined workflow with an LLM inserted into several steps. Ming's work focuses on systems that can make bounded decisions about what to investigate next, use tools, revisit assumptions and correct errors without losing evidence, governance or human accountability."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr]">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {strengths.map((strength) => (
            <article
              key={strength.title}
              className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {strength.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {strength.body}
              </p>
            </article>
          ))}
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white lg:self-start">
          <p className="text-sm font-semibold uppercase text-blue-300">
            Current role
          </p>
          <h3 className="mt-4 text-xl font-semibold">{profile.currentRole}</h3>
          <p className="mt-5 text-sm leading-6 text-slate-300">
            Leads enterprise AI transformation programs across telecommunications,
            banking, energy, insurance and retail, with a focus on customer-facing
            architecture, production adoption and responsible controls.
          </p>
          <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
            {profile.audience}
          </p>
        </div>
      </div>
    </Section>
  );
}
