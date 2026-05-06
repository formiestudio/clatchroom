import Link from "next/link";
import { siteContent } from "@/content/site";

const { history } = siteContent;

export default function History() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[10px] tracking-widest text-zinc-400 mb-8 font-light">
            {history.label}
          </p>
          <h1 className="text-4xl lg:text-6xl font-cormorant font-light leading-tight text-zinc-900 mb-6 whitespace-pre-line">
            {history.headline}
          </h1>
          <p className="text-sm text-zinc-500 font-light tracking-wide">
            {history.sub}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-zinc-100" />
      </div>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative">
            {/* Vertical line - desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-100 -translate-x-1/2" />

            <div className="flex flex-col gap-0">
              {history.milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={milestone.year}
                    className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-16"
                  >
                    {/* Year dot - desktop */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-300 border-2 border-white ring-1 ring-zinc-200 z-10" />

                    {/* Content positioning */}
                    <div
                      className={`lg:text-right ${isEven ? "lg:order-1" : "lg:order-2"}`}
                    >
                      {isEven ? (
                        <TimelineCard milestone={milestone} align="right" />
                      ) : (
                        <div className="lg:block hidden" />
                      )}
                    </div>
                    <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      {isEven ? (
                        <div className="lg:block hidden" />
                      ) : (
                        <TimelineCard milestone={milestone} align="left" />
                      )}
                    </div>

                    {/* Mobile: always show */}
                    <div className="lg:hidden col-span-1">
                      <TimelineCard milestone={milestone} align="left" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] tracking-widest text-zinc-500 mb-10 font-light">
              {history.philosophy.label}
            </p>
            <h2 className="text-3xl lg:text-4xl font-cormorant font-light leading-snug text-white mb-8">
              {history.philosophy.headline}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              {history.philosophy.body}
            </p>
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 border border-zinc-900 text-zinc-900 text-[11px] tracking-widest px-10 py-4 hover:bg-zinc-900 hover:text-white transition-colors font-light"
          >
            ← BACK TO TOP
          </Link>
        </div>
      </section>
    </>
  );
}

type Milestone = (typeof siteContent.history.milestones)[number];

function TimelineCard({
  milestone,
  align,
}: {
  milestone: Milestone;
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "lg:pr-12" : "lg:pl-12"}>
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-cormorant text-5xl font-light text-zinc-200 leading-none">
          {milestone.year}
        </span>
        <span className="text-[10px] tracking-widest text-zinc-400 font-light">
          {milestone.label}
        </span>
      </div>
      <h3 className="text-base font-light text-zinc-900 mb-3 tracking-wide">
        {milestone.title}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed font-light">
        {milestone.body}
      </p>
    </div>
  );
}
