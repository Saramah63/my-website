import Link from "next/link";
import type { Metadata } from "next";
import EmailContactActions from "@/components/EmailContactActions";
import { WHATSAPP_URL } from "@/lib/siteConfig";
import TypingHeroHeadline from "@/components/TypingHeroHeadline";

export const metadata: Metadata = {
  title: "Sara Mahmodi | Product-Focused Designer, Founder, and Strategic Builder",
  description:
    "Founder of Donepage and Lumi. Product-focused designer working across digital services, emotional intelligence, and real-world impact.",
  openGraph: {
    title: "Sara Mahmodi | Product-Focused Designer, Founder, and Strategic Builder",
    description:
      "Founder of Donepage and Lumi. Product-focused designer working across digital services, emotional intelligence, and real-world impact.",
    type: "website",
  },
};

const buildItems = [
  {
    name: "Donepage",
    label: "Commercial product",
    description: "Conversion-focused landing pages for service businesses.",
    href: "https://donepage.co",
    cta: "Go to Donepage",
  },
  {
    name: "Lumi",
    label: "Innovation product",
    description: "An early-stage emotional learning product for children.",
    href: "/en/lumi",
    cta: "Explore Lumi",
  },
  {
    name: "Strategic Work",
    label: "Selective service",
    description: "Structured support for people navigating decisions and transitions.",
    href: "/en/work-with-me",
    cta: "Apply to work with me",
  },
];

