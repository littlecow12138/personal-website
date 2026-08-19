import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-heading tracking-[0.14em] text-foreground uppercase">
          {site.nameEn}
        </p>
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="text-foreground underline-offset-4 transition-colors hover:underline"
        >
          {site.email}
        </a>
      </div>
    </footer>
  )
}
