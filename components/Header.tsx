"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname() || "";
  const isFa = pathname.startsWith("/fa");
  const englishBase = "/en";
  const otherLang = isFa ? "/en" : "/fa";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container headerInner">
        <Link href={isFa ? "/fa" : englishBase} className="brand" onClick={closeMenu}>
          Sara Mahmodi
        </Link>

        <button
          type="button"
          className="menuToggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav id="site-nav" className={`navShell${menuOpen ? " navShellOpen" : ""}`} aria-label="Main">
          <div className="nav">
            <Link className="navLink" href={englishBase} onClick={closeMenu}>
              Home
            </Link>
            <Link
              className="navLink"
              href="https://donepage.co"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Donepage
            </Link>
            <Link className="navLink" href={`${englishBase}/lumi`} onClick={closeMenu}>
              Lumi
            </Link>
            <Link className="navLink" href={`${englishBase}/work-with-me`} onClick={closeMenu}>
              Work With Me
            </Link>
            <Link className="navLink" href={`${englishBase}/about`} onClick={closeMenu}>
              About
            </Link>
            <Link className="navLink" href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>

          <div className="headerActions">
            <Link className="langToggle" href={otherLang} onClick={closeMenu}>
              {isFa ? "EN" : "FA"}
            </Link>
            <Link className="btn btnPrimary headerCta" href={`${englishBase}/work-with-me`} onClick={closeMenu}>
              Work With Me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
