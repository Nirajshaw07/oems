import { Button } from "@/components/ui/button"

export function CtaStrip() {
  return (
    <section aria-labelledby="cta-title" className="border-y border-border bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-center text-primary-foreground md:flex-row md:text-left">
        <h3 id="cta-title" className="text-balance text-2xl font-semibold tracking-tight">
          Ready to ride? Book now.
        </h3>
        <Button className="rounded-md bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          Book a Ride
        </Button>
      </div>
    </section>
  )
}
