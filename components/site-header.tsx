import Link from "next/link"

import { site } from "@/lib/site"

const links = [
  { href: "#about", label: "简介" },
  { href: "#work", label: "作品" },
  { href: "#pricing", label: "定价" },
  { href: "#contact", label: "联系" },
] as const

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="#top"
          className="font-heading text-sm tracking-[0.18em] text-background uppercase mix-blend-difference"
        >
          {site.nameEn}
        </Link>
        <nav className="flex items-center gap-5 text-xs tracking-wide text-background/90 mix-blend-difference md:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