function PersianPage() {
  return (
    <main className="founderHome">
      <section className="founderHero">
        <div className="container founderHeroShell serviceHeroShell">
          <div className="founderHeroCopy">
            <p className="founderKicker">همکاری ساختارمند</p>
            <h1 className="founderDisplay founderDisplayFa">
              اگر در مسیرت گیر کرده‌ای و نمی‌دانی قدم بعدی چیست، اینجا برای حرکت است، نه فقط فکر کردن.
            </h1>
            <p className="founderLead">
              کار ساختاریافته برای رسیدن به وضوح، تصمیم بهتر و پیشرفت واقعی.
            </p>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/fa/apply">
                درخواست همکاری
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection">
        <div className="container founderSplit">
          <div>
            <p className="founderKicker">این همکاری برای چه کسانی است</p>
            <h2 className="founderHeading">این کار برای تو مناسب است اگر</h2>
          </div>
          <div className="founderReadable founderReadableNarrow">
            <div className="founderList">
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">در حال تغییر مسیر، مهاجرت یا تصمیم مهمی هستی</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">احساس سردرگمی یا عدم وضوح داری</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">زیاد فکر می‌کنی ولی حرکت نمی‌کنی</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">می‌خواهی از ایده به اقدام برسی</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderSplit">
          <div>
            <p className="founderKicker">این کار چه کمکی می‌کند</p>
            <h2 className="founderHeading">در این مسیر</h2>
          </div>
          <div className="founderReadable founderReadableNarrow">
            <div className="founderList">
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">وضعیتت به‌صورت دقیق بررسی می‌شود</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">موانع واقعی مشخص می‌شوند</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">مسیر واضح و قابل اجرا طراحی می‌شود</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">تمرکز روی اقدام است، نه فقط صحبت</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">تفاوت این کار با بقیه</p>
            <h2 className="founderHeading">این کار بر پایه وضوح، ساختار و اجرا است.</h2>
          </div>
          <div className="founderPanel serviceFilterCard">
            <div className="founderList">
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">انگیزشی نیست</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">تئوری نیست</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">مبهم نیست</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderSectionShell">
          <div>
            <p className="founderKicker">نحوه همکاری</p>
            <h2 className="founderHeading">دو مسیر برای شروع کار</h2>
          </div>
          <div className="serviceOfferGrid">
            <div className="founderPanel serviceOfferCard serviceOfferCardFeatured">
              <h3 className="serviceOfferTitle">جلسه استراتژیک</h3>
              <p className="founderBody">برای زمانی که نیاز داری وضعیتت را واضح ببینی و مسیر مشخصی داشته باشی</p>
              <div className="founderList founderListCompact">
                <div className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">بررسی دقیق وضعیت</p>
                </div>
                <div className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">شفاف‌سازی</p>
                </div>
                <div className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">برنامه اجرایی ۱۴ روزه</p>
                </div>
              </div>
              <div className="serviceOfferActions">
                <Link className="btn btnPrimary founderButton" href="/fa/apply">
                  رزرو جلسه
                </Link>
              </div>
            </div>

            <div className="founderPanel serviceOfferCard">
              <h3 className="serviceOfferTitle">همکاری سه‌ماهه (۱ به ۱)</h3>
              <p className="founderBody">برای زمانی که نیاز به پیشرفت مستمر و ساختار داری</p>
              <div className="founderList founderListCompact">
                <div className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">مراحل مشخص</p>
                </div>
                <div className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">ساختاردهی عادت‌ها</p>
                </div>
                <div className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">سیستم اجرایی</p>
                </div>
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
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">برای چه کسانی مناسب نیست</p>
            <h2 className="founderHeading">این همکاری مناسب تو نیست اگر</h2>
          </div>
          <div className="founderPanel serviceFilterCard">
            <div className="founderList founderListCompact">
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">فقط دنبال انگیزه هستی</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">از اقدام واقعی اجتناب می‌کنی</p>
              </div>
              <div className="founderListItem">
                <span className="founderListMark" aria-hidden="true" />
                <p className="founderBody">انتظار نتیجه سریع بدون تلاش داری</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">زیرساخت دیجیتال</p>
            <h2 className="founderHeading">
              اگر در حال ساخت یا توسعه کسب‌وکار هستی، می‌توانی حضور آنلاین خود را به‌صورت واضح و
              حرفه‌ای بسازی.
            </h2>
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
          <div className="founderSectionHeading">
            <p className="founderKicker">سرمایه‌گذاری</p>
            <h2 className="founderHeading">سرمایه‌گذاری</h2>
          </div>
          <div className="serviceMetaGrid">
            <div className="founderPanel serviceMetaCard">
              <p className="founderCardLabel">جلسه استراتژیک</p>
              <p className="serviceMetaValue">هزینه پس از درخواست اعلام می‌شود</p>
            </div>
            <div className="founderPanel serviceMetaCard">
              <p className="founderCardLabel">همکاری سه‌ماهه</p>
              <p className="serviceMetaValue">بر اساس سطح نیاز و تعهد</p>
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">CTA نهایی</p>
            <h2 className="founderHeading">اگر آماده‌ای از سردرگمی به سمت وضوح و اقدام حرکت کنی</h2>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/fa/apply">
                درخواست همکاری
              </Link>
              <a
                className="btn founderButton founderButtonGhost"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                ارتباط در واتساپ
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

      <section className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">ظرفیت</p>
            <h2 className="founderHeading">ظرفیت محدود برای حفظ کیفیت</h2>
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
            <p className="founderKicker">Sara Mahmodi</p>
            <TypingHeroHeadline />
            <p className="founderLead">
              Founder of Donepage and Lumi. Product-focused designer working across digital services and
              real-world impact.
            </p>
            <div className="founderHeroActions">
              <a className="btn btnPrimary founderButton" href="https://donepage.co" target="_blank" rel="noreferrer">
                Explore Donepage
              </a>
              <Link className="btn founderButton founderButtonGhost" href="/en/lumi">
                Explore Lumi
              </Link>
              <Link className="btn founderButton founderButtonGhost" href="/en/work-with-me">
                Work With Me
              </Link>
            </div>
            <p className="founderSupportLine">Also open to selected Product / UX opportunities.</p>
          </div>
        </div>
      </section>

      <section id="what-i-build" className="founderSection">
        <div className="container founderSectionShell">
          <div className="founderSectionHeading">
            <p className="founderKicker">What I Build</p>
            <h2 className="founderHeading">Three focused areas of work.</h2>
          </div>
          <div className="founderBuildGrid">
            {buildItems.map((item) => {
              const content = (
                <>
                  <div className="founderBuildTop">
                    <p className="founderCardLabel">{item.label}</p>
                    <h3 className="founderCardTitle">{item.name}</h3>
                  </div>
                  <p className="founderBody">{item.description}</p>
                  <span className="founderInlineLink">{item.cta}</span>
                </>
              );

              if (item.href.startsWith("http")) {
                return (
                  <a
                    key={item.name}
                    className="founderPanel founderBuildCard"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={item.name} className="founderPanel founderBuildCard" href={item.href}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="founderSection founderSectionAlt">
        <div className="container founderSplit">
          <div>
            <p className="founderKicker">About</p>
            <h2 className="founderHeading">A product-driven approach to practical, usable work.</h2>
          </div>
          <div className="founderReadable">
            <p className="founderBody">
              I design and build digital products with a focus on clarity, usability, and real-world application.
            </p>
            <p className="founderBody">
              My work combines product thinking, user experience, and structured execution to turn ideas into
              practical, usable systems.
            </p>
            <p className="founderBody">
              Currently building:
              <br />
              Donepage - a landing page system for service businesses
              <br />
              Lumi - an early-stage emotional learning product for children
            </p>
            <p className="founderBody">
              Alongside this, I work selectively with individuals on clarity, direction, and structured
              progress.
            </p>
            <p className="founderBody">
              I am also growing toward Product Owner roles, with hands-on experience in building and
              testing real products.
            </p>
          </div>
        </div>
      </section>

      <section id="roles" className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Open To Roles</p>
            <h2 className="founderHeading">Open to selected Product and UX opportunities.</h2>
            <p className="founderBody">
              Bringing hands-on experience in building, testing, and iterating real products.
            </p>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderSplit">
          <div>
            <p className="founderKicker">Footer CTA</p>
            <h2 className="founderHeading">For collaboration, product work, or inquiries.</h2>
          </div>
          <div className="founderReadable founderReadableNarrow">
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
