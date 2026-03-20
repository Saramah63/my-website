import Link from "next/link";
import type { Metadata } from "next";
import TypingHeroHeadline from "@/components/TypingHeroHeadline";
import EmailContactActions from "@/components/EmailContactActions";

export const metadata: Metadata = {
  title: "Sara Mahmodi | Product Designer & Founder",
  description:
    "Product-focused designer and founder building structured digital products, UX systems, and human-centered digital experiences.",
  openGraph: {
    title: "Sara Mahmodi | Product Designer & Founder",
    description:
      "Product-focused designer and founder building structured digital products, UX systems, and human-centered digital experiences.",
    type: "website",
  },
};

const trustPillars = [
  "Product strategy",
  "UX systems thinking",
  "Founder-led execution",
  "Real-world iteration",
];

const selectedWorkItems = [
  {
    name: "Donepage",
    role: "Founder / product structure / conversion UX",
    description:
      "A structured system for building conversion-focused landing pages with clarity and speed.",
    href: "/en/projects/donepage",
  },
  {
    name: "Lumi",
    role: "Concept direction / UX systems / early-stage product design",
    description:
      "An early-stage interactive concept focused on emotional awareness in children.",
    href: "/en/projects/lumi",
  },
  {
    name: "FamSync",
    role: "UX-driven product exploration / system design",
    description:
      "A UX-driven approach to simplifying family coordination and daily routines.",
    href: "/en/projects/famsync",
  },
];

const productThinkingItems = [
  "I define real user problems before designing solutions",
  "I prioritize clarity over feature overload",
  "I design systems, not isolated screens",
  "I balance vision with execution",
  "I iterate through real feedback, not assumptions",
];

const donepageBullets = [
  "structured messaging",
  "faster launch path",
  "conversion-focused page foundation",
];

const workLanes = [
  {
    title: "For teams and companies",
    emphasis: "B2B / product lane",
    items: [
      "Product thinking",
      "UX strategy",
      "early-stage product structuring",
      "clarity for messy product and service experiences",
    ],
    cta: "Work with me",
  },
  {
    title: "For individuals",
    emphasis: "Selective support",
    items: [
      "structured reinvention",
      "clarity and execution support",
      "personal systems and next-step strategy",
    ],
    cta: "For individuals",
  },
];

