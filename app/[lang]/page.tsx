import Link from "next/link";
import type { Metadata } from "next";
import TypingHeroHeadline from "@/components/TypingHeroHeadline";
import EmailContactActions from "@/components/EmailContactActions";
import { WHATSAPP_URL } from "@/lib/siteConfig";

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

const selectedWorkItems = [
  {
    name: "Donepage",
    label: "Business product",
    description:
      "Conversion-focused landing pages that turn unclear offers into structured, high-conversion pages.",
    href: "/en/projects/donepage",
  },
  {
    name: "Lumi",
    label: "Innovation product",
    description:
      "An early-stage emotional learning product for children, designed for real-world environments.",
    href: "/en/projects/lumi",
  },
  {
    name: "FamSync",
    label: "Product exploration",
    description:
      "A product exploration focused on simplifying family coordination and shared systems.",
    href: "/en/projects/famsync",
  },
];

const productThinkingItems = [
  "I define real user problems before designing solutions",
  "I prioritize clarity over feature complexity",
  "I focus on execution, not just ideas",
  "I iterate based on feedback, not assumptions",
  "I design systems, not just screens",
];

const currentWorkItems = [
  "product direction",
  "UX and interaction design",
  "early validation",
  "iterative development",
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
            <TypingHeroHeadline />
            <p className="founderLead">
              Product-focused designer and founder of Donepage and Lumi. I design, test, and iterate real
              products with a focus on clarity, execution, and real-world outcomes.
            </p>
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/en/projects">
                View my work
              </Link>
              <Link className="btn founderButton founderButtonGhost" href="/contact">
                Open to Product / UX roles
              </Link>
            </div>
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
                  className="founderPanel founderBuildCard founderAnimatedItem"
                  href={item.href}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="founderBuildTop">
                    <h3 className="founderCardTitle">{item.name}</h3>
                  </div>
                  <p className="founderBody">{item.description}</p>
                  <span className="founderInlineLink">View case study</span>
                </Link>
            ))}
          </div>
          <div className="founderHeroActions">
            <Link className="btn btnPrimary founderButton" href="/en/projects">
              Explore projects
            </Link>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Product Thinking</p>
            <h2 className="founderHeading">How I think as a product builder</h2>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderList">
              {productThinkingItems.map((item, index) => (
                <div
                  key={item}
                  className="founderListItem founderAnimatedItem founderAnimatedLine"
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
        <div className="container founderSplit">
          <div>
            <p className="founderKicker">Current Work</p>
            <h2 className="founderHeading">
              Currently building and refining early-stage products through real use, feedback, and
              iteration.
            </h2>
          </div>
          <div className="founderReadable founderReadableNarrow">
            <div className="founderList">
              {currentWorkItems.map((item) => (
                <div key={item} className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderSplit">
          <div>
            <p className="founderKicker">Final CTA</p>
            <h2 className="founderHeading">
              If you&apos;re building products that require clarity, structure, and execution:
            </h2>
          </div>
          <div className="founderReadable founderReadableNarrow">
            <div className="founderHeroActions">
              <Link className="btn btnPrimary founderButton" href="/en/work-with-me">
                Let&apos;s work together
              </Link>
              <Link className="btn founderButton founderButtonGhost" href="/en/projects">
                View my work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
