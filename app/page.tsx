import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { SelectedProjects } from "@/components/SelectedProjects";
import { SiteHeader } from "@/components/SiteHeader";
import { Speaking } from "@/components/Speaking";
import { ThesisVisual } from "@/components/ThesisVisual";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ThesisVisual />
        <About />
        <SelectedProjects />
        <Principles />
        <Speaking />
        <Contact />
      </main>
    </>
  );
}
