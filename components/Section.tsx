import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-slate-200/80 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase text-blue-700">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-lg leading-8 text-slate-600">{intro}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