function PersianPage() {
  return (
    <main className="founderHome">
      <section className="founderHero">
        <div className="container founderHeroShell">
          <div className="founderHeroCopy">
            <p className="founderKicker">طراح محصول · بنیان‌گذار · معمار سیستم‌های انسانی</p>
            <h1 className="founderDisplay founderDisplayFa">
              من سیستم‌های دیجیتال ساختارمند و محصولات انسان‌محور طراحی می‌کنم.
            </h1>
            <p className="founderLead">
              ابزارها، محصولات و تجربه‌هایی می‌سازم که پیچیدگی را به وضوح، اقدام و پیشرفت واقعی
              تبدیل می‌کنند.
            </p>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="#selected-work">
                مشاهده نمونه‌کارها
              </Link>
              <Link className="btn founderButton founderButtonGhost" href="/contact">
                آماده همکاری (Product / UX)
              </Link>
              <a
                className="founderTextLink"
                href="https://donepage.co"
                target="_blank"
                rel="noreferrer"
              >
                مشاهده Donepage →
              </a>
            </div>
          </div>
          <div className="founderHeroVisual" aria-hidden="true" />
        </div>
      </section>

      <section className="founderSection founderSectionTight">
        <div className="container">
          <div className="founderTrustStrip founderTrustBand">
            {[
              "استراتژی محصول",
              "تفکر سیستمی در UX",
              "اجرا از دید بنیان‌گذار",
              "تجربه واقعی",
            ].map((item) => (
              <span key={item} className="founderTrustChip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" className="founderSection">
        <div className="container founderSectionShell">
          <div className="founderSectionHeading">
            <p className="founderKicker">نمونه‌کارها</p>
            <h2 className="founderHeading">نمونه‌کارهای منتخب</h2>
          </div>
          <div className="founderBuildGrid">
            {[
              {
                name: "Donepage",
                description:
                  "سیستمی ساختارمند برای ساخت لندینگ‌پیج‌های حرفه‌ای و تبدیل‌محور، سریع و بدون پیچیدگی.",
                href: "/en/projects/donepage",
              },
              {
                name: "Lumi",
                description: "مفهوم محصولی برای توسعه آگاهی هیجانی کودکان.",
                href: "/en/projects/lumi",
              },
              {
                name: "FamSync",
                description: "راهکاری برای ساده‌سازی هماهنگی‌های روزمره خانواده.",
                href: "/en/projects/famsync",
              },
            ].map((item, index) => (
              <Link
                key={item.name}
                className={`founderPanel founderBuildCard founderAnimatedItem${index === 0 ? " founderBuildCardFeatured" : ""}`}
                href={item.href}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="founderBuildTop">
                  <h3 className="founderCardTitle">{item.name}</h3>
                </div>
                <p className="founderBody">{item.description}</p>
                <span className="founderInlineLink">مشاهده جزئیات →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature founderFeatureProduct">
          <div className="founderFeatureIntro">
            <p className="founderKicker">طرز فکر محصولی</p>
            <h2 className="founderHeading">چطور به محصول فکر می‌کنم</h2>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderList">
              {[
                "قبل از طراحی، مسئله واقعی را تعریف می‌کنم",
                "وضوح را به پیچیدگی ترجیح می‌دهم",
                "سیستم طراحی می‌کنم، نه فقط صفحه",
                "اجرا به اندازه ایده مهم است",
                "با بازخورد واقعی پیش می‌روم",
              ].map((item, index) => (
                <div
                  key={item}
                  className="founderListItem founderAnimatedItem founderAnimatedLine founderThinkingRow"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">محصول ساخته‌شده</p>
            <h2 className="founderHeading">محصول ساخته‌شده: Donepage</h2>
            <p className="founderBody">
              Donepage کمک می‌کند سریع‌تر و با وضوح بیشتر لندینگ‌پیج حرفه‌ای بسازید.
            </p>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderList founderListCompact">
              {[
                "ساختار پیام شفاف",
                "مسیر سریع‌تر برای لانچ",
                "طراحی مبتنی بر تبدیل",
              ].map((item) => (
                <div key={item} className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">{item}</p>
                </div>
              ))}
            </div>
            <div className="founderHeroActions">
              <a className="btn btnPrimary founderButton" href="https://donepage.co" target="_blank" rel="noreferrer">
                مشاهده Donepage
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderSectionShell">
          <div>
            <p className="founderKicker">همکاری با من</p>
            <h2 className="founderHeading">همکاری با من</h2>
          </div>
          <div className="serviceOfferGrid">
            <div className="founderPanel serviceOfferCard serviceOfferCardFeatured">
              <p className="founderCardLabel">برای تیم‌ها و شرکت‌ها</p>
              <h3 className="serviceOfferTitle">همکاری محصول‌محور</h3>
              <div className="founderList founderListCompact">
                {[
                  "شفاف‌سازی مسیر محصول",
                  "طراحی ساختار UX",
                  "تعریف محصول در مراحل اولیه",
                  "ساده‌سازی تجربه‌های پیچیده",
                ].map((item) => (
                  <div key={item} className="founderListItem">
                    <span className="founderListMark" aria-hidden="true" />
                    <p className="founderBody">{item}</p>
                  </div>
                ))}
              </div>
              <div className="serviceOfferActions">
                <Link className="btn btnPrimary founderButton" href="/en/work-with-me">
                  همکاری برای تیم‌ها
                </Link>
              </div>
            </div>

            <div className="founderPanel serviceOfferCard">
              <p className="founderCardLabel">برای افراد</p>
              <h3 className="serviceOfferTitle">حمایت ساختارمند</h3>
              <div className="founderList founderListCompact">
                {[
                  "بازطراحی مسیر",
                  "وضوح",
                  "اقدام",
                ].map((item) => (
                  <div key={item} className="founderListItem">
                    <span className="founderListMark" aria-hidden="true" />
                    <p className="founderBody">{item}</p>
                  </div>
                ))}
              </div>
              <div className="serviceOfferActions">
                <Link className="btn founderButton founderButtonGhost" href="/fa/apply">
                  درخواست همکاری
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderSplit">
          <div>
            <p className="founderKicker">درباره من</p>
            <h2 className="founderHeading">درباره من</h2>
          </div>
          <div className="founderReadable founderReadableNarrow">
            <p className="founderBody">
              تمرکز من تبدیل ابهام به ساختار و پیشرفت واقعی است — چه برای افراد، چه برای محصولات.
            </p>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderFinalBand">
          <div className="founderFeatureIntro founderFinalBandIntro">
            <p className="founderKicker">دعوت نهایی</p>
            <h2 className="founderHeading">
              اگر در حال ساخت چیزی هستید که به وضوح، ساختار و اجرا نیاز دارد — با هم صحبت کنیم.
            </h2>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="#selected-work">
                مشاهده نمونه‌کارها
              </Link>
              <Link className="btn founderButton founderButtonGhost" href="/contact">
                تماس
              </Link>
              <a className="founderTextLink founderTextLinkOnDark" href="https://donepage.co" target="_blank" rel="noreferrer">
                مشاهده Donepage →
              </a>
            </div>
            <EmailContactActions
              lang="fa"
              prefix="برای ارتباط مستقیم و سریع‌تر:"
              className="founderSupportLine emailContactInline"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang === "fa") {
    return <PersianPage />;
  }

  return (
    <main className="founderHome">
      <section className="founderHero">
        <div className="container founderHeroShell">
          <div className="founderHeroCopy">
            <p className="founderKicker">Product-focused designer · Founder · Systems thinker</p>
            <TypingHeroHeadline />
            <p className="founderLead">
              I design tools, products, and strategic experiences that turn complexity into clarity,
              action, and real progress.
            </p>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/work">
                View My Work
              </Link>
              <Link className="btn founderButton founderButtonGhost" href="/contact">
                Open to Product / UX roles
              </Link>
              <Link className="founderTextLink" href="/donepage">
                Explore Donepage →
              </Link>
            </div>
          </div>
          <div className="founderHeroVisual" aria-hidden="true" />
        </div>
      </section>

      <section className="founderSection founderSectionTight">
        <div className="container">
          <div className="founderTrustStrip founderTrustBand">
            {trustPillars.map((item) => (
              <span key={item} className="founderTrustChip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" className="founderSection">
        <div className="container founderSectionShell">
          <div className="founderSectionHeading">
            <p className="founderKicker">Selected Work</p>
            <h2 className="founderHeading">Selected Work</h2>
          </div>
          <div className="founderBuildGrid">
            {selectedWorkItems.map((item, index) => (
                <Link
                  key={item.name}
                  className={`founderPanel founderBuildCard founderAnimatedItem${index === 0 ? " founderBuildCardFeatured" : ""}`}
                  href={item.href}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="founderBuildTop">
                    <h3 className="founderCardTitle">{item.name}</h3>
                    <p className="founderCardMeta">{item.role}</p>
                  </div>
                  <p className="founderBody">{item.description}</p>
                  <span className="founderInlineLink">View Details →</span>
                </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature founderFeatureProduct">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Product Thinking</p>
            <h2 className="founderHeading">How I think as a product builder</h2>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderList">
              {productThinkingItems.map((item, index) => (
                <div
                  key={item}
                  className="founderListItem founderAnimatedItem founderAnimatedLine founderThinkingRow"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Built Product</p>
            <h2 className="founderHeading">Built Product: Donepage</h2>
            <p className="founderBody">
              Donepage helps founders and service providers launch structured, conversion-ready landing
              pages faster and with less confusion.
            </p>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderList founderListCompact">
              {donepageBullets.map((item) => (
                <div key={item} className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">{item}</p>
                </div>
              ))}
            </div>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/donepage">Visit Donepage →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderSectionShell">
          <div>
            <p className="founderKicker">Work With Me</p>
            <h2 className="founderHeading">Work With Me</h2>
          </div>
          <div className="serviceOfferGrid">
            {workLanes.map((lane, index) => (
              <div
                key={lane.title}
                className={`founderPanel serviceOfferCard ${index === 0 ? "serviceOfferCardFeatured" : ""}`}
              >
                <p className="founderCardLabel">{lane.emphasis}</p>
                <h3 className="serviceOfferTitle">{lane.title}</h3>
                <div className="founderList founderListCompact">
                  {lane.items.map((item) => (
                    <div key={item} className="founderListItem">
                      <span className="founderListMark" aria-hidden="true" />
                      <p className="founderBody">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="serviceOfferActions">
                  <Link className={`btn founderButton ${index === 0 ? "btnPrimary" : "founderButtonGhost"}`} href="/en/work-with-me">
                    {lane.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderSplit">
          <div>
            <p className="founderKicker">About / Philosophy</p>
            <h2 className="founderHeading">Where product thinking and human complexity meet.</h2>
          </div>
          <div className="founderReadable founderReadableNarrow">
            <p className="founderBody">
              I work at the intersection of product thinking, human behavior, and digital systems.
            </p>
            <p className="founderBody">
              My focus is simple: turning ambiguity into structured, usable progress — for both people
              and products.
            </p>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderFinalBand">
          <div className="founderFeatureIntro founderFinalBandIntro">
            <p className="founderKicker">Final CTA</p>
            <h2 className="founderHeading">
              If you&apos;re building something that needs more clarity, structure, and execution,
              let&apos;s talk.
            </h2>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/work">
                View My Work
              </Link>
              <Link className="btn founderButton founderButtonGhost" href="/contact">
                Get in Touch
              </Link>
              <Link className="founderTextLink founderTextLinkOnDark" href="/donepage">
                Explore Donepage →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
