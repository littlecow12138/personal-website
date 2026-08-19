import { Reveal } from "@/components/reveal"
import { pricing } from "@/lib/site"

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-8 border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Pricing
          </p>
          <h2 className="font-heading mt-4 text-3xl tracking-tight md:text-4xl">
            拍摄报价
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            价格表放在作品之后、联系之前，方便在看完风格后直接对照档期类型。最终报价会按场景、时长与差旅微调。
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border/80 border-y border-border/80">
          {pricing.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.06}>
              <div className="grid gap-6 py-8 md:grid-cols-12 md:items-start md:gap-8 md:py-10">
                <div className="md:col-span-3">
                  <h3 className="font-heading text-xl tracking-tight">
                    {tier.name}
                  </h3>
                </div>
                <div className="md:col-span-3">
                  <p className="text-2xl tracking-tight text-foreground">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.unit}
                  </p>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:col-span-6">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {tier.note ? (
                    <li className="pt-1 text-xs text-muted-foreground/80">
                      {tier.note}
                    </li>
                  ) : null}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
