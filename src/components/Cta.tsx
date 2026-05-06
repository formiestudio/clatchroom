import { siteContent } from "@/content/site";

const { cta } = siteContent;

export default function Cta() {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-cormorant font-light text-white text-4xl lg:text-5xl leading-tight mb-3">
              {cta.headline}
            </h2>
            <p className="text-zinc-400 text-sm font-light">{cta.sub}</p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-zinc-900 text-[11px] tracking-widest px-10 py-4 hover:bg-zinc-100 transition-colors font-light"
          >
            {cta.ctaLabel} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
