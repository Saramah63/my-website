import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

const LANG_COOKIE = "lang";

function pickLangFromHeaders(): "fa" | "en" {
  const accept = headers().get("accept-language") || "";
  return accept.toLowerCase().includes("fa") ? "fa" : "en";
}

export default function Root() {
  const cookieLang = cookies().get(LANG_COOKIE)?.value;
  const lang = cookieLang === "fa" || cookieLang === "en" ? cookieLang : pickLangFromHeaders();
  redirect(`/${lang}`);
}
