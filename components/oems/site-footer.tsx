import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground">About</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="text-sm font-semibold text-foreground">Support</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Social</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Twitter/X
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/80 hover:text-foreground">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-foreground/70">
          © {new Date().getFullYear()} OEMS (On-demand Easy Mobility Services). All rights reserved.
        </div>
      </div>
    </footer>
  )
}
