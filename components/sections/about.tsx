import Image from "next/image"

import { Reveal } from "@/components/reveal"
import { placeholderSrc, site } from "@/lib/site"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-8 border-b border-border/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-10 md:px-10 md:py-28">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
              src={placeholderSrc(201, 900, 1125)}
              alt="占位：简介页肖像，建议替换为摄影师本人照片"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="flex flex-col justify-end md:col-span-6 md:col-start-7" delay={0.08}>
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
            About
          </p>
          <h2 className="font-heading mt-4 text-3xl tracking-tight md:text-4xl">
            {site.about.lead}
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            {site.about.body}
          </p>
          <dl className="mt-10 grid gap-6 border-t border-border/70 pt-8 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-muted-foreground">基于</dt>
              <dd className="mt-1 text-foreground">{site.location}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">主要题材</dt>
              <dd className="mt-1 text-foreground">人像 · 旅行 · 纪实</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
