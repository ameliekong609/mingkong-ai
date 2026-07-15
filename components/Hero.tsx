import { ArrowRight } from "lucide-react";
import { WorkflowComparison } from "@/components/WorkflowComparison";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_62%,#ffffff_100%)]"
    >
      <div className="absolute inset-0 system-grid opacity-80" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-10 sm:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.78fr)] lg:px-8 lg:py-16">
        <div className="min-w-0 animate-enter">
          <div className="mb-6">
            <p className="text-sm font-semibold text-blue-700">{profile.name}</p>
            <p className="mt-2 max-w-2xl break-words text-sm font-medium leading-6 text-slate-500">
              {profile.descriptor}
            </p>
          </div>
          <h1 className="max-w-4xl text-3xl font-semibold leading-[1.08] text-balance text-slate-950 sm:text-5xl sm:leading-[1.04] lg:text-6xl">
            {profile.positioning}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-6 text-slate-800">
            {profile.credibility}
          </p>
          <p className="mt-5 max-w-3xl border-l-2 border-blue-600 pl-4 text-base font-medium leading-7 text-slate-950">
            {profile.belief}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-700/20 transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Explore the systems
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#principles"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Read the principles
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="hidden animate-enter-delay lg:block">
          <WorkflowComparison />
        </div>
      </div>
    </section>
  );
}
