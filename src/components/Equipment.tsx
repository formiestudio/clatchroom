import { siteContent } from "@/content/site";

const { equipment } = siteContent;

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-widest text-zinc-400 mb-8 font-light">
              {equipment.label}
            </p>
            <h2 className="text-3xl lg:text-4xl font-light leading-snug text-zinc-900 mb-10 whitespace-pre-line">
              {equipment.headline}
            </h2>

            <ul className="space-y-4 mb-10">
              {equipment.items.map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm text-zinc-700 font-light">
                  <span className="w-8 h-px bg-zinc-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {equipment.ctaLabel && (
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-zinc-900 text-white text-[11px] tracking-widest px-8 py-3.5 hover:bg-zinc-700 transition-colors font-light"
              >
                {equipment.ctaLabel} <span>→</span>
              </a>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square bg-zinc-200 rounded-sm" />
            <div className="aspect-square bg-zinc-300 rounded-sm" />
            <div className="aspect-square bg-zinc-300 rounded-sm" />
            <div className="aspect-square bg-zinc-200 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
