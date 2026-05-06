import { siteContent } from "@/content/site";

const { features } = siteContent;

export default function Features() {
  return (
    <section className="bg-zinc-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-700">
          {features.map((feature) => (
            <div key={feature.title} className="py-12 px-8 first:pl-0 last:pr-0">
              <div className="text-white/40 text-2xl mb-6">{feature.icon}</div>
              <h3 className="text-white text-sm font-light tracking-wider mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
