import { ArrowRight } from "lucide-react";
import { navItems, profile } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3 text-sm font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          aria-label={`${profile.name} home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-slate-200 bg-white text-sm text-blue-700 shadow-sm">
            MK
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          aria-label="Contact Dr Ming Kong"
          className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:px-4"
        >
          <span className="hidden sm:inline">Contact</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
