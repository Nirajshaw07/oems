"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  name: string
  role: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Jordan P.",
    role: "Frequent Rider",
    quote: "OEMS is fast and reliable. My go-to for getting across town on busy days.",
    image: "/public/placeholder-user.jpg",
  },
  {
    name: "Avery L.",
    role: "Night Owl",
    quote: "Feels safe and easy to track. The drivers are consistently professional.",
    image: "/public/placeholder-user.jpg",
  },
  {
    name: "Sam K.",
    role: "Eco Rider",
    quote: "Love the eco-friendly options. Smooth rides and clean cars every time.",
    image: "/public/placeholder-user.jpg",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-background" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2
          id="testimonials-title"
          className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          What riders say
        </h2>

        <div className="relative mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <Card key={t.name} className="min-w-full rounded-xl border border-border bg-card shadow-sm">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:items-center sm:text-left">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
                    <Image src="/placeholder-user.jpg" alt={`Photo of ${t.name}`} fill sizes="64px" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-pretty text-base leading-relaxed text-foreground/90">“{t.quote}”</p>
                    <p className="text-sm text-foreground/70">
                      <span className="font-medium text-foreground">{t.name}</span> • {t.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-secondary"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
