import { siteContent } from "@/content/site";

const { concept } = siteContent;

export default function Concept() {
  return (
    <section id="concept" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-widest text-zinc-400 mb-8 font-light">
              {concept.label}
            </p>
            <h2 className="text-3xl lg:text-4xl font-light leading-snug text-zinc-900 mb-8 whitespace-pre-line">
              {concept.headline}
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed mb-10 font-light max-w-md">
              {concept.body}
            </p>
            <a
              href="#space"
              className="inline-flex items-center gap-3 bg-zinc-900 text-white text-[11px] tracking-widest px-8 py-3.5 hover:bg-zinc-700 transition-colors font-light"
            >
              {concept.ctaLabel} <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square bg-zinc-200 rounded-sm" />
            <div className="aspect-square bg-zinc-300 rounded-sm mt-8" />
            <div className="aspect-square bg-zinc-300 rounded-sm -mt-8" />
            <div className="aspect-square bg-zinc-200 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
