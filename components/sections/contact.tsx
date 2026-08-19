import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-8">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                Contact
              </p>
              <h2 className="font-heading mt-4 text-3xl tracking-tight md:text-5xl">
                预约或询价
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                说明拍摄日期、地点与用途即可。通常 1–2 个工作日内回复。
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a
                href={`mailto:${site.email}`}
                className="font-heading text-xl tracking-tight text-foreground underline-offset-4 transition-opacity hover:opacity-70 md:text-2xl"
              >
                {site.email}
              </a>
              <div className="mt-6 md:flex md:justify-end">
                <Button render={<a href={`mailto:${site.email}`} />} size="lg">
                  发送邮件
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
