import Image from "next/image";
import { Mic2 } from "lucide-react";
import { Section } from "@/components/Section";
import { speakingItems } from "@/lib/content";

export function Speaking() {
  return (
    <Section
      id="speaking"
      eyebrow="Speaking"
      title="Showcasing production agentic AI."
      intro="Selected external showcases where controlled enterprise AI work has been shown through real customer delivery evidence."
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="relative aspect-[16/10]">
            <Image
              src="/IMG_2993.JPG"
              alt="Ming demonstrating an enterprise AI system in a PwC booth setting."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
          <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-600">
            Live enterprise AI demo context, used here as evidence of customer-facing technical communication.
          </figcaption>
        </figure>

        <div className="grid gap-4">
          {speakingItems.map((item) => (
            <article
              key={item.event}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-blue-700">
                  <Mic2 aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-blue-700">{item.event}</p>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
