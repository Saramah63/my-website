"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LangHtmlSync() {
  const pathname = usePathname() || "";

  useEffect(() => {
    const isFa = pathname.startsWith("/fa");
    const lang = isFa ? "fa" : "en";
    const dir = isFa ? "rtl" : "ltr";

    // update <html> attributes after hydration
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [pathname]);

  return null;
}
