import Link from "next/link";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

const caseStudies = {
  donepage: {
    title: "Donepage",
    strap: "Turning unclear offers into structured, conversion-ready pages",
    sections: [
      {
        label: "Problem",
        items: [
          "People often do not know how to present their offer clearly.",
          "Messaging gets stuck, and tools create more drag than momentum.",
          "DIY pages often look unfinished and fail to support real inquiries.",
        ],
      },
      {
        label: "Goal",
        items: [
          "Clarify the offer.",
          "Structure the page around user understanding.",
          "Create a cleaner path to conversion.",
        ],
      },
      {
        label: "Solution",
        items: [
          "Structured layout",
          "Guided content flow",
          "Clear CTA hierarchy",
        ],
      },
      {
        label: "Key Decisions",
        items: [
          "simplicity over customization",
          "speed over perfection",
          "clarity over design complexity",
        ],
      },
      {
        label: "Outcome",
        items: [
          "faster launch",
          "clearer positioning",
          "higher conversion potential",
        ],
      },
    ],
    cta: {
      label: "Open Donepage",
      href: "https://donepage.co",
      external: true,
    },
  },
  lumi: {
    title: "Lumi",
    strap: "Exploring emotionally intelligent digital experiences for children",
    sections: [
      {
        label: "Problem",
        items: [
          "Children often struggle to express emotions clearly.",
          "Simple emotional tools for everyday use are limited.",
        ],
      },
      {
        label: "Approach",
        items: [
          "simple interaction",
          "emotional clarity",
          "low cognitive load",
        ],
      },
      {
        label: "Use Case",
        items: [
          "daycare",
          "early learning",
        ],
      },
      {
        label: "Stage",
        items: [
          "early-stage product",
          "preparing for pilot",
        ],
      },
    ],
    cta: {
      label: "View Lumi page",
      href: "/en/lumi",
      external: false,
    },
  },
  famsync: {
    title: "FamSync",
    strap: "A product exploration for simplifying family coordination and shared systems",
    sections: [
      {
        label: "Problem",
        items: [
          "Family coordination often breaks across scattered tools and messages.",
          "Tasks, schedules, and responsibilities become unclear quickly.",
        ],
      },
      {
        label: "Goal",
        items: [
          "Reduce coordination friction.",
          "Create shared visibility.",
          "Make everyday family systems easier to manage.",
        ],
      },
      {
        label: "Product Thinking",
        items: [
          "Start from recurring coordination pain, not feature lists.",
          "Use simple shared flows instead of overloaded interfaces.",
          "Design for routine, not occasional use.",
        ],
      },
      {
        label: "Why It Matters",
        items: [
          "It shows how I think through systems, user needs, and practical interaction design.",
        ],
      },
    ],
    cta: {
      label: "Back to projects",
      href: "/en/projects",
      external: false,
    },
  },
} as const;

type Slug = keyof typeof caseStudies;

export async function generateStaticParams() {
  return (Object.keys(caseStudies) as Slug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug as Slug];

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} | Sara Mahmodi`,
    description: study.strap,
    openGraph: {
      title: `${study.title} | Sara Mahmodi`,
      description: study.strap,
      type: "website",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (lang === "fa") {
    redirect(`/en/projects/${slug}`);
  }

  const study = caseStudies[slug as Slug];

  if (!study) {
    notFound();
  }

  return (
    <main className="founderHome">
      <section className="founderHero">
        <div className="container founderHeroShell">
          <div className="founderHeroCopy">
            <p className="founderKicker">Case Study</p>
            <h1 className="founderDisplay founderDisplayWide">{study.title}</h1>
            <p className="founderLead">{study.strap}</p>
          </div>
        </div>
      </section>

      <section className="founderSection">
        <div className="container founderSectionShell founderCaseStudyShell">
          {study.sections.map((section) => (
            <div key={section.label} className="founderPanel founderQuietCard founderCaseStudyCard">
              <p className="founderCardLabel">{section.label}</p>
              <div className="founderList">
                {section.items.map((item) => (
                  <div key={item} className="founderListItem">
                    <span className="founderListMark" aria-hidden="true" />
                    <p className="founderBody">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {study.cta.external ? (
            <a className="btn btnPrimary founderButton" href={study.cta.href} target="_blank" rel="noreferrer">
              {study.cta.label}
            </a>
          ) : (
            <Link className="btn btnPrimary founderButton" href={study.cta.href}>
              {study.cta.label}
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
