import { workflowComparison } from "@/lib/content";

function FlowColumn({
  title,
  description,
  steps,
  variant,
}: {
  title: string;
  description: string;
  steps: string[];
  variant: "workflow" | "worker";
}) {
  const isWorker = variant === "worker";

  return (
    <div
      className={`min-w-0 rounded-lg border p-4 ${
        isWorker
          ? "border-blue-200 bg-blue-50/60"
          : "border-slate-200 bg-white/85"
      }`}
    >
      <div className="mb-5">
        <p
          className={`text-sm font-semibold ${
            isWorker ? "text-blue-800" : "text-slate-950"
          }`}
        >
          {title}
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      <div className="grid gap-2">
        {steps.map((step, index) => (
          <div key={step}>
            <div
              className={`rounded-md border px-3 py-2 text-sm font-medium ${
                isWorker
                  ? "border-blue-200 bg-white text-slate-950"
                  : "border-slate-200 bg-slate-50 text-slate-700"
              }`}
            >
              {step}
            </div>
            {index < steps.length - 1 ? (
              <div
                className={`mx-auto h-3 w-px ${
                  isWorker ? "bg-blue-300" : "bg-slate-300"
                }`}
                aria-hidden="true"
              />
            ) : null}
          </div>
        ))}
      </div>
      {isWorker ? (
        <div className="mt-3 rounded-md border border-blue-200 bg-white px-3 py-2 text-xs font-medium text-blue-800">
          Review loop: investigate, correct, then release only when controls pass.
        </div>
      ) : null}
    </div>
  );
}

export function WorkflowComparison() {
  return (
    <div className="min-w-0 rounded-lg border border-slate-200 bg-white/85 p-4 shadow-2xl shadow-slate-200/60 backdrop-blur">
      <div className="mb-3 border-b border-slate-200 pb-3">
        <p className="text-sm font-semibold text-slate-950">
          How I separate workflows from digital workers
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Workflows still matter. I use controlled digital workers when the work
          must investigate, revisit and prove its reasoning.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <FlowColumn
          title={workflowComparison.workflow.title}
          description={workflowComparison.workflow.description}
          steps={workflowComparison.workflow.steps}
          variant="workflow"
        />
        <FlowColumn
          title={workflowComparison.worker.title}
          description={workflowComparison.worker.description}
          steps={workflowComparison.worker.steps}
          variant="worker"
        />
      </div>
    </div>
  );
}
