import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

const LANG_COOKIE = "lang";

async function pickLangFromHeaders(): Promise<"fa" | "en"> {
  const accept = (await headers()).get("accept-language") || "";
  return accept.toLowerCase().includes("fa") ? "fa" : "en";
}

export default async function Root() {
  const cookieLang = (await cookies()).get(LANG_COOKIE)?.value;
  const lang = cookieLang === "fa" || cookieLang === "en" ? cookieLang : await pickLangFromHeaders();
  redirect(`/${lang}`);
}
