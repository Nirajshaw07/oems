"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="OEMS home">
          <Image src="/placeholder-logo.svg" alt="OEMS logo" width={28} height={28} className="rounded" />
          <span className="text-lg font-semibold tracking-tight text-foreground">OEMS</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-foreground/80 hover:text-foreground">
            Home
          </Link>
          <a href="#book" className="text-sm text-foreground/80 hover:text-foreground">
            Book a Ride
          </a>
          <a href="#driver" className="text-sm text-foreground/80 hover:text-foreground">
            Become a Driver
          </a>
          <a href="#contact" className="text-sm text-foreground/80 hover:text-foreground">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="default"
            className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild variant="secondary" className="hidden rounded-md md:inline-flex">
            <a href="#book">Book a Ride</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
