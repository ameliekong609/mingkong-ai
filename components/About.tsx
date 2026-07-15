import { profile, strengths } from "@/lib/content";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Ming"
      title="I build autonomy with control, not automation for its own sake."
      intro="Much of today's agentic AI is still a predefined workflow with an LLM inserted into several steps. My work focuses on systems that can make bounded decisions about what to investigate next, use tools, revisit assumptions and correct errors without losing evidence, governance or human accountability."
    >
      <div className="grid gap-4 md:grid-cols-3">
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

      <div className="mt-8 border-t border-slate-200 pt-6">
        <div className="grid gap-3 sm:grid-cols-[0.26fr_1fr]">
          <p className="text-sm font-semibold uppercase text-blue-700">
            Current role
          </p>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-slate-950">
              {profile.currentRole}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Leads enterprise AI transformation programs across telecommunications,
              banking, energy, insurance and retail, with a focus on customer-facing
              architecture, production adoption and responsible controls.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
