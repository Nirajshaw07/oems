import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="book" className="border-b border-border bg-card" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <h1 id="hero-title" className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Your Ride, On Demand
          </h1>
          <p className="text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
            OEMS gets you where you need to go—fast, safe, and comfortably. Tap a button, get a ride.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="rounded-md bg-primary px-6 text-primary-foreground hover:bg-primary/90">
              Book a Ride
            </Button>
            <Button variant="secondary" className="rounded-md">
              Become a Driver
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <img
            src="/city-skyline-with-car-and-map.jpg"
            alt="Illustration of a car navigating a city map"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
