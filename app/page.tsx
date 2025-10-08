import { SiteHeader } from "@/components/oems/site-header"
import { Hero } from "@/components/oems/hero"
import { HowItWorks } from "@/components/oems/how-it-works"
import { WhyOEMS } from "@/components/oems/why-oems"
import { Testimonials } from "@/components/oems/testimonials"
import { CtaStrip } from "@/components/oems/cta-strip"
import { SiteFooter } from "@/components/oems/site-footer"

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="min-h-dvh">
        <Hero />
        <HowItWorks />
        <WhyOEMS />
        <Testimonials />
        <CtaStrip />
      </main>
      <SiteFooter />
    </>
  )
}
