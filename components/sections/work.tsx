"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"

import { Reveal } from "@/components/reveal"
import { placeholderSrc, works, type WorkItem } from "@/lib/site"
import { cn } from "@/lib/utils"

function spanClass(span: WorkItem["span"]) {
  switch (span) {
    case "tall":
      return "md:row-span-2 aspect-[3/4] md:aspect-auto md:min-h-[28rem]"
    case "wide":
      return "md:col-span-2 aspect-[16/10]"
    default:
      return "aspect-square"
  }
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const reduce = useReducedMotion()
  const dims =
    item.span === "wide"
      ? { w: 1600, h: 1000 }
      : item.span === "tall"
        ? { w: 900, h: 1200 }
        : { w: 1000, h: 1000 }

  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)} className={cn(spanClass(item.span))}>
      <a
        href="#contact"
        className="group relative block h-full overflow-hidden bg-muted"
      >
        <motion.div
          className="absolute inset-0"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={placeholderSrc(item.seed, dims.w, dims.h)}
            alt={`占位作品：${item.title}（${item.category}）`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 pt-16 text-background opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
          <p className="text-sm font-medium">{item.title}</p>
          <p className="text-xs tracking-wide text-background/75">
            {item.category}
          </p>
        </div>
      </a>
    </Reveal>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-8 border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Selected work
          </p>
          <h2 className="font-heading mt-4 max-w-lg text-3xl tracking-tight md:text-4xl">
            精选作品
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            近期部分画面。完整项目集可来信索取。
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {works.map((item, index) => (
            <WorkCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
