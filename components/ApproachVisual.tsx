import { WorkflowComparison } from "@/components/WorkflowComparison";

export function ApproachVisual() {
  return (
    <section className="border-t border-slate-200 bg-white px-6 py-10 lg:hidden">
      <div className="mx-auto max-w-7xl">
        <WorkflowComparison />
      </div>
    </section>
  );
}
