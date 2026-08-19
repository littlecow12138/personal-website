import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"
import { HeroSection } from "@/components/sections/hero"
import { PricingSection } from "@/components/sections/pricing"
import { WorkSection } from "@/components/sections/work"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
