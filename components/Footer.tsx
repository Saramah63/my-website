"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Section from "@/components/Section";

const SOCIAL = {
  instagram: "https://www.instagram.com/mindshift_for_lifeshift/",
  linkedin: "https://www.linkedin.com/in/saramahmodi/",
  whatsapp: "https://wa.me/358417539326",
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <Section eyebrow="" title={t.common.bookFreeCall} intro={t.footer.brand}>
        <div className="rounded-2xl border border-slate-200 p-6">
          <div className="flex flex-wrap gap-3">
            <a
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              {t.common.whatsapp}: +358 41 753 9326
            </a>

            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Instagram
            </a>

            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-slate-900">Mindshift for Lifeshift</div>
            <p className="mt-3 text-slate-600">{t.footer.brand}</p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a className="text-slate-600 hover:text-slate-900" href={SOCIAL.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="text-slate-600 hover:text-slate-900" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="text-slate-600 hover:text-slate-900" href={SOCIAL.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="font-semibold text-slate-900">{t.footer.quickLinks}</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a className="hover:text-slate-900" href="#about">{t.footer.links.about}</a></li>
              <li><a className="hover:text-slate-900" href="#how-it-works">{t.footer.links.how}</a></li>
              <li><a className="hover:text-slate-900" href="#pricing">{t.footer.links.pricing}</a></li>
              <li><a className="hover:text-slate-900" href="#agreement">{t.footer.links.agreement}</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-slate-900">{t.footer.services}</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              {t.footer.servicesList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <div>{t.footer.copyright}</div>
            <div className="flex flex-wrap gap-4">
              {t.footer.legal.map((x) => (
                <span key={x} className="hover:text-slate-900">{x}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
