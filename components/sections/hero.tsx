"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"

import { Button } from "@/components/ui/button"
import { placeholderSrc, site } from "@/lib/site"

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={placeholderSrc(1084, 2400, 1600)}
            alt="占位：首页主视觉，建议替换为代表性作品横图"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28 md:px-10 md:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="max-w-xl text-background"
        >
          <p className="font-heading mb-4 text-xs tracking-[0.28em] uppercase opacity-90">
            {site.name} · {site.role}
          </p>
          <h1 className="font-heading text-4xl leading-[1.12] tracking-tight text-balance sm:text-5xl md:text-6xl">
            {site.nameEn}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-background/85 md:text-lg">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              render={<a href="#work" />}
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              查看作品
            </Button>
            <Button
              render={<a href={`mailto:${site.email}`} />}
              variant="outline"
              size="lg"
              className="border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              预约拍摄
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
