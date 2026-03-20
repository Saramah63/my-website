import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import EmailContactActions from "@/components/EmailContactActions";
import { WHATSAPP_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Work With Me | Sara Mahmodi",
  description: "Structured support for navigating important decisions, transitions, and next steps.",
  openGraph: {
    title: "Work With Me | Sara Mahmodi",
    description: "Structured support for navigating important decisions, transitions, and next steps.",
    type: "website",
  },
};

const whatThisIs = [
  "rethinking their career or direction",
  "navigating migration, transition, or change",
  "starting or restructuring a business",
  "feel stuck in overthinking and unable to act",
  "ready for clarity and structured progress",
];

const helpItems = [
  "understand what is actually blocking progress",
  "define what matters right now",
  "turn decisions into concrete next steps",
  "move forward without confusion or overload",
];

const howWeWorkItems = [
  "define your situation clearly",
  "identify real constraints and opportunities",
  "design a structured path forward",
  "focus on execution, not theory",
];

const offers = [
  {
    title: "Strategic Session",
    text: "A focused session for clarity and direction.",
    bullets: ["situation breakdown", "clarity mapping", "14-day execution plan"],
    cta: "Book a session",
    href: "/en/apply",
    featured: true,
  },
  {
    title: "Three-Month Architecture (1:1)",
    text: "A structured engagement for people who need sustained support and progress.",
    bullets: ["clear milestones", "habit and behavior structure", "execution system"],
    cta: "Apply",
    href: "/en/apply",
  },
];

const fitItems = [
  "you are ready to take action",
  "you want structured progress",
  "you are willing to be honest about your situation",
];

const notFitItems = [
  "you are only looking for motivation",
  "you avoid taking action",
  "you want quick answers without real work",
];

const investmentItems = [
  { label: "Strategic Session", value: "Fee shared at booking" },
  { label: "Three-Month 1:1", value: "Based on scope and commitment" },
];

export default async function WorkWithMePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang === "fa") {
    redirect("/fa");
  }

  return (
    <main className="founderHome">
      <section className="founderHero">
        <div className="container founderHeroShell serviceHeroShell">
          <div className="founderHeroCopy">
            <p className="founderKicker">Work With Me</p>
            <h1 className="founderDisplay serviceDisplay">Structured support for navigating important decisions and next steps.</h1>
            <p className="founderLead">
              For individuals who feel stuck, uncertain, or in transition — and need clarity, structure, and a way forward.
            </p>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/en/apply">
                Apply to work with me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Positioning</p>
            <h2 className="founderHeading">
              Premium, selective support for people who are serious about moving forward — not just reflecting.
            </h2>
          </div>
        </div>
      </section>

      <section className="founderSection">
        <div className="container founderSplit">
          <div>
            <p className="founderKicker">What This Is</p>
            <h2 className="founderHeading">This work is for people who:</h2>
          </div>
          <div className="founderReadable founderReadableNarrow">
            <div className="founderList">
              {whatThisIs.map((item) => (
                <div key={item} className="founderListItem">
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
            <p className="founderKicker">How This Helps</p>
            <h2 className="founderHeading">Most people do not need more ideas. They need a clearer way forward.</h2>
          </div>
          <div className="founderPanel founderQuietCard">
            <p className="founderBody">This work helps you:</p>
            <div className="founderList">
              {helpItems.map((item) => (
                <div key={item} className="founderListItem">
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
            <p className="founderKicker">How We Work</p>
            <h2 className="founderHeading">We don&apos;t stay at the level of conversation.</h2>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderList">
              {howWeWorkItems.map((item) => (
                <div key={item} className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offerings" className="founderSection founderSectionAlt">
        <div className="container founderSectionShell">
          <div className="founderSectionHeading">
            <p className="founderKicker">Offerings</p>
            <h2 className="founderHeading">Two structured ways to work together.</h2>
          </div>
          <div className="serviceOfferGrid">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className={`founderPanel serviceOfferCard${offer.featured ? " serviceOfferCardFeatured" : ""}`}
              >
                <h3 className="serviceOfferTitle">{offer.title}</h3>
                <p className="founderBody">{offer.text}</p>
                {offer.bullets.length ? (
                  <div className="founderList founderListCompact">
                    {offer.bullets.map((item) => (
                      <div key={item} className="founderListItem">
                        <span className="founderListMark" aria-hidden="true" />
                        <p className="founderBody">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="serviceOfferActions">
                  <Link className={`btn${offer.featured ? " btnPrimary" : ""}`} href={offer.href}>
                    {offer.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Who This Is For</p>
            <h2 className="founderHeading">This is for you if:</h2>
          </div>
          <div className="serviceFilterGrid">
            <div className="founderPanel serviceFilterCard">
              <p className="founderCardLabel">This is for you if</p>
              <div className="founderList founderListCompact">
                {fitItems.map((item) => (
                  <div key={item} className="founderListItem">
                    <span className="founderListMark" aria-hidden="true" />
                    <p className="founderBody">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="founderPanel serviceFilterCard">
              <p className="founderCardLabel">This is not for you if</p>
              <div className="founderList founderListCompact">
                {notFitItems.map((item) => (
                  <div key={item} className="founderListItem">
                    <span className="founderListMark" aria-hidden="true" />
                    <p className="founderBody">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Digital Foundation</p>
            <h2 className="founderHeading">If you are building or formalizing a business:</h2>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderList">
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">clear positioning</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">structured landing page</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">fast implementation</p>
              </div>
            </div>
            <div className="serviceOfferActions">
              <a className="btn btnPrimary founderButton" href="https://donepage.co" target="_blank" rel="noreferrer">
                Go to Donepage
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderSectionShell">
          <div className="founderSectionHeading">
            <p className="founderKicker">Investment</p>
            <h2 className="founderHeading">Investment</h2>
          </div>
          <div className="serviceMetaGrid">
            {investmentItems.map((item) => (
              <div key={item.label} className="founderPanel serviceMetaCard">
                <p className="founderCardLabel">{item.label}</p>
                <p className="serviceMetaValue">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Final CTA</p>
            <h2 className="founderHeading">If you are ready to move forward with clarity and structure:</h2>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/en/apply">
                Apply to work with me
              </Link>
              <a
                className="btn founderButton founderButtonGhost"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <EmailContactActions
              lang="en"
              prefix="For faster first contact:"
              className="founderSupportLine emailContactInline"
            />
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Capacity</p>
            <h2 className="founderHeading">Limited capacity to maintain focus and quality.</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
