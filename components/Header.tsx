"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isLanding = pathname === "/en" || pathname === "/fa";

  return (
    <header className="header">
      <div className="container headerInner">
        <Link href="/en" className="brand">
          Donepage
        </Link>

        <nav className="nav" aria-label="Main">
          {isLanding ? (
            <>
              <a className="navLink" href="#how-it-works">
                How it works
              </a>
              <a className="navLink" href="#pricing">
                Pricing
              </a>
            </>
          ) : (
            <>
              <Link className="navLink" href="/en#how-it-works">
                How it works
              </Link>
              <Link className="navLink" href="/en#pricing">
                Pricing
              </Link>
            </>
          )}
          <Link className="navLink" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="headerRight">
          <Link className="button buttonPrimary" href="/start">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
