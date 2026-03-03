import { redirect } from "next/navigation";

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
const LANG_COOKIE = "lang";

async function pickLangFromHeaders(): Promise<"fa" | "en"> {
  const accept = (await headers()).get("accept-language") || "";
  return accept.toLowerCase().includes("fa") ? "fa" : "en";
}

export default async function Root() {
  const cookieLang = (await cookies()).get(LANG_COOKIE)?.value;
  const lang = cookieLang === "fa" || cookieLang === "en" ? cookieLang : await pickLangFromHeaders();
  redirect(`/${lang}`);
=======
export default function Root() {
  redirect("/fa");
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
=======
export default function Root() {
  redirect("/en");
>>>>>>> theirs
=======
export default function Root() {
<<<<<<< ours
  redirect("/en");
>>>>>>> theirs
=======
  redirect("/fa");
>>>>>>> theirs
}
