import Link from "next/link";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type StudySection = {
  label: string;
  kind?: "list" | "text";
  items?: string[];
  text?: string;
};

type StudyData = {
  title: string;
  strap: string;
  role: string;
  type: string;
  overview: string;
  preview: {
    diagram: string;
    flow: string;
    ui: string;
  };
  sections: StudySection[];
  cta: {
    label: string;
    href: string;
    external: boolean;
  };
};

const caseStudies: Record<string, StudyData> = {
  donepage: {
    title: "Donepage",
    strap: "A structured system for generating conversion-ready landing pages with clarity, speed, and strategic messaging",
    role: "Founder · Product Designer",
    type: "Digital Product (SaaS concept)",
    overview:
      "Donepage is a structured system for generating conversion-ready landing pages with clarity, speed, and strategic messaging.",
    preview: {
      diagram: "Section-based page logic",
      flow: "Confusion -> clarity -> launch",
      ui: "Content-first page builder preview",
    },
    sections: [
      {
        label: "Problem",
        items: [
          "Messaging is often unclear.",
          "Page structure becomes inconsistent.",
          "Design and strategy are treated as separate problems.",
          "As a result, founders delay launch or publish low-conversion pages.",
        ],
      },
      {
        label: "Context",
        items: [
          "early-stage founders",
          "freelancers",
          "coaches and consultants",
          "non-designers building their online presence",
        ],
      },
      {
        label: "Approach",
        items: [
          "define a clear page structure",
          "reduce cognitive load",
          "guide users through a logical flow",
          "prioritize clarity over creativity",
        ],
      },
      {
        label: "Product Thinking",
        items: [
          "The problem is structural, not visual.",
          "Users need guidance, not just tools.",
          "Speed increases value in early-stage products.",
          "A repeatable system scales better than custom design.",
        ],
      },
      {
        label: "Solution",
        items: [
          "structured landing page templates",
          "guided content flow",
          "simplified decision-making",
          "a path from confusion to clarity to launch",
        ],
      },
      {
        label: "UX Decisions",
        items: [
          "minimal input required",
          "structured sections instead of a blank canvas",
          "progressive step-by-step flow",
          "clear CTA hierarchy",
        ],
      },
      {
        label: "System Design",
        items: [
          "section-based page logic",
          "content-first structure",
          "conversion-oriented layout",
          "simplified user journey",
        ],
      },
      {
        label: "Outcome",
        items: [
          "reduced friction in page creation",
          "faster time to launch",
          "clearer messaging",
          "a stronger bridge between usability and business outcome",
        ],
      },
      {
        label: "Reflection",
        items: [
          "Clarity is more valuable than complexity.",
          "Systems thinking is essential in product design.",
          "Users benefit more from guidance than flexibility.",
        ],
      },
    ],
    cta: {
      label: "Open Donepage",
      href: "/donepage",
      external: false,
    },
  },
  lumi: {
    title: "Lumi",
    strap: "An early-stage digital product concept exploring emotional awareness and interaction for children",
    role: "Product Designer · Concept Builder",
    type: "Early-stage product concept",
    overview:
      "Lumi explores how interactive systems can support children in understanding and expressing emotions.",
    preview: {
      diagram: "Input -> interpretation -> response",
      flow: "Emotion signal -> guided reflection -> response",
      ui: "Emoji-led interaction with voice support",
    },
    sections: [
      {
        label: "Problem",
        items: [
          "Young children often struggle to identify emotions.",
          "Expressing feelings can be difficult without the right interaction cues.",
          "Existing tools are often too abstract, passive, or insufficiently interactive.",
        ],
      },
      {
        label: "Context",
        items: [
          "early childhood education",
          "home environments",
          "emotional learning frameworks",
        ],
      },
      {
        label: "Approach",
        items: [
          "simplify emotional expression",
          "create intuitive interaction",
          "reduce cognitive complexity",
          "keep the experience calm, structured, and usable",
        ],
      },
      {
        label: "Product Thinking",
        items: [
          "Emotions must be simplified, not over-explained.",
          "Interaction is more effective than instruction.",
          "Engagement is critical for learning.",
          "Feedback must feel immediate and empathetic.",
        ],
      },
      {
        label: "Solution",
        items: [
          "an interactive character that responds to emotional input",
          "guided emotional reflection through simple interaction",
          "a safe and repeatable interaction loop",
        ],
      },
      {
        label: "UX Decisions",
        items: [
          "emoji-based input",
          "voice interaction",
          "minimal interface",
          "playful but structured responses",
        ],
      },
      {
        label: "System Design",
        items: [
          "input -> interpretation -> response loop",
          "simplified emotional categories",
          "adaptive interaction flow",
        ],
      },
      {
        label: "Outcome",
        items: [
          "an early-stage concept for structured emotional interaction",
          "a credible starting point for scalable digital emotional learning",
        ],
      },
      {
        label: "Reflection",
        items: [
          "Emotional UX requires simplicity.",
          "Interaction design is central in learning systems.",
          "Empathy needs to be designed, not assumed.",
        ],
      },
    ],
    cta: {
      label: "View Lumi page",
      href: "/lumi",
      external: false,
    },
  },
  famsync: {
    title: "FamSync",
    strap: "A UX-driven product exploration focused on simplifying family coordination and shared routines",
    role: "UX Designer",
    type: "Product exploration",
    overview:
      "FamSync explores how structured coordination systems can reduce everyday family friction and improve shared routines.",
    preview: {
      diagram: "Shared scheduling structure",
      flow: "Need -> coordination -> shared visibility",
      ui: "Minimal shared routine dashboard",
    },
    sections: [
      {
        label: "Problem",
        items: [
          "Families struggle with scheduling.",
          "Coordination breaks across fragmented communication.",
          "Daily routines become inefficient and unclear.",
        ],
      },
      {
        label: "Context",
        items: [
          "shared routines",
          "family scheduling",
          "recurring household coordination",
        ],
      },
      {
        label: "Approach",
        items: [
          "user-centered design",
          "identify repeated pain points",
          "simplify workflows",
          "reduce coordination friction",
        ],
      },
      {
        label: "Product Thinking",
        items: [
          "Recurring coordination pain matters more than feature quantity.",
          "Shared visibility is often more valuable than added complexity.",
          "Routine-centered systems need clarity first.",
        ],
      },
      {
        label: "Solution",
        items: [
          "a structured scheduling system",
          "reduced friction across shared routines",
          "clearer visibility for everyday planning",
        ],
      },
      {
        label: "UX Decisions",
        items: [
          "clear hierarchy",
          "shared view",
          "minimal interaction steps",
          "focus on fast routine use",
        ],
      },
      {
        label: "System Design",
        items: [
          "shared schedule logic",
          "routine-first interaction model",
          "clear ownership and visibility of tasks",
        ],
      },
      {
        label: "Outcome",
        items: [
          "improved clarity in family coordination",
          "stronger usability for shared routine management",
        ],
      },
      {
        label: "Reflection",
        items: [
          "Coordination systems succeed when friction is reduced early.",
          "UX clarity matters most in repeated-use environments.",
          "Shared systems need structure more than feature richness.",
        ],
      },
    ],
    cta: {
      label: "Back to projects",
      href: "/work",
      external: false,
    },
  },
};

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
          <div className="founderPanel founderQuietCard founderCaseStudyOverview">
            <p className="founderCardLabel">Overview</p>
            <div className="founderCaseStudyMeta">
              <div className="founderCaseStudyMetaItem">
                <span className="founderCaseStudyMetaLabel">Project</span>
                <p className="founderBody">{study.title}</p>
              </div>
              <div className="founderCaseStudyMetaItem">
                <span className="founderCaseStudyMetaLabel">Role</span>
                <p className="founderBody">{study.role}</p>
              </div>
              <div className="founderCaseStudyMetaItem">
                <span className="founderCaseStudyMetaLabel">Type</span>
                <p className="founderBody">{study.type}</p>
              </div>
            </div>
            <p className="founderBody">{study.overview}</p>
          </div>

          <div className="founderCaseStudyPreviewGrid">
            <div className="founderPanel founderQuietCard founderCaseStudyPreview">
              <p className="founderCardLabel">Diagram</p>
              <h2 className="founderCaseStudyPreviewTitle">{study.preview.diagram}</h2>
            </div>
            <div className="founderPanel founderQuietCard founderCaseStudyPreview">
              <p className="founderCardLabel">Flow</p>
              <h2 className="founderCaseStudyPreviewTitle">{study.preview.flow}</h2>
            </div>
            <div className="founderPanel founderQuietCard founderCaseStudyPreview">
              <p className="founderCardLabel">UI Preview</p>
              <h2 className="founderCaseStudyPreviewTitle">{study.preview.ui}</h2>
            </div>
          </div>

          {study.sections.map((section) => (
            <section key={section.label} className="founderPanel founderQuietCard founderCaseStudyCard">
              <p className="founderCardLabel">{section.label}</p>
              {section.kind === "text" ? (
                <p className="founderBody">{section.text}</p>
              ) : (
                <div className="founderList">
                  {section.items?.map((item) => (
                    <div key={item} className="founderListItem founderThinkingRow">
                      <span className="founderListMark" aria-hidden="true" />
                      <p className="founderBody">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
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
