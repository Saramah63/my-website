import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Projects | Sara Mahmodi",
  description: "Selected product work across Donepage, Lumi, and FamSync.",
  openGraph: {
    title: "Projects | Sara Mahmodi",
    description: "Selected product work across Donepage, Lumi, and FamSync.",
    type: "website",
  },
};

const projects = [
  {
    slug: "donepage",
    name: "Donepage",
    label: "Business product",
    description: "Turning unclear offers into structured, conversion-ready pages.",
  },
  {
    slug: "lumi",
    name: "Lumi",
    label: "Innovation product",
    description: "Exploring emotionally intelligent digital experiences for children.",
  },
  {
    slug: "famsync",
    name: "FamSync",
    label: "Product exploration",
    description: "Simplifying family coordination and shared systems.",
  },
];

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang === "fa") {
    redirect("/en/projects");
  }

  return (
    <main className="founderHome">
      <section className="founderHero">
        <div className="container founderHeroShell">
          <div className="founderHeroCopy">
            <p className="founderKicker">Projects</p>
            <h1 className="founderDisplay founderDisplayWide">Selected product and systems work.</h1>
            <p className="founderLead">
              A focused set of case studies showing how I approach clarity, structure, and execution
              across business, innovation, and product exploration.
            </p>
          </div>
        </div>
      </section>

      <section className="founderSection">
        <div className="container founderBuildGrid">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/en/projects/${project.slug}`}
              className="founderPanel founderBuildCard"
            >
              <div className="founderBuildTop">
                <p className="founderCardLabel">{project.label}</p>
                <h2 className="founderCardTitle">{project.name}</h2>
              </div>
              <p className="founderBody">{project.description}</p>
              <span className="founderInlineLink">Read case study</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
