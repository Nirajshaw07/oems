import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function IconCar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="text-primary">
      <path
        d="M3 13h18l-1.5-4.5A2 2 0 0 0 17.6 7H6.4a2 2 0 0 0-1.9 1.5L3 13Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" />
    </svg>
  )
}
function IconMatch() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="text-primary">
      <path
        d="M12 2v6M8 6l4 4 4-4M4 14a6 6 0 0 0 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="text-primary">
      <path
        d="M12 3l7 3v6a8 8 0 0 1-7 7 8 8 0 0 1-7-7V6l7-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const steps = [
  {
    title: "Request a Ride",
    description: "Enter your destination and pick the ride that fits your needs.",
    Icon: IconCar,
  },
  {
    title: "Get Matched with a Driver",
    description: "We’ll connect you with a nearby professional driver in minutes.",
    Icon: IconMatch,
  },
  {
    title: "Ride Safely",
    description: "Track your trip and arrive confidently with safety features built-in.",
    Icon: IconShield,
  },
]

export function HowItWorks() {
  return (
    <section id="driver" className="bg-background" aria-labelledby="hiw-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="hiw-title" className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          How It Works
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ title, description, Icon }) => (
            <Card key={title} className="rounded-xl border border-border bg-card shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  <Icon />
                </div>
                <CardTitle className="text-base text-foreground">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-foreground/80">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
