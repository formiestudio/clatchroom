import { siteContent } from "@/content/site";

const { access } = siteContent;

export default function Access() {
  return (
    <section id="access" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[10px] tracking-widest text-zinc-400 mb-8 font-light">
              {access.label}
            </p>
            <h2 className="text-3xl lg:text-4xl font-light leading-snug text-zinc-900 mb-10">
              {access.headline}
            </h2>

            <div className="mb-8">
              <p className="text-xs text-zinc-400 font-light mb-2">{access.postalCode}</p>
              {access.addressLines.map((line) => (
                <p key={line} className="text-sm text-zinc-700 font-light leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            <div className="mb-10">
              {access.transitLines.map((line) => (
                <div key={line} className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-px bg-zinc-300 flex-shrink-0" />
                  <p className="text-sm text-zinc-600 font-light">{line}</p>
                </div>
              ))}
            </div>

            <a
              href={access.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-zinc-900 text-white text-[11px] tracking-widest px-8 py-3.5 hover:bg-zinc-700 transition-colors font-light"
            >
              {access.mapCtaLabel} <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 aspect-video bg-zinc-200 rounded-sm" />
            <div className="aspect-square bg-zinc-300 rounded-sm" />
            <div className="aspect-square bg-zinc-200 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
