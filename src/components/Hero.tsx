import { siteContent } from "@/content/site";

const { hero } = siteContent;

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-zinc-800" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col justify-center h-full">
        <div className="max-w-4xl">
          <p className="text-white/60 text-xs tracking-widest mb-8 font-light">
            {hero.subJa}
          </p>
          <h1 className="font-cormorant font-light text-white leading-none tracking-tight text-7xl sm:text-8xl lg:text-9xl whitespace-pre-line">
            {hero.headline}
          </h1>
        </div>
      </div>

      <div className="absolute bottom-10 right-8 z-10 text-right">
        <p className="text-white/50 text-xs leading-relaxed whitespace-pre-line font-light">
          {hero.tagline}
        </p>
      </div>

      <div className="absolute bottom-10 left-8 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-white/40" />
          <span className="text-white/40 text-[10px] tracking-widest font-light">SCROLL</span>
        </div>
      </div>
    </section>
  );
}
