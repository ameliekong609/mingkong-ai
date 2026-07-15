const lines = [
  "After years of deploying enterprise AI, I became increasingly convinced that simply adding LLMs to workflows was not enough.",
  "I wanted to explore systems that could investigate, challenge assumptions and use evidence.",
  "I wanted those systems to operate safely under human governance.",
  "That means review loops, approval gates and controlled release, not open-ended automation.",
  "That is the idea behind my public engineering work.",
];

export function WhyBuildingThis() {
  return (
    <section
      id="why"
      className="scroll-mt-24 border-t border-slate-200/80 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.38fr_1fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-blue-700">
            Why I&apos;m building this
          </p>
          <h2 className="max-w-sm text-3xl font-semibold leading-tight text-slate-950">
            The human reason behind the systems.
          </h2>
        </div>
        <div className="max-w-3xl border-l-2 border-blue-600 pl-5">
          <div className="grid gap-3 text-lg leading-8 text-slate-700">
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
