import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden className="text-primary">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
    </svg>
  )
}
function IconBadge() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden className="text-primary">
      <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.5L12 17l-5.6 2.7 1.1-6.5L3 8.9 9 8l3-6z" fill="currentColor" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden className="text-primary">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
function IconLeaf() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden className="text-primary">
      <path d="M20 3s-7 0-10 3-3 10-3 10 7 0 10-3 3-10 3-10z" fill="currentColor" />
      <path d="M9 15l6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const features = [
  { title: "Fast pickups", desc: "Get going in minutes with optimized matching.", Icon: IconBolt },
  { title: "Professional drivers", desc: "Experienced drivers for a reliable ride.", Icon: IconBadge },
  { title: "24/7 support", desc: "Help is available whenever you need it.", Icon: IconClock },
  { title: "Eco-friendly options", desc: "Choose greener rides to reduce emissions.", Icon: IconLeaf },
]

export function WhyOEMS() {
  return (
    <section className="border-y border-border bg-card" aria-labelledby="why-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="why-title" className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Why OEMS?
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, Icon }) => (
            <Card key={title} className="rounded-xl border border-border bg-card shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary">
                  <Icon />
                </div>
                <CardTitle className="text-base text-foreground">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-foreground/80">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
