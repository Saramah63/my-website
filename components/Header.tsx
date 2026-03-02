"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialIcons from "@/components/SocialIcons";

export default function Header() {
  const pathname = usePathname() || "";
  const isFa = pathname.startsWith("/fa");
  const base = isFa ? "/fa" : "/en";
  const otherLang = isFa ? "/en" : "/fa";

  return (
    <header className="header">
      <div className="container headerInner">
        <Link href={base} className="brand">
          Sara Mahmodi
        </Link>

        <nav className="nav" aria-label="Main">
          <Link className="navLink" href={base}>
            {isFa ? "خانه" : "Home"}
          </Link>
          <Link className="navLink" href={`${base}/work-with-me`}>
            {isFa ? "با من کار کنید" : "Work With Me"}
          </Link>
          <Link className="navLink" href={`${base}/about`}>
            {isFa ? "درباره" : "About"}
          </Link>
          <Link className="navLink" href={`${base}/apply`}>
            {isFa ? "درخواست" : "Apply"}
          </Link>
        </nav>

        <div className="headerActions">
          <SocialIcons />
          <Link className="langToggle" href={otherLang}>
            {isFa ? "EN" : "FA"}
          </Link>
          <Link className="btn btnPrimary" href={`${base}/apply`}>
            {isFa ? "رزرو جلسهٔ استراتژیک" : "Book a Strategic Session"}
          </Link>
        </div>
      </div>
    </header>
  );
}
