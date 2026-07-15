import { Section } from "@/components/Section";
import { principles } from "@/lib/content";

export function Principles() {
  return (
    <Section
      id="principles"
      eyebrow="Principles"
      title="Principles for controlled enterprise agents."
      intro="The point is not unrestricted autonomy. The point is controlled delegation: systems that can adapt, investigate and correct while remaining evidence-grounded and human-governed."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, index) => (
          <article
            key={principle.title}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <p className="text-sm font-semibold text-blue-700">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              {principle.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {principle.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
