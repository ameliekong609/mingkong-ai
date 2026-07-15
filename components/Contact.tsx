import { Code2, Link2, Mail } from "lucide-react";
import { contacts } from "@/lib/content";

const icons = {
  Email: Mail,
  LinkedIn: Link2,
  GitHub: Code2,
};

export function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-blue-300">Contact</p>
          <p className="mt-3 text-xl font-semibold leading-7">
            The future of enterprise AI is trustworthy digital workers.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {contacts.map((contact) => {
            const Icon = icons[contact.label as keyof typeof icons];

            return (
              <a
                key={contact.href}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold transition hover:border-blue-300/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
              >
                <Icon aria-hidden="true" className="h-4 w-4 text-blue-200" />
                <span>{contact.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
