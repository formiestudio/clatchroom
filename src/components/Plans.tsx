import { siteContent } from "@/content/site";

const { plans } = siteContent;

export default function Plans() {
  return (
    <section id="plan" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-widest text-zinc-400 mb-4 font-light">
            {plans.label}
          </p>
          <h2 className="text-3xl lg:text-4xl font-light leading-snug text-zinc-900 whitespace-pre-line">
            {plans.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.items.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col bg-white ${plan.badge ? "ring-1 ring-zinc-900" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-px left-0 right-0 flex justify-center">
                  <span className="bg-zinc-900 text-white text-[9px] tracking-widest px-3 py-1 font-light">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="aspect-video bg-zinc-200" />

              <div className="p-6 flex flex-col flex-1">
                <p className="text-[9px] tracking-widest text-zinc-400 mb-1 font-light">
                  {plan.label}
                </p>
                <p className="text-sm text-zinc-700 mb-4 font-light">{plan.labelJa}</p>

                <div className="mb-4 pb-4 border-b border-zinc-100">
                  <span className="font-cormorant text-3xl font-light text-zinc-900">
                    {plan.price}
                  </span>
                  <span className="text-xs text-zinc-400 ml-1 font-light">/{plan.unit}</span>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-light">
                  {plan.desc}
                </p>

                <div className="text-[10px] text-zinc-400 mb-1 font-light">{plan.minTime}</div>
                {plan.capacity && (
                  <div className="text-[10px] text-zinc-400 mb-4 font-light">
                    定員 {plan.capacity}
                  </div>
                )}

                <div className="mt-auto">
                  <div className="mb-2">
                    <p className="text-[9px] tracking-widest text-zinc-400 mb-1.5 font-light">
                      AREA
                    </p>
                    {plan.areas.map((area) => (
                      <p key={area} className="text-xs text-zinc-600 font-light">
                        {area}
                      </p>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-[9px] tracking-widest text-zinc-400 mb-1.5 mt-3 font-light">
                      INCLUDES
                    </p>
                    {plan.equipment.map((item) => (
                      <p key={item} className="text-xs text-zinc-600 font-light flex items-center gap-1.5">
                        <span className="text-zinc-300">—</span> {item}
                      </p>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="block text-center bg-zinc-900 text-white text-[10px] tracking-widest py-3 hover:bg-zinc-700 transition-colors font-light"
                  >
                    {plans.ctaLabel} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-zinc-400 mt-8 font-light text-center">{plans.note}</p>
      </div>
    </section>
  );
}
